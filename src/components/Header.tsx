import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'
import { useLockScroll } from '../lib/useLockScroll'

const links = [
  ['Home', '/'], ['About', '/#about'], ['Services', '/#services'], ['Gallery', '/#portfolio'],
  ['Pricing', '/pricing'], ['Contact', '/#contact'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useLockScroll(open)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 48)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

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
            <a href="/#contact" className="hidden min-h-11 rounded-full bg-brand px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(112,19,154,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum active:scale-[0.98] sm:inline-flex sm:items-center">Enquire</a>
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

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-[70] flex h-[100svh] min-h-screen flex-col overflow-y-auto overscroll-contain bg-gradient-to-br from-[#25082f] via-[#39064f] to-[#5b1b70] px-7 pb-8 pt-5 text-white sm:px-10 lg:hidden"
        >
          <div className="flex min-h-16 items-center justify-end border-b border-white/15 pb-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 active:scale-95"
            >
              <X size={25} />
            </button>
          </div>

          <nav aria-label="Mobile" className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-8">
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
