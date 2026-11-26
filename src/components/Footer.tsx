import { Instagram, MapPin } from 'lucide-react'
import { site, services } from '../data/site'

const nav = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Portfolio', '#portfolio'], ['Albums & Printing', '#albums'], ['Contact', '#contact']]

export default function Footer() {
  return (
    <footer className="bg-plum text-white">
      <div className="mx-auto grid max-w-[96rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 lg:px-12">
        <div className="md:col-span-4">
          <span className="inline-block bg-paper px-3 py-2"><img src={site.logo} alt={site.name} className="h-11 w-auto object-contain" width={1536} height={1024} loading="lazy" /></span>
          <p className="mt-5 text-[0.72rem] font-semibold tracking-[0.2em] text-lavender">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="eyebrow mb-4 !text-lavender">Explore</h2>
          <ul className="space-y-2 text-sm text-white/80">{nav.map(([l, h]) => <li key={h}><a className="hover:text-white" href={h}>{l}</a></li>)}</ul>
        </nav>
        <div className="md:col-span-3">
          <h2 className="eyebrow mb-4 !text-lavender">Services</h2>
          <ul className="space-y-2 text-sm text-white/80">{services.map((s) => <li key={s.id}><a className="hover:text-white" href={`/services/${s.id}`}>{s.title}</a></li>)}</ul>
        </div>
        <div className="text-sm text-white/80 md:col-span-3">
          <h2 className="eyebrow mb-4 !text-lavender">Visit &amp; contact</h2>
          <address className="not-italic leading-relaxed">{site.address}</address>
          <p className="mt-3"><a className="hover:text-white" href={site.phoneHref}>{site.phone}</a></p>
          <p><a className="break-all hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
            <a className="inline-flex items-center gap-2 hover:text-white" href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit JS Photo Artist on Instagram"><Instagram size={18} aria-hidden="true" /> Instagram</a>
            <a className="inline-flex items-center gap-2 hover:text-white" href={site.googleBusinessUrl} target="_blank" rel="noopener noreferrer" aria-label="View JS Photo Artist on Google Business Profile"><MapPin size={18} aria-hidden="true" /> Google Business Profile</a>
          </div>
          <p className="mt-4 text-xs text-white/60">Find our business details and customer reviews on Google.</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/60">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  )
}
