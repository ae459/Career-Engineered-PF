import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin_url: '',
    visit_reason: '',
    interest_type: '',
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setStatus('success')
      setMessage('Thank you! I\'ll be in touch soon.')
      setFormData({
        name: '',
        email: '',
        linkedin_url: '',
        visit_reason: '',
        interest_type: '',
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (err) {
      setStatus('error')
      setMessage('Error submitting form. Please try again.')
    }
  }

  return (
    <div className="contact-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Infrastructure Monitor</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/case-study">Case Study</a></li>
          <li><a href="/contact" className="active">Contact</a></li>
        </ul>
      </nav>

      {/* Contact Header */}
      <section className="contact-header">
        <h1>Let's Talk Infrastructure</h1>
        <p>Whether you're hiring for Full-Stack roles, building scalable systems, or exploring infrastructure solutions—let's connect.</p>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@company.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="linkedin_url">LinkedIn URL</label>
              <input
                type="url"
                id="linkedin_url"
                name="linkedin_url"
                value={formData.linkedin_url}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className="form-group">
              <label htmlFor="visit_reason">What brings you here? *</label>
              <select
                id="visit_reason"
                name="visit_reason"
                value={formData.visit_reason}
                onChange={handleChange}
                required
              >
                <option value="">— Select one —</option>
                <option value="Recruiter">Recruiter / Hiring Manager</option>
                <option value="Peer">Fellow Developer / Peer</option>
                <option value="Student">Student / Learning</option>
                <option value="Collaboration">Collaboration Opportunity</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="interest_type">I'm interested in... *</label>
              <select
                id="interest_type"
                name="interest_type"
                value={formData.interest_type}
                onChange={handleChange}
                required
              >
                <option value="">— Select one —</option>
                <option value="Full-Stack">Full-Stack Developer Roles</option>
                <option value="Infrastructure">Infrastructure & DevOps</option>
                <option value="SaaS">SaaS / Enterprise Roles</option>
                <option value="Consulting">Consulting / Advisory</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Submitting...' : 'Let\'s Talk Infrastructure'}
            </button>

            {status === 'success' && (
              <div className="form-message success">✅ {message}</div>
            )}
            {status === 'error' && (
              <div className="form-message error">❌ {message}</div>
            )}
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Other Ways to Reach Me</h3>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></li>
              <li><strong>LinkedIn:</strong> <a href="#" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></li>
              <li><strong>GitHub:</strong> <a href="#" target="_blank" rel="noopener noreferrer">github.com/yourprofile</a></li>
              <li><strong>Location:</strong> New Jersey (NJ)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Full-Stack Developer | NJ-Based | <a href="#">GitHub</a> | <a href="#">LinkedIn</a></p>
      </footer>
    </div>
  )
}

export default Contact
