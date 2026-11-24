// ─────────────────────────────────────────────────────────────
// Central content + image configuration.
// To swap a photo, either overwrite the file in /public/images
// (keeping the same name) or change the `src` path below.
// ─────────────────────────────────────────────────────────────
const WA_NUMBER = '919840157425'
export const waLink = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

export const site = {
  name: 'JS Photo Artist',
  tagline: 'PHOTO | VIDEO | ALBUM | PRINTING',
  logo: '/images/logo/logo.svg', // replace with the official logo file (keep its original proportions)
  address: 'No. 212, EB Colony, Lakshmipuram, Thiruninravur, Ambattur, Tiruvallur – 602024, Tamil Nadu, India.',
  phone: '+91 98401 57425',
  phoneHref: 'tel:+919840157425',
  email: 'cgmedia4@gmail.com',
  instagram: 'https://www.instagram.com/jsphotoartist25/',
  hours: 'Opens at 9:00 AM',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=No%20212%2C%20EB%20Colony%2C%20Lakshmipuram%2C%20Thiruninravur%2C%20Tiruvallur%20602024%2C%20Tamil%20Nadu%2C%20India',
  mapsEmbed:
    'https://www.google.com/maps?q=No%20212%2C%20EB%20Colony%2C%20Lakshmipuram%2C%20Thiruninravur%2C%20Tiruvallur%20602024%2C%20Tamil%20Nadu%2C%20India&output=embed',
  defaultWa: 'Hello JS Photo Artist, I would like to enquire about your photography services. Please share more details.',
}

export type Slide = { src: string; mobile: string; alt: string; pos: string; mobilePos: string }
export const heroSlides: Slide[] = [1, 2, 3, 4, 5].map((n) => ({
  src: `/images/hero/hero-0${n}.webp`,
  mobile: `/images/hero/hero-0${n}-mobile.webp`,
  alt: 'Sample photograph (temporary placeholder)',
  pos: '70% 40%',
  mobilePos: '50% 35%',
}))

export type Img = { src: string; alt: string; pos?: string }
export const intro = {
  a: { src: '/images/weddings/wedding-01.webp', alt: 'Sample wedding portrait', pos: '50% 30%' } as Img,
  b: { src: '/images/couples/couple-02.webp', alt: 'Sample couple portrait', pos: '50% 40%' } as Img,
}

export type ServiceGroup = { id: string; title: string; blurb: string; items: string[]; image: Img }
export const services: ServiceGroup[] = [
  { id: 'wedding', title: 'Wedding photography & videography', blurb: 'From the muhurtham to the reception, covered quietly and completely.',
    items: ['Traditional wedding photography', 'Candid wedding photography', 'Wedding videography', 'Reception coverage', 'Wedding highlights'],
    image: { src: '/images/weddings/wedding-03.webp', alt: 'Sample wedding photograph', pos: '50% 30%' } },
  { id: 'couple', title: 'Pre-wedding & post-wedding', blurb: 'Time set aside for the two of you, away from the crowd.',
    items: ['Couple photography', 'Outdoor couple sessions', 'Pre-wedding concepts', 'Post-wedding shoots'],
    image: { src: '/images/couples/couple-02.webp', alt: 'Sample couple photograph', pos: '50% 40%' } },
  { id: 'events', title: 'Events & occasions', blurb: 'Family milestones, recorded while they are still happening.',
    items: ['Puberty ceremonies', 'Birthdays', 'Family functions', 'Special occasions'],
    image: { src: '/images/events/event-02.webp', alt: 'Sample event photograph', pos: '50% 35%' } },
  { id: 'kids', title: 'Baby & kids', blurb: 'Gentle, unhurried sessions for the smallest members of the family.',
    items: ['Outdoor baby photoshoots', 'Kids photography', 'Creative portraits', 'Family portraits'],
    image: { src: '/images/baby-kids/kids-02.webp', alt: 'Sample kids photograph', pos: '50% 40%' } },
  { id: 'albums', title: 'Albums & printing', blurb: 'The photographs, finished properly and made to hold.',
    items: ['Wedding albums', 'Reception albums', 'Album designing', 'Customized photo frames', 'Customized photo gifts', 'Photo printing'],
    image: { src: '/images/albums/album-01.webp', alt: 'Sample album spread', pos: '50% 50%' } },
  { id: 'cinematic', title: 'Cinematic & media', blurb: 'Moving pictures, aerial views and invitations made to be shared.',
    items: ['Cinematic photography', 'Aerial helicam coverage', 'Promotional videos', 'WhatsApp wedding invitations'],
    image: { src: '/images/cinematic/cinematic-01.webp', alt: 'Sample cinematic frame', pos: '50% 50%' } },
]

export type Category = 'Weddings' | 'Candid moments' | 'Traditional weddings' | 'Couple portraits' | 'Pre-wedding' | 'Post-wedding' | 'Baby & kids' | 'Events' | 'Cinematic'
export const categories: Category[] = ['Weddings', 'Candid moments', 'Traditional weddings', 'Couple portraits', 'Pre-wedding', 'Post-wedding', 'Baby & kids', 'Events', 'Cinematic']
export type Work = { src: string; w: number; h: number; alt: string; cats: Category[]; pos?: string }
const w = (src: string, wd: number, h: number, cats: Category[], alt: string, pos = '50% 35%'): Work => ({ src, w: wd, h, cats, alt, pos })
export const portfolio: Work[] = [
  w('/images/weddings/wedding-01.webp', 1200, 1600, ['Weddings', 'Traditional weddings'], 'Sample traditional wedding portrait'),
  w('/images/weddings/wedding-02.webp', 1600, 1067, ['Weddings', 'Candid moments'], 'Sample candid wedding moment'),
  w('/images/couples/couple-01.webp', 1200, 1600, ['Couple portraits'], 'Sample couple portrait'),
  w('/images/baby-kids/kids-01.webp', 1200, 1500, ['Baby & kids'], 'Sample baby photograph'),
  w('/images/weddings/wedding-03.webp', 1200, 1600, ['Weddings', 'Candid moments'], 'Sample candid wedding portrait'),
  w('/images/events/event-01.webp', 1600, 1067, ['Events'], 'Sample event photograph'),
  w('/images/couples/couple-03.webp', 1200, 1600, ['Pre-wedding', 'Couple portraits'], 'Sample pre-wedding portrait'),
  w('/images/cinematic/cinematic-01.webp', 1600, 900, ['Cinematic'], 'Sample cinematic frame'),
  w('/images/weddings/wedding-04.webp', 1600, 1067, ['Weddings', 'Traditional weddings'], 'Sample traditional ceremony'),
  w('/images/couples/couple-04.webp', 1600, 1067, ['Post-wedding'], 'Sample post-wedding photograph'),
  w('/images/baby-kids/kids-03.webp', 1200, 1600, ['Baby & kids'], 'Sample kids portrait'),
  w('/images/couples/couple-02.webp', 1600, 1067, ['Couple portraits', 'Pre-wedding'], 'Sample outdoor couple session'),
  w('/images/events/event-02.webp', 1200, 1600, ['Events'], 'Sample celebration portrait'),
  w('/images/weddings/wedding-05.webp', 1200, 1500, ['Weddings', 'Candid moments'], 'Sample candid moment'),
  w('/images/cinematic/cinematic-02.webp', 1200, 1600, ['Cinematic'], 'Sample cinematic portrait'),
  w('/images/couples/couple-05.webp', 1200, 1600, ['Post-wedding', 'Couple portraits'], 'Sample post-wedding portrait'),
  w('/images/baby-kids/kids-02.webp', 1600, 1067, ['Baby & kids'], 'Sample outdoor kids shoot'),
  w('/images/events/event-03.webp', 1600, 1067, ['Events'], 'Sample family function'),
]

// Add a real video URL to `src` (an .mp4 path in /public/videos, or a YouTube/Vimeo EMBED url).
// Leave `src` empty to show the "video coming soon" state.
export type Film = { title: string; note: string; thumb: string; src: string }
export const films: Film[] = [
  { title: 'Wedding highlight film', note: 'Sample slot', thumb: '/images/films/film-01.webp', src: '' },
  { title: 'Pre-wedding story', note: 'Sample slot', thumb: '/images/films/film-02.webp', src: '' },
  { title: 'Reception & celebration', note: 'Sample slot', thumb: '/images/films/film-03.webp', src: '' },
]

export const albumShowcase: { label: string; img: Img; w: number; h: number }[] = [
  { label: 'Wedding albums', img: { src: '/images/albums/album-01.webp', alt: 'Sample wedding album' }, w: 1400, h: 1000 },
  { label: 'Reception albums', img: { src: '/images/albums/album-02.webp', alt: 'Sample reception album' }, w: 1100, h: 1400 },
  { label: 'Album designing', img: { src: '/images/albums/album-03.webp', alt: 'Sample album layout' }, w: 1400, h: 1000 },
  { label: 'Customized frames', img: { src: '/images/albums/album-04.webp', alt: 'Sample photo frame' }, w: 1100, h: 1400 },
  { label: 'Photo prints', img: { src: '/images/printing/print-01.webp', alt: 'Sample photo prints' }, w: 1200, h: 1200 },
  { label: 'Photo gifts', img: { src: '/images/printing/print-02.webp', alt: 'Sample photo gift' }, w: 1200, h: 1200 },
]

export const instagramTiles = [1, 2, 3, 4, 5, 6].map((n) => `/images/instagram/insta-0${n}.webp`)

// Add real, approved reviews here. The section stays hidden while this list is empty.
export type Testimonial = { quote: string; name: string; occasion?: string }
export const testimonials: Testimonial[] = []
