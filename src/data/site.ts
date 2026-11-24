// JS Photo Artist — the website uses only the 15 photographs uploaded in public/images/albums.
const WA_NUMBER = '919840157425'
export const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

export const site = {
  name: 'JS Photo Artist',
  tagline: 'PHOTO | VIDEO | ALBUM | PRINTING',
  logo: '/images/logo/logo.svg',
  address: 'No. 212, EB Colony, Lakshmipuram, Thiruninravur, Ambattur, Tiruvallur – 602024, Tamil Nadu, India.',
  phone: '+91 98401 57425',
  phoneHref: 'tel:+919840157425',
  email: 'cgmedia4@gmail.com',
  instagram: 'https://www.instagram.com/jsphotoartist25/',
  hours: 'Opens at 9:00 AM',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=No%20212%2C%20EB%20Colony%2C%20Lakshmipuram%2C%20Thiruninravur%2C%20Tiruvallur%20602024%2C%20Tamil%20Nadu%2C%20India',
  mapsEmbed: 'https://www.google.com/maps?q=No%20212%2C%20EB%20Colony%2C%20Lakshmipuram%2C%20Thiruninravur%2C%20Tiruvallur%20602024%2C%20Tamil%20Nadu%2C%20India&output=embed',
  defaultWa: 'Hello JS Photo Artist, I would like to enquire about your photography services. Please share more details.',
}

// These are the 15 original uploaded photographs. Do not substitute generated or stock images.
export const uploadedPhotos = [
  '001_copy.webp',
  '006.jpg.jpeg',
  '008.jpg.jpeg',
  '015.webp',
  '017.webp',
  '018.webp',
  '019.webp',
  '022.webp',
  '023.webp',
  '025.webp',
  '028.webp',
  '030.webp',
  '031.webp',
  '032.webp',
  '034.webp',
] as const
const photo = (index: number) => `/images/albums/${uploadedPhotos[index]}`

export type Slide = { src: string; mobile: string; alt: string; pos: string; mobilePos: string }
export const heroSlides: Slide[] = uploadedPhotos.slice(0, 5).map((_, i) => ({
  src: photo(i), mobile: photo(i),
  alt: `JS Photo Artist portfolio photograph ${i + 1}`,
  pos: '50% 50%', mobilePos: '50% 50%',
}))

export type Img = { src: string; alt: string; pos?: string }
export const intro = {
  a: { src: photo(0), alt: 'JS Photo Artist portfolio photograph', pos: '50% 50%' } as Img,
  b: { src: photo(1), alt: 'JS Photo Artist portfolio photograph', pos: '50% 50%' } as Img,
}

export type ServiceGroup = { id: string; title: string; blurb: string; items: string[]; image: Img }
export const services: ServiceGroup[] = [
  { id: 'wedding', title: 'Wedding photography & videography', blurb: 'The rituals, people and small in-between moments that make your day yours.', items: ['Traditional wedding photography', 'Candid wedding photography', 'Wedding videography', 'Reception coverage', 'Wedding highlights'], image: { src: photo(2), alt: 'JS Photo Artist portfolio photograph', pos: '50% 50%' } },
  { id: 'couple', title: 'Couple & pre-wedding portraits', blurb: 'Natural portraits that leave room for the two of you to be yourselves.', items: ['Couple photography', 'Outdoor couple sessions', 'Pre-wedding concepts', 'Post-wedding portraits'], image: { src: photo(3), alt: 'JS Photo Artist portfolio photograph', pos: '50% 50%' } },
  { id: 'events', title: 'Events & family celebrations', blurb: 'Family milestones and celebrations, remembered through honest photographs.', items: ['Puberty ceremonies', 'Birthdays', 'Family functions', 'Special occasions'], image: { src: photo(4), alt: 'JS Photo Artist portfolio photograph', pos: '50% 50%' } },
  { id: 'kids', title: 'Baby & kids photography', blurb: 'Bright, playful portraits that preserve each little personality.', items: ['Outdoor baby photoshoots', 'Kids photography', 'Creative portraits', 'Family portraits'], image: { src: photo(5), alt: 'JS Photo Artist portfolio photograph', pos: '50% 50%' } },
  { id: 'albums', title: 'Albums, prints & photo gifts', blurb: 'Bring favourite photographs off the screen and into keepsakes made to revisit.', items: ['Wedding and reception albums', 'Album designing', 'Customized photo frames', 'Customized photo gifts', 'Photo printing'], image: { src: photo(6), alt: 'JS Photo Artist portfolio photograph', pos: '50% 50%' } },
]

export type Category = 'Portfolio'
export const categories: Category[] = ['Portfolio']
export type Work = { src: string; w: number; h: number; alt: string; title: string; cats: Category[]; pos?: string }
export const portfolio: Work[] = uploadedPhotos.map((_, i) => ({
  src: photo(i), w: 1200, h: 800,
  title: `Portfolio Photograph ${String(i + 1).padStart(2, '0')}`,
  alt: `JS Photo Artist original portfolio photograph ${i + 1}`,
  cats: ['Portfolio'], pos: '50% 50%',
}))

export const albumShowcase = [
  { label: 'Featured photograph 01', img: { src: photo(7), alt: 'JS Photo Artist original photograph' }, w: 1200, h: 800 },
  { label: 'Featured photograph 02', img: { src: photo(8), alt: 'JS Photo Artist original photograph' }, w: 1200, h: 800 },
  { label: 'Featured photograph 03', img: { src: photo(9), alt: 'JS Photo Artist original photograph' }, w: 1200, h: 800 },
]
export const testimonials: { quote: string; name: string; occasion?: string }[] = []
