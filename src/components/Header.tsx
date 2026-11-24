import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'
import { useLockScroll } from '../lib/useLockScroll'

const links = [
  ['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Gallery', '#portfolio'],
  ['Albums & Printing', '#albums'], ['Contact', '#contact'],
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
  const light = !scrolled && !open
  return <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${scrolled ? 'border-b border-lavender bg-paper' : 'bg-transparent'}`}>
    <div className="mx-auto flex h-[4.25rem] max-w-[96rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
      <a href="#home" aria-label={`${site.name} – home`} className="relative z-50 flex items-center bg-paper px-3 py-1.5"><img src={site.logo} alt={site.name} className="h-8 w-auto sm:h-9" width={160} height={36} /></a>
      <nav aria-label="Primary" className="hidden lg:block"><ul className={`flex items-center gap-7 text-[0.78rem] font-semibold uppercase tracking-[0.14em] ${light ? 'text-white' : 'text-ink'}`}>{links.map(([l,h]) => <li key={h}><a href={h} className="py-2 transition-opacity hover:opacity-70">{l}</a></li>)}</ul></nav>
      <div className="flex items-center gap-3"><a href="#contact" className={`hidden px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] transition-colors sm:inline-block ${light ? 'bg-white text-plum hover:bg-lavender' : 'bg-brand text-white hover:bg-plum'}`}>Enquire</a>
        <button type="button" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className={`relative z-50 grid h-11 w-11 place-items-center lg:hidden ${light ? 'text-white' : 'text-ink'}`}>{open ? <X size={24}/> : <Menu size={24}/>}</button></div>
    </div>
    {open && <div id="mobile-menu" className="fixed inset-0 z-40 flex flex-col justify-center bg-plum px-8 text-white lg:hidden"><ul className="space-y-1">{links.map(([l,h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2.5 font-display text-4xl sm:text-5xl">{l}</a></li>)}</ul><a href="#contact" onClick={() => setOpen(false)} className="btn-light mt-10 self-start">Enquire now</a></div>}
  </header>
}
