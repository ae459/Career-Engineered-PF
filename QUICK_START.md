# 🚀 Quick Start Reference Card

## One-Time Setup

```bash
# 1. Backend virtual environment
cd backend
python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate      # Windows

# 2. Install dependencies
pip install -r requirements.txt

# 3. Copy environment file
cp .env.example .env

# 4. Database (one-time)
mysql -u root < ../docs/schema.sql

# 5. Frontend dependencies
cd ../frontend
npm install
```

---

## Daily Development

**Terminal 1: Backend**

```bash
cd backend
source venv/bin/activate
python app.py
# Listening on http://localhost:5000
```

**Terminal 2: Frontend**

```bash
cd frontend
npm run dev
# Listening on http://localhost:5173
```

**Open in Browser:**

```
http://localhost:5173
```

---

## File Locations (Quick Navigation)

| What            | Where                              |
| --------------- | ---------------------------------- |
| Home Page       | `frontend/src/pages/Hero.jsx`      |
| Case Study      | `frontend/src/pages/CaseStudy.jsx` |
| Contact Form    | `frontend/src/pages/Contact.jsx`   |
| Dashboard       | `frontend/src/pages/Dashboard.jsx` |
| API Routes      | `backend/routes/metrics.py`        |
| Database Models | `backend/models/metrics.py`        |
| Styling         | `frontend/src/**/*.css`            |
| Schema          | `docs/schema.sql`                  |

---

## Routes (Frontend Routing)

```
GET  /                  → Hero (landing)
GET  /case-study        → Case study
GET  /dashboard         → Live dashboard
GET  /contact           → Contact form
```

---

## API Endpoints (Backend)

```
GET  /health                     → Health check
GET  /api/metrics                → Latest metrics
GET  /api/metrics/history        → Historical data (default: 24h)
POST /api/metrics/collect        → Collect new metrics
POST /api/contact                → Submit contact form
GET  /api/alerts                 → Get active alerts
POST /api/alerts                 → Create alert
```

---

## Common Commands

### Build Frontend

```bash
cd frontend
npm run build
# Output: frontend/dist/
```

### Run Tests (if added)

```bash
cd backend
pytest

cd frontend
npm test
```

### Clean Up

```bash
# Clear npm cache
npm cache clean --force

# Remove venv
rm -rf backend/venv

# Clear compiled Python
find . -type d -name __pycache__ -exec rm -r {} +
```

### Database

**View metrics:**

```bash
mysql infrastructure_monitor -u root -e "SELECT * FROM metrics LIMIT 5;"
```

**View contact submissions:**

```bash
mysql infrastructure_monitor -u root -e "SELECT * FROM contact_submissions;"
```

**Reset database:**

```bash
mysql -u root -e "DROP DATABASE infrastructure_monitor;"
mysql -u root < docs/schema.sql
```

---

## Troubleshooting (Quick Fixes)

| Issue             | Fix                                   |
| ----------------- | ------------------------------------- |
| Port 5000 in use  | `lsof -i :5000` then `kill -9 <PID>`  |
| Port 5173 in use  | `lsof -i :5173` then `kill -9 <PID>`  |
| MySQL not running | `brew services start mysql` (macOS)   |
| WebSocket error   | Backend must be on `:5000`            |
| Form won't submit | Check backend `/api/contact` endpoint |
| Charts empty      | Click "Collect Metrics Now" button    |
| Mobile zoom issue | Check input font-size ≥ 16px          |

---

## Pre-Deployment Checklist

- [ ] Backend tests pass
- [ ] Frontend builds without errors (`npm run build`)
- [ ] All routes work (`/`, `/case-study`, `/dashboard`, `/contact`)
- [ ] Contact form submits successfully
- [ ] Dashboard shows metrics
- [ ] Mobile responsive (DevTools 375px width)
- [ ] Lighthouse score ≥ 80 (`npm run build` then audit)
- [ ] No console errors
- [ ] Environment variables set

---

## Deployment Commands (Phase 4)

```bash
# Vercel (frontend)
npm install -g vercel
cd frontend
vercel

# Render (backend)
# Use Render dashboard or:
# Link GitHub repo → auto-deploy

# Custom Domain
# Via Vercel dashboard + DNS settings
```

---

## Environment Variables

**Backend `.env`:**

```
DATABASE_URL=mysql+pymysql://root:@localhost/infrastructure_monitor
FLASK_ENV=development
FLASK_DEBUG=True
```

**Frontend `.env.local`:**

```
VITE_API_URL=http://localhost:5000
```

---

## Key Files to Know

- `AGENTS.md` — Strategy & orchestration
- `README.md` — Project overview
- `docs/SETUP_LOCAL.md` — Detailed setup
- `docs/TESTING_GUIDE.md` — Testing procedures
- `frontend/vite.config.js` — API proxy config
- `backend/app.py` — Flask entry point
- `backend/routes/metrics.py` — API logic

---

## Support & Debugging

**Check Backend Logs:**

```bash
# Look for errors in terminal running `python app.py`
# Common: Database connection, CORS, port conflict
```

**Check Frontend Logs:**

```bash
# DevTools Console (F12)
# Look for: WebSocket, API errors, React warnings
```

**Check Database:**

```bash
mysql infrastructure_monitor -u root
> SHOW TABLES;
> SELECT COUNT(*) FROM metrics;
> SELECT COUNT(*) FROM contact_submissions;
```

---

**Last Updated:** February 12, 2026  
**Current Phase:** 3 (Portfolio Site) ✅ Complete  
**Next Phase:** 4 (Deployment)
