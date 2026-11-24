// JS Photo Artist — verified studio details and images mapped to files in public/images.
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

// Keep every image URL aligned with the real, case-sensitive files in public/images.
const image = (folder: string, file: string) => `/images/${folder}/${file}`
export type Slide = { src: string; mobile: string; alt: string; pos: string; mobilePos: string }
export const heroSlides: Slide[] = [
  { src: image('hero', 'hero-01.webp'), mobile: image('hero', 'hero-01-mobile.webp'), alt: 'Wedding photography by JS Photo Artist', pos: '50% 48%', mobilePos: '50% 45%' },
  { src: image('hero', 'hero-02.webp'), mobile: image('hero', 'hero-02-mobile.webp'), alt: 'Wedding celebration photographed by JS Photo Artist', pos: '50% 45%', mobilePos: '50% 40%' },
  { src: image('hero', 'hero-03.webp'), mobile: image('hero', 'hero-03-mobile.webp'), alt: 'A wedding story captured by JS Photo Artist', pos: '50% 35%', mobilePos: '50% 30%' },
  { src: image('hero', 'hero-04.webp'), mobile: image('hero', 'hero-04-mobile.webp'), alt: 'Wedding moments from the JS Photo Artist portfolio', pos: '50% 45%', mobilePos: '50% 40%' },
  { src: image('hero', 'hero-05.webp'), mobile: image('hero', 'hero-05-mobile.webp'), alt: 'Photography portfolio highlight by JS Photo Artist', pos: '50% 45%', mobilePos: '50% 40%' },
]

export type Img = { src: string; alt: string; pos?: string }
export const intro = {
  a: { src: image('weddings', 'wedding-01.webp'), alt: 'Wedding photograph from the JS Photo Artist portfolio', pos: '50% 35%' } as Img,
  b: { src: image('weddings', 'wedding-02.webp'), alt: 'Wedding celebration photograph from the studio portfolio', pos: '50% 50%' } as Img,
}

export type ServiceGroup = { id: string; title: string; blurb: string; items: string[]; image: Img }
export const services: ServiceGroup[] = [
  { id: 'wedding', title: 'Wedding photography & videography', blurb: 'The rituals, people and small in-between moments that make your day yours.', items: ['Traditional wedding photography', 'Candid wedding photography', 'Wedding videography', 'Reception coverage', 'Wedding highlights'], image: { src: image('weddings', 'wedding-03.webp'), alt: 'Wedding photography portfolio image', pos: '50% 28%' } },
  { id: 'couple', title: 'Couple & pre-wedding portraits', blurb: 'Natural portraits that leave room for the two of you to be yourselves.', items: ['Couple photography', 'Outdoor couple sessions', 'Pre-wedding concepts', 'Post-wedding portraits'], image: { src: image('couples', 'couple-01.webp'), alt: 'Couple photography portfolio image', pos: '50% 42%' } },
  { id: 'events', title: 'Events & family celebrations', blurb: 'Family milestones and celebrations, remembered through honest photographs.', items: ['Puberty ceremonies', 'Birthdays', 'Family functions', 'Special occasions'], image: { src: image('events', 'event-01.webp'), alt: 'Family event photography portfolio image', pos: '50% 35%' } },
  { id: 'kids', title: 'Baby & kids photography', blurb: 'Bright, playful portraits that preserve each little personality.', items: ['Outdoor baby photoshoots', 'Kids photography', 'Creative portraits', 'Family portraits'], image: { src: image('baby-kids', 'kids-01.webp'), alt: 'Baby and kids photography portfolio image', pos: '50% 45%' } },
  { id: 'albums', title: 'Albums, prints & photo gifts', blurb: 'Bring favourite photographs off the screen and into keepsakes made to revisit.', items: ['Wedding and reception albums', 'Album designing', 'Customized photo frames', 'Customized photo gifts', 'Photo printing'], image: { src: image('albums', 'album-01.webp'), alt: 'Wedding album showcase photograph', pos: '50% 50%' } },
]

export type Category = 'Weddings' | 'Couples' | 'Baby & kids' | 'Family & events'
export const categories: Category[] = ['Weddings', 'Couples', 'Baby & kids', 'Family & events']
export type Work = { src: string; w: number; h: number; alt: string; title: string; cats: Category[]; pos?: string }
const work = (folder: string, file: string, title: string, category: Category, index: number): Work => ({
  src: image(folder, file),
  w: 1200,
  h: 800,
  title,
  alt: `${category} photography portfolio image ${index} by JS Photo Artist`,
  cats: [category],
  pos: '50% 45%',
})
export const portfolio: Work[] = [
  work('weddings', 'wedding-01.webp', 'Wedding Story 01', 'Weddings', 1),
  work('weddings', 'wedding-02.webp', 'Wedding Story 02', 'Weddings', 2),
  work('weddings', 'wedding-03.webp', 'Wedding Story 03', 'Weddings', 3),
  work('weddings', 'wedding-04.webp', 'Wedding Story 04', 'Weddings', 4),
  work('weddings', 'wedding-05.webp', 'Wedding Story 05', 'Weddings', 5),
  work('couples', 'couple-01.webp', 'Couple Portrait 01', 'Couples', 1),
  work('couples', 'couple-02.webp', 'Couple Portrait 02', 'Couples', 2),
  work('couples', 'couple-03.webp', 'Couple Portrait 03', 'Couples', 3),
  work('couples', 'couple-04.webp', 'Couple Portrait 04', 'Couples', 4),
  work('couples', 'couple-05.webp', 'Couple Portrait 05', 'Couples', 5),
  work('baby-kids', 'kids-01.webp', 'Little Moments 01', 'Baby & kids', 1),
  work('baby-kids', 'kids-02.webp', 'Little Moments 02', 'Baby & kids', 2),
  work('baby-kids', 'kids-03.webp', 'Little Moments 03', 'Baby & kids', 3),
  work('events', 'event-01.webp', 'Celebration 01', 'Family & events', 1),
  work('events', 'event-02.webp', 'Celebration 02', 'Family & events', 2),
  work('events', 'event-03.webp', 'Celebration 03', 'Family & events', 3),
]

export const albumShowcase = [
  { label: 'Wedding moments', img: { src: image('albums', 'album-01.webp'), alt: 'Wedding album showcase by JS Photo Artist' }, w: 1200, h: 800 },
  { label: 'Memories to keep', img: { src: image('albums', 'album-02.webp'), alt: 'Printed wedding album from the studio portfolio' }, w: 1200, h: 800 },
  { label: 'Made to revisit', img: { src: image('albums', 'album-03.webp'), alt: 'Photography album showcase from JS Photo Artist' }, w: 1200, h: 800 },
]
export const testimonials: { quote: string; name: string; occasion?: string }[] = []
