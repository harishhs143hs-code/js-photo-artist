import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { waLink } from '../data/site'

const packages = [
  { name: 'Baby Shower', price: '₹8,000', number: '01', kind: 'Celebration photography' },
  { name: 'Maternity', price: '₹7,500', number: '02', kind: 'Maternity portraits' },
  { name: 'Wedding', price: '₹40,000', number: '03', kind: 'Wedding photography' },
  { name: 'Betrothal', price: '₹20,000', number: '04', kind: 'Engagement coverage' },
  { name: 'Baby Photoshoot – Indoor', price: '₹10,000', number: '05', kind: 'Indoor baby portraits' },
  { name: 'Outdoor Baby Photoshoot', price: '₹7,500', number: '06', kind: 'Outdoor baby portraits' },
  { name: 'Birthday Event', price: '₹7,000', number: '07', kind: 'Birthday photography' },
]

export default function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-heading" className="relative isolate overflow-hidden border-t border-lavender bg-[#fbf8fc]">
      <div className="pointer-events-none absolute -right-28 -top-28 size-96 rounded-full bg-brand/5 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="eyebrow mb-4 inline-flex items-center gap-2"><Sparkles size={13} aria-hidden="true" /> Thoughtfully captured, beautifully remembered</p>
          <h2 id="packages-heading" className="font-display text-4xl font-medium leading-tight sm:text-display-lg">Photography <em className="font-normal text-brand">packages</em></h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-ink/65 sm:mt-5 sm:text-base sm:leading-7">Clear starting prices for your celebration or portrait session. Choose a package to ask about availability and what’s included.</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {packages.map((item, index) => (
            <Reveal key={item.name} delay={index * 35}>
              <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-lavender/80 bg-white p-5 shadow-[0_6px_24px_rgba(57,6,79,0.045)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[0_14px_36px_rgba(57,6,79,0.10)] sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-brand/75 sm:text-xs">{item.number} <span className="text-ink/35">/</span> PACKAGE</span>
                  <span className="shrink-0 rounded-full bg-[#f5edf8] px-3 py-1.5 text-[10px] font-medium text-plum sm:text-xs">Starting price</span>
                </div>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/50 sm:text-xs">{item.kind}</p>
                  <h3 className="mt-2 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">{item.name}</h3>
                </div>

                <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-lavender/80 pt-5">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-ink/50">Package price</p>
                    <p className="mt-1 font-display text-3xl font-semibold tracking-tight text-brand sm:text-4xl">{item.price}</p>
                  </div>
                  <p className="max-w-36 text-right text-xs leading-5 text-ink/55">Ask for inclusions and available dates.</p>
                </div>

                <a
                  href={waLink(`Hello JS Photo Artist, I’m interested in the ${item.name} package listed from ${item.price}. Please share the inclusions and availability.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-12 w-full items-center justify-between gap-3 rounded-xl bg-plum px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-5"
                >
                  <span className="inline-flex min-w-0 items-center gap-2"><MessageCircle size={17} className="shrink-0" aria-hidden="true" /><span>Ask about this package</span></span>
                  <ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-ink/55 sm:mt-8 sm:text-sm sm:leading-6">Prices are starting rates. Final pricing and package inclusions depend on your requirements; please confirm them with us before booking.</p>
      </div>
    </section>
  )
}
