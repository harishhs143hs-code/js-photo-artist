import Reveal from '../lib/Reveal'
import { site } from '../data/site'

const reviewSnippets = [
  'Excellent customer service and high quality with budget friendly.',
  'The photographer captured every moment with incredible detail and creativity.',
  'Excellent service getting from JS Photo Artist.',
]

export default function Testimonials() {
  return (
    <section id="google-reviews" aria-labelledby="google-reviews-title" className="bg-plum text-white">
      <div className="mx-auto max-w-[96rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-5 !text-lavender">Kind words from clients</p>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 id="google-reviews-title" className="font-display text-display-lg font-medium">Loved by our <em className="font-normal text-lavender">clients</em></h2>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-3xl font-semibold">{site.googleRating}</span>
                <span aria-label="5 out of 5 stars" className="text-2xl tracking-wider text-amber-300">★★★★★</span>
                <span className="text-sm text-white/75">Google rating · {site.googleReviewCount} reviews</span>
              </div>
            </div>
            <a href={site.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="google-review-link inline-flex w-fit items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              Read reviews on Google <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviewSnippets.map((quote, index) => (
            <Reveal key={quote} delay={index * 90}>
              <blockquote className="h-full rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:p-7">
                <p className="mb-4 text-lg tracking-widest text-amber-300" aria-label="5 stars">★★★★★</p>
                <p className="font-display text-xl leading-relaxed">“{quote}”</p>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/65">Google review highlight</p>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-xs text-white/55">Rating and review count may change. See Google for the latest reviews.</p>
      </div>
    </section>
  )
}
