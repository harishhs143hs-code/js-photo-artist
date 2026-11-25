import { useEffect, useRef, useState } from 'react'
import { portfolio, categories, type Category } from '../data/site'
import Reveal from '../lib/Reveal'

function GalleryPhoto({ work, index }: { work: typeof portfolio[number]; index: number }) {
  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (!('IntersectionObserver' in window)) {
      node.classList.add('gallery-photo-visible')
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      node.classList.toggle('gallery-photo-visible', entry.isIntersecting)
    }, { threshold: 0.18 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return (
    <article
      ref={ref}
      className="gallery-photo group"
      style={{ animationDelay: ((index % 6) * 55) + 'ms' }}
    >
      <img src={work.src} alt={work.alt} width={work.w} height={work.h} loading="lazy" decoding="async" />
      <span className="gallery-photo-caption" aria-hidden="true">
        <span>{work.title}</span>
        <span>{work.cats.join(' · ')}</span>
      </span>
    </article>
  )
}

export default function Portfolio() {
  const [category, setCategory] = useState<Category | 'All'>('All')
  const photos = category === 'All' ? portfolio : portfolio.filter((work) => work.cats.includes(category))

  return (
    <section id="portfolio" aria-labelledby="portfolio-h" className="bg-paper">
      <div className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-5">A visual collection</p>
          <h2 id="portfolio-h" className="font-display text-display-lg font-medium">Selected <em className="font-normal text-brand">works</em></h2>
        </Reveal>
        <div className="portfolio-filter" role="group" aria-label="Filter photography by category">
          {(['All', ...categories] as const).map((item) => (
            <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item}>
              {item}
            </button>
          ))}
        </div>
        <div className="portfolio-instagram-grid" aria-live="polite">
          {photos.map((work, index) => <GalleryPhoto key={work.src} work={work} index={index} />)}
        </div>
      </div>
    </section>
  )
}
