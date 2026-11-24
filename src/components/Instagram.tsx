import { instagramTiles, site } from '../data/site'
import Reveal from '../lib/Reveal'

export default function Instagram() {
  return (
    <section aria-labelledby="ig-h" className="border-t border-lavender">
      <div className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 lg:px-12">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-5">Instagram</p>
            <h2 id="ig-h" className="font-display text-display-md font-medium">@jsphotoartist25</h2>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-solid">Follow on Instagram</a>
        </Reveal>
        <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {instagramTiles.map((src, i) => (
            <a key={src} href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Open JS Photo Artist on Instagram" className="group block overflow-hidden">
              <img src={src} alt="Sample tile, to be replaced with an Instagram post" width={800} height={800} loading="lazy" className={`aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i % 2 ? '' : ''}`} />
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink/50">Sample tiles. This is not a live feed.</p>
      </div>
    </section>
  )
}
