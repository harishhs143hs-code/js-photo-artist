import { site } from '../data/site'
import Reveal from '../lib/Reveal'

export default function Intro() {
  return (
    <section id="about" className="w-full">
      <div className="mx-auto grid w-full max-w-[96rem] items-start gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:px-12">
        <Reveal className="lg:col-span-10 lg:col-start-2 lg:pt-20">
          <p className="eyebrow mb-6">About the studio · Thiruninravur</p>
          <h2 className="font-display text-display-lg font-medium">Photography Studio in <em className="font-normal text-brand">Thiruninravur.</em></h2>
          <div className="mt-8 max-w-2xl space-y-4 leading-relaxed text-ink/75">
            <p>JS Photo Artist is a local photography studio in Lakshmipuram, Thiruninravur, Tiruvallur – 602024. If you are looking for a photographer in Thiruninravur or wedding photography in Tiruvallur, we offer candid and traditional wedding photography, event coverage, videography and cinematic films.</p>
            <p>We also create couple and family portraits, baby and kids photoshoots, wedding albums, photo frames and printed keepsakes. Visit our studio or contact us to discuss your occasion and requirements.</p>
            <p className="text-sm text-ink/65">Studio address: {site.address}</p>
          </div>
          <a href="#services" className="mt-8 inline-block border-b border-brand pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand hover:text-plum">Explore photography services</a>
        </Reveal>
      </div>
    </section>
  )
}
