// JS Photo Artist — verified studio details and the photographs supplied by the studio.
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

const img = (name: string) => `/images/real-work/${name}`
export type Slide = { src: string; mobile: string; alt: string; pos: string; mobilePos: string }
export const heroSlides: Slide[] = [
  { src: img('wedding-venue-palace.webp'), mobile: img('wedding-venue-palace.webp'), alt: 'Wedding venue illuminated for a celebration', pos: '50% 48%', mobilePos: '50% 45%' },
  { src: img('couple-reception-lights.webp'), mobile: img('couple-reception-lights.webp'), alt: 'Newly married couple beneath reception lights', pos: '50% 45%', mobilePos: '50% 40%' },
  { src: img('bride-portrait.webp'), mobile: img('bride-portrait.webp'), alt: 'Bride portrait framed by her wedding veil', pos: '50% 35%', mobilePos: '50% 30%' },
  { src: img('bridesmaids-in-purple.webp'), mobile: img('bridesmaids-in-purple.webp'), alt: 'Bridesmaids in matching purple sarees', pos: '50% 45%', mobilePos: '50% 40%' },
  { src: img('couple-portrait.webp'), mobile: img('couple-portrait.webp'), alt: 'Couple sharing a quiet moment together', pos: '50% 45%', mobilePos: '50% 40%' },
]

export type Img = { src: string; alt: string; pos?: string }
export const intro = {
  a: { src: img('bride-portrait.webp'), alt: 'Bride smiling beneath her wedding veil', pos: '50% 30%' } as Img,
  b: { src: img('wedding-hands-detail.webp'), alt: 'Close-up of traditional wedding mehndi and jewellery', pos: '50% 50%' } as Img,
}

export type ServiceGroup = { id: string; title: string; blurb: string; items: string[]; image: Img }
export const services: ServiceGroup[] = [
  { id: 'wedding', title: 'Wedding photography & videography', blurb: 'The rituals, people and small in-between moments that make your day yours.', items: ['Traditional wedding photography', 'Candid wedding photography', 'Wedding videography', 'Reception coverage', 'Wedding highlights'], image: { src: img('bride-portrait.webp'), alt: 'Bride portrait from a wedding celebration', pos: '50% 28%' } },
  { id: 'couple', title: 'Couple & pre-wedding portraits', blurb: 'Natural portraits that leave room for the two of you to be yourselves.', items: ['Couple photography', 'Outdoor couple sessions', 'Pre-wedding concepts', 'Post-wedding portraits'], image: { src: img('couple-portrait.webp'), alt: 'Couple portrait in an intimate moment', pos: '50% 42%' } },
  { id: 'events', title: 'Events & family celebrations', blurb: 'Family milestones and celebrations, remembered through honest photographs.', items: ['Puberty ceremonies', 'Birthdays', 'Family functions', 'Special occasions'], image: { src: img('wedding-family-entrance.webp'), alt: 'Family gathered at a celebration entrance', pos: '50% 35%' } },
  { id: 'kids', title: 'Baby & kids photography', blurb: 'Bright, playful portraits that preserve each little personality.', items: ['Outdoor baby photoshoots', 'Kids photography', 'Creative portraits', 'Family portraits'], image: { src: img('baby-floral-portrait.webp'), alt: 'Child smiling in a colourful floral photoshoot setup', pos: '50% 45%' } },
  { id: 'albums', title: 'Albums, prints & photo gifts', blurb: 'Bring favourite photographs off the screen and into keepsakes made to revisit.', items: ['Wedding and reception albums', 'Album designing', 'Customized photo frames', 'Customized photo gifts', 'Photo printing'], image: { src: img('wedding-hands-detail.webp'), alt: 'Detailed wedding mehndi photograph selected for a keepsake', pos: '50% 50%' } },
]

export type Category = 'Weddings' | 'Bride portraits' | 'Couples' | 'Ceremony details' | 'Baby & kids' | 'Family & events'
export const categories: Category[] = ['Weddings', 'Bride portraits', 'Couples', 'Ceremony details', 'Baby & kids', 'Family & events']
export type Work = { src: string; w: number; h: number; alt: string; title: string; cats: Category[]; pos?: string }
const w = (file: string, width: number, height: number, title: string, alt: string, cats: Category[], pos = '50% 45%'): Work => ({ src: img(file), w: width, h: height, title, alt, cats, pos })
export const portfolio: Work[] = [
  w('bride-portrait.webp',1200,800,'A Bride’s Quiet Smile','Bride smiling beneath her wedding veil',['Weddings','Bride portraits'],'50% 35%'),
  w('couple-reception-lights.webp',1200,800,'Under the Celebration Lights','Newly married couple beneath reception lights',['Weddings','Couples'],'50% 45%'),
  w('bridesmaids-in-purple.webp',1200,800,'A Moment with Her Bridesmaids','Bridesmaids in matching purple sarees',['Weddings','Family & events'],'50% 45%'),
  w('couple-portrait.webp',800,1200,'Together, in the Moment','Couple sharing an intimate portrait',['Couples'],'50% 40%'),
  w('wedding-hands-detail.webp',1200,800,'Mehndi & Wedding Details','Close-up of traditional wedding mehndi and jewellery',['Weddings','Ceremony details'],'50% 50%'),
  w('wedding-ceremony-silhouette.webp',1200,800,'A Silhouette of the Ceremony','Wedding ritual captured in silhouette',['Weddings','Ceremony details'],'50% 50%'),
  w('wedding-car-arrival.webp',1200,800,'A Grand Wedding Arrival','Decorated car arriving at a wedding celebration',['Weddings','Family & events'],'50% 50%'),
  w('wedding-venue-palace.webp',800,1200,'The Wedding Venue','Illuminated palace-style wedding venue',['Weddings','Family & events'],'50% 50%'),
  w('wedding-family-entrance.webp',800,1200,'Family at the Entrance','Family members gathered at a celebration entrance',['Weddings','Family & events'],'50% 50%'),
  w('couple-garden-portrait.webp',1200,800,'A Walk in the Garden','Couple walking together through a green garden',['Couples'],'50% 50%'),
  w('mehndi-detail.webp',1200,800,'The Little Details','Close-up wedding mehndi detail',['Weddings','Ceremony details'],'50% 50%'),
  w('child-outdoor-portrait.webp',1200,800,'Little Explorer','Child enjoying an outdoor play moment',['Baby & kids'],'50% 50%'),
  w('baby-blue-portrait.webp',1200,800,'A Little Blue Dream','Baby portrait in a blue themed setup',['Baby & kids'],'50% 50%'),
  w('traditional-child-portrait.webp',800,1200,'Tradition in Every Smile','Child in traditional festive attire',['Baby & kids','Family & events'],'50% 35%'),
  w('baby-floral-portrait.webp',1200,800,'A Garden of Smiles','Baby portrait in a colourful floral setup',['Baby & kids'],'50% 50%'),
  w('celebration-cart.webp',1200,800,'A Colourful Celebration','Decorated celebration cart outdoors',['Family & events'],'50% 50%'),
]
export const albumShowcase = [
  { label: 'Wedding moments', img: { src: img('couple-reception-lights.webp'), alt: 'Couple beneath reception lights' }, w: 1200, h: 800 },
  { label: 'Details worth keeping', img: { src: img('wedding-hands-detail.webp'), alt: 'Wedding mehndi detail' }, w: 1200, h: 800 },
  { label: 'Family celebrations', img: { src: img('wedding-family-entrance.webp'), alt: 'Family gathered at a celebration' }, w: 800, h: 1200 },
]
export const testimonials: { quote: string; name: string; occasion?: string }[] = []
