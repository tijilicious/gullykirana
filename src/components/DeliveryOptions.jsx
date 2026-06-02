import { useState } from 'react'
import './DeliveryOptions.css'

const options = [
  {
    id: 'pickup',
    icon: '🏪',
    badge: 'Free',
    badgeColor: 'green',
    title: 'Self Pickup',
    fee: '₹0',
    feeLabel: 'Always free',
    speed: 'Collect when you like',
    best: 'Passing by the shop, zero cost',
    desc: 'Place the order, walk to the shop, and collect your packed bag — no queue, no wait.',
    detail: 'Your order is ready and packed when you arrive. Perfect for people who pass the shop on their commute or want absolutely zero delivery cost.',
  },
  {
    id: 'bulk',
    icon: '📦',
    badge: 'Best Value',
    badgeColor: 'blue',
    title: 'Bulk Delivery',
    fee: '₹10',
    feeLabel: 'Flat rate',
    speed: 'Twice daily',
    best: 'Planned grocery runs',
    desc: 'Scheduled delivery in two daily batches — the most affordable home delivery option.',
    detail: 'Orders placed between 10 AM–4 PM → delivered same day after 6 PM. Orders placed after 7 PM → delivered next morning. Handled by the shop today; GullyKirana delivery fleet coming soon.',
    highlight: true,
  },
  {
    id: 'instant',
    icon: '⚡',
    badge: 'ASAP',
    badgeColor: 'orange',
    title: 'Instant Delivery',
    fee: 'Distance-based',
    feeLabel: 'Based on distance',
    speed: 'As fast as possible',
    best: 'Urgent needs',
    desc: 'Order now, receive it at your door as quickly as possible.',
    detail: 'Delivery fee scales with the distance between the shop and your location. Ideal for urgent needs — medicine, a forgotten ingredient, or a craving that cannot wait.',
  },
]

export default function DeliveryOptions() {
  const [active, setActive] = useState('bulk')

  const current = options.find(o => o.id === active)

  return (
    <section id="delivery" className="delivery">
      <div className="container">
        <div className="delivery__header">
          <span className="section-label">Delivery</span>
          <h2 className="section-title">Three ways to <span>get your order</span></h2>
          <p className="section-subtitle">Pick what suits the moment — save money or get it fast, the choice is yours.</p>
        </div>

        <div className="delivery__tabs">
          {options.map(o => (
            <button
              key={o.id}
              className={`delivery__tab${active === o.id ? ' delivery__tab--active' : ''}`}
              onClick={() => setActive(o.id)}
            >
              <span className="delivery__tab-icon">{o.icon}</span>
              <span>{o.title}</span>
              <span className={`delivery__tab-badge delivery__tab-badge--${o.badgeColor}`}>{o.badge}</span>
            </button>
          ))}
        </div>

        <div className={`delivery__detail${current.highlight ? ' delivery__detail--highlight' : ''}`}>
          <div className="delivery__detail-left">
            <div className="delivery__detail-icon">{current.icon}</div>
            <h3 className="delivery__detail-title">{current.title}</h3>
            <p className="delivery__detail-desc">{current.detail}</p>
            {current.id === 'bulk' && (
              <div className="delivery__schedule">
                <div className="delivery__schedule-row">
                  <span className="delivery__schedule-time">10 AM – 4 PM order</span>
                  <span className="delivery__schedule-arrow">→</span>
                  <span className="delivery__schedule-result">Delivered after 6 PM today</span>
                </div>
                <div className="delivery__schedule-row">
                  <span className="delivery__schedule-time">After 7 PM order</span>
                  <span className="delivery__schedule-arrow">→</span>
                  <span className="delivery__schedule-result">Delivered next morning</span>
                </div>
              </div>
            )}
          </div>
          <div className="delivery__detail-right">
            <div className="delivery__meta-card">
              <div className="delivery__meta-item">
                <span className="delivery__meta-label">Fee</span>
                <span className="delivery__meta-value">{current.fee}</span>
                <span className="delivery__meta-sub">{current.feeLabel}</span>
              </div>
              <div className="delivery__meta-item">
                <span className="delivery__meta-label">Speed</span>
                <span className="delivery__meta-value delivery__meta-value--sm">{current.speed}</span>
              </div>
              <div className="delivery__meta-item">
                <span className="delivery__meta-label">Best for</span>
                <span className="delivery__meta-value delivery__meta-value--sm">{current.best}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="delivery__compare">
          <h3 className="delivery__compare-title">Quick comparison</h3>
          <div className="delivery__compare-table">
            <div className="delivery__compare-header">
              <span>Option</span><span>Speed</span><span>Fee</span><span>Best for</span>
            </div>
            {options.map(o => (
              <div key={o.id} className={`delivery__compare-row${active === o.id ? ' delivery__compare-row--active' : ''}`} onClick={() => setActive(o.id)}>
                <span><b>{o.icon} {o.title}</b></span>
                <span>{o.speed}</span>
                <span><b>{o.fee}</b></span>
                <span>{o.best}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
