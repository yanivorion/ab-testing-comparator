# A/B Testing Comparator

A professional side-by-side comparison tool for reviewing website changes between Designer and Algorithm versions.

## Features

### 🎨 Visual Comparison
- **Split-panel view** - Compare two versions side by side
- **Responsive preview** - Mobile (390px), Tablet (768px), Desktop (1280px) presets
- **Custom width slider** - Adjust preview width from 320px to 1920px
- **Auto-scaling** - Automatically scales content to fit available space
- **Synchronized scrolling** - Optional scroll synchronization between panels

### 💬 Comments & Annotations
- **Pin comments** - Click anywhere on previews to add location-specific comments
- **Add labels** - Mark areas with predefined categories for systematic analysis
- **Resolve tracking** - Mark comments as resolved when addressed
- **Visual indicators** - Numbered pins with color-coded status (yellow for comments, purple for labels)
- **Side attribution** - Track which version each comment belongs to

### 🏷️ Labeling System
- **Can be fixed by heuristics** (Green) - Issues that automated rules can solve
- **Poor website construction** (Red) - Structural or design problems
- **Legit construction, cannot solve by heuristics** (Orange) - Valid design that algorithms can't improve
- **Multiple labels** - Apply more than one label to a single area
- **Visual distinction** - Purple pins for labels vs yellow pins for comments

### 📊 Export & Import
- **CSV Export** - Export all annotations with serial numbers, URLs, positions, labels, and comments
- **JSON Export** - Save complete sessions for backup or sharing
- **JSON Import** - Load previously saved sessions to continue work
- **Data includes**: URLs, preview width, all comments/labels with positions and timestamps

### 💾 Session Management
- **Save sessions** - Store comparison sessions with all URLs and comments
- **Load sessions** - Quickly restore previous comparison sessions
- **Export data** - Export sessions as JSON for sharing or backup
- **LocalStorage** - Automatic persistence in browser

### 🎯 User Experience
- **Toggle URL inputs** - Hide/show URL bars for cleaner view
- **Keyboard-friendly** - Efficient keyboard navigation
- **Modern UI** - Clean, professional interface with smooth animations
- **Color customization** - Fully customizable color scheme via config

## Getting Started

### Option 1: Quick Start (Recommended)

1. Simply open `index.html` in any modern web browser
2. Enter URLs for both Designer and Algorithm versions
3. Start comparing!

**That's it!** No installation or build process required.

### Option 2: Local Development Server

If you prefer using a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then open http://localhost:8000 in your browser.

## How to Use

### 1. Load URLs
- Enter the Designer version URL in the left input
- Enter the Algorithm version URL in the right input
- Toggle URL inputs on/off with the globe button

### 2. Choose Device Size
- Click preset buttons: Mobile 📱, Tablet 💻, or Desktop 🖥️
- Or use the slider to set a custom width
- Width range: 320px - 1920px

### 3. Add Comments or Labels

**Add a Comment:**
1. Click the comment button (💬) in the toolbar
2. Click anywhere on either preview panel
3. Type your comment
4. Save

**Add Labels:**
1. Click the label button (🏷️) in the toolbar
2. Click anywhere on either preview panel
3. Select one or more label categories:
   - ✅ Can be fixed by heuristics (Green)
   - ⚠️ Poor website construction (Red)
   - ℹ️ Legit construction, cannot solve by heuristics (Orange)
4. Save

### 4. Manage Comments & Labels
- Click numbered pins to view comment/label details
- Mark items as resolved (✓)
- Delete items (🗑️)
- View all annotations in the bar below the header

### 5. Export Data

**CSV Export (for analysis):**
- Click the CSV export button (📄)
- Downloads a spreadsheet with:
  - Serial number for each annotation
  - URL (left or right)
  - Position coordinates
  - All applied labels
  - Comments text
  - Timestamp and resolution status

**JSON Export (for backup):**
- Click the download button (⬇️)
- Saves complete session including URLs, annotations, and settings

### 6. Import Sessions
1. Click the upload button (⬆️)
2. Select a previously exported JSON file
3. Session loads with all URLs, comments, and labels restored

### 5. Save Sessions
1. Click the save button (💾)
2. Enter a session name
3. Save to store current URLs, width, and all annotations
4. Load saved sessions anytime from the sessions panel

### 7. Export Data
- Click the download button (⬇️) to export current session as JSON
- Share with team members or keep as backup

## Features Guide

### Toolbar Buttons

| Icon | Function | Description |
|------|----------|-------------|
| 🌐 | Toggle URLs | Show/hide URL input fields |
| 🔗 | Sync Scroll | Enable/disable synchronized scrolling |
| 💬 | Add Comment | Activate comment placement mode |
| 🏷️ | Add Label | Activate label placement mode |
| 💾 | Sessions | Open saved sessions panel |
| 📄 | Export CSV | Download annotations as CSV spreadsheet |
| ⬇️ | Export JSON | Download session as JSON file |
| ⬆️ | Import JSON | Upload a saved JSON session |

### Device Presets

- **Mobile**: 390px (iPhone size)
- **Tablet**: 768px (iPad portrait)
- **Desktop**: 1280px (Laptop screen)

### Keyboard Shortcuts

- `ESC` - Cancel comment mode (when active)
- `Enter` - Save comment (when in textarea)

## Configuration

The app accepts a configuration object to customize appearance:

```javascript
const config = {
  leftLabel: 'Designer',
  rightLabel: 'Algorithm',
  minWidth: 320,
  maxWidth: 1920,
  backgroundColor: '#F4F4F5',
  panelBackgroundColor: '#FFFFFF',
  primaryTextColor: '#18181B',
  secondaryTextColor: '#71717A',
  accentColor: '#18181B',
  borderColor: '#E4E4E7',
  commentPinColor: '#FBBF24',
  designerAccentColor: '#6366F1',
  algorithmAccentColor: '#EC4899',
  fontSize: 13
};
```

To use custom config, modify the render call in `app.js`:

```javascript
root.render(<Component config={config} />);
```

## Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

Requires a modern browser with ES6+ support.

## Data Storage

- **Sessions**: Stored in browser's localStorage
- **Comments & Labels**: Included in session data
- **Persistence**: Data persists across browser sessions
- **Privacy**: All data stored locally, no external servers

## CSV Export Format

The CSV export includes the following columns:

| Column | Description | Example |
|--------|-------------|---------|
| Serial Number | Sequential number for each annotation | 1, 2, 3... |
| URL | The URL being annotated (left or right) | https://example.com |
| Side | Panel name (Designer/Algorithm) | Designer |
| Position X | Horizontal position (%) | 45.23 |
| Position Y | Vertical position (pixels) | 234.56 |
| Labels | Applied labels (semicolon-separated) | Can be fixed by heuristics; Poor website construction |
| Comment | Comment text (if any) | Button alignment is off |
| Timestamp | When annotation was created | 1/21/2026, 3:45:23 PM |
| Resolved | Whether marked as resolved | Yes / No |

**Use cases for CSV:**
- Import into Excel/Google Sheets for analysis
- Share with team members who don't need the full app
- Create reports and dashboards
- Track issue resolution over time
- Analyze patterns in website construction problems

## Tips

1. **Use descriptive session names** - Include date, feature name, or ticket number
2. **Export to CSV regularly** - Keep spreadsheet backups of your annotations for analysis
3. **Use labels for categorization** - Quickly identify patterns across multiple issues
4. **Export JSON sessions** - Download JSON backups before clearing browser data
5. **Import to continue work** - Resume sessions on different machines or browsers
6. **Resolve comments as you go** - Keep track of what's been addressed
7. **Use different colors** - The Designer (indigo) and Algorithm (pink) indicators help identify sides
8. **Label multiple categories** - Apply more than one label when issues overlap
9. **Disable scroll sync** - When you need to compare different sections
10. **CSV for reporting** - Use CSV export to create reports or share with non-technical team members

## Troubleshooting

### URLs not loading?
- Check CORS settings on the target websites
- Some sites block iframe embedding (X-Frame-Options)
- Try adding the site to your browser's allowed list

### Comments not saving?
- Check browser localStorage is enabled
- Clear browser cache and try again
- Export sessions as backup

### Scaling looks wrong?
- Try different device presets
- Adjust the width slider
- Check the scale percentage indicator

## Technical Details

- **Framework**: React 18 (via CDN)
- **Build Tool**: None (uses Babel Standalone)
- **Dependencies**: Zero npm packages required
- **File Size**: ~40KB total
- **Load Time**: Instant (CDN cached)

## License

Free to use and modify for your projects.

## Support

For issues or questions, check the code comments or modify as needed for your use case.

---

**Made with ❤️ for designers and developers who value side-by-side comparisons**
