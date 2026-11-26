import { MapPin, MessageCircle } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { site, waLink } from '../data/site'

export default function Shop() {
  return (
    <section id="our-studio" aria-labelledby="studio-heading" className="border-t border-lavender bg-lavender/30">
      <div className="mx-auto grid max-w-[96rem] items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <Reveal delay={100} className="lg:col-span-8 lg:col-start-3">
          <p className="eyebrow mb-5">Visit our studio</p>
          <h2 id="studio-heading" className="font-display text-display-lg font-medium">A real studio. <em className="font-normal text-brand">A personal touch.</em></h2>
          <p className="mt-6 max-w-xl text-[0.98rem] leading-8 text-ink/75">Meet us at our studio, see our editing and printing workspace, and discuss your photography needs with us in person.</p>
          <p className="mt-5 flex gap-3 text-sm leading-7"><MapPin className="mt-1 shrink-0 text-brand" size={19} /><span>{site.address}</span></p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-solid"><MapPin size={16} /> Get Directions</a>
            <a href={waLink('Hello JS Photo Artist, I would like to visit your studio. Please share a convenient time.')} target="_blank" rel="noopener noreferrer" className="btn border border-brand text-brand hover:bg-brand hover:text-white"><MessageCircle size={16} /> Contact Us</a>
          </div>
        </Reveal>
        <Reveal delay={180} className="lg:col-span-10 lg:col-start-2">
          <figure className="mt-2 overflow-hidden bg-white shadow-[0_18px_50px_rgba(50,16,63,.12)]">
            <img
              src="/images/studio.jpg"
              alt="JS Photo Artist photography studio and workspace"
              loading="lazy"
              decoding="async"
              className="block w-full h-auto max-h-[720px] object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
