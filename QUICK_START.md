# Quick Start Guide - A/B Testing Comparator

## 🚀 Get Started in 60 Seconds

1. **Open** `index.html` in your browser
2. **Enter URLs** for Designer (left) and Algorithm (right) versions
3. **Select device size** - Mobile, Tablet, or Desktop
4. **Start annotating!**

---

## 📝 Annotation Types

### Comments (💬 Yellow Pins)
Use for general notes, observations, or discussions.

**How to add:**
1. Click comment button (💬)
2. Click on preview
3. Type your note
4. Save

### Labels (🏷️ Purple Pins)
Use for categorizing issues systematically.

**Categories:**
- 🟢 **Can be fixed by heuristics** - Automated fixes possible
- 🔴 **Poor website construction** - Design/structural issues  
- 🟠 **Legit construction** - Valid design, can't be auto-fixed

**How to add:**
1. Click label button (🏷️)
2. Click on preview
3. Check one or more categories
4. Save

---

## 💾 Data Management

### Save Session (💾)
Stores everything in browser for later:
- Both URLs
- Preview width
- All comments and labels

### Export CSV (📄)
Spreadsheet with all annotations:
- Serial numbers
- URLs and positions
- Labels and comments
- Timestamps

**Perfect for:** Reports, team sharing, data analysis

### Export JSON (⬇️)
Complete backup of session:
- All annotations
- Settings
- URLs

**Perfect for:** Backup, sharing full sessions

### Import JSON (⬆️)
Restore a saved session:
- Loads URLs
- Restores all annotations
- Preserves positions

---

## ⚡ Keyboard Tips

- `ESC` - Cancel annotation mode
- `Enter` - Save comment (in textarea)

---

## 🎯 Best Practices

### For Design Review
1. Use **Labels** to categorize issues
2. Export to **CSV** for tracking
3. Mark as **Resolved** when fixed

### For Bug Tracking
1. Use **Comments** for details
2. Add **Labels** for severity/type
3. Export **JSON** for handoff

### For Analysis
1. Label all issues consistently
2. Export to **CSV**
3. Import in Excel/Sheets for analysis

---

## 📊 CSV Columns Explained

| Column | What It Means |
|--------|---------------|
| **Serial Number** | Unique ID for each annotation |
| **URL** | Which website (Designer or Algorithm) |
| **Side** | Panel name (Designer/Algorithm) |
| **Position X/Y** | Where on the page (%, pixels) |
| **Labels** | Categories applied (can be multiple) |
| **Comment** | Text note (if any) |
| **Timestamp** | When created |
| **Resolved** | Fixed or not (Yes/No) |

---

## 🆘 Quick Troubleshooting

**URLs not loading?**
- Some sites block iframe embedding
- Check browser console for errors
- Try a different site or check CORS settings

**Can't see annotations?**
- Make sure you've clicked on the preview area
- Check that comment/label mode is active (button highlighted)

**Lost your data?**
- Check browser localStorage (may be cleared)
- Always export important sessions to JSON

---

## 🎨 Visual Guide

```
Yellow pin (💬) = Comment (general notes)
Purple pin (🏷️) = Label (categorized)
Gray pin = Resolved item
Number on pin = Order created
```

---

## 📱 Need Help?

Check the full README.md for detailed documentation.

---

**Made for efficient A/B testing and website comparison workflows! ✨**
