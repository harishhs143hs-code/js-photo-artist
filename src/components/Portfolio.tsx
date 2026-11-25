import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolio } from '../data/site'
import Reveal from '../lib/Reveal'

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = portfolio[activeIndex]
  const previous = () => setActiveIndex((index) => (index - 1 + portfolio.length) % portfolio.length)
  const next = () => setActiveIndex((index) => (index + 1) % portfolio.length)

  return (
    <section id="portfolio" aria-labelledby="portfolio-h" className="bg-paper">
      <div className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-5">A visual collection</p>
          <h2 id="portfolio-h" className="font-display text-display-lg font-medium">Selected <em className="font-normal text-brand">works</em></h2>
        </Reveal>
        {active ? (
          <div className="relative mt-10 flex min-h-[360px] items-center justify-center overflow-hidden bg-[#eee7f0] sm:mt-12 sm:min-h-[520px] lg:min-h-[680px]">
            <img
              key={active.src}
              src={active.src}
              alt={active.alt}
              width={active.w}
              height={active.h}
              loading="eager"
              decoding="async"
              className="block max-h-[78vh] w-full object-contain"
              style={{ objectPosition: active.pos }}
            />
            <button type="button" onClick={previous} aria-label="Previous photograph" className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-sm transition hover:bg-white sm:left-5 sm:h-14 sm:w-14">
              <ChevronLeft size={26} />
            </button>
            <button type="button" onClick={next} aria-label="Next photograph" className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-sm transition hover:bg-white sm:right-5 sm:h-14 sm:w-14">
              <ChevronRight size={26} />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
