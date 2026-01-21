// Wix Backend Functions for A/B Testing Comparator
// Place this file in your Wix site's backend folder: backend/http-functions.js

import { ok, badRequest, serverError } from 'wix-http-functions';
import wixData from 'wix-data';

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
