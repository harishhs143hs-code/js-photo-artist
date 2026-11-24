import { intro, site } from '../data/site'
import Reveal from '../lib/Reveal'

export default function Intro() {
  return (
    <section id="about" className="mx-auto max-w-[96rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="grid items-start gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5 lg:pt-20">
          <p className="eyebrow mb-6">About the studio · Thiruninravur</p>
          <h2 className="font-display text-display-lg font-medium">Photography Studio in <em className="font-normal text-brand">Thiruninravur.</em></h2>
          <div className="mt-8 max-w-md space-y-4 leading-relaxed text-ink/75">
            <p>JS Photo Artist is a local photography and videography studio at Lakshmipuram, Thiruninravur, Tiruvallur – 602024. If you are looking for wedding photography in Thiruninravur, our services include candid and traditional wedding photography, event coverage, videography and cinematic films.</p>
            <p>We also create couple and family portraits, baby and kids photoshoots, wedding albums, photo frames and printed keepsakes. Visit our studio or contact us to discuss your occasion and requirements.</p>
            <p className="text-sm text-ink/65">Studio address: {site.address}</p>
          </div>
          <a href="#services" className="mt-8 inline-block border-b border-brand pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand hover:text-plum">Explore photography services</a>
        </Reveal>
        <div className="relative lg:col-span-7">
          <Reveal className="ml-auto w-[78%] sm:w-[68%]">
            <img src={intro.a.src} alt={intro.a.alt} width={1200} height={1600} loading="lazy" className="aspect-[3/4] w-full object-cover" style={{ objectPosition: intro.a.pos }} />
          </Reveal>
          <Reveal delay={150} className="-mt-24 w-[58%] sm:-mt-36 sm:w-[48%]">
            <img src={intro.b.src} alt={intro.b.alt} width={1600} height={1067} loading="lazy" className="aspect-[3/2] w-full border-[10px] border-paper object-cover" style={{ objectPosition: intro.b.pos }} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
