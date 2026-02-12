import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CaseStudy.css'

const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState('problem')
  const navigate = useNavigate()

  return (
    <div className="case-study-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Infrastructure Monitor</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/case-study" className="active">Case Study</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Case Study Header */}
      <section className="case-study-header">
        <h1>Case Study: Real-Time Infrastructure Monitor</h1>
        <p>A full-stack proof-of-concept built to demonstrate systems thinking, DevOps awareness, and production-ready development.</p>
      </section>

      {/* Problem/Solution Tabs */}
      <section className="case-study-tabs">
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'problem' ? 'active' : ''}`}
            onClick={() => setActiveTab('problem')}
          >
            Problem
          </button>
          <button 
            className={`tab-btn ${activeTab === 'solution' ? 'active' : ''}`}
            onClick={() => setActiveTab('solution')}
          >
            Solution
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            Technical Decisions
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'problem' && (
            <div className="tab-pane">
              <h3>The Problem</h3>
              <p>
                Modern infrastructure needs real-time visibility. Most dashboards are overcomplicated, expensive, or unmaintainable. 
                Developers often build monitoring solutions that scale poorly or lack proper architecture.
              </p>
              <ul>
                <li>❌ Inflexible cloud dashboards (AWS, Azure) lock you into vendor ecosystems</li>
                <li>❌ Open-source tools (Prometheus, Grafana) require DevOps expertise to deploy</li>
                <li>❌ Most junior developers don't understand systems thinking—just CRUD apps</li>
              </ul>
              <p><strong>The Opportunity:</strong> Build a lightweight, elegant monitor that proves I can think about infrastructure while shipping a polished product.</p>
            </div>
          )}

          {activeTab === 'solution' && (
            <div className="tab-pane">
              <h3>The Solution</h3>
              <p>
                A real-time Infrastructure Monitor Dashboard that collects system metrics and visualizes them beautifully.
              </p>
              <h4>Key Features:</h4>
              <ul>
                <li>✅ <strong>Real-time Updates:</strong> WebSocket connection for live metric streaming</li>
                <li>✅ <strong>Interactive Charts:</strong> CPU, memory, disk, network trends visualized with Recharts</li>
                <li>✅ <strong>Database Persistence:</strong> Historical data stored in MySQL for trend analysis</li>
                <li>✅ <strong>Responsive Design:</strong> Mobile-first UI, works on phone/tablet/desktop</li>
                <li>✅ <strong>API-First:</strong> Clean REST endpoints for future integrations</li>
              </ul>
              <p><strong>Result:</strong> A deployed, production-ready dashboard that shows I can architect full-stack systems.</p>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="tab-pane">
              <h3>Why These Technologies?</h3>
              <div className="tech-decisions">
                <div className="tech-card">
                  <h4>React + Vite</h4>
                  <p>Modern, fast, what enterprise SaaS companies use. Vite gives instant HMR (hot module replacement) for dev velocity.</p>
                </div>
                <div className="tech-card">
                  <h4>Python/Flask</h4>
                  <p>Lightweight, scalable, trusted by infrastructure teams. Unlike Node, Flask is industry-standard for backend services.</p>
                </div>
                <div className="tech-card">
                  <h4>MySQL</h4>
                  <p>Your strength. Relational integrity matters for enterprise data. Indexes on timestamps = fast queries for historical data.</p>
                </div>
                <div className="tech-card">
                  <h4>WebSockets</h4>
                  <p>Real-time without polling overhead. Demonstrates understanding of bi-directional communication vs. REST request/response.</p>
                </div>
                <div className="tech-card">
                  <h4>Vercel + Render</h4>
                  <p>Deployment proof. No localhost, no "I'll deploy later." This is live, accessible, and shows DevOps confidence.</p>
                </div>
                <div className="tech-card">
                  <h4>Docker + GitHub Actions</h4>
                  <p>CI/CD infrastructure. Even if not deployed with containers, having them in the repo signals DevOps thinking.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Live Dashboard Embed */}
      <section className="dashboard-embed-section">
        <h2>The Live Dashboard</h2>
        <p>Here's the infrastructure monitor in action:</p>
        <div className="dashboard-embed">
          <iframe 
            src="/" 
            title="Live Infrastructure Monitor Dashboard"
            className="dashboard-iframe"
          ></iframe>
        </div>
        <button className="cta-secondary" onClick={() => window.open('/', '_blank')}>
          Open Dashboard in New Window
        </button>
      </section>

      {/* Architecture Diagram */}
      <section className="architecture-section">
        <h2>System Architecture</h2>
        <div className="architecture-diagram">
          <div className="arch-layer">
            <h4>Frontend Layer</h4>
            <p>React (Vite) + Recharts + Socket.io Client</p>
            <p className="arch-url">Deployed on Vercel</p>
          </div>
          <div className="arch-arrow">↕</div>
          <div className="arch-layer">
            <h4>API Layer</h4>
            <p>Flask REST API + WebSocket (SocketIO)</p>
            <p className="arch-url">Deployed on Render</p>
          </div>
          <div className="arch-arrow">↕</div>
          <div className="arch-layer">
            <h4>Data Layer</h4>
            <p>MySQL Database (PlanetScale or Render)</p>
            <p className="arch-url">Metrics + Contacts + Alerts</p>
          </div>
        </div>
      </section>

      {/* Code Quality Section */}
      <section className="code-quality-section">
        <h2>Code Quality & Intentionality</h2>
        <div className="quality-cards">
          <div className="quality-card">
            <h4>Clean Architecture</h4>
            <p>Models, routes, and components separated. Blueprints in Flask, components in React. Easy to extend.</p>
          </div>
          <div className="quality-card">
            <h4>Error Handling</h4>
            <p>Try/catch blocks, fallback UI states, graceful degradation. Production code, not tutorial code.</p>
          </div>
          <div className="quality-card">
            <h4>Documentation</h4>
            <p>README, API docs, local setup guide, AGENTS.md strategy. Shows I think about maintainability.</p>
          </div>
          <div className="quality-card">
            <h4>Database Design</h4>
            <p>Normalized schema, proper indexes, timestamps. Not just "dump data in," but strategic design.</p>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="next-steps-section">
        <h2>What This Proves</h2>
        <ul className="proof-points">
          <li>✅ I can ship end-to-end: frontend → backend → database → deployment</li>
          <li>✅ I understand systems thinking: DevOps, real-time architecture, infrastructure</li>
          <li>✅ I write clean, maintainable code: not hacks, but production patterns</li>
          <li>✅ I'm serious about my career: this portfolio took planning and intentionality</li>
        </ul>
        <button className="cta-primary-large" onClick={() => navigate('/contact')}>
          Let's Discuss Infrastructure & Full-Stack Development
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Full-Stack Developer | NJ-Based | <a href="#">GitHub</a> | <a href="#">LinkedIn</a></p>
      </footer>
    </div>
  )
}

export default CaseStudy
