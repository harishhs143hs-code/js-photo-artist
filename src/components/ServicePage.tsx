import { useEffect } from 'react'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { services, site, waLink } from '../data/site'

const details: Record<string, { intro: string; moments: string; price: string; note: string }> = {
  wedding: {
    intro: 'Your wedding day moves quickly. We preserve the rituals, emotions, family blessings and small in-between moments so you can return to them for years to come.',
    moments: 'From traditional ceremony coverage and candid moments to reception photography and wedding films, we plan coverage around your schedule and priorities.',
    price: 'Wedding photography package: ₹40,000',
    note: 'Final package depends on event duration, team, deliverables and album choices.'
  },
  couple: {
    intro: 'Celebrate your story with relaxed couple portraits that feel like you—not stiff poses. We help you choose a comfortable location, simple concepts and natural moments.',
    moments: 'Couple portraits, outdoor sessions, pre-wedding concepts and post-wedding portraits can be planned around your preferred style.',
    price: 'Contact us for a couple or pre-wedding package quote.',
    note: 'Share your date, preferred location and session requirements for a suitable quote.'
  },
  events: {
    intro: 'Family celebrations are full of moments that deserve to be remembered: the people arriving, the rituals, the laughter and the little details.',
    moments: 'We cover birthdays, puberty ceremonies, family functions and special occasions. Birthday event photography packages are listed from ₹7,000.',
    price: 'Birthday Event: ₹7,000',
    note: 'For other events, the quote depends on event type, hours and deliverables.'
  },
  kids: {
    intro: 'Little expressions change in a blink. Our baby and kids photoshoots are planned to preserve each child’s personality—from curious looks and tiny smiles to playful, candid moments.',
    moments: 'Choose an outdoor baby session, indoor baby photoshoot, kids portraits or family portraits. We keep the session child-friendly and allow time for breaks.',
    price: 'Outdoor Baby Photoshoot: ₹7,500 · Indoor Baby Photoshoot: ₹10,000',
    note: 'Baby Shower package: ₹8,000. Maternity package: ₹7,500. Package inclusions should be confirmed before booking.'
  },
  albums: {
    intro: 'Turn your favourite photographs into keepsakes you can hold, share and revisit. We help you bring your memories together in thoughtfully designed albums, prints and photo gifts.',
    moments: 'Ask us about wedding and reception albums, album designing, customized frames, photo gifts and photo printing.',
    price: 'Contact us for album, print and gift pricing.',
    note: 'Pricing varies by size, page count, paper, finish and quantity.'
  }
}

export default function ServicePage() {
  const slug = window.location.pathname.split('/').filter(Boolean).slice(-1)[0] ?? ''
  const service = services.find(item => item.id === slug)
  const detail = details[slug]
  useEffect(() => {
    if (service && detail) {
      document.title = `${service.title} in Thiruninravur | JS Photo Artist`
      const description = document.querySelector('meta[name="description"]')
      description?.setAttribute('content', `${service.title} in Thiruninravur, Tiruvallur. Explore photography services and package information from JS Photo Artist.`)
      const canonical = document.querySelector('link[rel="canonical"]')
      canonical?.setAttribute('href', `https://www.jsphotoartist.in${window.location.pathname}`)
    }
  }, [service, detail])
  if (!service || !detail) return null
  return <main className="min-h-screen bg-paper pt-28 text-ink">
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
      <a href="/#services" className="mb-10 inline-flex items-center gap-2 text-sm underline underline-offset-4"><ArrowLeft size={16}/> All services</a>
      <p className="eyebrow mb-4">JS Photo Artist · Thiruninravur</p>
      <h1 className="max-w-4xl font-display text-display-lg font-medium">{service.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">{detail.intro}</p>
      <section className="mt-12 border-t border-lavender py-8">
        <h2 className="font-display text-3xl">Moments we help you keep</h2>
        <p className="mt-4 max-w-3xl leading-7 text-ink/70">{detail.moments}</p>
      </section>
      <section className="mt-4 border-t border-lavender py-8">
        <h2 className="font-display text-3xl">Package information</h2>
        <p className="mt-4 text-xl font-semibold text-brand">{detail.price}</p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-ink/60">{detail.note}</p>
      </section>
      <div className="mt-8 flex flex-wrap gap-4">
        <a className="btn-solid inline-flex items-center gap-2" href={waLink(`Hello JS Photo Artist, I am interested in ${service.title}. Please share available dates and package details.`)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/> Enquire on WhatsApp</a>
        <a className="border border-ink/20 px-5 py-3 text-sm font-semibold" href="/#services">Explore other services</a>
      </div>
    </div>
  </main>
}
