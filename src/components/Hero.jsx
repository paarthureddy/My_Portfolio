import './Hero.css'

/* ─── Combined Info & Photo Card ─── */
function InfoCard() {
  return (
    <div className="hero-info-card">
      <div className="terminal-header">
        <span className="t-dot t-red" /><span className="t-dot t-yellow" /><span className="t-dot t-green" />
        <span className="t-title">~/about</span>
      </div>
      
      <div className="hero-card-content">
        <div className="hero-profile-photo">
          <img src="/assets/paarthu.png" alt="Paarthu Reddy" />
          <div className="photo-badge">👨‍💻 Paarthu Reddy</div>
        </div>
        
        <div className="terminal-body">
          <div className="t-line"><span className="t-key">name:</span>  <span className="t-val">"Paarthu Reddy"</span></div>
          <div className="t-line"><span className="t-key">role:</span>  <span className="t-val">"Full-Stack Developer"</span></div>
          <div className="t-line"><span className="t-key">based:</span> <span className="t-val">"Hyderabad / Remote"</span></div>
          <div className="t-line"><span className="t-key">edu:</span>   <span className="t-val">"B.Tech CSE @ Amrita"</span></div>
          <div className="t-line"><span className="t-key">experience:</span> <span className="t-val">"2+ Internships"</span></div>
          <div className="t-line"><span className="t-key">status:</span>  <span className="t-val">"Open to Internships"</span></div>
          <div className="t-cursor">▌</div>
        </div>
      </div>
      
      <div className="terminal-footer-badge">✶ OPEN TO WORK</div>
    </div>
  )
}



export default function Hero() {

  return (
    <section className="hero hero-v2" id="home">

      {/* ── Decorative stars ── */}
      <div className="hero-deco star-top-left">★</div>

      {/* ══════════════ LEFT — Headline ══════════════ */}
      <div className="hero-left">

        <div className="availability-badge">
          <span className="badge-dot" />
          AVAILABLE FOR WORK — 2026
        </div>

        <h1 className="hero-heading hero-heading-xl">
          Hey, I'm Paarthu.<br />
          I build things.
        </h1>

        <p className="hero-sub">
          Full-stack developer &amp; CS undergrad obsessed with building scalable
          systems, shipping fast, and making things that actually work.{' '}
          <span className="underline-pink">No half-baked prototypes.</span>
        </p>

        <div className="hero-btns">
          <a href="#work"    className="btn-primary"   onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}>VIEW MY WORK →</a>
          <a href="#contact" className="btn-secondary"  onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>GET IN TOUCH</a>
        </div>

        <div className="hero-trust">
          <div className="trust-dots">
            <span className="dot dot-yellow" /><span className="dot dot-pink" /><span className="dot dot-green" />
          </div>
          <p><strong>2+ internships shipped.</strong> <span className="text-pink">From startup to product.</span></p>
        </div>
      </div>

      {/* ══════════════ RIGHT — Drone + materialised card ══════════════ */}
      <div className="hero-right hero-right-v2">

        <InfoCard />
      </div>

    </section>
  )
}
