export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  eventType: string;
  rating: number;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 't1',
    quote:
      'Every single floral detail on our wedding stage matched what we envisioned—and more. Their team was punctual, polite, and handled our 900+ guests without a single hiccup.',
    author: 'Raghavendra & Spoorthi',
    eventType: 'Wedding & Catering • Davanagere',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'From the morning Haldi decor to the evening reception lighting and dinner service, People Care Events took complete ownership so our family could truly enjoy every ritual.',
    author: 'Meenakshi Kulkarni',
    eventType: 'Reception & Traditional Decor',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'We booked them for our daughter’s first birthday and naming ceremony. Guests couldn’t stop praising both the pastel backdrop styling and the delicious food.',
    author: 'Prashanth & Divya',
    eventType: 'Birthday & Naming Ceremony',
    rating: 5,
  },
];
