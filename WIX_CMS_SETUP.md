# Wix CMS Integration Setup Guide

This guide will help you connect the A/B Testing Comparator to Wix CMS for dynamic website management.

## Step 1: Create CMS Collections in Wix

### Collection 1: TestWebsitesDesigner
**Fields:**
- `_id` (Text) - Auto-generated, Primary Key
- `name` (Text) - Website display name
- `url` (URL) - Website URL
- `order` (Number) - Display order (optional)
- `_createdDate` (Date) - Auto-generated
- `_updatedDate` (Date) - Auto-generated

**Permissions:**
- Site content: Read & Write
- Anyone: Read

### Collection 2: TestWebsitesAlgorithm
**Fields:**
- `_id` (Text) - Auto-generated, Primary Key
- `name` (Text) - Website display name
- `url` (URL) - Website URL
- `order` (Number) - Display order (optional)
- `_createdDate` (Date) - Auto-generated
- `_updatedDate` (Date) - Auto-generated

**Permissions:**
- Site content: Read & Write
- Anyone: Read

## Step 2: Enable Wix Data API

1. Go to your Wix site dashboard
2. Navigate to **Settings** → **Permissions**
3. Enable **Wix Data API**
4. Note your API Key (if using external API calls)

## Step 3: Get Your API Endpoint

Your Wix site URL will be used to construct API endpoints:
```
https://www.wixapis.com/wix-data/v2/items/query
```

## Step 4: Configure the Application

### Option A: Using Wix Site (Recommended)
If hosting on Wix, the app can use `wix-data` module directly:

```javascript
import wixData from 'wix-data';

// Query websites
wixData.query("TestWebsitesDesigner")
  .ascending("order")
  .find()
  .then((results) => {
    console.log(results.items);
  });

// Add website
wixData.insert("TestWebsitesDesigner", {
  name: "My Website",
  url: "https://example.com",
  order: 1
});

// Update website
wixData.update("TestWebsitesDesigner", {
  _id: "website-id",
  name: "Updated Name"
});

// Delete website
wixData.remove("TestWebsitesDesigner", "website-id");
```

### Option B: Using REST API (External Hosting)
For GitHub Pages or external hosting, use the Wix REST API:

1. **Create an API Key:**
   - Go to Settings → API Keys
   - Create new API Key with permissions for wix-data
   - Copy the API Key

2. **Update app.js Configuration:**
   Add at the top of app.js:
   ```javascript
   const WIX_API_KEY = 'YOUR_API_KEY_HERE';
   const WIX_SITE_ID = 'YOUR_SITE_ID_HERE';
   ```

## Step 5: Populate Initial Data

### Via Wix Editor:
1. Go to CMS in your Wix dashboard
2. Select "TestWebsitesDesigner"
3. Click "+ Add Item"
4. Fill in the fields:
   - Name: "Real&Done v2 (Remodeling)"
   - URL: "https://yanivo4.wixsite.com/my-site-298"
   - Order: 1
5. Repeat for all websites
6. Do the same for "TestWebsitesAlgorithm"

### Via Import (CSV):
You can bulk import using CSV files:

**TestWebsitesDesigner.csv:**
```csv
name,url,order
"Real&Done v2 (Remodeling)","https://yanivo4.wixsite.com/my-site-298",1
"Vexta v2 (AI Conference)","https://yanivo4.wixsite.com/my-site-299",2
"Darle Lumina v2 (Smart Lighting)","https://yanivo4.wixsite.com/my-site-300",3
...
```

**TestWebsitesAlgorithm.csv:**
```csv
name,url,order
"Darle Lumina (Smart Lighting)","https://yanivo4.wixsite.com/my-site-284",1
"WellWell (Mental Health)","https://yanivo4.wixsite.com/my-site-283",2
...
```

## Step 6: Test the Integration

1. Open the A/B Testing Comparator
2. Check browser console for any loading messages
3. The website dropdowns and galleries should now load from CMS
4. Try renaming a website - it should save to Wix CMS
5. Add a new website using the manager - it should appear immediately

## Features Now Available

✅ **Dynamic Website List** - No more hardcoding
✅ **Rename Websites** - Names save to Wix CMS database
✅ **Add New Websites** - Add without code changes
✅ **Remove Websites** - Delete from CMS
✅ **Reorder Websites** - Change display order
✅ **Sync Across Devices** - All changes sync via Wix CMS
✅ **No localStorage** - All data in cloud database

## Troubleshooting

### Issue: "Failed to load websites"
**Solution:** Check that:
- CMS collections are created with exact names
- Permissions are set to allow public read access
- API Key is correct (if using REST API)

### Issue: "CORS error"
**Solution:** 
- Ensure the site is hosted on Wix domain or
- Configure CORS settings in Wix API dashboard

### Issue: "Websites not updating"
**Solution:**
- Check browser console for errors
- Verify write permissions are enabled
- Clear cache and reload

## API Endpoints Reference

### Fetch Designer Websites
```
GET https://www.wixapis.com/wix-data/v2/items/query
Collection: TestWebsitesDesigner
```

### Fetch Algorithm Websites
```
GET https://www.wixapis.com/wix-data/v2/items/query
Collection: TestWebsitesAlgorithm
```

### Update Website Name
```
PATCH https://www.wixapis.com/wix-data/v2/items/{itemId}
Body: { name: "New Name" }
```

### Add New Website
```
POST https://www.wixapis.com/wix-data/v2/items
Body: { name: "Website Name", url: "https://...", order: 1 }
```

### Delete Website
```
DELETE https://www.wixapis.com/wix-data/v2/items/{itemId}
```

## Support

For more information:
- [Wix Data API Documentation](https://dev.wix.com/docs/rest/articles/getting-started/data)
- [Wix CMS Guide](https://support.wix.com/en/article/cms-content-manager-about-the-content-manager)
