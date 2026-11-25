import { motion } from 'framer-motion';
import { ArrowRight, Phone, Instagram, Mail, MapPin } from 'lucide-react';
import { BrandEmblem } from './Navbar';
import { siteConfig } from '../data/siteConfig';

interface FooterProps {
  onBookClick: () => void;
}

export function Footer({ onBookClick }: FooterProps) {
  return (
    <footer className="bg-olive text-cream">
      {/* Pre-Footer Banner (exact replica of video ending) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <BrandEmblem className="w-20 h-20 mb-6 shadow-xl" />
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.6rem] font-normal leading-[1.08] text-cream max-w-xl">
            Your next chapter, <br />
            <span className="italic">thoughtfully celebrated.</span>
          </h2>
          <button
            type="button"
            onClick={onBookClick}
            className="mt-8 inline-flex items-center gap-2.5 bg-cream text-olive-deep hover:bg-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 shadow-lg"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Subtle Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-cream/15" />
      </div>

      {/* Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <BrandEmblem className="w-10 h-10" />
            <div>
              <p className="font-serif text-2xl text-cream">{siteConfig.brandName}</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-cream/70">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-cream/80 leading-relaxed max-w-sm">
            Thoughtfully crafted Indian wedding decor, theme celebrations, and full-service catering based in
            Davanagere—making every milestone joyful and effortless.
          </p>
          <div className="mt-5 space-y-2 text-xs text-cream/85">
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
              {siteConfig.fullAddress}
            </p>
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Instagram className="w-3.5 h-3.5 text-gold shrink-0" />
              {siteConfig.instagramHandle}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div className="lg:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-cream/65 font-semibold mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm text-cream/85">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Services &amp; Catering
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-white transition-colors">
                Real Moments Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white transition-colors">
                Client Reviews
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact &amp; Quote
              </a>
            </li>
          </ul>
        </div>

        {/* Celebrations Links */}
        <div className="lg:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-cream/65 font-semibold mb-4">
            Celebrations We Craft
          </p>
          <ul className="space-y-2.5 text-sm text-cream/85">
            <li>
              <a href="#wedding-decor" className="hover:text-white transition-colors">
                Wedding Mandaps &amp; Receptions
              </a>
            </li>
            <li>
              <a href="#celebrations" className="hover:text-white transition-colors">
                Birthday &amp; Milestone Decor
              </a>
            </li>
            <li>
              <a href="#celebrations" className="hover:text-white transition-colors">
                Haldi, Mehendi &amp; Sangeet
              </a>
            </li>
            <li>
              <a href="#celebrations" className="hover:text-white transition-colors">
                Naming, Baby Shower &amp; Griha Pravesh
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Large-Scale Catering (1,000+ Guests)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/65">
          <p>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          <p>Davanagere, Karnataka</p>
        </div>
      </div>
    </footer>
  );
}
