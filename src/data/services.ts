export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: 'MapPin' | 'Sparkles' | 'UtensilsCrossed' | 'Camera' | 'Music' | 'ClipboardCheck';
}

export const servicePillars: ServicePillar[] = [
  {
    id: 'venue-setup',
    title: 'Venue Selection & Setup',
    subtitle: 'From blueprint to final sparkle',
    description:
      'Thoughtful venue scouting, spatial layout planning, and complete on-ground installation and teardown handled on schedule.',
    highlights: ['Venue scouting & booking', 'Stage & seating floorplans', 'Punctual setup & breakdown'],
    iconName: 'MapPin',
  },
  {
    id: 'theme-decor',
    title: 'Custom Decor & Theme Styling',
    subtitle: 'Tailored visuals, never cookie-cutter',
    description:
      'Personalized floral mandaps, birthday theme backdrops, chandeliers, entrance arches, and ambient lighting crafted around your vision.',
    highlights: ['Fresh & luxury floral design', 'Custom birthday & baby shower themes', 'Warm ambient lighting'],
    iconName: 'Sparkles',
  },
  {
    id: 'catering',
    title: 'Catering & Curated Menus',
    subtitle: 'Authentic flavours at any scale',
    description:
      'Experienced culinary teams crafting regional Karnataka, South & North Indian, and multi-cuisine feasts for 50 to 1,000+ guests.',
    highlights: ['Custom palate & dietary menus', '1,000+ guest dining capacity', 'Hygienic buffet & hospitality'],
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'media',
    title: 'Photography & Videography',
    subtitle: 'Preserving every candid emotion',
    description:
      'Coordinated candid photographers, traditional videographers, and drone coverage so not a single ritual or smile goes uncaptured.',
    highlights: ['Candid & traditional coverage', 'Highlight reels & portraits', 'Seamless ritual timing sync'],
    iconName: 'Camera',
  },
  {
    id: 'entertainment',
    title: 'Entertainment & Invitations',
    subtitle: 'Energy, warmth, and first impressions',
    description:
      'Professional DJ & sound engineering, live artists, MC coordination, and custom digital or print guest invitations.',
    highlights: ['DJ, lighting & sound rigs', 'Live music & cultural performers', 'Custom e-invites & welcome signage'],
    iconName: 'Music',
  },
  {
    id: 'coordination',
    title: 'End-to-End Coordination',
    subtitle: 'So you host completely stress-free',
    description:
      'Dedicated timeline control, vendor orchestration, and polite guest hospitality whether planned months ahead or on tight timelines.',
    highlights: ['Single point of contact', 'Vendor & timeline control', 'Warm on-ground guest care'],
    iconName: 'ClipboardCheck',
  },
];

export const occasionTags = [
  'Weddings & Receptions',
  'Birthday Parties',
  'Baby Showers',
  'Housewarmings (Griha Pravesh)',
  'Anniversaries',
  'Naming & Cradle Ceremonies',
  'Corporate Events',
  'Festive & Farewell Parties',
];
