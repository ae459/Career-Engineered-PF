# Real-Time Infrastructure Monitor

**Full-Stack Developer | Infrastructure Monitoring Dashboard | NJ-Based**

A deployed, production-ready Infrastructure Monitor Dashboard showcasing full-stack capabilities: React frontend, Python/Flask backend, MySQL database, and real-time WebSocket communication.

> **📖 Strategy & Orchestration:** See [AGENTS.md](AGENTS.md) for the AI-facing build strategy, tech decisions, and project blueprint.

---

## 🚀 Live Demo

**[View Portfolio on Vercel →](https://career-engineered-pf.vercel.app)**

---

## 📋 The Orchestration Log

**AI Error 1: CSS Import Path**
- **What I Did:** Generated `Hero.css` with import `@import './shared.css'` (relative to pages folder)
- **The Problem:** File didn't exist at that path; `shared.css` is actually in `../components/`
- **How You Fixed It:** Updated import to `@import '../components/shared.css'` and hard-refreshed browser
- **Lesson:** Always verify file paths match actual directory structure

**AI Error 2: Port Conflict**
- **What I Did:** Assumed port 5000 would always be available for Flask backend
- **The Problem:** macOS AirPlay Receiver was using port 5000, causing "Address already in use" error
- **How You Fixed It:** Switched to port 5001 and updated `vite.config.js` proxy accordingly
- **Lesson:** Need to account for OS-level services (AirPlay, etc.)

**AI Error 3: Vercel Routing**
- **What I Did:** Created initial `vercel.json` in wrong location with incomplete rewrite rules
- **The Problem:** Deployment showed 404 errors when accessing routes like `/case-study`
- **How You Fixed It:** Moved `vercel.json` to root, added proper `buildCommand` and `outputDirectory`, configured Vercel UI
- **Lesson:** Monorepo deployments require explicit path configuration; UI settings often override JSON

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React (Vite), Tailwind CSS, Recharts |
| Backend | Python/Flask, REST API, WebSockets |
| Database | MySQL |
| Deployment | Vercel (Frontend) |
| DevOps | Docker, GitHub Actions |

---

## 📁 Project Structure

```
career-engineered-pf/
├── frontend/              # React app (Vite)
│   ├── src/pages/        # Hero, Case Study, Contact, Dashboard pages
│   ├── src/components/   # Reusable components (MetricGauge, shared CSS)
│   └── dist/             # Built files (deployed to Vercel)
├── backend/              # Flask REST API + WebSocket
│   ├── models/          # Database models (Metric, Contact, Alert)
│   ├── routes/          # API endpoints
│   └── app.py           # Flask entry point
├── docs/                # Documentation & schema
├── AGENTS.md            # Strategy & orchestration
└── vercel.json          # Vercel deployment config
```

---

## 🎯 Key Features

- ✅ Real-time system metrics (CPU, memory, disk, network)
- ✅ Interactive charts and SVG gauges
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Lead-gen contact form (ready for backend)
- ✅ Professional portfolio pages (Hero, Case Study, Contact)
- ✅ SEO optimized (meta tags, OG, keywords for NJ/NY)
- ✅ Clean code architecture (components, routes, models)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+
- MySQL 8.0+

### Local Development

**Frontend:**
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

**Backend:**
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 app.py --port 5001
# Runs on http://localhost:5001
```

**Database:**
```bash
mysql -u root < docs/schema.sql
```

---

## 📞 Contact

- **Email:** ae459@njit.edu
- **GitHub:** [github.com/ae459](https://github.com/ae459)
- **LinkedIn:** [aelmahalawy](https://www.linkedin.com/in/aelmahalawy)
- **Location:** New Jersey (NJ)

---

## 📄 License

Open source for portfolio purposes.