import './ForCustomers.css'

const benefits = [
  { icon: '🏪', title: 'Shops you already trust', desc: 'Order from the actual shop down your street — not an anonymous warehouse.' },
  { icon: '💚', title: 'Support local', desc: 'Every order directly empowers a neighbourhood shopkeeper.' },
  { icon: '💰', title: '₹0–₹10 delivery', desc: 'Far lower delivery costs than any other quick-commerce app.' },
  { icon: '🏷️', title: 'Local offers & discounts', desc: 'Exclusive deals run by your neighbourhood shops, just for you.' },
  { icon: '📱', title: 'Order from home', desc: 'Browse, add to cart, and choose delivery — all without stepping out.' },
  { icon: '⭐', title: 'Rate & build trust', desc: 'Ratings keep quality high and help your community find the best shops.' },
]

export default function ForCustomers() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="customers" className="for-customers">
      <div className="container">
        <div className="for-customers__layout">
          <div className="for-customers__left">
            <span className="section-label">For Customers</span>
            <h2 className="section-title">Shop local,<br /><span>delivered fast</span></h2>
            <p className="section-subtitle">
              Everything you love about your neighbourhood shop — now with the convenience of home delivery or a ready-packed pickup. No faceless warehouses, no inflated fees.
            </p>
            <div className="for-customers__journey">
              <h3 className="for-customers__journey-title">Your journey</h3>
              {[
                'Browse nearby shops and see live products',
                'View offers, prices, and stock availability',
                'Choose a delivery mode that suits the moment',
                'Track your order and rate the shop',
              ].map((step, i) => (
                <div className="journey-step" key={i}>
                  <span className="journey-step__dot" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <button className="btn-primary" onClick={() => scrollTo('delivery')}>
              Explore Delivery Options →
            </button>
          </div>

          <div className="for-customers__right">
            {benefits.map(b => (
              <div className="benefit-card card" key={b.title}>
                <span className="benefit-card__icon">{b.icon}</span>
                <div>
                  <h4 className="benefit-card__title">{b.title}</h4>
                  <p className="benefit-card__desc">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
