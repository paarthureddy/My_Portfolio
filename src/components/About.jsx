import { useEffect, useRef } from 'react'

const EXP = [
  {
    id: 'exp-tribli',
    role: 'Software Dev Intern',
    at: ' @ ',
    company: 'TRIBLI Deeptech',
    date: 'Apr 2026 — May 2026',
    desc: 'Designed REST APIs · client integration support · API documentation & deployment',
    cls: '',
  },
  {
    id: 'exp-silicon',
    role: 'SDE & Client Mgmt Intern',
    at: ' @ ',
    company: 'SiliconWireless',
    date: 'Apr 2025 — Jun 2025',
    desc: 'Biometric device APIs · facial recognition workflows · firmware testing & validation',
    cls: '',
  },
  {
    id: 'exp-edu',
    role: 'B.Tech — Computer Science Engg.',
    at: '',
    company: '',
    date: '2022 — 2026',
    desc: 'Amrita Vishwa Vidyapeetham, Coimbatore · 7th Semester · CGPA: 7.78',
    cls: ' edu-card',
  },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.reveal')
    if (!items) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    items.forEach((el, i) => { el.style.transitionDelay = `${i * 80}ms`; obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* LEFT */}
      <div className="about-left">
        <span className="section-label">ABOUT ME</span>
        <h2 className="about-heading">
          Builder first.<br />
          <span className="highlight-pink">Problem-solver</span> second.
        </h2>
        <p className="about-text">
          I'm a Computer Science undergrad at Amrita Vishwa Vidyapeetham who builds things
          that actually ship. I obsess over clean architecture, fast APIs, and interfaces
          people don't have to think about.
        </p>
        <p className="about-text">
          Outside the screen: hackathons, caffeine experiments, and a borderline unhealthy
          relationship with terminal windows.
        </p>
        <div className="about-stats">
          {[['7.78','CGPA'],['2+','INTERNSHIPS'],['6+','PROJECTS']].map(([num, label]) => (
            <div className="stat-box reveal" key={label}>
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Experience */}
      <div className="about-right" id="experience">
        <span className="section-label">WORK HISTORY</span>
        <h2 className="exp-heading">The receipts.</h2>

        {EXP.map(e => (
          <div className={`exp-card reveal${e.cls}`} id={e.id} key={e.id}>
            <div className="exp-header">
              <div>
                <span className="exp-role">{e.role}</span>
                {e.at && <span className="exp-at">{e.at}</span>}
                {e.company && <span className="exp-company">{e.company}</span>}
              </div>
              <span className="exp-date">{e.date}</span>
            </div>
            <p className="exp-desc">{e.desc}</p>
          </div>
        ))}

        {/* Certificates card */}
        <a
          href="https://drive.google.com/drive/folders/1pASww7_Y8fSFo9dxm1Uey7jx-p4GNAzr?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="cert-card reveal"
          id="exp-certs"
        >
          <div className="cert-card-inner">
            <div className="cert-icon-wrap">
              <span className="cert-big-icon">🎓</span>
            </div>
            <div className="cert-text">
              <span className="cert-count">5+</span>
              <span className="cert-label">Certificates</span>
              <span className="cert-sub">View all on Google Drive ↗</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
