import './HowItWorks.css'

const steps = [
  { num: '01', icon: '🗺️', title: 'Browse nearby shops', desc: 'Open GullyKirana and see products listed by shops within your neighbourhood.' },
  { num: '02', icon: '🛒', title: 'Add to cart', desc: 'Pick items from one or more nearby shops — all in a single cart.' },
  { num: '03', icon: '🚚', title: 'Choose delivery mode', desc: 'Free pickup, scheduled bulk delivery at ₹10, or instant delivery — your call.' },
  { num: '04', icon: '📦', title: 'Shopkeeper packs it', desc: 'Your trusted local shopkeeper receives the order and gets it ready.' },
  { num: '05', icon: '⭐', title: 'Receive & rate', desc: 'Get your order and share a quick rating for the shop.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <span className="section-label">The Process</span>
          <h2 className="section-title">How <span>GullyKirana</span> works</h2>
          <p className="section-subtitle">
            Five simple steps from craving to doorstep — powered by the shops you already trust.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((s, i) => (
            <div className="step" key={s.num}>
              <div className="step__connector" />
              <div className="step__bubble">
                <span className="step__num">{s.num}</span>
                <span className="step__icon">{s.icon}</span>
              </div>
              <div className="step__body">
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
