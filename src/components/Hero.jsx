import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="hero__bg-circles">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
        <div className="circle circle-3" />
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <div className="tag-badge">
            <span>🌿</span> Neighbourhood First
          </div>
          <h1 className="hero__title">
            Quick commerce,<br />
            from your own <span>neighbourhood.</span>
          </h1>
          <p className="hero__subtitle">
            GullyKirana connects you to the shops you already know and trust —
            not faceless dark stores. Same convenience, half the cost, all the trust.
          </p>
          <div className="hero__actions">
            <button className="btn-primary" onClick={() => scrollTo('how-it-works')}>
              See How It Works →
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              List Your Shop
            </button>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">₹0</span>
              <span className="hero__stat-label">Self Pickup</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">₹10</span>
              <span className="hero__stat-label">Bulk Delivery</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">3</span>
              <span className="hero__stat-label">Delivery Options</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__phone-mockup">
            <div className="phone__screen">
              <div className="phone__header">
                <span className="phone__logo">🥬 GullyKirana</span>
                <span className="phone__location">📍 Sector 14</span>
              </div>
              <div className="phone__search">🔍 Search groceries…</div>
              <div className="phone__shops-label">Shops near you</div>
              {[
                { name: 'Sharma General Store', dist: '120m', tag: '⚡ Open' },
                { name: 'Ravi Kirana', dist: '200m', tag: '🟢 Open' },
                { name: 'Gupta Medical', dist: '350m', tag: '🟢 Open' },
              ].map((s) => (
                <div className="phone__shop-card" key={s.name}>
                  <div className="phone__shop-icon">🏪</div>
                  <div className="phone__shop-info">
                    <div className="phone__shop-name">{s.name}</div>
                    <div className="phone__shop-meta">{s.dist} away &nbsp;·&nbsp; {s.tag}</div>
                  </div>
                </div>
              ))}
              <div className="phone__delivery-row">
                <span className="phone__delivery-chip">📦 Free pickup</span>
                <span className="phone__delivery-chip">🚲 ₹10 delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
