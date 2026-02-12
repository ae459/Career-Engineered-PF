# Local Development Setup Guide

This guide walks you through setting up the Infrastructure Monitor locally before deployment.

## Prerequisites

- **Node.js 18+** (for React frontend)
- **Python 3.11+** (for Flask backend)
- **MySQL 8.0+** (for database)
- **Git** (for version control)

---

## Step 1: Clone & Navigate

```bash
cd /Users/AmirE./Desktop/IS117/Career-Engineered-PF
git init
git add .
git commit -m "Phase 1 & 2: Scaffolding + Dashboard Implementation"
```

---

## Step 2: Set Up Backend (Python/Flask)

### 2.1: Create Virtual Environment

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2.2: Install Dependencies

```bash
pip install -r requirements.txt
```

### 2.3: Create `.env` File

```bash
cp .env.example .env
```

Edit `.env`:
```
DATABASE_URL=mysql+pymysql://root:@localhost/infrastructure_monitor
FLASK_ENV=development
FLASK_DEBUG=True
```

*(Update with your MySQL credentials)*

### 2.4: Set Up Database

```bash
# Start MySQL (or ensure it's running)
# On macOS: brew services start mysql
# On Windows: Start MySQL Server from Services

# Create database and schema
mysql -u root -p < ../docs/schema.sql
# (Leave password blank if you have no password set)
```

### 2.5: Run Flask Backend

```bash
cd ../backend
python app.py
```

Expected output:
```
 * Serving Flask app 'app'
 * Debug mode: on
 * Running on http://0.0.0.0:5000
```

✅ Backend is running on `http://localhost:5000`

---

## Step 3: Set Up Frontend (React)

### 3.1: Install Dependencies

```bash
cd frontend
npm install
```

### 3.2: Run React Dev Server

```bash
npm run dev
```

Expected output:
```
  VITE v4.3.0  ready in 205 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

✅ Frontend is running on `http://localhost:5173`

---

## Step 4: Test the Dashboard

1. Open browser: `http://localhost:5173`
2. You should see the **Infrastructure Monitor Dashboard**
3. Charts and gauges will load real-time metrics
4. Click **"Collect Metrics Now"** button to manually fetch metrics

---

## Troubleshooting

### Issue: MySQL Connection Error
```
pymysql.Error: (2003, "Can't connect to MySQL server on 'localhost'")
```
**Solution:** Ensure MySQL is running
- macOS: `brew services start mysql`
- Windows: Start MySQL Service
- Linux: `sudo systemctl start mysql`

### Issue: React not connecting to backend
```
Error: Failed to fetch metrics
```
**Solution:** Check that:
- Backend is running on `:5000`
- Frontend proxy is set (vite.config.js has `/api` proxy)
- CORS is enabled in Flask

### Issue: Port already in use
```
Address already in use
```
**Solution:** 
```bash
# Find process using port 5000
lsof -i :5000
# Kill process
kill -9 <PID>
```

---

## File Structure After Phase 2

```
career-engineered-pf/
├── backend/
│   ├── app.py                    ✅ Updated with DB + routes
│   ├── models/
│   │   ├── __init__.py
│   │   └── metrics.py            ✅ Database models
│   ├── routes/
│   │   ├── __init__.py
│   │   └── metrics.py            ✅ API endpoints
│   ├── requirements.txt           ✅ (psutil added)
│   └── venv/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx     ✅ Main dashboard
│   │   │   ├── Dashboard.css
│   │   │   ├── MetricGauge.jsx   ✅ Gauge component
│   │   │   └── MetricGauge.css
│   │   ├── App.jsx               ✅ Updated routing
│   │   └── main.jsx
│   ├── package.json              ✅ (react-router-dom added)
│   └── node_modules/
│
└── docs/
    └── schema.sql
```

---

## Next Steps

**Phase 3:** Portfolio Website (Hero, Case Study, Contact Form)  
**Phase 4:** Deployment (Vercel + Render)  
**Phase 5:** Monitoring & Launch

---

## Quick Reference: API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/health` | GET | Health check |
| `/api/metrics` | GET | Get latest metrics |
| `/api/metrics/history?hours=24` | GET | Get historical metrics |
| `/api/metrics/collect` | POST | Collect and store new metrics |
| `/api/contact` | POST | Submit contact form |
| `/api/alerts` | GET | Get active alerts |

