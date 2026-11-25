import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  const hasHeroVideo = Boolean(siteConfig.heroMedia.videoSrc);

  return (
    <section
      id="top"
      className="relative min-h-[82vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden bg-olive-deep text-cream"
    >
      {/* Background scenic mandap image or ambient event reel video */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        {hasHeroVideo ? (
          <video
            src={siteConfig.heroMedia.videoSrc}
            poster={siteConfig.heroMedia.imageSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <img
            src={siteConfig.heroMedia.imageSrc}
            alt="Outdoor twilight floral reception stage arranged by People Care Events"
            className="w-full h-full object-cover object-[center_44%] scale-[1.18]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/65 via-espresso/45 to-espresso/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,36,27,0.62)_0%,rgba(31,36,27,0.18)_75%)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-olive-deep/90 backdrop-blur-md border border-gold/50 text-cream text-[11px] uppercase tracking-[0.2em] font-semibold shadow-lg shadow-espresso/30 mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
          <span>Davanagere’s Trusted Event &amp; Catering Planners</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal leading-[1.03] tracking-tight text-cream drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]"
        >
          Events for <span className="italic font-normal">every</span> story.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.33 }}
          className="mt-4 text-xs sm:text-sm tracking-[0.14em] uppercase font-semibold text-gold drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)]"
        >
          Luxury Wedding &amp; Event Planner <span className="text-cream/60 mx-1.5">|</span> Decor{' '}
          <span className="text-cream/60 mx-1.5">|</span> Sangeeth <span className="text-cream/60 mx-1.5">|</span>{' '}
          Catering
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-cream/95 leading-relaxed font-normal drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]"
        >
          From bespoke floral mandaps and joyful birthday styling to seamless 1,000+ guest catering — thoughtfully
          crafted in Davanagere so your family celebrates stress-free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <a
            href="#celebrations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cream text-olive-deep hover:bg-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-espresso/20"
          >
            Explore Celebrations
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-olive/85 hover:bg-olive backdrop-blur-sm text-cream border border-cream/30 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200"
          >
            Start Planning with Us
          </button>
        </motion.div>
      </div>

      {/* Subtle Scroll Cue */}
      <motion.a
        href="#celebrations"
        aria-label="Scroll to celebrations"
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/80 hover:text-white transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
