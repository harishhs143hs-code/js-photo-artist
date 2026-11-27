import { ArrowLeft, MessageCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="grid min-h-[70svh] place-items-center bg-paper px-5 py-24 text-ink">
      <section className="mx-auto max-w-2xl text-center" aria-labelledby="not-found-title">
        <p className="eyebrow mb-4 text-brand">404 · Page not found</p>
        <h1 id="not-found-title" className="font-display text-5xl font-medium sm:text-7xl">This page took a different turn.</h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-ink/70">The link may be outdated or the page may have moved. Visit our homepage, explore photography services, or contact us for help.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="/" className="btn-solid inline-flex items-center gap-2"><ArrowLeft size={17} /> Back to homepage</a>
          <a href="/#services" className="inline-flex items-center gap-2 border border-ink/20 px-5 py-3 text-sm font-semibold">Explore services</a>
          <a href="https://wa.me/919840157425" className="inline-flex items-center gap-2 border border-ink/20 px-5 py-3 text-sm font-semibold"><MessageCircle size={17} /> Contact us</a>
        </div>
      </section>
    </main>
  )
}
