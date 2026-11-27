import { useEffect } from 'react'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { services, site, waLink } from '../data/site'

const details: Record<string, { intro: string; moments: string; about: string }> = {
  wedding: {
    intro: 'Your wedding day moves quickly. We preserve the rituals, emotions, family blessings and small in-between moments so you can return to them for years to come.',
    moments: 'From traditional ceremony coverage and candid moments to reception photography and wedding films, we plan coverage around your schedule and priorities.',
    about: 'We plan each wedding around your ceremony timeline, important family moments and the style of photographs and films you want to look back on.'
  },
  couple: {
    intro: 'Celebrate your story with relaxed couple portraits that feel like you—not stiff poses. We help you choose a comfortable location, simple concepts and natural moments.',
    moments: 'Couple portraits, outdoor sessions, pre-wedding concepts and post-wedding portraits can be planned around your preferred style.',
    about: 'We can help shape a relaxed session around your location, preferred mood and ideas, with gentle direction so your portraits feel natural.'
  },
  events: {
    intro: 'Family celebrations are full of moments that deserve to be remembered: the people arriving, the rituals, the laughter and the little details.',
    moments: 'We cover birthdays, puberty ceremonies, family functions and special occasions, capturing the people, traditions and candid moments that make each celebration memorable.',
    about: 'Coverage is planned around the flow of your celebration, from family and guests to meaningful traditions, candid reactions and details.'
  },
  kids: {
    intro: 'Little expressions change in a blink. Our baby and kids photoshoots are planned to preserve each child’s personality—from curious looks and tiny smiles to playful, candid moments.',
    moments: 'Choose an outdoor baby session, indoor baby photoshoot, kids portraits or family portraits. We keep the session child-friendly and allow time for breaks.',
    about: 'Sessions are kept gentle and child-friendly, with time for comfort and breaks. We focus on genuine expressions, playful moments and family connection.'
  },
  albums: {
    intro: 'Turn your favourite photographs into keepsakes you can hold, share and revisit. We help you bring your memories together in thoughtfully designed albums, prints and photo gifts.',
    moments: 'Ask us about wedding and reception albums, album designing, customized frames, photo gifts and photo printing.',
    about: 'We help you select photographs and formats that suit your memories, from thoughtfully arranged albums to printed photographs, frames and personalized keepsakes.'
  }
}

export default function ServicePage() {
  const slug = window.location.pathname.split('/').filter(Boolean).slice(-1)[0] ?? ''
  const service = services.find(item => item.id === slug)
  const detail = details[slug]

  useEffect(() => {
    if (!service || !detail) return
    document.title = `${service.title} in Thiruninravur | JS Photo Artist`
    document.querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', `Book ${service.title.toLowerCase()} in Thiruninravur, Tiruvallur. Explore coverage options, what we capture and how to enquire with JS Photo Artist.`)
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute('href', `https://www.jsphotoartist.in${window.location.pathname}`)
  }, [service, detail])

  if (!service || !detail) return (
    <main className="min-h-screen bg-paper px-5 pt-36 text-ink">
      <div className="mx-auto max-w-3xl py-16">
        <h1 className="font-display text-4xl">Service page not found</h1>
        <p className="mt-4 text-ink/70">Choose a service to learn more about our photography and keepsake options.</p>
        <a className="btn-solid mt-8 inline-flex" href="/#services">View all services</a>
      </div>
    </main>
  )

  return (
    <main className="min-h-screen bg-paper pt-28 text-ink">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <a href="/#services" className="mb-8 inline-flex items-center gap-2 text-sm underline underline-offset-4"><ArrowLeft size={16}/> All services</a>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="eyebrow mb-4">JS Photo Artist · Thiruninravur</p>
            <h1 className="font-display text-display-lg font-medium">{service.title} in Thiruninravur</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70">{detail.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="btn-solid inline-flex items-center gap-2" href={waLink(`Hello JS Photo Artist, I am interested in ${service.title}. Please share your availability and service details.`)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17}/> Enquire on WhatsApp</a>
              <a className="border border-ink/20 px-5 py-3 text-sm font-semibold" href="/#services">Explore other services</a>
            </div>
          </div>
          <figure className="overflow-hidden bg-lavender/20">
            <img src={service.image.src} alt={service.image.alt} className="aspect-[4/5] w-full object-cover" style={{ objectPosition: service.image.pos ?? '50% 50%' }} />
            <figcaption className="px-4 py-3 text-xs uppercase tracking-[0.16em] text-ink/60">{service.title} · JS Photo Artist</figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-8 border-t border-lavender py-10 md:grid-cols-2 md:gap-14">
          <section>
            <h2 className="font-display text-3xl">What we can capture</h2>
            <p className="mt-4 leading-7 text-ink/70">{detail.moments}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.items.map(item => <li key={item} className="border-t border-ink/10 py-3 text-sm">{item}</li>)}
            </ul>
          </section>
          <section className="border-t border-lavender pt-8 md:border-t-0 md:pt-0">
            <h2 className="font-display text-3xl">About this service</h2>
            <p className="mt-4 leading-7 text-ink/70">{detail.about}</p>
            <p className="mt-6 leading-7 text-ink/70">Tell us the occasion, date and the moments you want covered. We’ll help you plan the coverage and explain what is included before you book.</p>
          </section>
        </div>
      </div>
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8" aria-labelledby="service-faq-heading">
        <h2 id="service-faq-heading" className="font-display text-3xl">Frequently asked questions</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article><h3 className="font-semibold">Where do you provide {service.title.toLowerCase()}?</h3><p className="mt-2 leading-7 text-ink/80">JS Photo Artist is based in Thiruninravur, Tamil Nadu. Share your venue and event date so we can confirm availability and travel arrangements.</p></article>
          <article><h3 className="font-semibold">How do I get a quotation?</h3><p className="mt-2 leading-7 text-ink/80">Send us your event type, date, location and preferred coverage on WhatsApp. We’ll confirm the suitable package, inclusions and final quotation before you book.</p></article>
          <article><h3 className="font-semibold">Can I request a custom package?</h3><p className="mt-2 leading-7 text-ink/80">Tell us which moments you want covered and whether you need photography, videography, albums or prints. We can discuss available options.</p></article>
          <article><h3 className="font-semibold">How early should I enquire?</h3><p className="mt-2 leading-7 text-ink/80">Enquire as soon as you know your date. Availability depends on the event schedule, so your date is needed to confirm a booking.</p></article>
        </div>
      </section>
    </main>
  )
}
