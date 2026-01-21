# Annotations Back Office Setup

This guide explains how to set up automatic screenshot capture and back office storage for annotations.

## 📋 Step 1: Create Annotations Collection in Wix CMS

1. Go to your Wix site dashboard
2. Navigate to **CMS (Content Manager)**
3. Click **"+ New Collection"**
4. Name it: **`Annotations`**
5. Set permissions: **Admin** (for security)

## 🏗️ Step 2: Add Collection Fields

Create these fields in your Annotations collection:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `annotationId` | Text | Yes | Unique annotation ID |
| `websiteUrl` | URL | Yes | The website being annotated |
| `side` | Text | Yes | "Designer" or "Algorithm" |
| `labels` | Text | Yes | Comma-separated labels |
| `comment` | Text | No | Optional comment text |
| `timestamp` | Date & Time | Yes | When annotation was created |
| `screenshotUrl` | URL | No | Link to captured screenshot |
| `lassoCoordinates` | Text | No | JSON string of lasso points |
| `pinPosition` | Text | Yes | JSON string of pin position |
| `viewportWidth` | Number | Yes | Viewport width when annotated |
| `scrollPosition` | Number | Yes | Scroll position when annotated |
| `resolved` | Boolean | Yes | Whether issue is resolved |

## 🔑 Step 3: Get Screenshot API Key

We use ScreenshotOne.com for automatic screenshot capture:

1. Go to https://screenshotone.com
2. Sign up for a free account (1000 screenshots/month free)
3. Get your **API Access Key**
4. Open `backend/http-functions.js`
5. Replace `YOUR_API_KEY_HERE` with your actual key:

```javascript
const screenshotApiKey = 'your_actual_api_key_here';
```

### Alternative Screenshot Services:

If you prefer a different service, you can use:
- **ApiFlash.com** - Good quality, 100 free/month
- **Urlbox.io** - Professional, 1000 free/month
- **CloudConvert** - General purpose, flexible pricing

Just update the API call in the `post_saveAnnotation` function.

## 📤 Step 4: Deploy Backend Function

1. Make sure `backend/http-functions.js` is in your Wix site
2. The function will be available at:
   ```
   https://YOUR_SITE/_functions/save_annotation
   ```
3. Test it from your site's Developer Console

## 🎯 Step 5: Update Frontend URL

In `app.js`, find the WixCMS configuration and update:

```javascript
const WixCMS = {
  enabled: true,
  baseUrl: 'https://YOUR_ACTUAL_SITE_URL/_functions'
};
```

Replace `YOUR_ACTUAL_SITE_URL` with your published Wix site URL.

## ✅ Step 6: Test the Integration

1. Open your A/B Testing Comparator
2. Hold **Cmd** (Mac) or **Ctrl** (Windows)
3. Draw a lasso around an area
4. Add labels and optional comment
5. Click **Save**

Check in Wix CMS:
- Go to **CMS → Annotations**
- You should see your new annotation
- Screenshot URL will be populated
- All data fields should be filled

## 📊 Viewing Annotations in Back Office

### CMS Table View
All annotations appear in your CMS with:
- ✅ Website URL
- ✅ Side (Designer/Algorithm)
- ✅ Labels applied
- ✅ Comments
- ✅ Screenshot link
- ✅ Timestamp
- ✅ Resolution status

### Export to Excel
1. Go to CMS → Annotations
2. Click **"Export"**
3. Download as CSV or Excel
4. Perfect for reporting and analysis

## 🔧 Advanced: Custom Screenshot Service

If you want to use your own screenshot service:

```javascript
// In backend/http-functions.js
export async function post_saveAnnotation(request) {
  // ... existing code ...
  
  // Replace this section with your service:
  const screenshotResponse = await fetch('YOUR_SERVICE_URL', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer YOUR_KEY' },
    body: JSON.stringify({
      url: websiteUrl,
      width: viewportWidth,
      height: 800
    })
  });
  
  const data = await screenshotResponse.json();
  screenshotUrl = data.screenshot_url;
  
  // ... rest of code ...
}
```

## 🚨 Troubleshooting

### Screenshots not capturing?
- Check your API key is correct
- Verify you haven't exceeded free tier limits
- Check browser console for error messages
- Test API directly with curl/Postman

### Data not saving to CMS?
- Verify collection name is exactly "Annotations"
- Check all required fields are created
- Ensure backend function is published
- Check Wix site permissions

### Can't see annotations in back office?
- Refresh the CMS page
- Check you're logged in as admin
- Verify collection permissions
- Look for items in "Trash" if accidentally deleted

## 💡 Tips

1. **Free Tier Limits**: Most screenshot services offer 100-1000 free screenshots/month
2. **Storage**: Screenshots are stored by the service, only URLs in your CMS
3. **Performance**: Screenshots are captured async, annotation saves immediately
4. **Fallback**: If screenshot fails, annotation still saves with "Screenshot pending"
5. **Export**: Use CSV export for weekly/monthly reports

## 📞 Support

- Screenshot API issues: Contact ScreenshotOne support
- Wix CMS issues: Check Wix documentation
- App issues: Check browser console for errors

---

**Ready to go!** 🎉 Your annotations will now automatically capture screenshots and save to your back office!
