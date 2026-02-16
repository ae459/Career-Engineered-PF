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
- **How I Fixed It:** Updated import to `@import '../components/shared.css'` and hard-refreshed browser
- **Lesson:** Always verify file paths match actual directory structure

**AI Error 2: Port Conflict**
- **What I Did:** Assumed port 5000 would always be available for Flask backend
- **The Problem:** macOS AirPlay Receiver was using port 5000, causing "Address already in use" error
- **How I Fixed It:** Switched to port 5001 and updated `vite.config.js` proxy accordingly
- **Lesson:** Need to account for OS-level services (AirPlay, etc.)

**AI Error 3: Vercel Routing**
- **What I Did:** Created initial `vercel.json` in wrong location with incomplete rewrite rules
- **The Problem:** Deployment showed 404 errors when accessing routes like `/case-study`
- **How I Fixed It:** Moved `vercel.json` to root, added proper `buildCommand` and `outputDirectory`, configured Vercel UI
- **Lesson:** Monorepo deployments require explicit path configuration; UI settings often override JSON

---

## 📄 License

Open source for portfolio purposes.
