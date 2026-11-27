import { useEffect } from 'react'
import { ArrowDown, ArrowUpRight, Sparkles, Camera, Heart, Baby, Layers } from 'lucide-react'
import Packages from './Packages'
import FAQ from './FAQ'

const categories = [
  { label: 'Weddings', href: '#category-hindu-wedding-reception', icon: Heart },
  { label: 'Events', href: '#category-general-photography', icon: Camera },
  { label: 'Newborn', href: '#category-newborn-baby-photography', icon: Baby },
  { label: 'Albums & add-ons', href: '#category-add-on-services', icon: Layers },
]

export default function PricingPage() {
  useEffect(() => {
    document.title = 'Photography Packages & Pricing | JS Photo Artist'
  }, [])

  return (
    <main className="min-h-screen bg-[#fbf8fc] pt-[4.25rem]">
      <section className="relative isolate overflow-hidden bg-[#21072d] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(190,95,220,.22),transparent_42%),radial-gradient(ellipse_at_90%_80%,rgba(115,35,150,.45),transparent_45%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-8 size-[27rem] rounded-full border border-white/10 sm:size-[38rem]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 top-20 size-[22rem] rounded-full border border-white/10 sm:size-[32rem]" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-xs"><Sparkles size={14} /> Thoughtfully captured, beautifully remembered</p>
          <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] sm:text-6xl lg:text-7xl">Every moment, <em className="font-normal text-[#e8bce9]">beautifully priced.</em></h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">Explore our photography packages, compare inclusions, and open any package for the full details. Have a special request? Enquire with us directly.</p>
          <a href="#packages" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-plum shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7e8f4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore packages <ArrowDown size={17} /></a>
          <div className="mt-10 flex flex-wrap gap-2.5 sm:mt-12">
            {categories.map(({label,href,icon:Icon}) => <a key={href} href={href} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/85 transition hover:border-white/35 hover:bg-white/10 sm:text-sm"><Icon size={15} />{label}<ArrowUpRight size={13} className="opacity-60" /></a>)}
          </div>
        </div>
      </section>
      <Packages />
      <FAQ />
    </main>
  )
}
