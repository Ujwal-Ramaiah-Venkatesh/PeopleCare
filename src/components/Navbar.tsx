import { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  onBookClick: () => void;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function BrandEmblem({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <div
      className={`${className} rounded-full border border-cream/60 bg-cream/10 flex items-center justify-center shrink-0`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" className="w-6 h-6 text-cream" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7C20 14 14 19 8 19C14 19 20 24 20 33C20 24 26 19 32 19C26 19 20 14 20 7Z" />
        <circle cx="20" cy="19" r="2.2" fill="currentColor" />
        <path d="M12 11C14.5 13.5 15.5 15 16 16.5M28 11C25.5 13.5 24.5 15 24 16.5M12 27C14.5 24.5 15.5 23 16 21.5M28 27C25.5 24.5 24.5 23 24 21.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-olive text-cream ${
        scrolled ? 'shadow-lg shadow-espresso/15 border-b border-cream/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        {/* Left: Emblem + Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <BrandEmblem className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-105" />
          <div className="leading-tight">
            <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-cream block">
              {siteConfig.brandName}
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-cream/75">
              Davanagere • Celebrations &amp; Catering
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-cream/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-cream hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            type="button"
            onClick={onBookClick}
            className="inline-flex items-center gap-2 bg-cream text-olive-deep hover:bg-white px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow"
          >
            Book Consultation
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-1.5 border border-cream/35 hover:border-cream text-cream px-3.5 py-2 rounded-full text-xs font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Call
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-full border border-cream/25 text-cream"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-olive-dark border-t border-cream/10 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/90 hover:text-white py-1.5 text-base font-medium border-b border-cream/10"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onBookClick();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-cream text-olive-deep px-4 py-2.5 rounded-full text-sm font-semibold"
                >
                  Book Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={siteConfig.phoneHref}
                  className="w-full inline-flex items-center justify-center gap-2 border border-cream/35 text-cream px-4 py-2.5 rounded-full text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
