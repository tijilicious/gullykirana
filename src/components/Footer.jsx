import './Footer.css'

const links = [
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Delivery Options', id: 'delivery' },
  { label: 'For Customers', id: 'customers' },
  { label: 'For Shopkeepers', id: 'shopkeepers' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Contact', id: 'contact' },
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <button className="footer__logo" onClick={() => scrollTo('home')}>
            <span>🥬</span> GullyKirana
          </button>
          <p className="footer__tagline">Quick commerce, from your own neighbourhood.</p>
          <p className="footer__mission">
            Our mission: empower local shopkeepers and give customers the convenience they deserve — without the price tag.
          </p>
        </div>

        <div className="footer__nav">
          <h4 className="footer__nav-title">Navigation</h4>
          {links.map(l => (
            <button key={l.id} className="footer__link" onClick={() => scrollTo(l.id)}>
              {l.label}
            </button>
          ))}
        </div>

        <div className="footer__contact-info">
          <h4 className="footer__nav-title">Get in touch</h4>
          <p>Are you a shopkeeper? We'd love to have you on board.</p>
          <button className="btn-primary footer__cta" onClick={() => scrollTo('contact')}>
            Register your shop
          </button>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2025 GullyKirana. All rights reserved.</span>
          <span>Made with 💚 for neighbourhood shops everywhere.</span>
        </div>
      </div>
    </footer>
  )
}
