import { site } from '../data/site'
import Reveal from '../lib/Reveal'

const points = [
  ['One studio for the whole story', 'Photography, videography and aerial helicam coverage for weddings, celebrations and milestones.'],
  ['Shoots beyond the ceremony', 'Pre-wedding, post-wedding, couple, baby and family sessions, planned around you.'],
  ['From frame to keepsake', 'Album designing, photo printing, frames and customized gifts, made from your own photographs.'],
  ['Easy to reach', `Call, WhatsApp or send the enquiry form. ${site.hours}.`],
]

export default function Why() {
  return (
    <section aria-labelledby="why-h" className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow mb-5">Why JS Photo Artist</p>
          <h2 id="why-h" className="font-display text-display-md font-medium">A studio you can <em className="font-normal text-brand">talk to.</em></h2>
        </Reveal>
        <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-8">
          {points.map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="border-t border-ink/15 pt-5">
                <dt className="font-display text-2xl">{t}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink/70">{d}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
