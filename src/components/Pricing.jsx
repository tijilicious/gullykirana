import './Pricing.css'

const rows = [
  { label: 'Self Pickup', value: '₹0', sub: 'Always free', icon: '🏪', highlight: false },
  { label: 'Bulk Delivery', value: '₹10', sub: 'Flat rate, twice daily', icon: '📦', highlight: true },
  { label: 'Instant Delivery', value: 'Distance-based', sub: 'Scales with distance', icon: '⚡', highlight: false },
  { label: 'Listing products (shopkeeper)', value: 'TBD', sub: 'Coming soon', icon: '📋', highlight: false },
  { label: 'Running offers / marketing', value: 'TBD', sub: 'Coming soon', icon: '📣', highlight: false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing__header">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Clear, honest <span>pricing</span></h2>
          <p className="section-subtitle">
            No hidden fees. No surprises. The lowest delivery costs you'll find anywhere.
          </p>
        </div>

        <div className="pricing__table">
          {rows.map(r => (
            <div key={r.label} className={`pricing__row${r.highlight ? ' pricing__row--highlight' : ''}`}>
              <div className="pricing__row-left">
                <span className="pricing__row-icon">{r.icon}</span>
                <div>
                  <div className="pricing__row-label">{r.label}</div>
                  <div className="pricing__row-sub">{r.sub}</div>
                </div>
              </div>
              <div className="pricing__row-value">{r.value}</div>
            </div>
          ))}
        </div>

        <p className="pricing__note">
          * Shopkeeper commission and marketing fees are being finalised. We'll always be transparent about what you pay.
        </p>
      </div>
    </section>
  )
}
