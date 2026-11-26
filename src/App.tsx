import { useEffect } from 'react'
import './redesign.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Shop from './components/Shop'
import Packages from './components/Packages'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import MouseGlow from './components/MouseGlow'
import ServicePage from './components/ServicePage'

export default function App() {
  useEffect(() => {
    // Keep canonical URLs on the custom domain, never the Vercel deployment hostname.
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = `https://www.jsphotoartist.in${window.location.pathname}`
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (ogUrl) ogUrl.content = `https://www.jsphotoartist.in${window.location.pathname}`

    const loader = document.getElementById('site-loader')
    if (!loader) return
    const timer = window.setTimeout(() => {
      loader.classList.add('site-loader-hidden')
      window.setTimeout(() => loader.remove(), 500)
    }, 1100)
    return () => window.clearTimeout(timer)
  }, [])

  const isServicePage = window.location.pathname.startsWith('/services/')
  if (isServicePage) return <>
    <Header />
    <ServicePage />
    <Footer />
    <WhatsAppFab />
    <MouseGlow />
  </>
  return <>
    <Header />
    <main>
      <Hero />
      <Intro />
      <Services />
      <Packages />
      <Portfolio />
      <Why />
      <Testimonials />
      <Shop />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFab />
    <MouseGlow />
  </>
}
