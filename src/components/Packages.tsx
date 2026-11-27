import { useState } from 'react'
import { ArrowUpRight, MessageCircle, Sparkles, X, Check } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { waLink } from '../data/site'

type Package = { name: string; price: string; details: string[]; note?: string }
type Group = { title: string; subtitle: string; packages: Package[]; note?: string }
const groups: Group[] = [
  {
    title: 'General Photography',
    subtitle: 'Baby shower, birthday, baptism, naming ceremony, ear boring, Sunnath, puberty, betrothal, reception, temple wedding, housewarming and other events.',
    packages: [
      { name: 'Basic Photography', price: '₹8,000', details: ['100 photos', 'Full Glossy Album'] },
      { name: 'Premium Photography', price: '₹15,000', details: ['150 photos', 'Full Glossy Album'] },
      { name: 'Basic Photo & Video', price: '₹20,000', details: ['1 still photographer', '1 videographer', 'Album with 100 photos', 'Fully edited video in pen drive', '1 photo frame'] },
      { name: 'Premium Photo & Video', price: '₹25,000', details: ['1 still photographer', '1 videographer', 'Premium album with 150 photos', 'Fully edited video in pen drive', '1 highlight video', '1 photo frame'] },
      { name: 'Elite Photo & Video', price: '₹35,000', details: ['1 still photographer', '1 videographer', 'Premium album with up to 300 photos', 'Fully edited video in pen drive', '1 highlight video', '1 photo frame'] },
    ],
    note: 'Extra charges apply for additional photos. Event coverage limits vary by event.'
  },
  {
    title: 'Hindu Wedding & Reception',
    subtitle: 'Traditional wedding and reception coverage.',
    packages: [
      { name: 'Basic Photography', price: '₹15,000', details: ['200 photos + album'] },
      { name: 'Premium Photography', price: '₹25,000', details: ['300 photos + album'] },
      { name: 'Basic Photo & Video', price: '₹35,000', details: ['1 still photographer', '1 HD videographer', '250-photo album', 'Edited video', '1 photo frame'] },
      { name: 'Premium Photo & Video', price: '₹45,000', details: ['1 still photographer', '1 4K videographer', '350-photo premium album', 'Edited video', 'Highlight video', '1 photo frame'] },
      { name: 'Elite Photo & Video', price: '₹60,000', details: ['1 still photographer', '1 4K videographer', '2 premium albums (up to 300 photos each)', 'Edited video', 'Highlight video', '1 photo frame'] },
    ]
  },
  {
    title: 'Christian Wedding & Reception',
    subtitle: 'Wedding and reception photography packages.',
    packages: [
      { name: 'Basic Photography', price: '₹15,000', details: ['200 photos'] },
      { name: 'Premium Photography', price: '₹25,000', details: ['300 photos'] },
      { name: 'Basic Photo & Video', price: '₹32,000', details: ['Please enquire for package inclusions.'] },
      { name: 'Premium Photo & Video', price: '₹42,000', details: ['Please enquire for package inclusions.'] },
      { name: 'Elite Photo & Video', price: '₹57,000', details: ['Please enquire for package inclusions.'] },
    ],
    note: 'Combined package prices differ from the Hindu wedding packages.'
  },
  {
    title: 'Muslim Nikka & Reception',
    subtitle: 'Nikka and reception photography packages.',
    packages: [
      { name: 'Basic Photography', price: '₹15,000', details: ['200 photos'] },
      { name: 'Premium Photography', price: '₹25,000', details: ['300 photos'] },
      { name: 'Basic Photo & Video', price: '₹35,000', details: ['Please enquire for package inclusions.'] },
      { name: 'Premium Photo & Video', price: '₹45,000', details: ['Please enquire for package inclusions.'] },
      { name: 'Elite Photo & Video', price: '₹60,000', details: ['Please enquire for package inclusions.'] },
    ]
  },
  {
    title: 'Newborn Baby Photography',
    subtitle: 'Studio sessions for newborn babies below 45 days.',
    packages: [
      { name: 'Basic', price: '₹7,500', details: ['Studio space for 1 hour', '2 themes', 'Mini photo album (20 pages)', '1 photo frame (12 × 8 inches)'] },
      { name: 'Premium', price: '₹12,000', details: ['Studio space for 2 hours', '4–5 themes', 'Large album (15 × 30 size, 30 pages)', '1 photo frame (12 × 18 inches)'] },
      { name: 'Elite', price: '₹25,000', details: ['Studio space for 3 hours', 'Unlimited themes', 'Exclusive album (12 × 36 size, 50 pages)', '1 photo frame (16 × 24 inches)'] },
    ],
    note: 'Applicable for newborn babies below 45 days.'
  },
  {
    title: 'Add-on Services',
    subtitle: 'Enhance your event with additional coverage and creative services.',
    packages: [
      { name: 'Event Photography (up to 4 hours)', price: '₹3,500 / ₹5,000', details: ['Basic: ₹3,500', 'Premium: ₹5,000'] },
      { name: 'Event Videography (up to 4 hours)', price: '₹6,000 / ₹10,000', details: ['Basic: ₹6,000', 'Premium: ₹10,000'] },
      { name: 'Video Editing (per hour)', price: '₹3,000 / ₹5,000', details: ['Basic: ₹3,000', 'Advanced: ₹5,000'] },
      { name: 'Album Designing (per sheet)', price: '₹150 / ₹250', details: ['Basic: ₹150', 'Premium: ₹250'] },
      { name: 'Drone Photography (per section)', price: '₹5,000 / ₹7,500', details: ['Basic: ₹5,000', 'Advanced: ₹7,500'] },
      { name: 'Candid Video (per section)', price: '₹7,500 / ₹15,000', details: ['Basic: ₹7,500', 'Advanced: ₹15,000'] },
      { name: 'Candid Photography (per section)', price: '₹5,000 / ₹10,000', details: ['Basic: ₹5,000', 'Advanced: ₹10,000'] },
      { name: 'Outdoor Photoshoot', price: '₹5,000 / ₹10,000', details: ['Basic: ₹5,000', 'Advanced: ₹10,000'] },
      { name: 'Outdoor Video Shoot', price: '₹10,000 / ₹20,000', details: ['Basic: ₹10,000', 'Advanced: ₹20,000'] },
    ]
  },
  {
    title: 'Album Printing',
    subtitle: 'Printing options priced per sheet.',
    packages: [
      { name: 'Synthetic Tearable', price: '₹100 / sheet', details: ['₹100 per sheet'] },
      { name: 'Synthetic Non-Tearable', price: '₹150 / sheet', details: ['₹150 per sheet'] },
      { name: '7 Colour NT', price: '₹300 / sheet', details: ['₹300 per sheet'] },
    ]
  },
  {
    title: 'Special Event & Entertainment Add-ons',
    subtitle: 'Make your celebration more memorable.',
    packages: [
      { name: '360° Spinner Video (with software)', price: '₹7,500', details: ['With software'] },
      { name: '360° Spinner Video (without software)', price: '₹5,500', details: ['Without software'] },
      { name: 'Instant Mirror Photo Booth', price: '₹15,000', details: ['Unlimited photos'] },
      { name: 'Instant Photo Sharing with QR Code', price: '₹5,000', details: ['Per section'] },
      { name: 'TV Display', price: '₹5,000', details: ['Per section'] },
      { name: 'LED Wall – 6 × 8', price: '₹10,000', details: ['6 × 8'] },
      { name: 'LED Wall – 8 × 10', price: '₹15,000', details: ['8 × 10'] },
      { name: 'LED Wall – 12 × 10', price: '₹20,000', details: ['12 × 10'] },
      { name: 'Hair Tonsure Ceremony Photography', price: '₹5,000', details: ['Photography coverage'] },
    ]
  }
]

export default function Packages() {
  const [selected, setSelected] = useState<{ group: Group; item: Package } | null>(null)
  return (
    <section id="packages" aria-labelledby="packages-heading" className="relative isolate overflow-hidden border-t border-lavender bg-[#fbf8fc]">
      <div className="pointer-events-none absolute -right-28 -top-28 size-96 rounded-full bg-brand/5 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="eyebrow mb-4 inline-flex items-center gap-2"><Sparkles size={13} aria-hidden="true" /> Thoughtfully captured, beautifully remembered</p>
          <h2 id="packages-heading" className="font-display text-4xl font-medium leading-tight sm:text-display-lg">Photography <em className="font-normal text-brand">packages</em></h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-ink/65 sm:mt-5 sm:text-base sm:leading-7">Explore detailed packages, inclusions and add-on services. Select any package to view details and enquire on WhatsApp.</p>
        </Reveal>
        <div className="space-y-12 sm:space-y-16">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 30}>
              <div className={group.title === 'General Photography' ? "group/featured relative mb-6 max-w-4xl overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-white via-[#fff9fd] to-[#f3e9f7] p-5 shadow-[0_12px_40px_rgba(57,6,79,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_55px_rgba(57,6,79,0.14)] sm:mb-8 sm:p-8" : "mb-5 max-w-3xl"}>
                {group.title === 'General Photography' && <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-16 size-48 rounded-full bg-brand/10 blur-3xl transition-transform duration-700 group-hover/featured:scale-125 sm:size-64" />}
                <div className={group.title === 'General Photography' ? "relative" : ""}>
                  {group.title === 'General Photography' && <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand shadow-sm sm:text-xs"><Sparkles size={13} aria-hidden="true" /> Celebrations, beautifully captured</p>}
                  <h3 className={group.title === 'General Photography' ? "font-display text-3xl font-semibold leading-tight text-ink transition-colors duration-300 group-hover/featured:text-brand sm:text-4xl lg:text-5xl" : "font-display text-2xl font-semibold text-ink sm:text-3xl"}>{group.title}</h3>
                  <p className={group.title === 'General Photography' ? "mt-3 max-w-3xl text-sm leading-7 text-ink/75 sm:mt-4 sm:text-base sm:leading-8" : "mt-2 text-sm leading-6 text-ink/60"}>{group.subtitle}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.packages.map((item, index) => (
                  <article key={item.name} className="group flex min-w-0 flex-col rounded-2xl border border-lavender/80 bg-white p-5 shadow-[0_6px_24px_rgba(57,6,79,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_14px_36px_rgba(57,6,79,0.10)] sm:p-6">
                    <h4 className="font-display text-xl font-semibold leading-snug text-brand">{item.name}</h4>
                    <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand">{item.price}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-5 text-ink/70">
                      {item.details.slice(0, 3).map(detail => <li key={detail} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" /><span>{detail}</span></li>)}
                      {item.details.length > 3 && <li className="text-xs font-medium text-brand">+{item.details.length - 3} more inclusions</li>}
                    </ul>
                    <button type="button" onClick={() => setSelected({ group, item })} className="mt-5 inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border border-plum/15 bg-[#f9f4fb] px-4 py-3 text-sm font-semibold text-plum transition-colors hover:border-brand/30 hover:bg-[#f3e9f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                      <span>View full details</span><ArrowUpRight size={18} aria-hidden="true" />
                    </button>
                  </article>
                ))}
              </div>
              {group.note && <p className="mt-4 text-xs leading-5 text-ink/55">{group.note}</p>}
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-5 text-ink/55 sm:mt-12 sm:text-sm sm:leading-6">Prices and inclusions are as listed. Please confirm event coverage, availability and final quotation before booking.</p>
      </div>
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-5" onClick={() => setSelected(null)}>
          <section role="dialog" aria-modal="true" aria-labelledby="package-dialog-title" className="max-h-[90dvh] w-full max-w-xl overflow-y-auto rounded-t-3xl border border-lavender bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-8" onClick={event => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">{selected.group.title}</p>
                <h3 id="package-dialog-title" className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">{selected.item.name}</h3>
                <p className="mt-2 font-display text-3xl font-semibold text-brand">{selected.item.price}</p>
              </div>
              <button type="button" aria-label="Close package details" onClick={() => setSelected(null)} className="grid size-10 shrink-0 place-items-center rounded-full bg-[#f5edf8] text-plum transition hover:bg-[#eadcf0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"><X size={19} /></button>
            </div>
            <div className="mt-6 rounded-2xl border border-lavender bg-[#fbf8fc] p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/55">Package inclusions</p>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-ink">
                {selected.item.details.map(detail => <li key={detail} className="flex gap-2"><Check size={17} className="mt-1 shrink-0 text-brand" aria-hidden="true" /><span>{detail}</span></li>)}
              </ul>
            </div>
            {selected.item.note && <p className="mt-3 text-xs leading-5 text-ink/55">{selected.item.note}</p>}
            <p className="mt-4 text-xs leading-5 text-ink/55">Please confirm availability, event coverage and final quotation before booking.</p>
            <a href={waLink('Hello JS Photo Artist, I would like to enquire about the ' + selected.item.name + ' in ' + selected.group.title + ' package (' + selected.item.price + '). Please share availability and booking details.')} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-plum px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"><MessageCircle size={18} aria-hidden="true" /> Enquire on WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></a>
          </section>
        </div>
      )}
    </section>
  )
}
