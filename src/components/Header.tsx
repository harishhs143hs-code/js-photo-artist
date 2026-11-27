import { useEffect, useState, type FormEvent } from 'react'
import { Menu, X, MessageCircle, Sparkles, ArrowUpRight } from 'lucide-react'
import { site, services, waLink } from '../data/site'
import { useLockScroll } from '../lib/useLockScroll'

const links = [
  ['Home', '/'], ['About', '/#about'], ['Services', '/#services'], ['Gallery', '/#portfolio'],
  ['Pricing', '/pricing'], ['Contact', '/#contact'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', location: '', message: '' })
  useLockScroll(open || enquiryOpen)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 48)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    if (!open && !enquiryOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); setEnquiryOpen(false) }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, enquiryOpen])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 border-b border-lavender/80 !bg-white/95 text-ink shadow-[0_4px_24px_rgba(57,6,79,0.06)] backdrop-blur-xl transition-all duration-300 ${scrolled ? 'shadow-[0_6px_28px_rgba(57,6,79,0.10)]' : ''}`}>
        <div className="mx-auto flex h-[4.25rem] max-w-[96rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <a href="/" aria-label={`${site.name} – home`} className="relative z-50 flex items-center bg-paper px-3 py-1.5 max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:!bg-transparent">
            <img src={site.logo} alt={site.name} className="h-12 w-auto object-contain sm:h-14 max-md:h-14 ![filter:none]" width={1536} height={1024} />
          </a>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink">
              {links.map(([label, href]) => <li key={href}><a href={href} className="py-2 transition-opacity hover:opacity-70">{label}</a></li>)}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setEnquiryOpen(true)} className="hidden min-h-11 rounded-full bg-brand px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(112,19,154,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum hover:shadow-[0_12px_28px_rgba(112,19,154,0.28)] active:scale-[0.98] sm:inline-flex sm:items-center">Enquire</button>
            <button
              type="button"
              onClick={() => setOpen(value => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative z-50 grid h-11 w-11 place-items-center rounded-full !text-ink transition-colors hover:bg-lavender/50 active:scale-95 lg:hidden"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>


      {enquiryOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[#1b0822]/65 p-0 backdrop-blur-md animate-[fade-in_.25s_ease-out] sm:items-center sm:p-5" onClick={() => setEnquiryOpen(false)}>
          <section role="dialog" aria-modal="true" aria-labelledby="enquiry-title" className="relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] border border-white/70 bg-white shadow-[0_30px_100px_rgba(28,4,40,.35)] animate-[modal-pop_.35s_cubic-bezier(.2,.8,.2,1)] sm:rounded-[2rem]" onClick={e => e.stopPropagation()}>
            <div className="relative overflow-hidden bg-gradient-to-br from-[#25082f] via-[#39064f] to-[#6b267d] px-6 py-7 text-white sm:px-9 sm:py-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-20 size-56 rounded-full bg-fuchsia-300/15 blur-3xl" />
              <button type="button" aria-label="Close enquiry form" onClick={() => setEnquiryOpen(false)} className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"><X size={20}/></button>
              <p className="relative mb-3 inline-flex items-center gap-2 text-[.68rem] font-semibold uppercase tracking-[.2em] text-white/70"><Sparkles size={14}/> Let’s make it memorable</p>
              <h2 id="enquiry-title" className="relative max-w-lg font-display text-3xl font-medium leading-tight sm:text-4xl">Tell us about your <em className="font-normal text-[#f2cfe9]">special day.</em></h2>
              <p className="relative mt-3 max-w-lg text-sm leading-6 text-white/70">Share a few details and we’ll help you find the right photography package.</p>
            </div>
            <form className="grid gap-4 px-6 py-6 sm:grid-cols-2 sm:gap-5 sm:px-9 sm:py-8" onSubmit={(e: FormEvent<HTMLFormElement>) => { e.preventDefault(); const msg = `Hello JS Photo Artist, I would like to enquire.\\nName: ${form.name}\\nPhone: ${form.phone}${form.service ? `\\nService: ${form.service}` : ''}${form.date ? `\\nEvent date: ${form.date}` : ''}${form.location ? `\\nLocation: ${form.location}` : ''}${form.message ? `\\nMessage: ${form.message}` : ''}`; window.open(waLink(msg), '_blank', 'noopener,noreferrer'); }}>
              <label className="block text-sm font-medium text-ink">Your name *<input required minLength={2} autoComplete="name" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} placeholder="Name" className="mt-2 w-full rounded-xl border border-lavender bg-[#fcf9fd] px-4 py-3.5 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"/></label>
              <label className="block text-sm font-medium text-ink">Phone number *<input required type="tel" minLength={10} autoComplete="tel" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} placeholder="Your contact number" className="mt-2 w-full rounded-xl border border-lavender bg-[#fcf9fd] px-4 py-3.5 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"/></label>
              <label className="block text-sm font-medium text-ink">Event / service<select value={form.service} onChange={e=>setForm(p=>({...p,service:e.target.value}))} className="mt-2 w-full rounded-xl border border-lavender bg-[#fcf9fd] px-4 py-3.5 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"><option value="">Choose a service</option>{services.map(s=><option key={s.id} value={s.title}>{s.title}</option>)}<option value="Other">Other</option></select></label>
              <label className="block text-sm font-medium text-ink">Event date<input type="date" value={form.date} onChange={e=>setForm(p=>({...p,date:e.target.value}))} className="mt-2 w-full rounded-xl border border-lavender bg-[#fcf9fd] px-4 py-3.5 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"/></label>
              <label className="block text-sm font-medium text-ink sm:col-span-2">Event location<input value={form.location} onChange={e=>setForm(p=>({...p,location:e.target.value}))} placeholder="City / venue" className="mt-2 w-full rounded-xl border border-lavender bg-[#fcf9fd] px-4 py-3.5 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"/></label>
              <label className="block text-sm font-medium text-ink sm:col-span-2">Anything else? <textarea rows={3} value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} placeholder="Tell us about your occasion, package or special requests…" className="mt-2 w-full resize-y rounded-xl border border-lavender bg-[#fcf9fd] px-4 py-3.5 text-sm outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10"/></label>
              <div className="sm:col-span-2">
                <button type="submit" className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(112,19,154,.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-plum hover:shadow-[0_15px_32px_rgba(112,19,154,.3)] active:translate-y-0"><MessageCircle size={18}/> Continue to WhatsApp <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></button>
                <p className="mt-3 text-center text-xs leading-5 text-ink/50">Your details are prepared in WhatsApp. Review and send the message to complete your enquiry.</p>
              </div>
            </form>
          </section>
        </div>
      )}

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-[4.25rem] z-[70] flex h-[calc(100svh-4.25rem)] flex-col overflow-y-auto overscroll-contain bg-gradient-to-br from-[#25082f] via-[#39064f] to-[#5b1b70] px-7 pb-8 pt-5 text-white sm:px-10 lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex w-full max-w-md flex-1 flex-col justify-start py-6">
            <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/55">Explore</p>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 font-display text-[2rem] leading-tight transition-all duration-200 hover:translate-x-1 hover:text-[#f5dce9] sm:text-4xl"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mx-auto w-full max-w-md">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-light flex min-h-14 w-full items-center justify-center">
              Enquire now
            </a>
            <p className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.2em] text-white/45">Photo · Video · Album · Printing</p>
          </div>
        </div>
      )}
    </>
  )
}
