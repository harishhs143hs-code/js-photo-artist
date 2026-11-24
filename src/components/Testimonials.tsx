import { testimonials } from '../data/site'
import Reveal from '../lib/Reveal'

// Renders nothing until genuine, approved reviews are added in src/data/site.ts
export default function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <section aria-labelledby="t-h" className="bg-plum text-white">
      <div className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 lg:px-12">
        <p className="eyebrow mb-5 !text-lavender">Kind words</p>
        <h2 id="t-h" className="sr-only">Testimonials</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <blockquote className="font-display text-3xl leading-snug">“{t.quote}”</blockquote>
              <p className="mt-4 text-sm uppercase tracking-[0.16em] text-white/70">{t.name}{t.occasion ? ` · ${t.occasion}` : ''}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
