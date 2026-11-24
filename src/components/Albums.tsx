import { albumShowcase, site, waLink } from '../data/site'
import Reveal from '../lib/Reveal'

export default function Albums() {
  return (
    <section id="albums" aria-labelledby="albums-h" className="bg-lavender/40">
      <div className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Albums &amp; printing</p>
            <h2 id="albums-h" className="font-display text-display-lg font-medium">Your Memories Deserve More Than <em className="font-normal text-brand">a Screen.</em></h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink/75">Wedding and reception albums, album designing, photo prints, customized frames and photo gifts, finished with the same care as the photographs themselves.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-solid" target="_blank" rel="noopener noreferrer" href={waLink('Hello JS Photo Artist, I would like to know more about your albums and photo printing.')}>Ask about albums</a>
              <a className="btn border border-brand text-brand hover:bg-brand hover:text-white" href={site.phoneHref}>Call the studio</a>
            </div>
            <p className="mt-6 text-xs text-ink/55">Visuals shown are temporary samples and will be replaced with the studio's own work.</p>
          </Reveal>
          <div className="grid grid-cols-2 items-start gap-4 lg:col-span-7">
            {albumShowcase.map((a, i) => (
              <Reveal key={a.label} delay={(i % 2) * 120} className={i % 2 === 1 ? 'mt-10' : ''}>
                <figure>
                  <img src={a.img.src} alt={a.img.alt} width={a.w} height={a.h} loading="lazy" className="h-auto w-full object-cover" />
                  <figcaption className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink/70">{a.label}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
