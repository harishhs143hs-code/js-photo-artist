import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Albums from './components/Albums'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Shop from './components/Shop'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return <>
    <Header />
    <main>
      <Hero />
      <Intro />
      <Services />
      <Portfolio />
      <Albums />
      <Why />
      <Testimonials />
      <Shop />
      <Contact />
    </main>
    <Footer />
    <WhatsAppFab />
  </>
}
