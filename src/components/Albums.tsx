import { albumShowcase, site, waLink } from '../data/site'
import Reveal from '../lib/Reveal'

export default function Albums() {
  return (
    <section id="albums" aria-labelledby="albums-h" className="bg-lavender/40">
      <div className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal className="text-center">
          <p className="eyebrow mb-5">Albums &amp; printing</p>
          <h2 id="albums-h" className="font-display text-display-lg font-medium">
            Your Memories Deserve More Than <em className="font-normal text-brand">a Screen.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-ink/75">
            Wedding and reception albums, album designing, photo prints, customized frames and photo gifts — made around the moments you want to keep close.
          </p>
        </Reveal>

        {albumShowcase.length > 0 && (
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5">
            {albumShowcase.map((img, i) => (
              <Reveal key={img.src} delay={i * 60}>
                <div className="group overflow-hidden bg-lavender shadow-[0_6px_18px_rgba(45,16,59,.08)] transition duration-500 hover:shadow-[0_12px_30px_rgba(45,16,59,.15)]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            className="btn-solid"
            target="_blank"
            rel="noopener noreferrer"
            href={waLink('Hello JS Photo Artist, I would like to know more about your albums and photo printing.')}
          >
            Ask about albums
          </a>
          <a className="btn border border-brand text-brand hover:bg-brand hover:text-white" href={site.phoneHref}>
            Call the studio
          </a>
        </Reveal>
      </div>
    </section>
  )
}
