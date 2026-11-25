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
    if (paused || reduced || n <= 1) return
    const t = window.setTimeout(() => setI((x) => (x + 1) % n), DURATION)
    return () => window.clearTimeout(t)
  }, [i, cycle, paused, reduced, n])

  const go = (to: number) => { if (n) { setI((to + n) % n); setCycle((c) => c + 1) } }
  const running = !paused && !reduced

  return (
    <section id="home" aria-roledescription="carousel" aria-label="Featured photography" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-plum text-white">
      {/* Photo placements are intentionally cleared until replacement photos are provided. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/30" aria-hidden />

      <div className="relative z-10 mx-auto flex h-full max-w-[96rem] flex-col items-center justify-center px-5 pb-28 text-center sm:px-8 sm:pb-24 lg:px-12">
        <p className="eyebrow mb-5 !text-white/80">{site.tagline}</p>
        <h1 className="max-w-[14ch] font-display text-display-xl font-medium sm:max-w-[16ch]">
          Stories from <em className="font-normal">JS Photo Artist.</em>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">Wedding photography · films · stories that stay with you.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#portfolio" className="btn-light">Explore Our Work</a>
          <a href={waLink(site.defaultWa)} target="_blank" rel="noopener noreferrer" className="btn-line">Enquire Now</a>
        </div>
      </div>
    </section>
  )
}
