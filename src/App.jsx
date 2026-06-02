import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import DeliveryOptions from './components/DeliveryOptions'
import ForCustomers from './components/ForCustomers'
import ForShopkeepers from './components/ForShopkeepers'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'how-it-works', 'delivery', 'customers', 'shopkeepers', 'pricing', 'contact']
      const scrollY = window.scrollY + 80
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <HowItWorks />
        <DeliveryOptions />
        <ForCustomers />
        <ForShopkeepers />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
