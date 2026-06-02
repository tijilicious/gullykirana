import { useState } from 'react'
import './Contact.css'

const shopTypes = ['Groceries', 'Daily Needs', 'Pharmacy', 'Fruits & Vegetables', 'Dairy', 'Other']
const contactTimes = ['Morning (9 AM – 12 PM)', 'Afternoon (12 PM – 4 PM)', 'Evening (4 PM – 8 PM)']

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '', shopName: '', phone: '', email: '',
    location: '', shopType: '', message: '', contactTime: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Required'
    if (!form.shopName.trim()) e.shopName = 'Required'
    if (!/^\+?[\d\s-]{10,}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.location.trim()) e.location = 'Required'
    if (!form.shopType) e.shopType = 'Required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitted(true)
  }

  const set = (k) => (e) => {
    setForm(f => ({ ...f, [k]: e.target.value }))
    setErrors(er => ({ ...er, [k]: undefined }))
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__left">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">List your shop on<br /><span>GullyKirana</span></h2>
            <p className="section-subtitle">
              Are you a local shopkeeper ready to reach more customers? Fill out the form and our team will get back to you within 24–48 hours.
            </p>
            <div className="contact__perks">
              {[
                { icon: '⚡', text: 'Quick onboarding — list products in under 30 minutes' },
                { icon: '📞', text: 'Dedicated support from our team' },
                { icon: '🆓', text: 'No upfront cost to get started' },
              ].map(p => (
                <div className="contact__perk" key={p.text}>
                  <span>{p.icon}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact__right">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">🎉</span>
                <h3>Thanks for reaching out!</h3>
                <p>Our team will contact you within <strong>24–48 hours</strong>.</p>
                <button className="btn-outline" onClick={() => setSubmitted(false)}>Submit another</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input type="text" value={form.fullName} onChange={set('fullName')} placeholder="Ramesh Kumar" />
                    {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                  </div>
                  <div className="form-field">
                    <label>Shop Name *</label>
                    <input type="text" value={form.shopName} onChange={set('shopName')} placeholder="Ramesh General Store" />
                    {errors.shopName && <span className="form-error">{errors.shopName}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Phone Number *</label>
                    <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 98765 43210" />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                  <div className="form-field">
                    <label>Email Address</label>
                    <input type="email" value={form.email} onChange={set('email')} placeholder="optional" />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Shop Location / Area *</label>
                    <input type="text" value={form.location} onChange={set('location')} placeholder="Sector 14, Gurgaon" />
                    {errors.location && <span className="form-error">{errors.location}</span>}
                  </div>
                  <div className="form-field">
                    <label>Type of Shop *</label>
                    <select value={form.shopType} onChange={set('shopType')}>
                      <option value="">Select type…</option>
                      {shopTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.shopType && <span className="form-error">{errors.shopType}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label>Message / Query</label>
                  <textarea value={form.message} onChange={set('message')} rows={3} placeholder="Any questions or additional details…" />
                </div>

                <div className="form-field">
                  <label>Preferred Contact Time</label>
                  <select value={form.contactTime} onChange={set('contactTime')}>
                    <option value="">Any time</option>
                    {contactTimes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <button type="submit" className="btn-primary contact__submit">
                  Submit — We'll call you back →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
