import { useEffect, useState } from 'react'
import { site, waLink, heroSlides } from '../data/site'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (heroSlides.length < 2) return
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % heroSlides.length)
        setAnimating(false)
      }, 600)
    }, 4500)
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
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: i === current ? (animating ? 0 : 1) : 0,
            transitionDuration: animating ? '600ms' : '800ms',
          }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            loading={i < 2 ? 'eager' : 'lazy'}
            decoding="async"
            className="h-full w-full object-cover"
            style={{ objectPosition: slide.pos }}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/35" aria-hidden />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[96rem] flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-12">
        <p className="eyebrow mb-5 !text-white/80">{site.tagline}</p>
        <h1 className="max-w-[14ch] font-display text-display-xl font-medium sm:max-w-[16ch]">
          Stories from <em className="font-normal">JS Photo Artist.</em>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
          Wedding photography · films · stories that stay with you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#portfolio" className="btn-light">Explore Our Work</a>
          <a href={waLink(site.defaultWa)} target="_blank" rel="noopener noreferrer" className="btn-line">Enquire Now</a>
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
              onClick={() => { setAnimating(false); setCurrent(i) }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
