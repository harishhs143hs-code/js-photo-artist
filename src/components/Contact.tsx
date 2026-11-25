import { useEffect, useState, type FormEvent } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Clock, Star } from 'lucide-react'
import { services, site, waLink } from '../data/site'
import Reveal from '../lib/Reveal'

type Values = { name: string; phone: string; email: string; service: string; date: string; location: string; message: string }
const empty: Values = { name: '', phone: '', email: '', service: '', date: '', location: '', message: '' }
const field = 'w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-[0.95rem] placeholder:text-ink/40 focus:border-brand focus:outline-none focus:ring-0'

export default function Contact() {
  const [v, setV] = useState<Values>(empty)
  const [err, setErr] = useState<Partial<Record<keyof Values, string>>>({})

  useEffect(() => {
    const on = (e: Event) => setV((p) => ({ ...p, service: (e as CustomEvent<string>).detail }))
    window.addEventListener('prefill-service', on)
    return () => window.removeEventListener('prefill-service', on)
  }, [])

  const set = (k: keyof Values) => (e: { target: { value: string } }) => setV((p) => ({ ...p, [k]: e.target.value }))

  const validate = () => {
    const e: typeof err = {}
    if (v.name.trim().length < 2) e.name = 'Please enter your name.'
    if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a valid phone number (at least 10 digits).'
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email address.'
    if (!v.service) e.service = 'Please choose an event or service type.'
    setErr(e)
    return Object.keys(e).length === 0
  }

  const summary = () =>
    `Hello JS Photo Artist, I would like to enquire.\nName: ${v.name}\nPhone: ${v.phone}${v.email ? `\nEmail: ${v.email}` : ''}\nService: ${v.service}${v.date ? `\nEvent date: ${v.date}` : ''}${v.location ? `\nLocation: ${v.location}` : ''}${v.message ? `\nMessage: ${v.message}` : ''}`

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    window.location.href = waLink(summary())
  }

  const E = ({ k }: { k: keyof Values }) => err[k] ? <p id={`${k}-e`} className="mt-1 text-xs text-red-700">{err[k]}</p> : null
  const aria = (k: keyof Values) => ({ 'aria-invalid': !!err[k], 'aria-describedby': err[k] ? `${k}-e` : undefined })

  return (
    <section id="contact" aria-labelledby="contact-h" className="border-t border-lavender">
      <div className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Contact</p>
            <h2 id="contact-h" className="font-display text-display-lg font-medium">Let's plan <em className="font-normal text-brand">your day.</em></h2>
            <ul className="mt-10 space-y-5 text-[0.95rem]">
              <li className="flex gap-4"><MapPin className="mt-0.5 shrink-0 text-brand" size={20} /><address className="not-italic leading-relaxed">{site.address}</address></li>
              <li className="flex gap-4"><Phone className="shrink-0 text-brand" size={20} /><a href={site.phoneHref} className="hover:text-brand">{site.phone}</a></li>
              <li className="flex gap-4"><Mail className="shrink-0 text-brand" size={20} /><a href={`mailto:${site.email}`} className="break-all hover:text-brand">{site.email}</a></li>
              <li className="flex gap-4"><Clock className="mt-0.5 shrink-0 text-brand" size={20} /><span>{site.hours}</span></li>
              <li className="flex gap-4"><Star className="shrink-0 fill-amber-400 text-amber-500" size={20} /><span><strong>{site.googleRating}/5</strong> · {site.googleReviewCount} Google reviews<br /><a href={site.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-4 hover:text-plum">View Google Business Profile</a></span></li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink(site.defaultWa)} target="_blank" rel="noopener noreferrer" className="btn-solid"><MessageCircle size={16} /> WhatsApp</a>
              <a href={site.phoneHref} className="btn border border-brand text-brand hover:bg-brand hover:text-white">Call now</a>
            </div>
            <div className="mt-10 overflow-hidden bg-lavender">
              <iframe title="JS Photo Artist location on Google Maps" src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-64 w-full border-0 sm:h-72" />
            </div>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block border-b border-brand pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand hover:text-plum">Get Directions</a>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <form onSubmit={submit} noValidate className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              <h3 className="font-display text-display-md sm:col-span-2">Send an enquiry</h3>
              <div><label htmlFor="name" className="sr-only">Name</label><input id="name" autoComplete="name" placeholder="Name *" className={field} value={v.name} onChange={set('name')} {...aria('name')} /><E k="name" /></div>
              <div><label htmlFor="phone" className="sr-only">Phone</label><input id="phone" type="tel" autoComplete="tel" placeholder="Phone *" className={field} value={v.phone} onChange={set('phone')} {...aria('phone')} /><E k="phone" /></div>
              <div><label htmlFor="email" className="sr-only">Email</label><input id="email" type="email" autoComplete="email" placeholder="Email" className={field} value={v.email} onChange={set('email')} {...aria('email')} /><E k="email" /></div>
              <div>
                <label htmlFor="service" className="sr-only">Event or service type</label>
                <select id="service" className={field} value={v.service} onChange={set('service')} {...aria('service')}>
                  <option value="">Event / service type *</option>
                  {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                  <option value="Other">Other</option>
                </select><E k="service" />
              </div>
              <div><label htmlFor="date" className="sr-only">Event date</label><input id="date" type="date" aria-label="Event date" className={field} value={v.date} onChange={set('date')} /></div>
              <div><label htmlFor="location" className="sr-only">Location</label><input id="location" placeholder="Event location" className={field} value={v.location} onChange={set('location')} /></div>
              <div className="sm:col-span-2"><label htmlFor="message" className="sr-only">Message</label><textarea id="message" rows={4} placeholder="Tell us about your occasion" className={field} value={v.message} onChange={set('message')} /></div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-solid">Continue to WhatsApp</button>
                <p className="sm:col-span-2 mt-3 text-sm text-ink/60">Your details will be added to a WhatsApp message. Review it and tap Send to submit your enquiry.</p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
