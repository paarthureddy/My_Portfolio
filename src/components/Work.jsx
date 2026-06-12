import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    id: 'project-canvas',
    color: 'card-green',
    tag: 'REAL-TIME · WEB APP',
    title: 'Digital Collaborative Canvas',
    preview: 'green-preview',
    image: '/hive_board.png',
    initials: 'DC',
    desc: 'Real-time collaborative whiteboard with live drawing sync, multi-user sessions, and persistent canvas storage. Built with Socket.IO + TypeScript + MongoDB.',
    link: 'https://github.com/paarthureddy',
  },
  {
    id: 'project-phishing',
    color: 'card-yellow',
    tag: 'CYBERSECURITY · ML',
    title: 'Cyber Phishing Detection Platform',
    preview: 'yellow-preview',
    initials: 'CP',
    desc: 'Phishing website detection using Random Forest Classifier, URL feature extraction, SHA-256 hashing and CIA Triad principles. Real-time threat analysis engine.',
    link: 'https://github.com/paarthureddy',
  },
  {
    id: 'project-tribli',
    color: 'card-pink',
    tag: 'ENTERPRISE · FULLSTACK',
    title: 'Workflow Automation Platform',
    preview: 'pink-preview',
    image: '/poc_wbce.png',
    initials: 'WA',
    desc: 'PoC workflow automation platform for Tribli Deeptech — managing client interactions, task assignments, and business process execution with RESTful backend services.',
    link: 'https://github.com/paarthureddy',
  },
  {
    id: 'project-rag',
    color: 'card-dark',
    tag: 'AI · HACKATHON',
    title: 'RAG Funding Decision AI',
    preview: 'dark-preview',
    image: '/rag_castesearch.png',
    initials: 'AI',
    desc: 'Retrieval-Augmented Generation AI system for funding decision simulation with explainable recommendations. Finalist at AIverse Hackathon, Anokha 2026.',
    link: 'https://github.com/paarthureddy',
  },
  {
    id: 'project-biometric',
    color: 'card-green',
    tag: 'IoT · BACKEND · SECURITY',
    title: 'Biometric Auth Backend System',
    preview: 'green-preview',
    initials: 'BA',
    desc: 'Developed and integrated APIs for biometric devices — facial recognition, fingerprint authentication, and secure firmware communication for SiliconWireless devices.',
    link: 'https://github.com/paarthureddy',
  },
  {
    id: 'project-profile',
    color: 'card-yellow',
    tag: 'FULLSTACK · INTERNAL TOOL',
    title: 'Profile Search & Client Portal',
    preview: 'yellow-preview',
    initials: 'PS',
    desc: 'Internal profile search and client management portal — RESTful APIs, search indexing, and a clean React UI for managing business interactions at Tribli Deeptech.',
    link: 'https://github.com/paarthureddy',
  },
]

export default function Work() {
  const gridRef = useRef(null)

  // Scroll-reveal
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.work-card')
    if (!cards) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    cards.forEach(c => { c.classList.add('reveal'); observer.observe(c) })
    return () => observer.disconnect()
  }, [])

  // Ripple effect on click
  const handleRipple = (e, card) => {
    const rect = card.getBoundingClientRect()
    const ripple = document.createElement('span')
    ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,230,0,0.4);
      width:10px;height:10px;left:${e.clientX - rect.left - 5}px;top:${e.clientY - rect.top - 5}px;
      transform:scale(0);animation:ripple 0.5s ease-out forwards;pointer-events:none;`
    card.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
  }

  return (
    <section className="work-section" id="work">
      <div className="section-label-row">
        <span className="section-label">SELECTED WORK — 2024 / 2026</span>
      </div>

      <div className="work-header">
        <div className="work-heading-left">
          <h2 className="work-heading">
            Stuff I built that<br />
            actually shipped<br />
            <span className="highlight-pink">&amp; worked</span>.
          </h2>
        </div>
        <div className="work-heading-right">
          <p>Five picks from the last two years. Each one solved a real problem — or at least made a recruiter say "ooh that's nice."</p>
        </div>
      </div>

      <div className="work-grid" ref={gridRef}>
        {PROJECTS.map(p => (
          <a
            key={p.id}
            id={p.id}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className={`work-card ${p.color}`}
            onClick={e => handleRipple(e, e.currentTarget)}
          >
            <div className="work-card-tag">{p.tag}</div>
            <h3 className="work-card-title">{p.title}</h3>
            <div className={`work-card-preview ${p.preview}`} style={p.image ? { padding: 0, overflow: 'hidden' } : {}}>
              {p.image ? (
                <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span className="preview-initials">{p.initials}</span>
              )}
            </div>
            <p className="work-card-desc">{p.desc}</p>
            <div className="card-arrow-btn" aria-label="View on GitHub">↗</div>
          </a>
        ))}
      </div>
    </section>
  )
}
