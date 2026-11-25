import { Instagram, MessageCircle, Phone } from 'lucide-react'
import { site, waLink } from '../data/site'

const actions = [
  { label: 'Call JS Photo Artist', href: site.phoneHref, icon: Phone, className: 'quick-action-call' },
  { label: 'Follow JS Photo Artist on Instagram', href: site.instagram, icon: Instagram, className: 'quick-action-instagram' },
  { label: 'Chat with JS Photo Artist on WhatsApp', href: waLink(site.defaultWa), icon: MessageCircle, className: 'quick-action-whatsapp' },
]

export default function WhatsAppFab() {
  return (
    <nav aria-label="Quick contact" className="quick-actions">
      {actions.map(({ label, href, icon: Icon, className }) => (
        <a key={label} href={href} target={href.startsWith('https://') ? '_blank' : undefined}
          rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}
          aria-label={label} title={label} className={`quick-action ${className}`}>
          <Icon size={21} strokeWidth={2} aria-hidden="true" />
        </a>
      ))}
    </nav>
  )
}
