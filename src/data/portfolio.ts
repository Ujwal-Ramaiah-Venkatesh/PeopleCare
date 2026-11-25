export type MomentCategory =
  | 'Weddings'
  | 'Receptions'
  | 'Haldi & Mehendi'
  | 'Birthdays'
  | 'Traditional'
  | 'Catering';

export interface MomentItem {
  id: string;
  title: string;
  category: MomentCategory;
  caption: string;
  mediaType: 'image' | 'video';
  image: string;
  /** Optional local .mp4 reel path inside /public/videos/ */
  videoSrc?: string;
  /** Optional location or client milestone label */
  eventLocation?: string;
  /** Optional direct Instagram post or reel URL */
  instagramUrl?: string;
  spanClass: string;
}

export interface DeliveredReel {
  id: string;
  title: string;
  category: MomentCategory;
  location: string;
  poster: string;
  /** Drop your own .mp4 reel in public/videos/ and set e.g. '/videos/wedding-reel.mp4' */
  videoSrc?: string;
  instagramUrl: string;
}

export const deliveredReels: DeliveredReel[] = [
  {
    id: 'reel-1',
    title: 'Temple Mandap & Procession',
    category: 'Weddings',
    location: 'Davanagere',
    poster: '/images/real/Image48.webp',
    instagramUrl: 'https://www.instagram.com/people_care_events/',
  },
  {
    id: 'reel-2',
    title: 'Twilight Chandelier Reception',
    category: 'Receptions',
    location: 'Davanagere',
    poster: '/images/real/Image26.webp',
    instagramUrl: 'https://www.instagram.com/people_care_events/',
  },
  {
    id: 'reel-3',
    title: 'Marigold Arch Haldi Setup',
    category: 'Haldi & Mehendi',
    location: 'Davanagere',
    poster: '/images/real/Image27.webp',
    instagramUrl: 'https://www.instagram.com/people_care_events/',
  },
  {
    id: 'reel-4',
    title: 'Signature Fruit Carving & Banquet',
    category: 'Catering',
    location: 'Karnataka',
    poster: '/images/real/Image13.webp',
    instagramUrl: 'https://www.instagram.com/people_care_events/',
  },
];

export const realMoments: MomentItem[] = [
  // WEDDINGS
  {
    id: 'moment-1',
    title: 'Sacred Gold Temple Mandap',
    category: 'Weddings',
    mediaType: 'image',
    caption: 'Grand carved-gold South Indian temple mandap adorned with red-and-white floral garlands for the sacred homa.',
    image: '/images/real/Image46.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'moment-2',
    title: 'Carved Temple Pillar Mandap',
    category: 'Weddings',
    mediaType: 'image',
    caption: 'Four black-and-gold carved pillars beneath a draped cream canopy and vibrant floral borders.',
    image: '/images/real/Image37.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-3',
    title: 'Traditional Chenda Couple Entry',
    category: 'Weddings',
    mediaType: 'image',
    caption: 'Joyful daytime couple procession with traditional chenda drummers and vibrant pink smoke cannons.',
    image: '/images/real/Image48.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  // RECEPTIONS & SANGEET
  {
    id: 'moment-4',
    title: 'Outdoor Chandelier Reception Stage',
    category: 'Receptions',
    mediaType: 'image',
    caption: 'Twilight outdoor reception stage featuring white floral arches, hanging chandeliers, and gold-tufted seating.',
    image: '/images/real/Image26.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'moment-5',
    title: 'Blush & Ivory Wisteria Stage',
    category: 'Receptions',
    mediaType: 'image',
    caption: 'Symmetrical indoor stage with cascading wisteria, gold geometric jali panels, and glowing floral floor lamps.',
    image: '/images/real/image18.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-6',
    title: 'Crimson Velvet & LED Reception',
    category: 'Receptions',
    mediaType: 'image',
    caption: 'Dramatic crimson velvet draping with warm geometric LED frames and a rich red-rose floral center wall.',
    image: '/images/real/Image45.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-7',
    title: 'Sparkler Sangeet Dance Night',
    category: 'Receptions',
    mediaType: 'image',
    caption: 'Outdoor evening Sangeet under warm fairy lights with cold sparkler fountains framing the dance floor.',
    image: '/images/real/Image41.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-8',
    title: 'Scalloped Floral Photo-Booth Stage',
    category: 'Receptions',
    mediaType: 'image',
    caption: 'Custom patterned arches framing a warm LED-backlit scalloped centerpiece with fresh white florals.',
    image: '/images/real/image12.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  // HALDI & MEHENDI (Strictly Haldi & Mehendi photos only)
  {
    id: 'moment-9',
    title: 'Marigold Mandala Haldi Stage',
    category: 'Haldi & Mehendi',
    mediaType: 'image',
    caption: 'Dense yellow-and-orange marigold arch over a bright mandala backdrop with sunflower crates and brass pots.',
    image: '/images/real/Image27.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'moment-10',
    title: 'Jasmine & Marigold Haldi Seating',
    category: 'Haldi & Mehendi',
    mediaType: 'image',
    caption: 'Vertical curtain of fresh jasmine and marigold garlands behind a carved wooden chair and sunflower baskets.',
    image: '/images/real/Image42.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-11',
    title: 'Sunflower Hedge Haldi Celebration',
    category: 'Haldi & Mehendi',
    mediaType: 'image',
    caption: 'Bright outdoor Haldi celebration beneath yellow and lavender drapes with a sunflower-studded green hedge.',
    image: '/images/real/Haladi.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-12',
    title: 'Marigold Uruli & Petal Rangoli Haldi',
    category: 'Haldi & Mehendi',
    mediaType: 'image',
    caption: 'Central brass uruli bath surrounded by concentric flower-petal rangoli beneath yellow sheer drapes.',
    image: '/images/real/Image15.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-13',
    title: 'Paisley & Floral Mehendi Backdrop',
    category: 'Haldi & Mehendi',
    mediaType: 'image',
    caption: 'Three-arch patterned backdrop accented with white florals, gold palm leaves, and sunflower vases.',
    image: '/images/real/Image32.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  // ENGAGEMENT & WEDDING DETAILS
  {
    id: 'moment-14',
    title: 'Traditional Engagement & Thamboolam',
    category: 'Weddings',
    mediaType: 'image',
    caption: 'Carved couple seating, terracotta kolam backdrop, brass pillars, banana plants, and thamboolam platters.',
    image: '/images/real/Image11.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-15',
    title: 'Wedding Petal Rangoli Ritual',
    category: 'Weddings',
    mediaType: 'image',
    caption: 'Couple stepping onto embroidered ceremonial mats over a vibrant four-color flower-petal rangoli.',
    image: '/images/real/Image43.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  // TRADITIONAL (Naming Ceremonies, Poojas, Housewarmings & Entrances)
  {
    id: 'moment-16',
    title: 'Atrium Naming Ceremony Welcome',
    category: 'Traditional',
    mediaType: 'image',
    caption: 'Pastel floral doorway, red-draped marble stairs, and cradle-themed Naming Ceremony welcome display.',
    image: '/images/real/Image25.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-17',
    title: 'Traditional Silver Throne Ceremony',
    category: 'Traditional',
    mediaType: 'image',
    caption: 'Ornate silver throne with Namam backdrop, marigold garlands, banana plants, and wrapped gift platters.',
    image: '/images/real/Image40.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-18',
    title: 'Palm-Frond Entrance Chappara',
    category: 'Traditional',
    mediaType: 'image',
    caption: 'Traditional woven coconut-palm chappara with kalash finials and dense maroon-and-white floral toran.',
    image: '/images/real/Image19.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-19',
    title: 'Home Pooja Kolam & Lamps',
    category: 'Traditional',
    mediaType: 'image',
    caption: 'Warm indoor pooja backdrop featuring hand-drawn kolam patterns, mango leaves, marigolds, and brass lamps.',
    image: '/images/real/Image1.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-20',
    title: 'Ganesha Floral Foyer Welcome',
    category: 'Traditional',
    mediaType: 'image',
    caption: 'Golden Ganesha welcome pedestal framed by pink roses and People Care Event Management signage.',
    image: '/images/real/Image10.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'moment-21',
    title: 'Double-Heart Petal Floor Rangoli',
    category: 'Traditional',
    mediaType: 'image',
    caption: 'Intricate marigold and white-flower floor rangoli walkway leading guests into the celebration.',
    image: '/images/real/Image21.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  // BIRTHDAYS
  {
    id: 'moment-22',
    title: 'Pastel Milestone Birthday',
    category: 'Birthdays',
    mediaType: 'image',
    caption: 'Custom lavender and blush organic balloon installation paired with fresh florals and warm backlighting.',
    image: '/images/birthday-decor.jpg',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
  // CATERING
  {
    id: 'moment-23',
    title: 'Signature Fruit Carving Banquet',
    category: 'Catering',
    mediaType: 'image',
    caption: 'Intricate People Care Event Management fruit and vegetable carvings displayed on our banquet welcome table.',
    image: '/images/real/Image13.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'moment-24',
    title: 'Curated Beverage & Mocktail Bar',
    category: 'Catering',
    mediaType: 'image',
    caption: 'Uniformed hospitality staff serving chilled multi-flavor welcome drinks from styled glass dispensers.',
    image: '/images/real/Image28.webp',
    eventLocation: 'Davanagere',
    spanClass: 'md:col-span-1 md:row-span-1',
  },
];
