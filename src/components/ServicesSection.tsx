import { motion } from 'framer-motion';
import {
  MapPin,
  Sparkles,
  UtensilsCrossed,
  Camera,
  Music,
  ClipboardCheck,
  Check,
  ArrowRight,
} from 'lucide-react';
import { servicePillars, occasionTags, type ServicePillar } from '../data/services';

interface ServicesSectionProps {
  onRequestQuote: () => void;
}

const iconMap: Record<ServicePillar['iconName'], typeof MapPin> = {
  MapPin,
  Sparkles,
  UtensilsCrossed,
  Camera,
  Music,
  ClipboardCheck,
};

export function ServicesSection({ onRequestQuote }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-cream-card border-y border-olive/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.26em] text-olive font-semibold mb-2.5">
            End-to-End Event Solutions
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.3rem] text-espresso font-normal leading-tight">
            Everything under one roof
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted">
            Just like your own family team—we handle concept styling, venue flow, catering, and day-of execution so
            nothing feels scattered.
          </p>
        </motion.div>

        {/* 6 Core Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName];
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="bg-cream rounded-2xl p-6 sm:p-7 border border-olive/12 hover:border-olive/35 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-olive-tint text-olive flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-olive/80 font-semibold">
                    {pillar.subtitle}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl sm:text-[1.75rem] text-espresso font-normal">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">{pillar.description}</p>
                </div>

                <ul className="mt-5 pt-4 border-t border-olive/10 space-y-2">
                  {pillar.highlights.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-espresso/85 font-medium">
                      <Check className="w-3.5 h-3.5 text-olive shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Occasions Pill Bar + Custom Pricing Transparency Callout (replicated from etherielplanner.com) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mt-12 bg-olive-tint/65 border border-olive/15 rounded-2xl p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-olive font-semibold mb-2">
                Tailored Quotes • Never Cookie-Cutter
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
                Transparent pricing built around your celebration
              </h3>
              <p className="mt-2.5 text-sm text-muted leading-relaxed">
                Every celebration is unique—so rather than rigid fixed packages, we craft custom proposals based on your
                event type, guest count, venue, decor scale, and curated catering preferences.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {occasionTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-cream border border-olive/15 text-espresso/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="bg-cream-card border border-olive/15 rounded-xl p-6 w-full max-w-sm shadow-sm">
                <p className="font-serif text-2xl text-espresso">Ready for a custom estimate?</p>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">
                  Share your date, guest count, and preferred style to receive a tailored plan—whether months in advance
                  or on a quick schedule.
                </p>
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-cream px-5 py-3 rounded-full text-xs font-semibold tracking-wide transition-colors"
                >
                  Request Custom Proposal
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
