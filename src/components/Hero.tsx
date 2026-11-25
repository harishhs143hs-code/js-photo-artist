import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { heroSlides, site, waLink } from '../data/site'

const DURATION = 5500

export default function Hero() {
  const n = heroSlides.length
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const [cycle, setCycle] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const on = () => setReduced(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  useEffect(() => {
    if (paused || reduced) return
    const t = window.setTimeout(() => setI((x) => (x + 1) % n), DURATION)
    return () => window.clearTimeout(t)
  }, [i, cycle, paused, reduced, n])

  const go = (to: number) => { setI((to + n) % n); setCycle((c) => c + 1) }
  const running = !paused && !reduced

  return (
    <section id="home" aria-roledescription="carousel" aria-label="Featured photography" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-plum text-white">
      {heroSlides.map((s, idx) => (
        <picture key={s.src} aria-hidden={idx !== i}>
          <source media="(max-width: 767px)" srcSet={s.mobile} />
          <img
            src={s.src} alt={idx === i ? s.alt : ''} width={1920} height={1080}
            loading={idx === 0 ? 'eager' : 'lazy'} fetchPriority={idx === 0 ? 'high' : 'auto'} decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] ease-out"
            style={{ opacity: idx === i ? 1 : 0, transform: idx === i && running ? 'scale(1.045)' : 'scale(1)', transitionDuration: `1400ms, ${idx === i ? DURATION + 1400 : 1400}ms`, objectPosition: s.pos }}
          />
        </picture>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/30" aria-hidden />

      <div className="relative z-10 mx-auto flex h-full max-w-[96rem] flex-col items-center justify-center px-5 pb-28 text-center sm:px-8 sm:pb-24 lg:px-12">
        <p className="eyebrow mb-5 !text-white/80">{site.tagline}</p>
        <h1 className="max-w-[14ch] font-display text-display-xl font-medium sm:max-w-[16ch]">
          Every Moment Deserves to Be <em className="font-normal">Remembered.</em>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">Photography, films and keepsakes for the moments that matter.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#portfolio" className="btn-light">Explore Our Work</a>
          <a href={waLink(site.defaultWa)} target="_blank" rel="noopener noreferrer" className="btn-line">Enquire Now</a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-[96rem] items-center gap-4 px-5 pb-7 sm:px-8 lg:px-12">
        <ol className="flex flex-1 gap-2 sm:max-w-xs" aria-label="Slides">
          {heroSlides.map((_, idx) => (
            <li key={idx} className="flex-1">
              <button type="button" onClick={() => go(idx)} aria-label={`Show slide ${idx + 1}`} aria-current={idx === i} className="block h-6 w-full">
                <span className="relative block h-[2px] w-full bg-white/35">
                  <span key={`${i}-${cycle}-${paused}`} className="absolute inset-0 origin-left bg-white"
                    style={idx < i ? { transform: 'scaleX(1)' } : idx === i ? (running ? { animation: `fill ${DURATION}ms linear forwards` } : { transform: 'scaleX(1)' }) : { transform: 'scaleX(0)' }} />
                </span>
              </button>
            </li>
          ))}
        </ol>
        <div className="flex items-center gap-1">
          <button type="button" onClick={() => go(i - 1)} aria-label="Previous slide" className="grid h-10 w-10 place-items-center hover:bg-white/10"><ChevronLeft size={20} /></button>
          <button type="button" onClick={() => { setPaused((p) => !p); setCycle((c) => c + 1) }} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} className="grid h-10 w-10 place-items-center hover:bg-white/10">
            {paused ? <Play size={17} /> : <Pause size={17} />}
          </button>
          <button type="button" onClick={() => go(i + 1)} aria-label="Next slide" className="grid h-10 w-10 place-items-center hover:bg-white/10"><ChevronRight size={20} /></button>
        </div>
      </div>
      <span className="sr-only" aria-live="polite">Slide {i + 1} of {n}</span>
    </section>
  )
}
