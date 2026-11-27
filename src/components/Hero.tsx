import { useEffect, useState } from 'react'
import { site, waLink, heroSlides } from '../data/site'

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (heroSlides.length < 2) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroSlides.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      aria-label="Featured photography"
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-plum text-white"
    >
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <picture>
            <source media="(max-width: 640px)" srcSet={slide.mobile} />
            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === current ? 'eager' : 'lazy'}
              fetchPriority={i === current ? 'high' : 'auto'}
              decoding="async"
              className={`hero-slide-image h-full w-full object-cover ${i === current ? 'hero-slide-image-active' : ''}`}
              style={{ objectPosition: slide.mobile === slide.src ? slide.mobilePos : slide.mobilePos }}
            />
          </picture>
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/35" aria-hidden />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[96rem] flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-12">
        <p className="eyebrow mb-5 !text-white/80">Wedding & Event Photography in Thiruninravur</p>
        <h1 className="max-w-[14ch] font-display text-display-xl font-medium sm:max-w-[16ch]">
          Stories from <em className="font-normal">JS Photo Artist.</em>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
          Wedding, baby and event photography in Thiruninravur—beautiful moments, thoughtfully captured.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#portfolio" className="btn-line">Explore Our Work</a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#f0d4ad] bg-[#f0d4ad] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#32123f] shadow-[0_8px_30px_rgba(240,212,173,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8e6cc] hover:shadow-[0_12px_36px_rgba(240,212,173,0.45)] active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d4ad] motion-reduce:transition-none"
          >
            Check Price
          </a>
          <a href={waLink(site.defaultWa)} target="_blank" rel="noopener noreferrer" className="btn-line">WhatsApp Enquiry</a>
        </div>
      </div>

      {/* Dot indicators */}
      {heroSlides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2" role="tablist" aria-label="Slide indicators">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className="flex h-11 w-11 items-center justify-center rounded-full"
            ><span aria-hidden="true" className={`block h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} /></button>
          ))}
        </div>
      )}
    </section>
  )
}
