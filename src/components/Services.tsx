import { services, site, waLink, type ServiceGroup } from '../data/site'
import Reveal from '../lib/Reveal'

function Links({ s, dark }: { s: ServiceGroup; dark?: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em]">
      <a href={waLink(`Hello JS Photo Artist, I would like to enquire about ${s.title.toLowerCase()}. Please share more details.`)} target="_blank" rel="noopener noreferrer"
        className={dark ? 'btn-light' : 'btn-solid'}>Enquire on WhatsApp</a>
      <a href="#contact" onClick={() => window.dispatchEvent(new CustomEvent('prefill-service', { detail: s.title }))}
        className={`border-b pb-1 ${dark ? 'border-white/60 hover:border-white' : 'border-brand text-brand hover:text-plum'}`}>Use enquiry form</a>
    </div>
  )
}

function Group({ s, i }: { s: ServiceGroup; i: number }) {
  const dark = i === services.length - 1
  const num = String(i + 1).padStart(2, '0')
  const list = (
    <ul className={`mt-8 grid max-w-xl gap-x-8 sm:grid-cols-2 ${dark ? 'text-white/85' : 'text-ink/80'}`}>
      {s.items.map((it) => (
        <li key={it} className={`border-t py-3 text-[0.95rem] ${dark ? 'border-white/20' : 'border-ink/10'}`}>{it}</li>
      ))}
    </ul>
  )
  const text = (
    <Reveal className="md:col-span-10 md:col-start-2">
      <span className={`font-display text-6xl ${dark ? 'text-violet' : 'text-lavender'}`}>{num}</span>
      <h3 className="mt-2 max-w-[18ch] font-display text-display-md font-medium">{s.title}</h3>
      <p className={`mt-4 max-w-sm ${dark ? 'text-white/70' : 'text-ink/65'}`}>{s.blurb}</p>
      {list}
      <Links s={s} dark={dark} />
    </Reveal>
  )
  return (
    <div className={`${dark ? 'bg-plum text-white' : ''}`}>
      <div className="mx-auto grid max-w-[96rem] items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-12 md:gap-6 md:py-24 lg:px-12">
        {text}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-h" className="border-t border-lavender">
      <div className="mx-auto max-w-[96rem] px-5 pt-24 sm:px-8 sm:pt-32 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-5">Services</p>
          <h2 id="services-h" className="max-w-[16ch] font-display text-display-lg font-medium">Photography and keepsakes — <em className="font-normal text-brand">under one roof.</em></h2>
          <p className="mt-5 text-sm text-muted">Prefer to talk it through? <a className="underline underline-offset-4" href={site.phoneHref}>Call {site.phone}</a></p>
        </Reveal>
      </div>
      {services.map((s, i) => <Group key={s.id} s={s} i={i} />)}
    </section>
  )
}
