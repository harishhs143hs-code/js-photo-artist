import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { categories, portfolio, type Category } from '../data/site'
import { useLockScroll } from '../lib/useLockScroll'
import Reveal from '../lib/Reveal'

export default function Portfolio() {
  const [cat, setCat] = useState<Category | 'All'>('All')
  const [open, setOpen] = useState<number | null>(null)
  const items = useMemo(() => (cat === 'All' ? portfolio : portfolio.filter((p) => p.cats.includes(cat))), [cat])
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  useLockScroll(open !== null)

  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + items.length) % items.length)), [items.length])
  const close = useCallback(() => { setOpen(null); lastFocus.current?.focus() }, [])

  useEffect(() => {
    if (open === null) return
    closeRef.current?.focus()
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [open, close, step])

  const cur = open !== null ? items[open] : null
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

        <div role="group" aria-label="Filter portfolio by category" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-lavender pb-4">
          {(['All', ...categories] as const).map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
              className={`py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors ${cat === c ? 'border-b-2 border-brand text-brand' : 'border-b-2 border-transparent text-ink/55 hover:text-ink'}`}>{c}</button>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-2 items-stretch gap-2 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {items.map((p, idx) => (
            <button key={p.src + cat} type="button" onClick={(e) => { lastFocus.current = e.currentTarget; setOpen(idx) }}
              aria-label={`Open image: ${p.alt}`} className="group relative block w-full aspect-[4/5] overflow-hidden bg-lavender text-left shadow-[0_8px_22px_rgba(45,16,59,.08)] transition duration-500 hover:shadow-[0_16px_36px_rgba(45,16,59,.16)]">
              <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading={idx < 4 ? "eager" : "lazy"} decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]" style={{ objectPosition: p.pos }} />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/90 via-plum/35 to-transparent px-4 pb-4 pt-14 text-left text-white opacity-100 transition duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100"><span className="block font-display text-xl leading-tight">{p.title}</span><span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/75">{p.cats[0]}</span></span>
            </button>
          ))}
        </div>
      </div>

      {cur && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 sm:p-10" onClick={close}>
          <button ref={closeRef} type="button" onClick={close} aria-label="Close" className="absolute right-3 top-3 grid h-11 w-11 place-items-center text-white hover:bg-white/10"><X size={26} /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous image" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center text-white hover:bg-white/10 sm:left-5"><ChevronLeft size={30} /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next image" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center text-white hover:bg-white/10 sm:right-5"><ChevronRight size={30} /></button>
          <figure className="flex max-h-full max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={cur.src} alt={cur.alt} className="max-h-[80vh] max-w-full object-contain" />
            <figcaption className="mt-3 text-center"><span className="block font-display text-lg text-white">{cur.title}</span><span className="mt-1 block text-xs uppercase tracking-[0.16em] text-white/70">{open! + 1} / {items.length} · {cur.cats[0]}</span></figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
