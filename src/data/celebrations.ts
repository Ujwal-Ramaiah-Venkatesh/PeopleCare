export interface CelebrationCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  occasions: string[];
}

export interface WeddingAccordionItem {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  image: string;
  accentColor: string;
}

export const worldOfCelebrations: CelebrationCard[] = [
  {
    id: 'wedding-decor',
    title: 'Wedding Decor',
    subtitle: 'Carved temple mandaps, floral stages & timeless rituals',
    image: '/images/real/Image37.webp',
    occasions: ['Weddings', 'Engagements', 'Haldi & Mehendi', 'Sangeet & Receptions'],
  },
  {
    id: 'birthday-decor',
    title: 'Birthday Decor',
    subtitle: 'Bespoke theme backdrops, organic balloons & milestone magic',
    image: '/images/birthday-decor.jpg',
    occasions: ['Kids Birthdays', '1st Milestones', '50th Celebrations', 'Private Parties'],
  },
  {
    id: 'traditional-celebrations',
    title: 'Traditional Celebrations',
    subtitle: 'Sacred naming ceremonies, cradle setups & cultural styling',
    image: '/images/real/Image40.webp',
    occasions: ['Naming Ceremonies', 'Baby Showers', 'Cradle Decor', 'Festive Poojas'],
  },
  {
    id: 'house-celebrations',
    title: 'House & Entrances',
    subtitle: 'Palm-frond chapparas, marigold torans & home welcomes',
    image: '/images/real/Image19.webp',
    occasions: ['Griha Pravesh', 'Entrance Torans', 'Pooja Backdrops', 'Corporate Events'],
  },
];

export const weddingDecorAccordion: WeddingAccordionItem[] = [
  {
    id: 'engagement',
    title: 'Engagement',
    shortLabel: 'Engagement',
    description:
      'Carved couple seating, terracotta kolam backdrop, brass pillars, banana leaves, and arranged thamboolam platters.',
    image: '/images/real/Image11.webp',
    accentColor: '#7A4E3B',
  },
  {
    id: 'haldi',
    title: 'Haldi & Pellikoduku',
    shortLabel: 'Haldi',
    description:
      'Sunlit jasmine and marigold curtain backdrops, woven baskets, sunflower accents, and traditional seating.',
    image: '/images/real/Image42.webp',
    accentColor: '#C58B2A',
  },
  {
    id: 'mehendi',
    title: 'Mehendi',
    shortLabel: 'Mehendi',
    description:
      'Vibrant paisley, elephant-motif, and floral three-arch lounge backdrops styled for lively daytime gatherings.',
    image: '/images/real/Image32.webp',
    accentColor: '#8B3A62',
  },
  {
    id: 'sangeet',
    title: 'Sangeet & DJ Night',
    shortLabel: 'Sangeet',
    description:
      'Outdoor fairy-light canopies, cold sparkler fountains, and high-energy dance-floor lighting and sound.',
    image: '/images/real/Image41.webp',
    accentColor: '#4A3C6E',
  },
  {
    id: 'mandap',
    title: 'Wedding Stage & Mandap',
    shortLabel: 'Wedding Stage',
    description:
      'Grand carved gold temple mandaps adorned with cascading floral garlands and sacred homa staging.',
    image: '/images/real/Image46.webp',
    accentColor: '#556442',
  },
  {
    id: 'reception',
    title: 'Grand Reception',
    shortLabel: 'Reception',
    description:
      'Lush ivory-and-blush floral wisteria arches, gold jali accents, and glowing floor lamps for unforgettable evenings.',
    image: '/images/real/image18.webp',
    accentColor: '#5C5147',
  },
];
