import './ForShopkeepers.css'

const features = [
  { icon: '📋', title: 'List your products', desc: 'Add products with prices, photos, units, and live stock availability.' },
  { icon: '🏷️', title: 'Run offers & promotions', desc: 'Launch discounts, seasonal deals, and featured listings to attract more customers.' },
  { icon: '📊', title: 'One dashboard', desc: 'Manage orders across all three delivery modes from a single clean interface.' },
  { icon: '📍', title: 'Set your service area', desc: 'Define your delivery radius and pickup-ready times to stay in control.' },
  { icon: '🚲', title: 'Flexible deliveries', desc: 'Handle bulk deliveries yourself today; GullyKirana\'s fleet takes over as we grow.' },
  { icon: '📣', title: 'Market yourself', desc: 'Featured listings and promotions put your shop in front of more neighbours.' },
]

const reasons = [
  'Reach customers beyond your physical footfall',
  'Compete with big quick-commerce players on equal footing',
  'Keep loyal customers while gaining new ones online',
  'No need to invest in your own app or website',
]

export default function ForShopkeepers() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="shopkeepers" className="for-shopkeepers">
      <div className="container">
        <div className="for-shopkeepers__header">
          <span className="section-label">For Shopkeepers</span>
          <h2 className="section-title">Grow your shop,<br /><span>reach more neighbours</span></h2>
          <p className="section-subtitle">
            GullyKirana works like any marketplace — you stay in full control of your storefront while we bring customers to your door.
          </p>
        </div>

        <div className="for-shopkeepers__layout">
          <div className="for-shopkeepers__features">
            {features.map(f => (
              <div className="shop-feature card" key={f.title}>
                <span className="shop-feature__icon">{f.icon}</span>
                <h4 className="shop-feature__title">{f.title}</h4>
                <p className="shop-feature__desc">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="for-shopkeepers__why">
            <div className="why-card">
              <h3 className="why-card__title">Why join GullyKirana?</h3>
              <div className="why-card__list">
                {reasons.map((r, i) => (
                  <div className="why-card__item" key={i}>
                    <span className="why-card__check">✓</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                Register Your Shop →
              </button>
            </div>

            <div className="shop-stat-card">
              <div className="shop-stat">
                <span className="shop-stat__icon">🛒</span>
                <div>
                  <div className="shop-stat__value">More orders</div>
                  <div className="shop-stat__label">Beyond walk-in footfall</div>
                </div>
              </div>
              <div className="shop-stat">
                <span className="shop-stat__icon">💸</span>
                <div>
                  <div className="shop-stat__value">Better margins</div>
                  <div className="shop-stat__label">No dark-store middlemen</div>
                </div>
              </div>
              <div className="shop-stat">
                <span className="shop-stat__icon">📱</span>
                <div>
                  <div className="shop-stat__value">Zero tech cost</div>
                  <div className="shop-stat__label">We provide the platform</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
