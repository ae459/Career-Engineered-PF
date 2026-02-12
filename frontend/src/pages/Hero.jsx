import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Infrastructure Monitor</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/case-study">Case Study</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Infrastructure Monitoring, Real-Time Intelligence
          </h1>
          <p className="hero-subtitle">
            Built by a Full-Stack Developer who understands systems from backend to DevOps
          </p>

          <div className="hero-ctas">
            <Link to="/case-study" className="cta-primary">
              View the Live Dashboard
            </Link>
            <a href="#" className="cta-secondary" onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('resume-download')
              if (element) element.click()
            }}>
              Download My Technical Resume
            </a>
          </div>

          {/* Hidden link for resume download */}
          <a id="resume-download" href="#" style={{ display: 'none' }} download>Resume</a>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="dashboard-preview">
            <div className="preview-header">Infrastructure Monitor</div>
            <div className="preview-metrics">
              <div className="metric-mini cpu">CPU: 45%</div>
              <div className="metric-mini mem">Memory: 62%</div>
              <div className="metric-mini disk">Disk: 38%</div>
            </div>
            <div className="preview-chart">
              <svg viewBox="0 0 200 80" preserveAspectRatio="xMidYMid meet">
                <polyline points="0,60 25,50 50,55 75,35 100,45 125,30 150,40 175,20 200,25" 
                  fill="none" stroke="#3b82f6" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why This Portfolio?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Full-Stack Capability</h3>
            <p>React frontend, Python/Flask backend, MySQL database—end-to-end architecture proven live.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Systems Thinking</h3>
            <p>Infrastructure monitoring shows I understand DevOps, real-time data, and scalable architecture.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Production-Ready</h3>
            <p>Deployed on Vercel & Render. Not just a local project—this is real, accessible, live.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Code Quality</h3>
            <p>Clean architecture, error handling, responsive design. GitHub repo shows intentionality.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Talk Infrastructure?</h2>
        <p>Whether you're hiring for enterprise SaaS roles or building infrastructure solutions, let's connect.</p>
        <Link to="/contact" className="cta-primary-large">
          Let's Talk Infrastructure
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Full-Stack Developer | NJ-Based | <a href="#">GitHub</a> | <a href="#">LinkedIn</a></p>
      </footer>
    </div>
  )
}

export default Hero
