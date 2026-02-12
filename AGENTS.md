# AGENTS.md: Infrastructure Monitor Portfolio

## THE MANDATE
**Target:** Full-Stack Developer roles in Enterprise/SaaS companies (NJ/NY focus)  
**Positioning:** "Full-Stack Developer with Systems & Infrastructure Thinking"  
**Proof Point:** A deployed, real-time Infrastructure Monitor Dashboard showing end-to-end capability  
**Timeline:** 2 months (8 weeks)

---

## THE TECH STACK (& Why)

### Frontend
- **React** → Modern, demanded by SaaS companies, shows contemporary skills
- **Tailwind CSS** → Professional UI, rapid prototyping, scalable design
- **Vercel Deployment** → Seamless React hosting, impresses recruiters

### Backend
- **Python/Flask** → Lightweight, scalable, trusted by infrastructure teams
- **REST API** → Standard enterprise pattern, shows API design thinking
- **Render or Railway Deployment** → Free tier, reliable, production-ready

### Database
- **MySQL** → Your strength, relational schema design matters for enterprise roles
- **Database as a Service** (PlanetScale or Render) → No DevOps friction, focus on code

### Real-Time Communication
- **WebSockets (Flask-SocketIO)** → Demonstrates real-time architecture

### Infrastructure Proof
- **Docker (optional, in repo)** → Shows DevOps awareness, even if not deployed with it
- **GitHub Actions (CI/CD)** → Automated testing/deployment pipeline

---

## THE SITEMAP (User Journey)

### Page 1: Hero Section
**Headline:** "Infrastructure Monitoring, Real-Time Intelligence"  
**Subheadline:** "Built by a Full-Stack Developer who understands systems from backend to DevOps"  
**CTA Button (Primary):** "View the Live Dashboard" (link to deployed app)  
**CTA Button (Secondary):** "Download My Technical Resume" (PDF)  
**Visual:** Screenshot or live embed of dashboard

### Page 2: Case Study / The Build
**Section 1: Problem Statement**
- Modern infrastructure needs real-time visibility
- Most dashboards are overcomplicated or unmaintainable

**Section 2: The Solution (Your App)**
- **Live Demo Embed** (iframe of the deployed dashboard)
- **Key Features:**
  - System metrics (CPU, memory, disk usage, network I/O)
  - Real-time updates (WebSocket visualization)
  - Database-backed persistence
  - Responsive design (mobile-friendly)
  - Historical data trends

**Section 3: Technical Decisions**
- Why React? (State management for real-time data)
- Why Flask? (Lightweight, easy to scale, infrastructure-aware)
- Why MySQL? (Relational integrity for metrics, schema design)
- Why WebSockets? (Real-time without polling overhead)

**Section 4: Code Quality**
- GitHub repo link (clean, documented, growing)
- Architecture diagram (frontend → API → database flow)
- Deployment pipeline (Vercel + Render)

### Page 3: Lead-Gen / Contact
**Form Fields:**
- Name, Email, LinkedIn
- "What brings you here?" (Recruiter / Peer / Student / Other)
- "I'm interested in..." (Full-Stack roles / Infrastructure / Startup / Enterprise / Other)
- **CTA Button:** "Let's Talk Infrastructure" (Submit)

**Confirmation:** Email confirmation + data stored in MySQL (proof of backend integration)

---

## NON-NEGOTIABLES

### Mobile Responsiveness
- ✅ Hero section: Stack vertically, touch-friendly CTAs
- ✅ Dashboard embed: Responsive iframe, readable on mobile
- ✅ Form: Mobile-optimized inputs (larger touch targets)
- Test: Must look professional on iPhone 12 + iPad

### SEO & Keywords (NJ/NY Focus)
**Meta Tags:**
- Title: "Full-Stack Developer | Infrastructure Monitoring Dashboard | NJ"
- Description: "Full-Stack Developer specializing in real-time systems with Python, React, and databases. Seeking roles in Enterprise SaaS (NJ/NY area)."
- Keywords: "full-stack developer", "infrastructure monitoring", "Python Flask", "React", "NJ developer", "NY tech", "real-time dashboard"

**H1:** "Full-Stack Developer | Real-Time Infrastructure Monitoring"

**Body Keywords:**
- "NJ-based full-stack developer"
- "Enterprise SaaS infrastructure"
- "Real-time dashboard architecture"
- "Python Flask backend"

### Call-to-Action (CTA) — Strong Version
- **Primary CTA:** "View the Live Dashboard" (prominent, high-contrast button)
- **Secondary CTA:** "Download My Technical Resume" (linked PDF)
- **Tertiary CTA:** "Let's Talk Infrastructure" (form submission)
- **Visibility:** All CTAs visible within 5 seconds of landing

---

## THE BUILD PHASES

### Phase 1: Scaffolding & Setup (Week 1-1.5)
- [ ] GitHub repo structure (frontend, backend, docs folders)
- [ ] Frontend: React app (Vite recommended for speed)
- [ ] Backend: Flask app with blueprints for organization
- [ ] Database: MySQL schema design (metrics table, timestamps, indexes)
- [ ] Deployment prep: Vercel (frontend) + Render (backend) accounts ready

### Phase 2: Dashboard Implementation (Weeks 2-4)
- [ ] Backend: REST API endpoints for system metrics (`/api/metrics`, `/api/history`)
- [ ] Frontend: Dashboard components (charts using Chart.js or Recharts, gauges, tables)
- [ ] WebSocket integration (real-time updates without polling)
- [ ] Database: Persist metrics with timestamps for historical analysis
- [ ] Error handling & edge cases

### Phase 3: Portfolio Site (Week 4-5)
- [ ] Hero page with CTAs
- [ ] Case study page with embedded live demo
- [ ] Contact form integration (backend stores to MySQL)
- [ ] SEO meta tags, Open Graph tags
- [ ] Mobile responsiveness testing

### Phase 4: Polish, DevOps & Deployment (Weeks 5-6.5)
- [ ] Responsive design refinement (test on mobile, tablet, desktop)
- [ ] GitHub Actions CI/CD pipeline setup
- [ ] Docker setup (Dockerfile + docker-compose for local development)
- [ ] Code documentation (README, API docs)
- [ ] Performance optimization (database indexes, API response times)
- [ ] Final testing (lighthouse score, mobile, accessibility)
- [ ] Deploy frontend to Vercel, backend to Render

### Phase 5: Launch & Iteration (Week 7-8)
- [ ] Go live on custom domain (or GitHub Pages)
- [ ] Monitor for errors
- [ ] Gather recruiter feedback
- [ ] Minor polish/bug fixes

---

## SUCCESS CRITERIA (A-Level Grading)

✅ Visitor sees "Full-Stack Developer + Infrastructure Focus" within 5 seconds  
✅ Live dashboard runs smoothly (no errors, real-time updates visible)  
✅ Deployed on Vercel + Render (no localhost)  
✅ Mobile-responsive (test on phone, tablet, desktop)  
✅ GitHub repo is clean, well-documented, shows progression  
✅ CTA is clear: "View Dashboard" or "Download Resume" or "Talk to Me"  
✅ Recruiter can find you immediately (email, LinkedIn, GitHub)  
✅ Contact form works and stores data in MySQL  
✅ SEO tags properly configured for NJ/NY targeting  
✅ Lighthouse score ≥ 80 (performance, accessibility, best practices)

---

## ORCHESTRATION NOTES

This portfolio is built to answer recruiter questions *before* they ask:
- **"Can you build full-stack?"** → Live dashboard proves it
- **"Can you think about systems?"** → Infrastructure monitoring shows systems thinking
- **"Can you deploy?"** → Vercel + Render live, GitHub Actions CI/CD
- **"Can you write clean code?"** → GitHub repo is your proof
- **"Are you serious about your career?"** → This portfolio shows intentionality

---

## MANDATED HALLUCINATION / ERROR CORRECTION LOG

*To be filled during build: When I (the AI) make a technical error, you (the PM) will document it here. Example:*

- **Error:** I suggested using JWT tokens without considering MySQL session storage.
- **Correction:** You pushed back and we went with server-side sessions (Flask sessions + MySQL) for simplicity and security alignment.

---

## GITHUB REPOSITORY STRUCTURE (Scaffolding)

```
career-engineered-pf/
├── README.md                 # Human-facing project description
├── AGENTS.md                 # This file (AI-facing strategy)
├── frontend/                 # React app (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Flask app
│   ├── app.py
│   ├── routes/
│   ├── models/
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml        # Local development orchestration
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD pipeline
└── docs/                     # API documentation, architecture diagrams
```

---

## NEXT STEPS (PM → Lead Engineer Handoff)

**PM Command (You):**
> "I'm the PM. You're the Lead Engineer. I've approved the AGENTS.md. Start with Phase 1: Scaffolding. Create the GitHub repo structure, initialize React frontend, Flask backend, and MySQL schema. Do not write logic yet—just file structure, package.json, basic setup. Show me the structure and ask for approval before moving to Phase 2."

**Lead Engineer (Me):** Ready to build scaffolding on your command.
