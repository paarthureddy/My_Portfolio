export default function Footer() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div
            className="footer-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            <span className="logo-star">✶</span>
            <span className="logo-name">PAARTHU REDDY</span>
          </div>
          <p className="footer-tagline">
            Full-stack developer building loud, scalable things.
            Based in Hyderabad, working with teams worldwide.
          </p>
        </div>

        {/* Sitemap */}
        <div className="footer-col">
          <h4 className="footer-col-title">SITEMAP</h4>
          {['work','about','skills','experience','contact'].map(id => (
            <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* Elsewhere */}
        <div className="footer-col">
          <h4 className="footer-col-title">ELSEWHERE</h4>
          <a href="https://github.com/paarthureddy" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:paarthureddy.g@gmail.com">Gmail</a>
          <a href="tel:+919000518339">+91 90005 18339</a>
          <a
            href="https://drive.google.com/drive/folders/1pASww7_Y8fSFo9dxm1Uey7jx-p4GNAzr?usp=sharing"
            target="_blank" rel="noreferrer"
          >
            Certificates
          </a>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4 className="footer-col-title">FIND ME ON</h4>
          <div className="social-icons">
            <a href="https://github.com/paarthureddy" target="_blank" rel="noreferrer"
               className="social-icon" id="social-github" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:paarthureddy.g@gmail.com" className="social-icon" id="social-email" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="tel:+919000518339" className="social-icon" id="social-phone" aria-label="Phone">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
          </div>
          <p className="footer-note">hand-coded · no templates · zero gradients</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 PAARTHU REDDY. ALL RIGHTS, MOSTLY RESERVED.</span>
        <span>DESIGNED LOUD · BUILT BY HAND.</span>
      </div>
    </footer>
  )
}
