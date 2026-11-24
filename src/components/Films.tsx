import { useEffect, useRef, useState } from 'react'
import { Play, X } from 'lucide-react'
import { films, type Film } from '../data/site'
import { useLockScroll } from '../lib/useLockScroll'
import Reveal from '../lib/Reveal'

function Player({ f }: { f: Film }) {
  if (!f.src) return (
    <div className="grid aspect-video w-full place-items-center bg-plum px-6 text-center text-white">
      <p className="max-w-sm text-sm leading-relaxed text-white/80">This is a placeholder slot. Add a video file or embed link for “{f.title}” in <code>src/data/site.ts</code> and it will play here.</p>
    </div>
  )
  if (/\.(mp4|webm)(\?|$)/i.test(f.src)) return <video className="aspect-video w-full bg-black" src={f.src} controls autoPlay playsInline />
  return <iframe className="aspect-video w-full" src={f.src} title={f.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
}

export default function Films() {
  const [sel, setSel] = useState<Film | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const last = useRef<HTMLElement | null>(null)
  useLockScroll(!!sel)
  useEffect(() => {
    if (!sel) return
    closeRef.current?.focus()
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') { setSel(null); last.current?.focus() } }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [sel])
  const [hero, ...rest] = films

  const Card = ({ f, big }: { f: Film; big?: boolean }) => (
    <button type="button" onClick={(e) => { last.current = e.currentTarget; setSel(f) }} aria-label={`Play film: ${f.title}`} className="group relative block w-full overflow-hidden text-left">
      <img src={f.thumb} alt="" width={1600} height={900} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${big ? 'aspect-[16/10] lg:aspect-[16/9]' : 'aspect-video'}`} />
      <span className="absolute inset-0 bg-plum/25 transition-colors group-hover:bg-plum/10" />
      <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center border border-white/80 text-white transition-colors group-hover:bg-white group-hover:text-plum"><Play size={22} fill="currentColor" /></span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-white">
        <span className="block font-display text-2xl">{f.title}</span>
        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-white/70">{f.src ? 'Watch film' : f.note}</span>
      </span>
    </button>
  )

  return (
    <section id="films" aria-labelledby="films-h" className="bg-ink text-white">
      <div className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal className="mb-12 max-w-xl">
          <p className="eyebrow mb-5 !text-lavender">Films</p>
          <h2 id="films-h" className="font-display text-display-lg font-medium">Wedding films, <em className="font-normal text-lavender">in motion.</em></h2>
          <p className="mt-4 text-white/65">Placeholder thumbnails for now. Real films will be added once supplied by the studio.</p>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-8"><Card f={hero} big /></Reveal>
          <div className="grid gap-4 lg:col-span-4">
            {rest.map((f, i) => <Reveal key={f.title} delay={100 * (i + 1)}><Card f={f} /></Reveal>)}
          </div>
        </div>
      </div>
      {sel && (
        <div role="dialog" aria-modal="true" aria-label={sel.title} className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4" onClick={() => { setSel(null); last.current?.focus() }}>
          <button ref={closeRef} type="button" aria-label="Close video" onClick={() => { setSel(null); last.current?.focus() }} className="absolute right-3 top-3 grid h-11 w-11 place-items-center text-white hover:bg-white/10"><X size={26} /></button>
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}><Player f={sel} /></div>
        </div>
      )}
    </section>
  )
}
