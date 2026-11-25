// JS Photo Artist — original portfolio photographs plus the existing album cover asset.
const WA_NUMBER = '919840157425'
export const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

export const site = {
  name: 'JS Photo Artist',
  tagline: 'PHOTO | VIDEO | ALBUM | PRINTING',
  logo: '/images/logo/JS_Photo_Artist_Branding_Logo_Final.png',
  address: 'No. 212, EB Colony, Lakshmipuram, Thiruninravur, Ambattur, Tiruvallur – 602024, Tamil Nadu, India.',
  phone: '+91 98401 57425',
  phoneHref: 'tel:+919840157425',
  email: 'cgmedia4@gmail.com',
  instagram: 'https://www.instagram.com/jsphotoartist25/',
  hours: 'Monday–Saturday: 9:00 AM–9:00 PM · Sunday: 11:00 AM–9:00 PM',
  googleRating: '5.0',
  googleReviewCount: 45,
  googleBusinessUrl: 'https://www.google.com/maps/search/?api=1&query=JS+Photo+Artist+Thiruninravur',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=No%20212%2C%20EB%20Colony%2C%20Lakshmipuram%2C%20Thiruninravur%2C%20Tiruvallur%20602024%2C%20Tamil%20Nadu%2C%20India',
  mapsEmbed: 'https://www.google.com/maps?q=No%20212%2C%20EB%20Colony%2C%20Lakshmipuram%2C%20Thiruninravur%2C%20Tiruvallur%20602024%2C%20Tamil%20Nadu%2C%20India&output=embed',
  defaultWa: 'Hello JS Photo Artist, I would like to enquire about your photography services. Please share more details.',
}

// Original client-provided portfolio photographs. Do not substitute generated or stock images.
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
  'album-01.webp',
] as const
const photo = (index: number) => `/images/albums/${uploadedPhotos[index]}`

export type Slide = { src: string; mobile: string; alt: string; pos: string; mobilePos: string }
// Use five distinct original studio photographs for the hero. These are removed from the
// portfolio list below so no photograph is repeated between the slideshow and gallery.
export const featuredPhotoIndexes = [0, 1, 2, 3, 4] as const
export const heroSlides: Slide[] = []

export type Img = { src: string; alt: string; pos?: string }
export const intro = {
  a: { src: '/images/weddings/wedding-04.webp', alt: 'Wedding celebration photographed by JS Photo Artist', pos: '50% 50%' } as Img,
  b: { src: '/images/weddings/wedding-05.webp', alt: 'Wedding couple portrait by JS Photo Artist', pos: '50% 50%' } as Img,
}

export type ServiceGroup = { id: string; title: string; blurb: string; items: string[]; image: Img }
export const services: ServiceGroup[] = [
  { id: 'wedding', title: 'Wedding photography & videography', blurb: 'The rituals, people and small in-between moments that make your day yours.', items: ['Traditional wedding photography', 'Candid wedding photography', 'Wedding videography', 'Reception coverage', 'Wedding highlights'], image: { src: '/images/weddings/wedding-01.webp', alt: 'Wedding ceremony photography by JS Photo Artist', pos: '50% 50%' } },
  { id: 'couple', title: 'Couple & pre-wedding portraits', blurb: 'Natural portraits that leave room for the two of you to be yourselves.', items: ['Couple photography', 'Outdoor couple sessions', 'Pre-wedding concepts', 'Post-wedding portraits'], image: { src: '/images/couples/couple-01.webp', alt: 'Couple portrait session by JS Photo Artist', pos: '50% 50%' } },
  { id: 'events', title: 'Events & family celebrations', blurb: 'Family milestones and celebrations, remembered through honest photographs.', items: ['Puberty ceremonies', 'Birthdays', 'Family functions', 'Special occasions'], image: { src: '/images/events/event-01.webp', alt: 'Family celebration photographed by JS Photo Artist', pos: '50% 50%' } },
  { id: 'kids', title: 'Baby & kids photography', blurb: 'Bright, playful portraits that preserve each little personality.', items: ['Outdoor baby photoshoots', 'Kids photography', 'Creative portraits', 'Family portraits'], image: { src: '/images/baby-kids/kids-01.webp', alt: 'Baby and kids portrait photography by JS Photo Artist', pos: '50% 50%' } },
  { id: 'albums', title: 'Albums, prints & photo gifts', blurb: 'Bring favourite photographs off the screen and into keepsakes made to revisit.', items: ['Wedding and reception albums', 'Album designing', 'Customized photo frames', 'Customized photo gifts', 'Photo printing'], image: { src: '/images/printing/print-01.webp', alt: 'Photo printing and keepsakes by JS Photo Artist', pos: '50% 50%' } },
]

export type Category = 'Portfolio'
export const categories: Category[] = ['Portfolio']
export type Work = { src: string; w: number; h: number; alt: string; title: string; cats: Category[]; pos?: string }
const portfolioTitles = [
  'Bridal Mehndi Photography',
  'Blue Dreams – Baby Photoshoot',
  'Little Sunshine – Baby Photoshoot',
]

// Omit the final album-cover asset from Selected Works; it is not a portfolio photograph.
const excludedPortfolioIndexes = [15] as const
export const portfolio: Work[] = []

export const albumShowcase = []
export const testimonials: { quote: string; name: string; occasion?: string }[] = []
