import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'
import { useLockScroll } from '../lib/useLockScroll'

const links = [
  ['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Gallery', '#portfolio'],
  ['Albums & Printing', '#albums'], ['Pricing', '#packages'], ['Contact', '#contact'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useLockScroll(open)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 48)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    if (!open) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [open])
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-lavender/80 !bg-white/95 text-ink shadow-[0_4px_24px_rgba(57,6,79,0.06)] backdrop-blur-xl transition-all duration-300">
    <div className="mx-auto flex h-[4.25rem] max-w-[96rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
      <a href="#home" aria-label={`${site.name} – home`} className="relative z-50 flex items-center bg-paper px-3 py-1.5 max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:!bg-transparent"><img src={site.logo} alt={site.name} className="h-12 w-auto object-contain sm:h-14 max-md:h-14 ![filter:none]" width={1536} height={1024} /></a>
      <nav aria-label="Primary" className="hidden lg:block"><ul className="flex items-center gap-7 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink">{links.map(([l,h]) => <li key={h}><a href={h} className="py-2 transition-opacity hover:opacity-70">{l}</a></li>)}</ul></nav>
      <div className="flex items-center gap-3"><a href="#contact" className="hidden min-h-11 rounded-full bg-brand px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(112,19,154,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-plum active:scale-[0.98] sm:inline-flex sm:items-center">Enquire</a>
        <button type="button" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className="relative z-50 grid h-11 w-11 place-items-center rounded-full !text-ink transition-colors hover:bg-lavender/50 active:scale-95 lg:hidden">{open ? <X size={24}/> : <Menu size={24}/>}</button></div>
    </div>
    {open && <div id="mobile-menu" className="fixed inset-0 z-40 flex flex-col justify-center bg-gradient-to-br from-plum via-plum to-[#5b1b70] px-8 text-white lg:hidden"><ul className="space-y-1">{links.map(([l,h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 font-display text-4xl transition-all duration-300 hover:translate-x-1 hover:text-[#f5dce9] sm:text-5xl">{l}</a></li>)}</ul><a href="#contact" onClick={() => setOpen(false)} className="btn-light mt-10 self-start">Enquire now</a></div>}
  </header>
}
