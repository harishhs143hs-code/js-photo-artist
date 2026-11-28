import { useState } from 'react'
import { CalendarCheck, Clock, MessageCircle, PackageCheck, Plus } from 'lucide-react'
import Reveal from '../lib/Reveal'
import { site, waLink } from '../data/site'

type FaqCategory = 'All' | 'Booking' | 'Turnaround' | 'Delivery'

type FaqItem = {
  id: string
  category: Exclude<FaqCategory, 'All'>
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    id: 'book-advance',
    category: 'Booking',
    question: 'How far in advance should we book our wedding or event?',
    answer:
      'For Hindu, Christian, and Muslim weddings or receptions, we recommend booking 1 to 3 months ahead—especially for auspicious muhurtham dates and weekends. Birthdays, baby showers, puberty ceremonies, and studio newborn sessions can usually be scheduled 1 to 2 weeks in advance subject to slot availability.',
  },
  {
    id: 'book-confirm',
    category: 'Booking',
    question: 'How do we confirm a booking and what payment terms apply?',
    answer:
      'Once we align on your event dates, coverage hours, and package inclusions, an advance booking deposit reserves your date exclusively on our calendar. The remaining balance is settled in stages around event completion and album or final film handover—with clear pricing shared upfront.',
  },
  {
    id: 'book-newborn',
    category: 'Booking',
    question: 'When is the ideal time to schedule a newborn baby photoshoot?',
    answer:
      'Our studio newborn packages are designed for babies under 45 days old, with 7 to 21 days being the sweet spot for sleepy, curled poses. Sessions include 1 to 3 hours of dedicated studio time with unhurried breaks for feeding and settling.',
  },
  {
    id: 'book-travel',
    category: 'Booking',
    question: 'Do you cover events outside Thiruninravur and Tiruvallur?',
    answer:
      'Yes. While our studio is in Lakshmipuram, Thiruninravur, our photography and videography team regularly covers weddings and celebrations across Avadi, Tiruvallur, greater Chennai, and nearby districts across Tamil Nadu. Any outstation travel is discussed transparently in your quotation.',
  },
  {
    id: 'turnaround-gallery',
    category: 'Turnaround',
    question: 'How long does it take to receive edited photos and wedding videos?',
    answer:
      'We share a curated set of sneak-peek highlights within a few days of your celebration. Full colour-corrected photographs are typically ready within 2 to 3 weeks, while edited full-length HD/4K wedding films and highlight reels take 3 to 5 weeks depending on event scale.',
  },
  {
    id: 'turnaround-album',
    category: 'Turnaround',
    question: 'What is the turnaround time for album design and printing?',
    answer:
      'After you shortlist your favourite photographs, our in-house designers prepare the digital album layout within 5 to 7 working days for your review and revisions. Once you approve the layout, printing and binding (Synthetic Tearable, Non-Tearable, or 7 Colour NT) are completed in 7 to 10 working days.',
  },
  {
    id: 'delivery-digital',
    category: 'Delivery',
    question: 'How are digital photos and edited videos delivered?',
    answer:
      'High-resolution edited photographs are shared via a private digital gallery link so you and your family can easily view and download them on mobile or desktop. Photo & Video packages also include your fully edited event film and highlight video on a pen drive.',
  },
  {
    id: 'delivery-prints',
    category: 'Delivery',
    question: 'How do we collect printed albums, photo frames, and keepsakes?',
    answer:
      `You can visit our studio in EB Colony, Lakshmipuram, Thiruninravur (${site.hours}) to inspect your finished albums and frames in person before taking them home, or request arranged local/courier delivery anywhere in Chennai and Tamil Nadu.`,
  },
  {
    id: 'delivery-custom',
    category: 'Delivery',
    question: 'Can we customize packages with drone, candid coverage, or extra sheets?',
    answer:
      'Yes—any package can be tailored with add-ons such as Candid Photography/Video, Drone coverage, 360° Spinner Video, QR Code Instant Photo Sharing, LED Walls, extra album sheets, or custom gift frames. Message us on WhatsApp for a quick estimate.',
  },
]

const categoryTabs: { id: FaqCategory; label: string; icon?: typeof CalendarCheck }[] = [
  { id: 'All', label: 'All questions' },
  { id: 'Booking', label: 'Booking', icon: CalendarCheck },
  { id: 'Turnaround', label: 'Turnaround', icon: Clock },
  { id: 'Delivery', label: 'Delivery', icon: PackageCheck },
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('All')
  const [openId, setOpenId] = useState<string | null>(faqs[0].id)

  const visibleFaqs =
    activeCategory === 'All' ? faqs : faqs.filter((item) => item.category === activeCategory)

  const handleCategoryChange = (cat: FaqCategory) => {
    setActiveCategory(cat)
    const nextList = cat === 'All' ? faqs : faqs.filter((item) => item.category === cat)
    if (nextList.length > 0 && !nextList.some((item) => item.id === openId)) {
      setOpenId(nextList[0].id)
    }
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-lavender bg-paper"
    >
      <div className="mx-auto max-w-[96rem] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left editorial intro */}
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">Common questions</p>
            <h2 id="faq-heading" className="font-display text-display-lg font-medium">
              Clarity before <em className="font-normal text-brand">you book.</em>
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink/70">
              Everything you need to know about reserving your date, editing and album turnaround
              times, and how your finished photographs and films are delivered.
            </p>

            <div className="mt-8 rounded-2xl border border-lavender bg-white p-5 shadow-[0_8px_28px_rgba(57,6,79,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                Need a custom quote?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                Have a multi-day celebration or specific date in mind? Check availability directly
                with our studio team.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={waLink('Hello JS Photo Artist, I have a question about booking and turnaround times for my event.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid !px-5 !py-2.5"
                >
                  <MessageCircle size={15} aria-hidden="true" /> Ask on WhatsApp
                </a>
                <a
                  href="/#contact"
                  className="btn border border-brand/30 bg-white !px-5 !py-2.5 text-plum hover:border-brand hover:bg-lavender/30"
                >
                  Enquiry form
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right filter tabs + accordion */}
          <Reveal delay={100} className="lg:col-span-8">
            <div
              role="group"
              aria-label="Filter frequently asked questions"
              className="mb-6 flex flex-wrap gap-2"
            >
              {categoryTabs.map(({ id, label, icon: Icon }) => {
                const active = activeCategory === id
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => handleCategoryChange(id)}
                    className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-200 ${
                      active
                        ? 'border-plum bg-plum text-white shadow-[0_6px_18px_rgba(57,6,79,0.18)]'
                        : 'border-lavender bg-white text-plum/80 hover:border-brand/40 hover:bg-lavender/30 hover:text-plum'
                    }`}
                  >
                    {Icon && <Icon size={14} aria-hidden="true" />}
                    {label}
                  </button>
                )
              })}
            </div>

            <div className="divide-y divide-lavender rounded-2xl border border-lavender bg-white shadow-[0_8px_32px_rgba(57,6,79,0.04)]">
              {visibleFaqs.map((item) => {
                const isOpen = openId === item.id
                const buttonId = `faq-btn-${item.id}`
                const panelId = `faq-panel-${item.id}`

                return (
                  <div key={item.id} className="transition-colors duration-200">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[#faf6fc] sm:px-7 sm:py-6"
                      >
                        <span className="space-y-1">
                          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand/80">
                            {item.category}
                          </span>
                          <span className="block font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                            {item.question}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={`mt-1 grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? 'rotate-45 border-plum bg-plum text-white'
                              : 'border-lavender bg-paper text-plum'
                          }`}
                        >
                          <Plus size={16} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="px-5 pb-6 pt-0 sm:px-7"
                    >
                      <p className="max-w-2xl text-[0.94rem] leading-relaxed text-ink/75">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
