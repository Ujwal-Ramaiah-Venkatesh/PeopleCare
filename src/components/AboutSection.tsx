import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface AboutSectionProps {
  onBookClick: () => void;
}

export function AboutSection({ onBookClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream-card border-y border-olive/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Dual Editorial Photo Frames */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5 items-start"
          >
            <div className="rounded-xl overflow-hidden shadow-md aspect-[3/4] bg-cream-warm">
              <img
                src="/images/real/Image37.webp"
                alt="Traditional carved South Indian wedding mandap by People Care Events"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-[3/4] bg-cream-warm mt-8 sm:mt-12">
              <img
                src="/images/real/Image20.webp"
                alt="Blush draped doorway and lantern welcome decor by People Care Events"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right: Editorial Copy & Trust Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-6"
          >
            <p className="text-[11px] uppercase tracking-[0.26em] text-olive font-semibold mb-3">
              The People Care Way
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.3rem] text-espresso font-normal leading-[1.08]">
              Rooted in tradition. <br className="hidden sm:inline" />
              <span className="italic">Designed around you.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed">
              Based near the Stadium on Hadadi Road in Davanagere, <strong>People Care Events</strong> brings calm
              structure, heartfelt hospitality, and bespoke styling to every milestone. Whether you are planning a
              grand 1,000+ guest wedding or an intimate home ceremony, our team coordinates every vendor, floral
              detail, and culinary course behind the scenes—so you can stay present with the people who matter.
            </p>

            {/* Trust Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 py-5 border-y border-olive/15">
              <div>
                <div className="flex items-center gap-1.5 text-olive font-serif text-2xl sm:text-3xl font-semibold">
                  <Star className="w-4 h-4 fill-gold text-gold shrink-0" />
                  5.0
                </div>
                <p className="text-[11px] sm:text-xs text-muted mt-0.5">{siteConfig.reviewCount} locally</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-olive font-serif text-2xl sm:text-3xl font-semibold">
                  <Users className="w-4 h-4 text-olive shrink-0" />
                  1,000+
                </div>
                <p className="text-[11px] sm:text-xs text-muted mt-0.5">Guest catering capacity</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-olive font-serif text-2xl sm:text-3xl font-semibold">
                  <Sparkles className="w-4 h-4 text-gold shrink-0" />
                  100%
                </div>
                <p className="text-[11px] sm:text-xs text-muted mt-0.5">Custom themes &amp; menus</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center gap-2.5 bg-olive hover:bg-olive-dark text-cream px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                Plan Your Event
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="text-sm font-semibold text-olive hover:text-olive-dark underline underline-offset-4"
              >
                Explore Full Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
