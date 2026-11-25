import { portfolio } from '../data/site'
import Reveal from '../lib/Reveal'

export default function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-h" className="bg-paper">
      <div className="mx-auto max-w-[96rem] px-4 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <Reveal>
          <p className="eyebrow mb-4">A visual collection</p>
          <h2 id="portfolio-h" className="font-display text-display-lg font-medium">
            Selected <em className="font-normal text-brand">works</em>
          </h2>
        </Reveal>
        <div className="portfolio-masonry mt-8 sm:mt-12" aria-label="Photography portfolio">
          {portfolio.map((photo, index) => (
            <figure key={photo.src} className="portfolio-photo">
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
