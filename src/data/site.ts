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

export type Slide = { src: string; mobile: string; alt: string; pos: string; mobilePos: string }
export const heroSlides: Slide[] = [
  {
    src: '/images/albums/022 copy.webp',
    mobile: '/images/albums/022 copy.webp',
    alt: 'Couple chillout portrait by JS Photo Artist',
    pos: '50% 40%',
    mobilePos: '50% 40%',
  },
  {
    src: '/images/albums/001_copy copy.webp',
    mobile: '/images/albums/001_copy copy.webp',
    alt: 'Traditional hand holding ceremony by JS Photo Artist',
    pos: '50% 50%',
    mobilePos: '50% 50%',
  },
  {
    src: '/images/albums/015 copy.webp',
    mobile: '/images/albums/015 copy.webp',
    alt: 'Couple silhouette portrait by JS Photo Artist',
    pos: '50% 30%',
    mobilePos: '50% 30%',
  },
  {
    src: '/images/albums/018 copy.webp',
    mobile: '/images/albums/018 copy.webp',
    alt: 'Baby shower maternity photography by JS Photo Artist',
    pos: '50% 50%',
    mobilePos: '50% 50%',
  },
]

export type Img = { src: string; alt: string; pos?: string }

export type ServiceGroup = { id: string; title: string; blurb: string; items: string[]; image: Img }
export const services: ServiceGroup[] = [
  {
    id: 'wedding',
    title: 'Wedding photography & videography',
    blurb: 'The rituals, people and small in-between moments that make your day yours.',
    items: ['Traditional wedding photography', 'Candid wedding photography', 'Wedding videography', 'Reception coverage', 'Wedding highlights'],
    image: { src: '/images/weddings/wedding-01.webp', alt: 'Wedding ceremony photography by JS Photo Artist', pos: '50% 50%' },
  },
  {
    id: 'couple',
    title: 'Couple & pre-wedding portraits',
    blurb: 'Natural portraits that leave room for the two of you to be yourselves.',
    items: ['Couple photography', 'Outdoor couple sessions', 'Pre-wedding concepts', 'Post-wedding portraits'],
    image: { src: '/images/couples/couple-02.webp', alt: 'Couple portrait session by JS Photo Artist', pos: '50% 40%' },
  },
  {
    id: 'events',
    title: 'Events & family celebrations',
    blurb: 'Family milestones and celebrations, remembered through honest photographs.',
    items: ['Puberty ceremonies', 'Birthdays', 'Family functions', 'Special occasions'],
    image: { src: '/images/events/event-02.webp', alt: 'Family celebration photographed by JS Photo Artist', pos: '50% 40%' },
  },
  {
    id: 'kids',
    title: 'Baby & kids photography',
    blurb: 'Bright, playful portraits that preserve each little personality.',
    items: ['Outdoor baby photoshoots', 'Kids photography', 'Creative portraits', 'Family portraits'],
    image: { src: '/images/baby-kids/kids-02.webp', alt: 'Baby and kids portrait photography by JS Photo Artist', pos: '50% 30%' },
  },
  {
    id: 'films',
    title: 'Cinematic films & reels',
    blurb: 'Your wedding day crafted into a film you will want to watch again and again.',
    items: ['Wedding films', 'Highlight reels', 'Cinematic edits', 'Instagram reels'],
    image: { src: '/images/films/film-01.webp', alt: 'Cinematic wedding film by JS Photo Artist', pos: '50% 50%' },
  },
  {
    id: 'albums',
    title: 'Albums, prints & photo gifts',
    blurb: 'Bring favourite photographs off the screen and into keepsakes made to revisit.',
    items: ['Wedding and reception albums', 'Album designing', 'Customized photo frames', 'Customized photo gifts', 'Photo printing'],
    image: { src: '/images/printing/print-02.webp', alt: 'Photo printing and keepsakes by JS Photo Artist', pos: '50% 50%' },
  },
]

export type Category = 'Weddings' | 'Couples' | 'Baby & Kids' | 'Events' | 'Films'
export const categories: Category[] = ['Weddings', 'Couples', 'Baby & Kids', 'Events', 'Films']

export type Work = { src: string; w: number; h: number; alt: string; title: string; cats: Category[]; pos?: string }

export const portfolio: Work[] = [
  // — Weddings —
  { src: '/images/albums/001_copy.webp', w: 1200, h: 800, alt: 'Traditional wedding ceremony hand holding', title: 'Traditional Ceremony', cats: ['Weddings'], pos: '50% 50%' },
  { src: '/images/albums/006.jpg.jpeg', w: 1200, h: 800, alt: 'Wedding moment by JS Photo Artist', title: 'Wedding Moment', cats: ['Weddings'], pos: '50% 50%' },
  { src: '/images/albums/019.webp', w: 1200, h: 800, alt: 'Wedding coverage by JS Photo Artist', title: 'Wedding Story', cats: ['Weddings'], pos: '50% 50%' },
  { src: '/images/albums/030.webp', w: 1200, h: 800, alt: 'Wedding photography JS Photo Artist', title: 'Wedding Frame', cats: ['Weddings'], pos: '50% 50%' },
  { src: '/images/albums/031.webp', w: 800, h: 1000, alt: 'Wedding portrait by JS Photo Artist', title: 'Wedding Portrait', cats: ['Weddings'], pos: '50% 40%' },

  // — Couples —
  { src: '/images/albums/023.webp', w: 800, h: 1000, alt: 'Couple moment by JS Photo Artist', title: 'Intimate Moment', cats: ['Couples'], pos: '50% 50%' },
  { src: '/images/albums/025.webp', w: 1200, h: 800, alt: 'Couple outdoor session JS Photo Artist', title: 'Garden Session', cats: ['Couples'], pos: '50% 50%' },
  { src: '/images/albums/034.webp', w: 1200, h: 800, alt: 'Couple portrait by JS Photo Artist', title: 'Forever Yours', cats: ['Couples'], pos: '50% 40%' },

  // — Baby & Kids —
  { src: '/images/albums/017.webp', w: 800, h: 1000, alt: 'Baby portrait by JS Photo Artist', title: 'Baby Portrait', cats: ['Baby & Kids'], pos: '50% 30%' },
  { src: '/images/albums/028.webp', w: 1200, h: 800, alt: 'Kids photography by JS Photo Artist', title: 'Growing Up', cats: ['Baby & Kids'], pos: '50% 50%' },
  { src: '/images/albums/032.webp', w: 1200, h: 800, alt: 'Baby photography session JS Photo Artist', title: 'Bundle of Joy', cats: ['Baby & Kids'], pos: '50% 50%' },

  // — Events —
  { src: '/images/albums/008.jpg.jpeg', w: 1200, h: 800, alt: 'Event photography by JS Photo Artist', title: 'Celebration', cats: ['Events'], pos: '50% 50%' },

  // — Films —
]

export const albumShowcase: Img[] = [
  { src: '/images/albums/album-01.webp', alt: 'Wedding album cover by JS Photo Artist' },
  { src: '/images/albums/album-02.webp', alt: 'Reception album by JS Photo Artist' },
  { src: '/images/albums/album-03.webp', alt: 'Couple album by JS Photo Artist' },
  { src: '/images/albums/album-04.webp', alt: 'Family album by JS Photo Artist' },
  { src: '/images/albums/album-05.webp', alt: 'Photo keepsake by JS Photo Artist' },
  { src: '/images/albums/album-06.webp', alt: 'Printed album by JS Photo Artist' },
]

export const testimonials: { quote: string; name: string; occasion?: string }[] = []
