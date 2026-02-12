# Phase 3: Testing & Verification Guide

## Quick Start (Local Testing)

### Prerequisites
- Backend running on `:5000` (Flask)
- Frontend running on `:5173` (Vite)
- MySQL database initialized

### Test the Full Portfolio Flow

#### Step 1: Home Page (Hero)
```
Visit: http://localhost:5173/
Verify:
✅ Page loads with purple gradient background
✅ Headline: "Infrastructure Monitoring, Real-Time Intelligence"
✅ Two CTAs visible: "View the Live Dashboard" + "Download My Technical Resume"
✅ Features grid shows 4 cards below
✅ Mobile: Hero content stacks vertically
```

#### Step 2: Case Study Page
```
Click: "View the Live Dashboard" button
Verify:
✅ Page loads with blue gradient header
✅ Three tabs visible: Problem | Solution | Technical Decisions
✅ Tab content switches on click
✅ Architecture diagram shows 3 layers (Frontend → API → Data)
✅ Dashboard iframe embedded (may show error if backend not running)
✅ "Open Dashboard in New Window" button works
✅ Mobile: Tabs are readable, not truncated
```

#### Step 3: Live Dashboard (Embedded)
```
Click: "Open Dashboard in New Window" button
Verify:
✅ Dashboard loads with gauges for CPU, Memory, Disk
✅ Charts render (Line, Area, Bar, Pie)
✅ "Collect Metrics Now" button works
✅ Metrics update in real-time (if WebSocket connected)
✅ Mobile: Charts are responsive, readable
```

#### Step 4: Contact Form
```
Click: Contact link in navbar or "Let's Talk Infrastructure" CTA
Verify:
✅ Form loads with 5 fields:
  - Name (required)
  - Email (required)
  - LinkedIn URL (optional)
  - "What brings you here?" (dropdown)
  - "I'm interested in..." (dropdown)
✅ Fill out form with test data
✅ Click "Let's Talk Infrastructure"
✅ Success message displays: "Thank you! I'll be in touch soon."
✅ Form clears after submission
✅ Backend: Check MySQL for new row in contact_submissions table
```

---

## Desktop Testing (1920x1080)

### Visual Testing

#### Home Page
- [ ] Gradient background extends full width
- [ ] Logo/brand name visible in navbar
- [ ] Navigation links aligned to right
- [ ] Hero content: title + subtitle + CTAs well-spaced
- [ ] Dashboard preview card has proper shadow
- [ ] Features grid: 4 cards in row, evenly spaced
- [ ] CTA section has good contrast
- [ ] Footer content centered

#### Case Study Page
- [ ] Header gradient proper color
- [ ] Tab buttons have underline indicator
- [ ] Content area has proper padding
- [ ] Architecture diagram layers aligned vertically
- [ ] Dashboard iframe width 100%, height 600px
- [ ] Code quality cards grid is 4-wide
- [ ] "Let's Discuss..." CTA button is centered

#### Contact Form
- [ ] Form has 2-column layout (form + contact info)
- [ ] Contact info sidebar is visible
- [ ] Form fields have proper spacing
- [ ] Submit button is full width
- [ ] Email input has correct validation

### Interaction Testing
- [ ] All links navigate correctly
- [ ] Tab switching smooth (no flashing)
- [ ] Form submission works
- [ ] Success message shows & disappears after 5s
- [ ] "Collect Metrics Now" button triggers API call
- [ ] WebSocket connects (check browser console for "Connected to WebSocket")

---

## Mobile Testing (375x667 - iPhone 12)

### Viewport & Layout
- [ ] No horizontal scroll
- [ ] Text readable without zoom
- [ ] Buttons/links ≥ 44px touch targets
- [ ] Form inputs ≥ 16px font (prevents iOS zoom)
- [ ] Hero section stacks vertically (not side-by-side)
- [ ] Features cards stack to single column
- [ ] Dashboard iframe responsive (height ≤ 600px, scales)

### Navigation
- [ ] Navbar visible and clickable
- [ ] Links not cut off
- [ ] Active state highlighted

### Form (Mobile-Specific)
- [ ] Text input focuses without jumping
- [ ] Dropdown selects open properly
- [ ] Submit button tappable
- [ ] Success message readable
- [ ] No keyboard overlay blocking form

### Charts (if embedded)
- [ ] Charts scale to mobile width
- [ ] Recharts ResponsiveContainer working
- [ ] Gauges render properly
- [ ] No console errors about dimensions

---

## Browser DevTools Testing

### Lighthouse Audit (Chrome DevTools)
```bash
1. Open DevTools (F12)
2. Run Lighthouse audit (Ctrl+Shift+P → Lighthouse)
3. Run on each page:
   - Home page
   - Case Study page
   - Contact form page
4. Target: ≥80 on Performance, Accessibility, Best Practices, SEO
```

### Console Errors
- [ ] No red errors in Console tab
- [ ] WebSocket connects (info message visible)
- [ ] API calls successful (if backend running)
- [ ] CSS/images load without 404

### Network Tab
- [ ] HTML, CSS, JS load quickly
- [ ] Images/assets optimized
- [ ] API calls to `/api/*` resolve
- [ ] No failed requests

### Responsive Design Mode
- [ ] Test at: 320px, 375px, 768px, 1024px, 1920px
- [ ] Each breakpoint renders correctly
- [ ] No layout shifts

---

## API Integration Testing

### Contact Form Submission
```bash
1. Fill form on Contact page
2. Submit
3. In Backend terminal, check logs:
   POST /api/contact should show 201 Created
4. Check MySQL database:
   mysql> SELECT * FROM contact_submissions;
   Should show new row with your data
```

### Dashboard Metrics
```bash
1. Open Dashboard page
2. Click "Collect Metrics Now"
3. In Backend logs, check:
   POST /api/metrics/collect should show 201 Created
4. Check charts update
5. MySQL database:
   mysql> SELECT * FROM metrics LIMIT 1;
   Should show recent metrics
```

### WebSocket Connection
```bash
1. Open Dashboard page
2. Open Browser Console (F12 → Console)
3. Look for: "Connected to WebSocket"
4. If missing, backend may not be running on :5000
```

---

## Accessibility Testing

### Color Contrast
- [ ] Text on background has ≥4.5:1 contrast
- [ ] Buttons have visible focus state
- [ ] Links underlined or distinct color

### Keyboard Navigation
- [ ] Tab through page: all links/buttons reachable
- [ ] Form fields focusable in order
- [ ] Dropdowns work with arrow keys
- [ ] Submit button activatable with Enter

### Screen Reader (NVDA or VoiceOver on Mac)
- [ ] Page structure logical (headings in order)
- [ ] Form labels associated with inputs
- [ ] Button text descriptive
- [ ] Links have meaningful text

---

## Error Scenarios (Edge Cases)

### Backend Down
- [ ] Navigate to Dashboard → "Waiting for metrics..." message
- [ ] No console errors
- [ ] CTA buttons still clickable

### Form Validation
- [ ] Empty name → form doesn't submit
- [ ] Invalid email → shows error
- [ ] Submit with dropdown empty → error

### Network Error
- [ ] Slow network: loading states show
- [ ] Offline: graceful error message
- [ ] Timeout: error message after 5s

---

## Performance Testing

### Lighthouse Metrics (DevTools)
- [ ] First Contentful Paint (FCP): < 1.5s
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] Time to Interactive (TTI): < 3.5s

### Bundle Size
```bash
npm run build
# Check: frontend/dist/ size < 500KB total
```

---

## Final Deployment Checklist

Before deploying to Vercel + Render:

- [ ] All pages render correctly (desktop + mobile)
- [ ] No console errors
- [ ] Contact form submits successfully
- [ ] Dashboard loads (even with sample data)
- [ ] Lighthouse score ≥ 80 on Performance
- [ ] Forms validate & handle errors
- [ ] Mobile: No horizontal scroll, readable text
- [ ] Navigation works across all pages
- [ ] SEO meta tags in place
- [ ] API endpoints tested
- [ ] Database queries working

---

## Troubleshooting

### Dashboard Shows "Waiting for metrics..."
**Solution:** Backend may not be running or WebSocket not connected
```bash
# Check backend is running
ps aux | grep "python app.py"
# If not, start it: cd backend && python app.py
```

### Form Submission Fails
**Solution:** Backend API error
```bash
# Check backend logs for POST /api/contact error
# Verify CORS is enabled in Flask
# Check MySQL connection string in .env
```

### Charts Don't Render
**Solution:** Recharts ResponsiveContainer issue
```bash
# Clear browser cache (Ctrl+Shift+Delete)
# Check DevTools Console for Recharts errors
# Verify window.innerWidth is accessible
```

### Mobile Form Zooms on Input
**Solution:** Font size < 16px
```bash
# Verify in Contact.css: 
# form-group input { font-size: 16px; }
```

---

## Ready for Submission?

When all tests pass, proceed to **Phase 4: Deployment** to launch on Vercel + Render.

