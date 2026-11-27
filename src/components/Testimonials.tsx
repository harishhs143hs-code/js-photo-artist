import Reveal from '../lib/Reveal'
import { site } from '../data/site'

export default function Testimonials() {
  return (
    <section id="google-reviews" aria-labelledby="google-reviews-title" className="bg-plum text-white">
      <div className="mx-auto max-w-[96rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-5 !text-lavender">Kind words from clients</p>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 id="google-reviews-title" className="font-display text-display-lg font-medium">Loved by our <em className="font-normal text-lavender">clients</em></h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
                Read genuine client feedback from our Google Business Profile.
              </p>
            </div>
            <a href={site.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="google-review-link inline-flex w-fit items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-plum focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              Read reviews on Google <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
        <div className="mt-10 overflow-hidden rounded-2xl">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25732324"
            title="JS Photo Artist Google Reviews"
            width="100%"
            height="720"
            loading="lazy"
            className="block h-[720px] w-full border-0 sm:h-[650px]"
          />
        </div>
        <p className="mt-5 text-xs text-white/55">Reviews are displayed through SociableKIT. Visit Google for the latest ratings and feedback.</p>
      </div>
    </section>
  )
}
