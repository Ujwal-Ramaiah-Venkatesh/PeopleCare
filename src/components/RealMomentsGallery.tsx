import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Instagram, Expand, Play, Film, ArrowUpRight } from 'lucide-react';
import { realMoments, deliveredReels, type MomentCategory, type DeliveredReel } from '../data/portfolio';
import { siteConfig } from '../data/siteConfig';

type FilterTab = 'All' | 'Videos & Reels' | MomentCategory;

const categories: FilterTab[] = [
  'All',
  'Videos & Reels',
  'Weddings',
  'Receptions',
  'Haldi & Mehendi',
  'Birthdays',
  'Traditional',
  'Catering',
];

export function RealMomentsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<FilterTab>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeReel, setActiveReel] = useState<DeliveredReel | null>(null);

  const filteredMoments = useMemo(() => {
    if (selectedCategory === 'All') return realMoments;
    if (selectedCategory === 'Videos & Reels') {
      return realMoments.filter((item) => item.mediaType === 'video' || Boolean(item.videoSrc));
    }
    return realMoments.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeMoment = activeIndex !== null ? filteredMoments[activeIndex] : null;

  const handlePrev = () => {
    if (activeIndex === null || filteredMoments.length === 0) return;
    setActiveIndex((activeIndex - 1 + filteredMoments.length) % filteredMoments.length);
  };

  const handleNext = () => {
    if (activeIndex === null || filteredMoments.length === 0) return;
    setActiveIndex((activeIndex + 1) % filteredMoments.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-olive font-semibold mb-2">
              Delivered Celebrations • Photos &amp; Reels
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-espresso font-normal">
              Moments brought to life
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setActiveIndex(null);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 inline-flex items-center gap-1.5 ${
                    active
                      ? 'bg-olive text-cream shadow-sm'
                      : 'bg-cream-card text-muted hover:text-espresso border border-olive/15'
                  }`}
                >
                  {category === 'Videos & Reels' && <Film className="w-3.5 h-3.5" />}
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-Width Dense Photo/Video Collage with Centered REAL MOMENTS Overlay */}
      <div className="relative max-w-[1440px] mx-auto px-2 sm:px-4">
        {filteredMoments.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[220px] gap-2 sm:gap-3">
            {filteredMoments.map((item, idx) => {
              const isVideo = item.mediaType === 'video' || Boolean(item.videoSrc);
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: idx * 0.03 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative overflow-hidden rounded-lg bg-cream-warm text-left focus:outline-none focus:ring-2 focus:ring-olive ${
                    selectedCategory === 'All' ? item.spanClass : ''
                  }`}
                >
                  {isVideo && item.videoSrc ? (
                    <video
                      src={item.videoSrc}
                      poster={item.image}
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {isVideo && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-espresso/70 backdrop-blur-sm text-cream text-[10px] font-semibold uppercase tracking-wider">
                      <Play className="w-3 h-3 fill-cream" />
                      Reel
                    </span>
                  )}

                  <div className="absolute inset-0 bg-espresso/15 group-hover:bg-espresso/45 transition-colors duration-300 flex items-end justify-between p-3 sm:p-4">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cream text-xs sm:text-sm font-medium drop-shadow">
                      {item.title}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-7 h-7 rounded-full bg-cream/90 text-espresso flex items-center justify-center shrink-0">
                      {isVideo ? <Play className="w-3.5 h-3.5 fill-espresso" /> : <Expand className="w-3.5 h-3.5" />}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        ) : (
          <div className="max-w-xl mx-auto my-8 p-8 rounded-2xl bg-cream-card border border-olive/15 text-center">
            <Film className="w-8 h-8 text-olive mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-espresso">Watch Our Delivered Event Reels</h3>
            <p className="mt-2 text-sm text-muted">
              Explore our event setup walkthroughs below or visit {siteConfig.instagramHandle} on Instagram for full
              video highlights.
            </p>
          </div>
        )}

        {/* Centered Editorial Overlay Typography matching video */}
        {selectedCategory === 'All' && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="px-6 py-3 bg-cream/75 backdrop-blur-[3px] rounded-lg shadow-sm border border-cream/60"
            >
              <span className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.14em] text-espresso font-medium uppercase">
                REAL MOMENTS
              </span>
            </motion.div>
          </div>
        )}
      </div>

      {/* Delivered Event Reels Strip (Ready for People Care Events' own .mp4 Instagram reels) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-olive font-semibold">
              Successfully Delivered Highlights
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl text-espresso font-normal mt-1">
              Event Walkthroughs &amp; Reels
            </h3>
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-olive hover:text-olive-dark transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Follow {siteConfig.instagramHandle}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {deliveredReels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              onClick={() => setActiveReel(reel)}
              className="group relative aspect-[9/14] rounded-xl overflow-hidden bg-espresso cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
            >
              {reel.videoSrc ? (
                <video
                  src={reel.videoSrc}
                  poster={reel.poster}
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img
                  src={reel.poster}
                  alt={reel.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-espresso/20" />

              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream/90 text-espresso flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-espresso ml-0.5" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 text-cream">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                  {reel.category} • {reel.location}
                </span>
                <p className="font-serif text-xl text-white mt-0.5 leading-snug">{reel.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Photo / Video Lightbox Modal */}
      <AnimatePresence>
        {activeMoment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-espresso rounded-2xl overflow-hidden shadow-2xl border border-cream/15"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close lightbox"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-espresso/70 hover:bg-espresso text-cream flex items-center justify-center border border-cream/20"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-[16/10] bg-black">
                {activeMoment.videoSrc ? (
                  <video
                    src={activeMoment.videoSrc}
                    poster={activeMoment.image}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <img src={activeMoment.image} alt={activeMoment.title} className="w-full h-full object-cover" />
                )}

                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous item"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-espresso/65 hover:bg-espresso text-cream flex items-center justify-center border border-cream/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next item"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-espresso/65 hover:bg-espresso text-cream flex items-center justify-center border border-cream/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="px-6 py-4 bg-espresso text-cream flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                    {activeMoment.category}
                    {activeMoment.eventLocation ? ` • ${activeMoment.eventLocation}` : ''}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white">{activeMoment.title}</h3>
                  <p className="text-xs sm:text-sm text-cream/80 mt-0.5">{activeMoment.caption}</p>
                </div>
                <span className="text-xs text-cream/60 shrink-0">
                  {(activeIndex ?? 0) + 1} / {filteredMoments.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reel Playback Modal */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveReel(null)}
            className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-espresso rounded-2xl overflow-hidden shadow-2xl border border-cream/15"
            >
              <button
                type="button"
                onClick={() => setActiveReel(null)}
                aria-label="Close reel"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-espresso/75 text-cream flex items-center justify-center border border-cream/20"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-[9/14] bg-black relative">
                {activeReel.videoSrc ? (
                  <video
                    src={activeReel.videoSrc}
                    poster={activeReel.poster}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img src={activeReel.poster} alt={activeReel.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-espresso/55 flex flex-col items-center justify-center p-6 text-center text-cream">
                      <Instagram className="w-10 h-10 text-gold mb-3" />
                      <p className="font-serif text-2xl text-white">{activeReel.title}</p>
                      <p className="text-xs text-cream/80 mt-2 leading-relaxed">
                        Watch this event reel directly on {siteConfig.instagramHandle} or drop your `.mp4` file into{' '}
                        <code className="text-gold">public/videos/</code> to play it inline.
                      </p>
                      <a
                        href={activeReel.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 bg-cream text-olive-deep px-5 py-2.5 rounded-full text-xs font-semibold"
                      >
                        Open on Instagram
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
