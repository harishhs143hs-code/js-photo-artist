import { ArrowDown, Sparkles } from 'lucide-react'
import Packages from './Packages'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#fbf8fc] pt-[4.25rem]">
      <section className="relative isolate overflow-hidden border-b border-lavender bg-gradient-to-br from-[#25082f] via-[#39064f] to-[#5b1b70] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 size-[28rem] rounded-full bg-fuchsia-300/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 -left-20 size-96 rounded-full bg-violet-300/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70"><Sparkles size={14} /> Thoughtfully captured, beautifully remembered</p>
          <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] sm:text-6xl lg:text-7xl">The right package for<br className="hidden sm:block" /> <em className="font-normal text-[#f2cfe9]">your story.</em></h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">Explore photography, wedding, newborn and event options with clear inclusions and pricing. Open any package to review every detail and enquire directly.</p>
          <a href="#packages" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-plum shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7e8f4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore packages <ArrowDown size={17} /></a>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/55 sm:mt-14 sm:text-sm"><span>Wedding & celebrations</span><span>·</span><span>Newborn & family</span><span>·</span><span>Albums & add-ons</span></div>
        </div>
      </section>
      <Packages />
    </main>
  )
}
