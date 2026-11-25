import { MessageCircle } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { waLink } from '../data/site'

const packages = [
  { name: 'Baby Shower', price: '₹8,000' },
  { name: 'Maternity', price: '₹7,500' },
  { name: 'Wedding', price: '₹40,000' },
  { name: 'Betrothal', price: '₹20,000' },
  { name: 'Baby Photoshoot – Indoor', price: '₹10,000' },
  { name: 'Outdoor Baby Photoshoot', price: '₹7,500' },
  { name: 'Birthday Event', price: '₹7,000' },
]

export default function Packages() {
  return (
    <section id="packages" aria-labelledby="packages-heading" className="border-t border-lavender">
      <div className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow mb-5">Photography packages</p>
          <h2 id="packages-heading" className="font-display text-display-lg font-medium">Choose your <em className="font-normal text-brand">package.</em></h2>
          <p className="mt-5 text-sm leading-7 text-ink/65">Explore our photography packages and contact us for booking details.</p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((item, index) => (
            <Reveal key={item.name} delay={index * 45}>
              <article className="group flex h-full flex-col rounded-2xl border border-lavender/80 bg-white p-6 shadow-[0_8px_30px_rgba(57,6,79,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_18px_45px_rgba(57,6,79,0.12)] sm:p-7">
                <p className="eyebrow">Package {String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-5 min-h-14 font-display text-2xl font-medium leading-tight">{item.name}</h3>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">Starting package price</p>
                <p className="mt-1 font-display text-4xl font-semibold text-brand transition-transform duration-300 group-hover:scale-[1.03] origin-left">{item.price}</p>
                <a
                  href={waLink(`Hello JS Photo Artist, I am interested in the ${item.name} package shown at ${item.price}. Please share the package details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid mt-7 w-fit"
                >
                  <MessageCircle size={16} /> Enquire now
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
