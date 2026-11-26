import { site } from '../data/site'
import Reveal from '../lib/Reveal'

const points = [
  ['One studio for the whole story', 'Photography, videography and aerial helicam coverage for weddings, celebrations and milestones.'],
  ['Shoots beyond the ceremony', 'Pre-wedding, post-wedding, couple, baby and family sessions, planned around you.'],
  ['From frame to keepsake', 'Album designing, photo printing, frames and customized gifts, made from your own photographs.'],
  ['Easy to reach', `Call, WhatsApp or send the enquiry form. ${site.hours}.`],
]

export default function Why() {
  const faqs = [["Where is JS Photo Artist located?","Our photography studio is at No. 212, EB Colony, Lakshmipuram, Thiruninravur, Tamil Nadu 602024."],["What photography services do you offer?","We offer candid and traditional wedding photography, wedding videography, couple portraits, baby and kids photoshoots, family and event photography, albums, photo frames and printing."],["How can I check availability for my wedding date?","Send your event date, venue and preferred coverage through the enquiry form or WhatsApp. We will discuss availability and suitable package options."],["Do you provide candid and traditional wedding photography?","Yes. Wedding coverage can include candid photography, traditional photography, videography and cinematic films."],["Do you offer baby and maternity photoshoots?","Yes. We offer baby and kids photography, indoor and outdoor baby sessions, maternity sessions and baby shower coverage."],["How can I get package prices?","Our website lists selected starting package prices. Contact us with your event type and requirements to confirm inclusions and a suitable quote."],["Do you provide wedding albums and photo printing?","Yes. Ask us about wedding and reception albums, album design, photo frames, customized photo gifts and printing."]]
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
      <div id="faq" className="mx-auto mt-20 max-w-[96rem] border-t border-ink/15 px-5 pt-12 sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-4">Frequently asked questions</p>
          <h2 className="font-display text-display-md font-medium">Helpful answers <em className="font-normal text-brand">before you book.</em></h2>
        </Reveal>
        <div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-xl sm:text-2xl">{question}<span aria-hidden="true" className="text-brand transition-transform group-open:rotate-45">＋</span></summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
