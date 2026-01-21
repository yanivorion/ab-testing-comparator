// Wix Backend Functions for A/B Testing Comparator
// Place this file in your Wix site's backend folder: backend/http-functions.js

import { ok, badRequest, serverError } from 'wix-http-functions';
import wixData from 'wix-data';
import { fetch } from 'wix-fetch';

// Get websites from a collection
export async function get_getWebsites(request) {
  const collection = request.query.collection;
  
  if (!collection) {
    return badRequest({ message: 'Collection parameter required' });
  }
  
  try {
    const results = await wixData.query(collection)
      .ascending('order')
      .find();
      
    return ok({
      body: JSON.stringify(results.items.map(item => ({
        id: item._id,
        name: item.name,
        url: item.url,
        order: item.order || 0
      })))
    });
  } catch (error) {
    return serverError({ message: error.message });
  }
}

// Update a website
export async function post_updateWebsite(request) {
  try {
    const body = await request.body.json();
    const { collection, id, updates } = body;
    
    if (!collection || !id || !updates) {
      return badRequest({ message: 'Missing required parameters' });
    }
    
    await wixData.update(collection, {
      _id: id,
      ...updates
    });
    
    return ok({ body: JSON.stringify({ success: true }) });
  } catch (error) {
    return serverError({ message: error.message });
  }
}

// Add a new website
export async function post_addWebsite(request) {
  try {
    const body = await request.body.json();
    const { collection, website } = body;
    
    if (!collection || !website) {
      return badRequest({ message: 'Missing required parameters' });
    }
    
    const result = await wixData.insert(collection, website);
    
    return ok({
      body: JSON.stringify({
        id: result._id,
        ...website
      })
    });
  } catch (error) {
    return serverError({ message: error.message });
  }
}

// Delete a website
export async function post_deleteWebsite(request) {
  try {
    const body = await request.body.json();
    const { collection, id } = body;
    
    if (!collection || !id) {
      return badRequest({ message: 'Missing required parameters' });
    }
    
    await wixData.remove(collection, id);
    
    return ok({ body: JSON.stringify({ success: true }) });
  } catch (error) {
    return serverError({ message: error.message });
  }
}

// Save annotation with screenshot to back office
export async function post_saveAnnotation(request) {
  try {
    const body = await request.body.json();
    const {
      annotationId,
      websiteUrl,
      side,
      labels,
      comment,
      timestamp,
      lassoCoordinates,
      pinPosition,
      viewportWidth,
      scrollPosition
    } = body;
    
    if (!websiteUrl || !labels || labels.length === 0) {
      return badRequest({ message: 'Missing required parameters' });
    }
    
    // Capture screenshot using a screenshot service
    let screenshotUrl = null;
    try {
      // Using screenshotone.com API (you'll need to sign up for API key)
      const screenshotApiKey = 'YOUR_API_KEY_HERE'; // Replace with your API key
      const screenshotApiUrl = `https://api.screenshotone.com/take`;
      
      const screenshotParams = new URLSearchParams({
        access_key: screenshotApiKey,
        url: websiteUrl,
        viewport_width: viewportWidth.toString(),
        viewport_height: '800',
        device_scale_factor: '2', // Retina quality
        format: 'jpg',
        image_quality: '80',
        block_ads: 'true',
        block_cookie_banners: 'true',
        delay: '2' // Wait 2 seconds for page to load
      });
      
      const screenshotResponse = await fetch(`${screenshotApiUrl}?${screenshotParams.toString()}`);
      
      if (screenshotResponse.ok) {
        const screenshotBlob = await screenshotResponse.blob();
        // In production, upload to Wix Media or external storage
        // For now, we'll use the API URL as reference
        screenshotUrl = screenshotResponse.url;
      }
    } catch (screenshotError) {
      console.error('Screenshot capture failed:', screenshotError);
      // Continue without screenshot
    }
    
    // Save to Annotations collection in Wix CMS
    const annotationData = {
      annotationId: annotationId.toString(),
      websiteUrl,
      side,
      labels: labels.join(', '),
      comment: comment || '',
      timestamp: new Date(timestamp),
      screenshotUrl: screenshotUrl || 'Screenshot pending',
      lassoCoordinates: lassoCoordinates ? JSON.stringify(lassoCoordinates) : null,
      pinPosition: JSON.stringify(pinPosition),
      viewportWidth,
      scrollPosition,
      resolved: false
    };
    
    const result = await wixData.insert('Annotations', annotationData);
    
    return ok({
      body: JSON.stringify({
        success: true,
        itemId: result._id,
        screenshotUrl: screenshotUrl
      })
    });
  } catch (error) {
    console.error('Error saving annotation:', error);
    return serverError({ message: error.message });
  }
}
