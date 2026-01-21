const MANIFEST = {
  "type": "Tools.ABTestingComparator",
  "description": "Professional A/B testing comparison tool for reviewing Designer vs Algorithm website changes",
  "editorElement": {
    "selector": ".ab-testing-comparator",
    "displayName": "A/B Testing Comparator",
    "archetype": "container",
    "data": {
      "leftLabel": { "dataType": "text", "displayName": "Left Panel Label", "defaultValue": "Designer", "group": "Content" },
      "rightLabel": { "dataType": "text", "displayName": "Right Panel Label", "defaultValue": "Algorithm", "group": "Content" },
      "minWidth": { "dataType": "number", "displayName": "Min Width (px)", "defaultValue": 320, "group": "Layout" },
      "maxWidth": { "dataType": "number", "displayName": "Max Width (px)", "defaultValue": 1920, "group": "Layout" },
      "backgroundColor": { "dataType": "color", "displayName": "Background", "defaultValue": "#F4F4F5", "group": "Colors" },
      "panelBackgroundColor": { "dataType": "color", "displayName": "Panel Background", "defaultValue": "#FFFFFF", "group": "Colors" },
      "primaryTextColor": { "dataType": "color", "displayName": "Primary Text", "defaultValue": "#18181B", "group": "Colors" },
      "secondaryTextColor": { "dataType": "color", "displayName": "Secondary Text", "defaultValue": "#71717A", "group": "Colors" },
      "accentColor": { "dataType": "color", "displayName": "Accent", "defaultValue": "#18181B", "group": "Colors" },
      "borderColor": { "dataType": "color", "displayName": "Border", "defaultValue": "#E4E4E7", "group": "Colors" },
      "commentPinColor": { "dataType": "color", "displayName": "Comment Pin", "defaultValue": "#FBBF24", "group": "Colors" },
      "designerAccentColor": { "dataType": "color", "displayName": "Designer Accent", "defaultValue": "#6366F1", "group": "Colors" },
      "algorithmAccentColor": { "dataType": "color", "displayName": "Algorithm Accent", "defaultValue": "#EC4899", "group": "Colors" },
      "fontSize": { "dataType": "number", "displayName": "Font Size (px)", "defaultValue": 13, "group": "Typography" }
    },
    "layout": { "resizeDirection": "horizontalAndVertical", "contentResizeDirection": "vertical" }
  }
};

const Icons = {
  Smartphone: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>),
  Tablet: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>),
  Monitor: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>),
  Link: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>),
  Unlink: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"/><path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"/><line x1="8" x2="8" y1="2" y2="5"/><line x1="2" x2="5" y1="8" y2="8"/><line x1="16" x2="16" y1="19" y2="22"/><line x1="19" x2="22" y1="16" y2="16"/></svg>),
  MessageSquare: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
  Save: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>),
  Download: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>),
  Upload: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>),
  FileText: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>),
  Tag: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" x2="7.01" y1="7" y2="7"/></svg>),
  X: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>),
  Check: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>),
  Trash2: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>),
  FolderOpen: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>),
  Palette: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/></svg>),
  Cpu: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>),
  Plus: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>),
  Globe: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>),
  MapPin: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>),
  Clock: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  Minimize2: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/></svg>),
  Layers: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.5-8.97 4.08a2 2 0 0 1-1.66 0L2 17.5"/><path d="m22 12.5-8.97 4.08a2 2 0 0 1-1.66 0L2 12.5"/></svg>),
  Move: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/></svg>),
  GitBranch: ({ size = 20, sw = 1.5 }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>)
};

const LABEL_OPTIONS = [
  { id: 'heuristics', label: 'Can be fixed by heuristics', color: '#10B981' },
  { id: 'poor-construction', label: 'Poor website construction', color: '#EF4444' },
  { id: 'legit-construction', label: 'Legit construction, cannot solve by heuristics', color: '#F59E0B' }
];

function Component({ config = {} }) {
  const leftLabel = config?.leftLabel || 'Designer';
  const rightLabel = config?.rightLabel || 'Algorithm';
  const minWidth = config?.minWidth || 320;
  const maxWidth = config?.maxWidth || 1920;
  const backgroundColor = config?.backgroundColor || '#F4F4F5';
  const panelBackgroundColor = config?.panelBackgroundColor || '#FFFFFF';
  const primaryTextColor = config?.primaryTextColor || '#18181B';
  const secondaryTextColor = config?.secondaryTextColor || '#71717A';
  const accentColor = config?.accentColor || '#18181B';
  const borderColor = config?.borderColor || '#E4E4E7';
  const commentPinColor = config?.commentPinColor || '#FBBF24';
  const designerAccentColor = config?.designerAccentColor || '#6366F1';
  const algorithmAccentColor = config?.algorithmAccentColor || '#EC4899';
  const fontSize = config?.fontSize || 13;
  const fontFamily = "system-ui, -apple-system, sans-serif";

  const [leftUrl, setLeftUrl] = React.useState('');
  const [rightUrl, setRightUrl] = React.useState('');
  const [previewWidth, setPreviewWidth] = React.useState(390);
  const [devicePreset, setDevicePreset] = React.useState('mobile');
  const [syncScroll, setSyncScroll] = React.useState(true);
  const [comments, setComments] = React.useState([]);
  const [activeComment, setActiveComment] = React.useState(null);
  const [isAddingAnnotation, setIsAddingAnnotation] = React.useState(false);
  const [pendingCommentSide, setPendingCommentSide] = React.useState(null);
  const [newCommentText, setNewCommentText] = React.useState('');
  const [pendingCommentPosition, setPendingCommentPosition] = React.useState(null);
  const [pendingLabels, setPendingLabels] = React.useState([]);
  const [draggedPopup, setDraggedPopup] = React.useState(null);
  const [popupPositions, setPopupPositions] = React.useState({});
  const [selectedAnnotations, setSelectedAnnotations] = React.useState([]);
  const [isConnectMode, setIsConnectMode] = React.useState(false);
  const [showGroupingPanel, setShowGroupingPanel] = React.useState(false);
  const [selectedLabelFilter, setSelectedLabelFilter] = React.useState(null);
  const [showSessionPanel, setShowSessionPanel] = React.useState(false);
  const [sessionName, setSessionName] = React.useState('');
  const [savedSessions, setSavedSessions] = React.useState([]);
  const [showUrlInputs, setShowUrlInputs] = React.useState(true);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const fileInputRef = React.useRef(null);

  const leftContainerRef = React.useRef(null);
  const rightContainerRef = React.useRef(null);
  const isScrolling = React.useRef(false);
  const mainContainerRef = React.useRef(null);

  React.useEffect(() => {
    const updateContainerWidth = () => {
      if (mainContainerRef.current) setContainerWidth(mainContainerRef.current.offsetWidth);
    };
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('abTestingSessions');
      if (saved) setSavedSessions(JSON.parse(saved));
    } catch (e) {}
  }, []);

  const panelAvailableWidth = (containerWidth / 2) - 48;
  const needsScaling = previewWidth > panelAvailableWidth && panelAvailableWidth > 0;
  const scaleFactor = needsScaling ? panelAvailableWidth / previewWidth : 1;

  const devicePresets = { mobile: 390, tablet: 768, desktop: 1280 };

  const handleDevicePreset = (preset) => {
    setDevicePreset(preset);
    setPreviewWidth(devicePresets[preset]);
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setPreviewWidth(value);
    if (value === 390) setDevicePreset('mobile');
    else if (value === 768) setDevicePreset('tablet');
    else if (value === 1280) setDevicePreset('desktop');
    else setDevicePreset(null);
  };

  const handleScroll = (source, e) => {
    if (!syncScroll || isScrolling.current) return;
    isScrolling.current = true;
    const scrollTop = e.target.scrollTop;
    const scrollPercent = scrollTop / (e.target.scrollHeight - e.target.clientHeight);
    if (source === 'left' && rightContainerRef.current) {
      rightContainerRef.current.scrollTop = scrollPercent * (rightContainerRef.current.scrollHeight - rightContainerRef.current.clientHeight);
    } else if (source === 'right' && leftContainerRef.current) {
      leftContainerRef.current.scrollTop = scrollPercent * (leftContainerRef.current.scrollHeight - leftContainerRef.current.clientHeight);
    }
    setTimeout(() => { isScrolling.current = false; }, 50);
  };

  const handlePanelClick = (side, e) => {
    if (!isAddingAnnotation) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = e.clientY - rect.top + e.currentTarget.scrollTop;
    setPendingCommentPosition({ x, y });
    setPendingCommentSide(side);
  };

  const saveComment = () => {
    // Labels are mandatory, comment is optional
    if (pendingLabels.length === 0 || !pendingCommentPosition) return;
    
    const newComment = { 
      id: Date.now(), 
      side: pendingCommentSide, 
      x: pendingCommentPosition.x, 
      y: pendingCommentPosition.y, 
      labels: [...pendingLabels], 
      text: newCommentText.trim(), 
      timestamp: new Date().toISOString(), 
      resolved: false,
      type: 'annotation',
      connectedTo: selectedAnnotations.length > 0 ? [...selectedAnnotations] : []
    };
    setComments(prev => [...prev, newComment]);
    setNewCommentText('');
    setPendingLabels([]);
    setPendingCommentPosition(null);
    setPendingCommentSide(null);
    setIsAddingAnnotation(false);
    setSelectedAnnotations([]);
    setIsConnectMode(false);
  };

  const cancelComment = () => {
    setNewCommentText('');
    setPendingLabels([]);
    setPendingCommentPosition(null);
    setPendingCommentSide(null);
    setIsAddingAnnotation(false);
    setSelectedAnnotations([]);
    setIsConnectMode(false);
  };

  const toggleAnnotationSelection = (id) => {
    setSelectedAnnotations(prev => 
      prev.includes(id) 
        ? prev.filter(aid => aid !== id)
        : [...prev, id]
    );
  };

  const startDragPopup = (commentId, e) => {
    e.stopPropagation();
    const initialX = e.clientX;
    const initialY = e.clientY;
    const currentPos = popupPositions[commentId] || { x: 0, y: 0 };
    
    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - initialX;
      const deltaY = moveEvent.clientY - initialY;
      setPopupPositions(prev => ({
        ...prev,
        [commentId]: {
          x: currentPos.x + deltaX,
          y: currentPos.y + deltaY
        }
      }));
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      setDraggedPopup(null);
    };
    
    setDraggedPopup(commentId);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const toggleLabel = (labelId) => {
    setPendingLabels(prev => 
      prev.includes(labelId) 
        ? prev.filter(id => id !== labelId)
        : [...prev, labelId]
    );
  };

  const deleteComment = (id) => { setComments(prev => prev.filter(c => c.id !== id)); setActiveComment(null); };
  const toggleResolved = (id) => { setComments(prev => prev.map(c => c.id === id ? { ...c, resolved: !c.resolved } : c)); };

  const saveSession = () => {
    if (!sessionName.trim()) return;
    const session = { id: Date.now(), name: sessionName, leftUrl, rightUrl, previewWidth, comments, timestamp: new Date().toISOString() };
    const updatedSessions = [...savedSessions, session];
    setSavedSessions(updatedSessions);
    try { localStorage.setItem('abTestingSessions', JSON.stringify(updatedSessions)); } catch (e) {}
    setSessionName('');
    setShowSessionPanel(false);
  };

  const loadSession = (session) => {
    setLeftUrl(session.leftUrl);
    setRightUrl(session.rightUrl);
    setPreviewWidth(session.previewWidth || 390);
    setComments(session.comments || []);
    setShowSessionPanel(false);
  };

  const deleteSession = (id, e) => {
    e.stopPropagation();
    const updatedSessions = savedSessions.filter(s => s.id !== id);
    setSavedSessions(updatedSessions);
    try { localStorage.setItem('abTestingSessions', JSON.stringify(updatedSessions)); } catch (e) {}
  };

  const exportSession = () => {
    const session = { leftUrl, rightUrl, previewWidth, comments, exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(session, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ab-test-session-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToCSV = () => {
    const headers = ['Serial Number', 'URL', 'Side', 'Position X', 'Position Y', 'Labels', 'Comment', 'Timestamp', 'Resolved'];
    const rows = comments.map((comment, index) => [
      index + 1,
      comment.side === 'left' ? leftUrl : rightUrl,
      comment.side === 'left' ? leftLabel : rightLabel,
      comment.x.toFixed(2),
      comment.y.toFixed(2),
      (comment.labels || []).map(labelId => {
        const label = LABEL_OPTIONS.find(l => l.id === labelId);
        return label ? label.label : labelId;
      }).join('; ') || 'None',
      (comment.text || '').replace(/"/g, '""'),
      new Date(comment.timestamp).toLocaleString(),
      comment.resolved ? 'Yes' : 'No'
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ab-test-annotations-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importFromJSON = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const session = JSON.parse(e.target.result);
        if (session.leftUrl) setLeftUrl(session.leftUrl);
        if (session.rightUrl) setRightUrl(session.rightUrl);
        if (session.previewWidth) setPreviewWidth(session.previewWidth);
        if (session.comments) setComments(session.comments);
        alert('Session imported successfully!');
      } catch (error) {
        alert('Error importing session: ' + error.message);
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const renderCommentPin = (comment) => {
    const isActive = activeComment === comment.id;
    const commentIndex = comments.indexOf(comment) + 1;
    const pinColor = '#8B5CF6';
    const isSelected = selectedAnnotations.includes(comment.id);
    const isConnected = comment.connectedTo && comment.connectedTo.length > 0;
    const popupPos = popupPositions[comment.id] || { x: 0, y: 0 };
    
    return (
      <div key={comment.id} style={{ position: 'absolute', left: `${comment.x}%`, top: `${comment.y}px`, transform: 'translate(-50%, -50%)', zIndex: isActive ? 10000 : 9000 }}>
        <div 
          onClick={(e) => { 
            e.stopPropagation(); 
            if (isConnectMode) {
              toggleAnnotationSelection(comment.id);
            } else {
              setActiveComment(isActive ? null : comment.id); 
            }
          }} 
          style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}
        >
          <div style={{ 
            width: 26, 
            height: 26, 
            borderRadius: '50% 50% 50% 0', 
            backgroundColor: comment.resolved ? secondaryTextColor : pinColor, 
            transform: isActive ? 'rotate(-45deg) scale(1.1)' : 'rotate(-45deg)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.2)', 
            transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
            border: isSelected ? '3px solid #3B82F6' : isConnected ? '2px solid #10B981' : 'none'
          }}>
            <span style={{ transform: 'rotate(45deg)', fontSize: 11, fontWeight: 500, color: '#fff' }}>{commentIndex}</span>
          </div>
          {isConnected && (
            <div style={{ position: 'absolute', top: -8, right: -8, width: 16, height: 16, backgroundColor: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
              <Icons.GitBranch size={10} color="white" sw={2} />
            </div>
          )}
        </div>
        {isActive && (
          <div 
            style={{ 
              position: 'fixed',
              left: `calc(${comment.x}% + ${popupPos.x}px)`,
              top: `calc(${comment.y}px + ${popupPos.y}px)`,
              backgroundColor: panelBackgroundColor, 
              borderRadius: 12, 
              boxShadow: '0 4px 24px rgba(0,0,0,0.25)', 
              border: `2px solid ${pinColor}`, 
              padding: 0,
              minWidth: 280, 
              maxWidth: 400, 
              zIndex: 10001,
              cursor: draggedPopup === comment.id ? 'grabbing' : 'default'
            }}
          >
            <div 
              onMouseDown={(e) => startDragPopup(comment.id, e)}
              style={{ 
                padding: '10px 14px', 
                backgroundColor: `${pinColor}10`, 
                borderTopLeftRadius: 12, 
                borderTopRightRadius: 12,
                cursor: 'grab',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: `1px solid ${borderColor}`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Icons.Move size={14} color={pinColor} />
                <span style={{ fontSize: fontSize - 1, fontWeight: 600, color: pinColor }}>Annotation #{commentIndex}</span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setActiveComment(null); }}
                style={{ 
                  width: 24, 
                  height: 24, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: 4,
                  color: secondaryTextColor
                }}
              >
                <Icons.X size={16} />
              </button>
            </div>
            <div style={{ padding: 14 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <Icons.Tag size={14} color="#8B5CF6" />
                  <span style={{ fontSize: fontSize - 1, fontWeight: 500, color: '#8B5CF6' }}>Labels</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: comment.text ? 12 : 0 }}>
                  {(comment.labels || []).map(labelId => {
                    const label = LABEL_OPTIONS.find(l => l.id === labelId);
                    return label ? (
                      <div key={labelId} style={{ padding: '6px 10px', backgroundColor: `${label.color}10`, border: `1px solid ${label.color}40`, borderRadius: 6, fontSize: fontSize - 1, color: label.color, fontWeight: 500 }}>
                        {label.label}
                      </div>
                    ) : null;
                  })}
                </div>
                {comment.text && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, marginTop: 12, paddingTop: 12, borderTop: `1px solid ${borderColor}` }}>
                      <Icons.MessageSquare size={14} color={secondaryTextColor} />
                      <span style={{ fontSize: fontSize - 1, fontWeight: 500, color: secondaryTextColor }}>Comment</span>
                    </div>
                    <p style={{ margin: 0, fontSize, color: primaryTextColor, lineHeight: 1.6, wordBreak: 'break-word' }}>{comment.text}</p>
                  </div>
                )}
                {comment.connectedTo && comment.connectedTo.length > 0 && (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, marginTop: 12, paddingTop: 12, borderTop: `1px solid ${borderColor}` }}>
                      <Icons.GitBranch size={14} color="#10B981" />
                      <span style={{ fontSize: fontSize - 1, fontWeight: 500, color: '#10B981' }}>Connected Issues</span>
                    </div>
                    <div style={{ fontSize: fontSize - 1, color: secondaryTextColor }}>
                      {comment.connectedTo.map(cid => {
                        const connectedComment = comments.find(c => c.id === cid);
                        if (!connectedComment) return null;
                        const cIndex = comments.indexOf(connectedComment) + 1;
                        return (
                          <div key={cid} style={{ padding: '4px 8px', backgroundColor: '#10B98110', border: '1px solid #10B98140', borderRadius: 4, marginBottom: 4 }}>
                            → Annotation #{cIndex}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ fontSize: fontSize - 2, color: secondaryTextColor, display: 'flex', alignItems: 'center', gap: 4 }}><Icons.Clock size={12} />{new Date(comment.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button onClick={() => toggleResolved(comment.id)} style={{ padding: '5px 10px', fontSize: fontSize - 1, backgroundColor: comment.resolved ? '#10B981' : 'transparent', color: comment.resolved ? '#fff' : secondaryTextColor, border: `1px solid ${comment.resolved ? '#10B981' : borderColor}`, borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}><Icons.Check size={12} />{comment.resolved ? 'Done' : 'Resolve'}</button>
                  <button onClick={() => deleteComment(comment.id)} style={{ padding: '5px 10px', fontSize: fontSize - 1, backgroundColor: 'transparent', color: '#EF4444', border: '1px solid #FECACA', borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}><Icons.Trash2 size={12} /></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPendingComment = () => {
    if (!pendingCommentPosition) return null;
    const pinColor = '#8B5CF6';
    return (
      <div onClick={e => e.stopPropagation()} style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 10001, maxHeight: '80vh', overflow: 'auto' }}>
        <div style={{ backgroundColor: panelBackgroundColor, borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.25)', border: `2px solid ${pinColor}`, padding: 14, width: 360 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, paddingBottom: 12, borderBottom: `1px solid ${borderColor}` }}>
            <div style={{ width: 26, height: 26, borderRadius: '50% 50% 50% 0', backgroundColor: pinColor, transform: 'rotate(-45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
              <span style={{ transform: 'rotate(45deg)' }}><Icons.Plus size={14} color="white" /></span>
            </div>
            <span style={{ fontSize: fontSize + 1, fontWeight: 600 }}>New Annotation</span>
          </div>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <Icons.Tag size={16} color="#8B5CF6" />
              <span style={{ fontSize, fontWeight: 500 }}>Select Labels</span>
              <span style={{ fontSize: fontSize - 2, color: '#EF4444', marginLeft: 'auto' }}>*Required</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {LABEL_OPTIONS.map(label => (
                <label key={label.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, borderRadius: 6, border: `1px solid ${borderColor}`, cursor: 'pointer', backgroundColor: pendingLabels.includes(label.id) ? `${label.color}10` : 'transparent' }}>
                  <input 
                    type="checkbox" 
                    checked={pendingLabels.includes(label.id)}
                    onChange={() => toggleLabel(label.id)}
                    style={{ width: 16, height: 16, accentColor: label.color, cursor: 'pointer' }}
                  />
                  <span style={{ flex: 1, fontSize: fontSize - 1, color: primaryTextColor }}>{label.label}</span>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: label.color }} />
                </label>
              ))}
            </div>
          </div>
          
          {comments.filter(c => c.side === pendingCommentSide).length > 0 && (
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${borderColor}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Icons.GitBranch size={14} color="#10B981" />
                  <span style={{ fontSize: fontSize - 1, fontWeight: 500, color: '#10B981' }}>Connect to Existing</span>
                </div>
                <button 
                  onClick={() => setIsConnectMode(!isConnectMode)}
                  style={{ 
                    padding: '4px 8px', 
                    fontSize: fontSize - 2, 
                    backgroundColor: isConnectMode ? '#3B82F6' : 'transparent', 
                    color: isConnectMode ? '#fff' : '#3B82F6',
                    border: `1px solid #3B82F6`, 
                    borderRadius: 4, 
                    cursor: 'pointer' 
                  }}
                >
                  {isConnectMode ? 'Done' : 'Select'}
                </button>
              </div>
              {isConnectMode && (
                <div style={{ fontSize: fontSize - 2, color: secondaryTextColor, marginBottom: 8, padding: 8, backgroundColor: '#3B82F610', borderRadius: 6 }}>
                  Click on pins in the preview to connect multiple related issues
                </div>
              )}
              {selectedAnnotations.length > 0 && (
                <div style={{ fontSize: fontSize - 1, color: secondaryTextColor }}>
                  <div style={{ fontWeight: 500, marginBottom: 4 }}>Selected ({selectedAnnotations.length}):</div>
                  {selectedAnnotations.map(cid => {
                    const connectedComment = comments.find(c => c.id === cid);
                    if (!connectedComment) return null;
                    const cIndex = comments.indexOf(connectedComment) + 1;
                    return (
                      <div key={cid} style={{ padding: '4px 8px', backgroundColor: '#3B82F610', border: '1px solid #3B82F640', borderRadius: 4, marginBottom: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span>Annotation #{cIndex}</span>
                        <button 
                          onClick={() => toggleAnnotationSelection(cid)}
                          style={{ 
                            padding: 2, 
                            backgroundColor: 'transparent', 
                            border: 'none', 
                            cursor: 'pointer',
                            color: '#EF4444'
                          }}
                        >
                          <Icons.X size={12} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          
          <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${borderColor}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <Icons.MessageSquare size={14} color={secondaryTextColor} />
              <span style={{ fontSize: fontSize - 1, fontWeight: 500, color: secondaryTextColor }}>Comment</span>
              <span style={{ fontSize: fontSize - 2, color: secondaryTextColor }}>Optional</span>
            </div>
            <textarea value={newCommentText} onChange={e => setNewCommentText(e.target.value)} placeholder="Add additional notes..." style={{ width: '100%', minHeight: 60, padding: 10, fontSize, fontFamily, color: primaryTextColor, backgroundColor, border: `1px solid ${borderColor}`, borderRadius: 8, resize: 'vertical', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <button onClick={cancelComment} style={{ padding: '8px 16px', fontSize, fontWeight: 500, backgroundColor: 'transparent', color: secondaryTextColor, border: `1px solid ${borderColor}`, borderRadius: 8, cursor: 'pointer' }}>Cancel</button>
            <button onClick={saveComment} disabled={pendingLabels.length === 0} style={{ padding: '8px 16px', fontSize, fontWeight: 500, backgroundColor: pendingLabels.length > 0 ? pinColor : borderColor, color: '#fff', border: 'none', borderRadius: 8, cursor: pendingLabels.length > 0 ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icons.Check size={16} />
              Save Annotation
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderPanel = (side, url, setUrl, accent, label) => {
    const isLeft = side === 'left';
    const containerRef = isLeft ? leftContainerRef : rightContainerRef;
    
    // Filter comments based on selected label
    const filteredComments = selectedLabelFilter 
      ? comments.filter(c => c.side === side && c.labels && c.labels.includes(selectedLabelFilter))
      : comments.filter(c => c.side === side);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0, borderRight: isLeft ? `1px solid ${borderColor}` : 'none' }}>
        <div style={{ padding: '12px 20px', backgroundColor: panelBackgroundColor, borderBottom: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: accent }} /><span style={{ fontWeight: 500, fontSize: fontSize + 1 }}>{label}</span></div>
          {needsScaling && <span style={{ fontSize: fontSize - 2, color: secondaryTextColor, display: 'flex', alignItems: 'center', gap: 4 }}><Icons.Minimize2 size={12} />{Math.round(scaleFactor * 100)}%</span>}
        </div>
        <div ref={containerRef} onClick={(e) => handlePanelClick(side, e)} onScroll={(e) => handleScroll(side, e)} style={{ flex: 1, overflow: 'auto', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: 20, backgroundColor, cursor: isAddingAnnotation ? 'crosshair' : 'default' }}>
          <div style={{ width: previewWidth, minHeight: 800, backgroundColor: panelBackgroundColor, borderRadius: 16, boxShadow: '0 2px 24px rgba(0,0,0,0.06)', overflow: 'hidden', position: 'relative', transform: needsScaling ? `scale(${scaleFactor})` : 'none', transformOrigin: 'top center', flexShrink: 0 }}>
            {url ? <iframe src={url} style={{ width: '100%', height: 800, border: 'none' }} title={`${label} Preview`} /> : (
              <div style={{ height: 800, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: secondaryTextColor, gap: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, backgroundColor: `${accent}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent }}>{isLeft ? <Icons.Palette size={28} /> : <Icons.Cpu size={28} />}</div>
                <div style={{ textAlign: 'center' }}><p style={{ margin: 0, fontWeight: 500, color: primaryTextColor, marginBottom: 4 }}>{label} Version</p><p style={{ margin: 0, fontSize: fontSize - 1 }}>Enter URL above to load preview</p></div>
              </div>
            )}
          </div>
          {filteredComments.map(comment => renderCommentPin(comment))}
          {pendingCommentSide === side && renderPendingComment()}
        </div>
      </div>
    );
  };

  return (
    <div className="ab-testing-comparator" style={{ minHeight: '100vh', backgroundColor, fontFamily, fontSize, color: primaryTextColor, display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .url-input:focus { border-color: ${accentColor} !important; box-shadow: 0 0 0 3px ${accentColor}10 !important; }
        .toolbar-btn { transition: all 150ms ease; }
        .toolbar-btn:hover { background-color: ${borderColor} !important; }
        .toolbar-btn.active { background-color: ${accentColor} !important; color: #fff !important; }
        .device-btn { transition: all 150ms ease; }
        .device-btn.active { background-color: ${accentColor} !important; color: #fff !important; }
        .session-item { transition: all 150ms ease; }
        .session-item:hover { background-color: ${backgroundColor} !important; }
        input[type="range"] { -webkit-appearance: none; height: 4px; background: ${borderColor}; border-radius: 2px; outline: none; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; background: ${accentColor}; border-radius: 50%; cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.2); }
        input[type="range"]::-moz-range-thumb { width: 16px; height: 16px; background: ${accentColor}; border-radius: 50%; cursor: pointer; border: none; }
      `}</style>

      <header style={{ backgroundColor: panelBackgroundColor, borderBottom: `1px solid ${borderColor}`, position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: accentColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Icons.Layers size={24} /></div>
            <span style={{ fontSize: fontSize + 3, fontWeight: 500, letterSpacing: '-0.02em' }}>A/B Comparator</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1, maxWidth: 600, justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: 4, backgroundColor, padding: 4, borderRadius: 14 }}>
              {[{ key: 'mobile', icon: Icons.Smartphone }, { key: 'tablet', icon: Icons.Tablet }, { key: 'desktop', icon: Icons.Monitor }].map(({ key, icon: Icon }) => (
                <button key={key} className={`device-btn ${devicePreset === key ? 'active' : ''}`} onClick={() => handleDevicePreset(key)} style={{ width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: devicePreset === key ? accentColor : 'transparent', color: devicePreset === key ? '#fff' : secondaryTextColor, border: 'none', borderRadius: 10, cursor: 'pointer' }}><Icon size={22} /></button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
              <span style={{ fontSize: fontSize - 1, color: secondaryTextColor, minWidth: 32 }}>{minWidth}</span>
              <input type="range" min={minWidth} max={maxWidth} value={previewWidth} onChange={handleSliderChange} style={{ flex: 1 }} />
              <span style={{ fontSize: fontSize - 1, color: secondaryTextColor, minWidth: 32 }}>{maxWidth}</span>
              <div style={{ minWidth: 70, padding: '4px 10px', backgroundColor, borderRadius: 6, fontSize, fontWeight: 500, textAlign: 'center' }}>{previewWidth}px</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className={`toolbar-btn ${showUrlInputs ? 'active' : ''}`} onClick={() => setShowUrlInputs(!showUrlInputs)} style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: showUrlInputs ? accentColor : panelBackgroundColor, color: showUrlInputs ? '#fff' : secondaryTextColor, border: `1px solid ${showUrlInputs ? accentColor : borderColor}`, borderRadius: 12, cursor: 'pointer' }} title="Toggle URL inputs"><Icons.Globe size={22} /></button>
            <button className={`toolbar-btn ${syncScroll ? 'active' : ''}`} onClick={() => setSyncScroll(!syncScroll)} style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: syncScroll ? accentColor : panelBackgroundColor, color: syncScroll ? '#fff' : secondaryTextColor, border: `1px solid ${syncScroll ? accentColor : borderColor}`, borderRadius: 12, cursor: 'pointer' }} title={syncScroll ? 'Disable sync scroll' : 'Enable sync scroll'}>{syncScroll ? <Icons.Link size={22} /> : <Icons.Unlink size={22} />}</button>
            <button className={`toolbar-btn ${isAddingAnnotation ? 'active' : ''}`} onClick={() => setIsAddingAnnotation(!isAddingAnnotation)} style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: isAddingAnnotation ? '#8B5CF6' : panelBackgroundColor, color: isAddingAnnotation ? '#fff' : secondaryTextColor, border: `1px solid ${isAddingAnnotation ? '#8B5CF6' : borderColor}`, borderRadius: 12, cursor: 'pointer' }} title="Add annotation (labels + optional comment)"><Icons.Tag size={22} /></button>
            <button className={`toolbar-btn ${showGroupingPanel ? 'active' : ''}`} onClick={() => setShowGroupingPanel(!showGroupingPanel)} style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: showGroupingPanel ? accentColor : panelBackgroundColor, color: showGroupingPanel ? '#fff' : secondaryTextColor, border: `1px solid ${showGroupingPanel ? accentColor : borderColor}`, borderRadius: 12, cursor: 'pointer' }} title="Group by labels"><Icons.Layers size={22} /></button>
            <button className="toolbar-btn" onClick={() => setShowSessionPanel(!showSessionPanel)} style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: showSessionPanel ? accentColor : panelBackgroundColor, color: showSessionPanel ? '#fff' : secondaryTextColor, border: `1px solid ${showSessionPanel ? accentColor : borderColor}`, borderRadius: 12, cursor: 'pointer' }} title="Sessions"><Icons.Save size={22} /></button>
            <button className="toolbar-btn" onClick={exportToCSV} style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: panelBackgroundColor, color: secondaryTextColor, border: `1px solid ${borderColor}`, borderRadius: 12, cursor: 'pointer' }} title="Export to CSV"><Icons.FileText size={22} /></button>
            <button className="toolbar-btn" onClick={exportSession} style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: panelBackgroundColor, color: secondaryTextColor, border: `1px solid ${borderColor}`, borderRadius: 12, cursor: 'pointer' }} title="Export session (JSON)"><Icons.Download size={22} /></button>
            <button className="toolbar-btn" onClick={() => fileInputRef.current?.click()} style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: panelBackgroundColor, color: secondaryTextColor, border: `1px solid ${borderColor}`, borderRadius: 12, cursor: 'pointer' }} title="Import session (JSON)"><Icons.Upload size={22} /></button>
            <input ref={fileInputRef} type="file" accept=".json" onChange={importFromJSON} style={{ display: 'none' }} />
          </div>
        </div>

        {showUrlInputs && (
          <div style={{ padding: '12px 20px', borderTop: `1px solid ${borderColor}`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: designerAccentColor, flexShrink: 0 }} /><input type="url" className="url-input" value={leftUrl} onChange={e => setLeftUrl(e.target.value)} placeholder={`Enter ${leftLabel} URL...`} style={{ flex: 1, padding: '9px 14px', fontSize, fontFamily, color: primaryTextColor, backgroundColor: panelBackgroundColor, border: `1px solid ${borderColor}`, borderRadius: 10, outline: 'none', transition: 'all 150ms ease' }} /></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: algorithmAccentColor, flexShrink: 0 }} /><input type="url" className="url-input" value={rightUrl} onChange={e => setRightUrl(e.target.value)} placeholder={`Enter ${rightLabel} URL...`} style={{ flex: 1, padding: '9px 14px', fontSize, fontFamily, color: primaryTextColor, backgroundColor: panelBackgroundColor, border: `1px solid ${borderColor}`, borderRadius: 10, outline: 'none', transition: 'all 150ms ease' }} /></div>
          </div>
        )}
      </header>

      {showSessionPanel && (
        <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 360, backgroundColor: panelBackgroundColor, boxShadow: '-4px 0 24px rgba(0,0,0,0.06)', zIndex: 200, display: 'flex', flexDirection: 'column', animation: 'slideIn 200ms ease-out' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icons.FolderOpen size={20} /><span style={{ fontWeight: 500 }}>Sessions</span></div>
            <button onClick={() => setShowSessionPanel(false)} style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', border: 'none', color: secondaryTextColor, cursor: 'pointer', borderRadius: 6 }}><Icons.X size={18} /></button>
          </div>
          <div style={{ padding: 16, borderBottom: `1px solid ${borderColor}` }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="text" value={sessionName} onChange={e => setSessionName(e.target.value)} placeholder="Session name..." style={{ flex: 1, padding: '9px 14px', fontSize, fontFamily, color: primaryTextColor, backgroundColor, border: `1px solid ${borderColor}`, borderRadius: 8, outline: 'none' }} />
              <button onClick={saveSession} disabled={!sessionName.trim()} style={{ padding: '9px 16px', fontSize, fontWeight: 500, backgroundColor: sessionName.trim() ? accentColor : borderColor, color: '#fff', border: 'none', borderRadius: 8, cursor: sessionName.trim() ? 'pointer' : 'not-allowed' }}>Save</button>
            </div>
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: 12 }}>
            {savedSessions.length === 0 ? (
              <div style={{ padding: 40, textAlign: 'center', color: secondaryTextColor }}><Icons.FolderOpen size={32} sw={1} /><p style={{ margin: '12px 0 4px', fontWeight: 500, color: primaryTextColor }}>No saved sessions</p><p style={{ margin: 0, fontSize: fontSize - 1 }}>Save your current comparison to access it later</p></div>
            ) : (
              savedSessions.map(session => (
                <div key={session.id} className="session-item" onClick={() => loadSession(session)} style={{ padding: 14, borderRadius: 10, marginBottom: 8, border: `1px solid ${borderColor}`, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontWeight: 500 }}>{session.name}</span>
                    <button onClick={(e) => deleteSession(session.id, e)} style={{ padding: 4, backgroundColor: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}><Icons.Trash2 size={14} /></button>
                  </div>
                  <div style={{ fontSize: fontSize - 1, color: secondaryTextColor, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icons.MessageSquare size={12} />{session.comments?.length || 0}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icons.Monitor size={12} />{session.previewWidth || 390}px</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icons.Clock size={12} />{new Date(session.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {showGroupingPanel && (
        <div style={{ position: 'fixed', top: 0, left: 0, bottom: 0, width: 320, backgroundColor: panelBackgroundColor, boxShadow: '4px 0 24px rgba(0,0,0,0.06)', zIndex: 200, display: 'flex', flexDirection: 'column', animation: 'slideIn 200ms ease-out' }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icons.Layers size={20} /><span style={{ fontWeight: 500 }}>Group by Labels</span></div>
            <button onClick={() => setShowGroupingPanel(false)} style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', border: 'none', color: secondaryTextColor, cursor: 'pointer', borderRadius: 6 }}><Icons.X size={18} /></button>
          </div>
          
          <div style={{ padding: '12px 16px', backgroundColor, borderBottom: `1px solid ${borderColor}` }}>
            <button 
              onClick={() => setSelectedLabelFilter(null)}
              style={{ 
                width: '100%',
                padding: '10px 12px', 
                fontSize, 
                fontWeight: 500, 
                backgroundColor: selectedLabelFilter === null ? accentColor : 'transparent', 
                color: selectedLabelFilter === null ? '#fff' : primaryTextColor,
                border: `1px solid ${selectedLabelFilter === null ? accentColor : borderColor}`, 
                borderRadius: 8, 
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>All Annotations</span>
              <span style={{ fontSize: fontSize - 2, opacity: 0.8 }}>({comments.length})</span>
            </button>
          </div>

          <div style={{ flex: 1, overflow: 'auto', padding: 12 }}>
            {LABEL_OPTIONS.map(label => {
              const annotationsWithLabel = comments.filter(c => c.labels && c.labels.includes(label.id));
              const count = annotationsWithLabel.length;
              
              if (count === 0) return null;
              
              const isSelected = selectedLabelFilter === label.id;
              
              return (
                <div key={label.id} style={{ marginBottom: 8 }}>
                  <button
                    onClick={() => setSelectedLabelFilter(isSelected ? null : label.id)}
                    style={{ 
                      width: '100%',
                      padding: '12px', 
                      backgroundColor: isSelected ? `${label.color}15` : 'transparent',
                      border: `2px solid ${isSelected ? label.color : borderColor}`,
                      borderRadius: 10,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 150ms ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: label.color }} />
                      <span style={{ fontSize: fontSize - 1, fontWeight: 500, color: label.color, flex: 1 }}>{label.label}</span>
                      <span style={{ 
                        padding: '2px 8px', 
                        backgroundColor: `${label.color}20`, 
                        color: label.color, 
                        borderRadius: 12, 
                        fontSize: fontSize - 2,
                        fontWeight: 600
                      }}>{count}</span>
                    </div>
                  </button>
                  
                  {isSelected && (
                    <div style={{ marginTop: 8, paddingLeft: 8 }}>
                      {annotationsWithLabel.map((comment, idx) => {
                        const commentIndex = comments.indexOf(comment) + 1;
                        return (
                          <div 
                            key={comment.id}
                            onClick={() => setActiveComment(comment.id)}
                            style={{ 
                              padding: '8px 12px', 
                              backgroundColor: activeComment === comment.id ? `${label.color}20` : panelBackgroundColor,
                              border: `1px solid ${borderColor}`,
                              borderLeft: `3px solid ${label.color}`,
                              borderRadius: 6,
                              marginBottom: 6,
                              cursor: 'pointer',
                              transition: 'all 150ms ease'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                              <span style={{ 
                                width: 20, 
                                height: 20, 
                                borderRadius: '50%', 
                                backgroundColor: label.color,
                                color: '#fff',
                                fontSize: fontSize - 3,
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>{commentIndex}</span>
                              <span style={{ fontSize: fontSize - 2, color: secondaryTextColor }}>
                                {comment.side === 'left' ? leftLabel : rightLabel}
                              </span>
                              {comment.connectedTo && comment.connectedTo.length > 0 && (
                                <div style={{ marginLeft: 'auto' }}>
                                  <Icons.GitBranch size={12} color="#10B981" />
                                </div>
                              )}
                            </div>
                            {comment.text && (
                              <p style={{ 
                                margin: 0, 
                                fontSize: fontSize - 2, 
                                color: secondaryTextColor,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                              }}>
                                {comment.text}
                              </p>
                            )}
                            {comment.labels.length > 1 && (
                              <div style={{ marginTop: 4, fontSize: fontSize - 3, color: secondaryTextColor }}>
                                +{comment.labels.length - 1} more label{comment.labels.length - 1 > 1 ? 's' : ''}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            
            {comments.length === 0 && (
              <div style={{ padding: 40, textAlign: 'center', color: secondaryTextColor }}>
                <Icons.Layers size={32} sw={1} />
                <p style={{ margin: '12px 0 4px', fontWeight: 500, color: primaryTextColor }}>No annotations yet</p>
                <p style={{ margin: 0, fontSize: fontSize - 1 }}>Add annotations to see them grouped by labels</p>
              </div>
            )}
          </div>
        </div>
      )}

      {comments.length > 0 && (
        <div style={{ backgroundColor: panelBackgroundColor, borderBottom: `1px solid ${borderColor}`, padding: '8px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: fontSize - 1, color: secondaryTextColor, display: 'flex', alignItems: 'center', gap: 6 }}><Icons.MessageSquare size={14} />{comments.length} comment{comments.length !== 1 ? 's' : ''}<span style={{ margin: '0 4px', opacity: 0.5 }}>·</span>{comments.filter(c => c.resolved).length} resolved</span>
          <div style={{ display: 'flex', gap: 4 }}>
            {comments.map((comment, i) => (
              <button key={comment.id} onClick={() => setActiveComment(comment.id)} style={{ width: 22, height: 22, borderRadius: 4, backgroundColor: comment.resolved ? secondaryTextColor : (comment.side === 'left' ? `${designerAccentColor}15` : `${algorithmAccentColor}15`), color: comment.resolved ? '#fff' : (comment.side === 'left' ? designerAccentColor : algorithmAccentColor), border: 'none', cursor: 'pointer', fontSize: fontSize - 2, fontWeight: 500 }}>{i + 1}</button>
            ))}
          </div>
        </div>
      )}

      <main ref={mainContainerRef} style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {renderPanel('left', leftUrl, setLeftUrl, designerAccentColor, leftLabel)}
        {renderPanel('right', rightUrl, setRightUrl, algorithmAccentColor, rightLabel)}
      </main>

      {isAddingAnnotation && (
        <div style={{ position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', backgroundColor: panelBackgroundColor, color: primaryTextColor, padding: '10px 20px', borderRadius: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.12)', border: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', gap: 10, zIndex: 100 }}>
          <Icons.Tag size={18} style={{ color: '#8B5CF6' }} />
          <span>Click anywhere on a preview to add annotation (labels required, comment optional)</span>
          <button onClick={() => setIsAddingAnnotation(false)} style={{ marginLeft: 8, padding: '4px 10px', backgroundColor, border: `1px solid ${borderColor}`, borderRadius: 6, cursor: 'pointer', fontSize: fontSize - 1, color: secondaryTextColor }}>Cancel</button>
        </div>
      )}
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component />);
