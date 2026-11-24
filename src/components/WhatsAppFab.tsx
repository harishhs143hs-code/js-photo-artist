import { MessageCircle } from 'lucide-react'
import { site, waLink } from '../data/site'

export default function WhatsAppFab() {
  return (
    <a href={waLink(site.defaultWa)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-30 grid h-12 w-12 place-items-center rounded-full bg-[#1f8f4e] text-white shadow-lg md:hidden"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}>
      <MessageCircle size={22} />
    </a>
  )
}
