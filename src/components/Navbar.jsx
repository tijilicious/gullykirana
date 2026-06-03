import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'customers', label: 'For Customers' },
  { id: 'shopkeepers', label: 'For Shopkeepers' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => scrollTo('home')}>
          <img src="/gullykirana/logo.jpeg" alt="GullyKirana" className="navbar__logo-img" />
          <span className="navbar__logo-text">GullyKirana</span>
        </button>

        <nav className="navbar__links">
          {links.map(l => (
            <button
              key={l.id}
              className={`navbar__link${activeSection === l.id ? ' navbar__link--active' : ''}`}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button className="navbar__cta btn-primary" onClick={() => scrollTo('contact')}>
          Join as Shopkeeper
        </button>

        <button className="navbar__hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-menu">
          {links.map(l => (
            <button key={l.id} className="navbar__mobile-link" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
          <button className="btn-primary" onClick={() => scrollTo('contact')}>Join as Shopkeeper</button>
        </div>
      )}
    </header>
  )
}
