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
        <Reveal className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-5">A visual collection</p>
            <h2 id="portfolio-h" className="font-display text-display-lg font-medium">Selected <em className="font-normal text-brand">works</em></h2>
          </div>
          <p className="max-w-sm text-sm text-ink/60 lg:col-span-4 lg:col-start-9">A collection of wedding stories, couple portraits, family celebrations and little milestones — photographed by our studio.</p>
        </Reveal>

        {active ? (
          <div className="mt-10 sm:mt-12">
            <div className="grid overflow-hidden bg-[#f4eff5] lg:min-h-[620px] lg:grid-cols-[minmax(0,1.7fr)_minmax(260px,0.7fr)]">
              <div className="relative flex min-h-[360px] items-center justify-center bg-[#eee7f0] sm:min-h-[520px] lg:min-h-[620px]">
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
              <div className="flex flex-col justify-between gap-8 px-6 py-7 sm:px-10 sm:py-10 lg:px-12 lg:py-14">
                <div>
                  <p className="eyebrow mb-5">{active.cats[0]}</p>
                  <h3 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{active.title}</h3>
                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/60">{active.alt}</p>
                </div>
                <div className="flex items-center justify-between border-t border-ink/15 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">
                    <span className="text-brand">{String(activeIndex + 1).padStart(2, '0')}</span>
                    <span className="mx-2">/</span>
                    {String(portfolio.length).padStart(2, '0')}
                  </p>
                  <div className="flex gap-2">
                    <button type="button" onClick={previous} aria-label="Previous photograph" className="grid h-10 w-10 place-items-center border border-ink/20 transition hover:border-brand hover:text-brand"><ChevronLeft size={20} /></button>
                    <button type="button" onClick={next} aria-label="Next photograph" className="grid h-10 w-10 place-items-center border border-ink/20 transition hover:border-brand hover:text-brand"><ChevronRight size={20} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
