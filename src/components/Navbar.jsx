import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    if (location.pathname !== '/') {
      navigate(`/#${id}`)
    } else {
      if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goHome = () => {
    if (location.pathname !== '/') navigate('/')
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-logo" onClick={goHome}>
          <span className="logo-star">✶</span>
          <span className="logo-name">PAARTHU REDDY</span>
        </div>

        <nav className="nav-links">
          {['work','about','skills','experience'].map(id => (
            <a key={id} href={`/#${id}`} onClick={e => handleNavClick(e, id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <Link to="/resume" onClick={() => setMobileOpen(false)}>
            Resume
          </Link>
          <a href="/#contact" onClick={e => handleNavClick(e, 'contact')} className="nav-contact-btn">
            Contact
          </a>
        </nav>

        <a href="/#contact" className="hire-btn" onClick={e => handleNavClick(e, 'contact')}>
          HIRE ME
        </a>
        <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">☰</button>
      </header>

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {['home','work','about','skills','experience','contact'].map(id => (
          <a key={id} href={`/#${id}`} onClick={e => handleNavClick(e, id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <Link to="/resume" onClick={() => setMobileOpen(false)}>
          Resume
        </Link>
      </div>
    </>
  )
}
