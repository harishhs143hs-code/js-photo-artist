import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { waLink } from '../data/site'

const packages = [
  { name: 'Baby Shower', price: '₹8,000', popular: true, number: '01', kind: 'Celebration photography' },
  { name: 'Maternity', price: '₹7,500', number: '02', kind: 'Maternity portraits' },
  { name: 'Wedding', price: '₹40,000', number: '03', kind: 'Wedding photography' },
  { name: 'Betrothal', price: '₹20,000', number: '04', kind: 'Engagement coverage' },
  { name: 'Baby Photoshoot – Indoor', price: '₹10,000', number: '05', kind: 'Indoor baby portraits' },
  { name: 'Outdoor Baby Photoshoot', price: '₹7,500', number: '06', kind: 'Outdoor baby portraits' },
  { name: 'Birthday Event', price: '₹7,000', number: '07', kind: 'Birthday photography' },
]

export default function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-heading" className="relative overflow-hidden border-t border-lavender bg-[#fbf8fc]">
      <div className="pointer-events-none absolute -right-28 -top-28 size-96 rounded-full bg-brand/5 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="eyebrow mb-5 inline-flex items-center gap-2"><Sparkles size={13} aria-hidden="true" /> Thoughtfully captured, beautifully remembered</p>
          <h2 id="packages-heading" className="font-display text-display-lg font-medium">Photography <em className="font-normal text-brand">packages</em></h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ink/65">A starting point for your celebration or portrait session. Choose a package to ask about availability and the details that matter to you.</p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal key={item.name} delay={index * 45}>
              <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-[0_8px_30px_rgba(57,6,79,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(57,6,79,0.12)] sm:p-7 ${item.popular ? 'border-brand/40 ring-1 ring-brand/10' : 'border-lavender/80 hover:border-brand/30'}`}>
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-brand/70">{item.number} / PACKAGE</span>
                  {item.popular && <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand"><Sparkles size={11} aria-hidden="true" /> Popular</span>}
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.13em] text-ink/50">{item.kind}</p>
                <h3 className="mt-2 min-h-14 font-display text-2xl font-medium leading-tight">{item.name}</h3>
                <div className="mt-6 border-t border-lavender/80 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-ink/50">Package price from</p>
                  <p className="mt-1 font-display text-4xl font-semibold tracking-tight text-brand">{item.price}</p>
                  <p className="mt-2 text-xs text-ink/55">Ask us for package inclusions and availability.</p>
                </div>
                <a
                  href={waLink(`Hello JS Photo Artist, I’m interested in the ${item.name} package listed from ${item.price}. Please share the inclusions and availability.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-between rounded-xl bg-plum px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
                >
                  <span className="inline-flex items-center gap-2"><MessageCircle size={16} aria-hidden="true" /> Enquire about package</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-ink/50">Prices shown are starting package prices. Please confirm inclusions, coverage duration, deliverables and final pricing with us before booking.</p>
      </div>
    </section>
  )
}
