import { useEffect, useRef } from 'react'

const SKILL_CATS = [
  {
    title: 'Languages',
    tags: [
      { label: 'Python', cls: 'yellow-tag' }, { label: 'C++', cls: 'black-tag' },
      { label: 'JavaScript', cls: 'green-tag' }, { label: 'TypeScript', cls: 'white-tag' },
      { label: 'SQL', cls: 'yellow-tag' }, { label: 'HTML5 / CSS3', cls: 'pink-tag' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    tags: [
      { label: 'React.js', cls: 'green-tag' }, { label: 'Node.js', cls: 'black-tag' },
      { label: 'Express.js', cls: 'yellow-tag' }, { label: 'FastAPI', cls: 'pink-tag' },
      { label: 'Socket.IO', cls: 'white-tag' }, { label: 'Next.js', cls: 'black-tag' },
      { label: 'Tailwind CSS', cls: 'green-tag' }, { label: 'GraphQL', cls: 'yellow-tag' },
    ],
  },
  {
    title: 'Databases',
    tags: [
      { label: 'MongoDB', cls: 'green-tag' }, { label: 'PostgreSQL', cls: 'yellow-tag' },
      { label: 'Redis', cls: 'pink-tag' }, { label: 'Firebase', cls: 'white-tag' },
    ],
  },
  {
    title: 'Tools & Platforms',
    tags: [
      { label: 'Git / GitHub', cls: 'black-tag' }, { label: 'Docker', cls: 'white-tag' },
      { label: 'Linux', cls: 'yellow-tag' }, { label: 'Postman', cls: 'pink-tag' },
      { label: 'AWS / GCP', cls: 'green-tag' }, { label: 'Kubernetes', cls: 'black-tag' },
    ],
  },
  {
    title: 'Domains',
    tags: [
      { label: 'Full-Stack Dev', cls: 'green-tag' }, { label: 'Machine Learning', cls: 'yellow-tag' },
      { label: 'REST APIs', cls: 'white-tag' }, { label: 'IoT / Edge', cls: 'pink-tag' },
      { label: 'DSA', cls: 'black-tag' }, { label: 'System Design', cls: 'green-tag' },
    ],
  },
]

const ACHIEVEMENTS = [
  { id: 'ach-1', icon: '🏆', title: 'AIverse Hackathon — Finalist', desc: 'Anokha 2026 · RAG-based AI for funding decision simulation', cls: '' },
  { id: 'ach-2', icon: '🥉', title: 'Hack101 Hackathon — 3rd Place', desc: 'Top team · real-world engineering challenges via rapid prototyping', cls: '' },
  { id: 'ach-3', icon: '🌟', title: 'Procession Head — 1st Place', desc: 'CSE Dept. Gokulashtami · led planning & execution across multiple teams', cls: '' },
  { id: 'ach-4', icon: '🎙️', title: 'MUN — Honorable Mention', desc: 'Represented Revanth Reddy · proposed NITI Aayog + UN SDG reforms', cls: '' },
  { id: 'ach-more', icon: '✨', title: 'Many More...', desc: 'Workshops · certifications · leadership events & community contributions still coming.', cls: ' ach-more' },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.reveal')
    if (!items) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    items.forEach((el, i) => { el.style.transitionDelay = `${i * 70}ms`; obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="skills-inner">
        <div className="skills-header">
          <span className="section-label">THE STACK</span>
          <h2 className="skills-heading">
            What I build <span className="highlight-yellow">with</span>.
          </h2>
        </div>

        <div className="skills-categories">
          {SKILL_CATS.map(cat => (
            <div className="skill-category reveal" key={cat.title}>
              <h3 className="skill-cat-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.tags.map(t => (
                  <span key={t.label} className={`skill-tag ${t.cls}`}>{t.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="achievements-block">
          <span className="section-label">ACHIEVEMENTS</span>
          <div className="achievements-grid">
            {ACHIEVEMENTS.map(a => (
              <div className={`achievement-card reveal${a.cls}`} id={a.id} key={a.id}>
                <div className="ach-icon">{a.icon}</div>
                <div>
                  <strong>{a.title}</strong>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
