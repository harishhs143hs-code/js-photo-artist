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
import ServicePage from './components/ServicePage'

export default function App() {
  const isServicePage = window.location.pathname.startsWith('/services/')
  if (isServicePage) return <>
    <Header />
    <ServicePage />
    <Footer />
    <WhatsAppFab />
  </>
  return <>
    <Header />
    <main>
      <Hero />
      <Packages />
      <Intro />
      <Services />
      <Portfolio />
      <Why />
      <Testimonials />
      <Shop />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFab />
  </>
}
