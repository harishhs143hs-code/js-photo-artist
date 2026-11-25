import { site, waLink } from '../data/site'

export default function Hero() {
  return (
    <section id="home" aria-label="Featured photography" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-plum text-white">
      {/* Photo placements and slideshow controls are intentionally cleared for the image reset. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/30" aria-hidden />
      <div className="relative z-10 mx-auto flex h-full max-w-[96rem] flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-12">
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
