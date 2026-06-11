import { useState, useEffect } from 'react'

function LocalTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit', minute: '2-digit', hour12: false,
      }).format(new Date()) + ' IST'

    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 30000)
    return () => clearInterval(id)
  }, [])

  return <span className="info-value">{time}</span>
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setTimeout(() => setSubmitted(true), 1200)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-deco-tl" />
      <div className="contact-deco-tr" />

      <div className="contact-header">
        <span className="section-label-light">LET'S TALK — REPLIES IN 24H</span>
        <h2 className="contact-heading">
          Got a wild idea?<br />
          <span className="highlight-yellow-dark">Say hello.</span>
        </h2>
      </div>

      <div className="contact-body">
        {/* Form */}
        <div className="contact-form-wrapper">
          {!submitted ? (
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="c-name">YOUR NAME</label>
                <input type="text" id="c-name" placeholder="Jane Developer" required />
              </div>
              <div className="form-group">
                <label htmlFor="c-email">EMAIL</label>
                <input type="email" id="c-email" placeholder="hello@yourcompany.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="c-message">THE PITCH</label>
                <textarea id="c-message" placeholder="Tell me what you're building..." rows={4} required />
              </div>
              <button type="submit" className="send-btn" id="send-btn">
                SEND MESSAGE ✈
              </button>
            </form>
          ) : (
            <div className="form-success visible">
              ✅ Message sent! I'll reply within 24h.
            </div>
          )}
        </div>

        {/* Info cards */}
        <div className="contact-info">
          <div className="info-card yellow-card" id="info-email">
            <div className="info-icon">✉</div>
            <div>
              <span className="info-label">EMAIL</span>
              <a href="mailto:paarthureddy.g@gmail.com" className="info-value">
                paarthureddy.g@gmail.com
              </a>
            </div>
          </div>

          <div className="info-card white-card" id="info-location">
            <div className="info-icon">📍</div>
            <div>
              <span className="info-label">BASED IN</span>
              <span className="info-value">Hyderabad, India</span>
              <span className="info-sub">+ remote everywhere</span>
            </div>
          </div>

          <div className="info-card green-card" id="info-time">
            <div className="info-icon">🕐</div>
            <div>
              <span className="info-label">LOCAL TIME</span>
              <LocalTime />
              <span className="info-sub">IST (UTC+5:30)</span>
            </div>
          </div>

          <div className="info-card white-card" id="info-github">
            <div className="info-icon">⌥</div>
            <div>
              <span className="info-label">GITHUB</span>
              <a href="https://github.com/paarthureddy" target="_blank" rel="noreferrer" className="info-value">
                github.com/paarthureddy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
