import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { weddingDecorAccordion } from '../data/celebrations';

interface WeddingAccordionProps {
  onSelectRitual: (ritualTitle: string) => void;
}

export function WeddingAccordion({ onSelectRitual }: WeddingAccordionProps) {
  const [activeId, setActiveId] = useState<string>(weddingDecorAccordion[1].id);

  return (
    <section id="wedding-decor" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[11px] uppercase tracking-[0.26em] text-olive font-semibold mb-2.5">
            Signature Collections
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.4rem] text-espresso font-normal">
            Wedding Decor
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-muted">
            Complete wedding celebrations and mandaps — hover or tap any ritual to preview.
          </p>
        </motion.div>

        {/* Desktop Expanding Horizontal Strips (exact replica of video interaction) */}
        <div className="hidden md:flex items-stretch justify-center gap-3 h-[470px] lg:h-[510px] max-w-6xl mx-auto">
          {weddingDecorAccordion.map((item) => {
            const isActive = item.id === activeId;
            return (
              <motion.div
                key={item.id}
                layout
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                transition={{ type: 'spring', stiffness: 240, damping: 28 }}
                className={`relative rounded-xl overflow-hidden cursor-pointer select-none shadow-md transition-[flex] duration-500 ease-out ${
                  isActive ? 'flex-[3.8]' : 'flex-[0.7]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? 'scale-100' : 'scale-110 brightness-[0.82]'
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-400 ${
                    isActive
                      ? 'bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent'
                      : 'bg-espresso/45 hover:bg-espresso/30'
                  }`}
                />

                {/* Active Expanded Overlay */}
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-cream flex items-end justify-between gap-4"
                  >
                    <div className="max-w-md">
                      <span className="inline-block text-[10px] uppercase tracking-[0.22em] text-gold font-semibold mb-1.5">
                        Bespoke Setup
                      </span>
                      <h3 className="font-serif text-3xl lg:text-4xl font-normal text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-cream/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectRitual(item.title);
                      }}
                      className="shrink-0 w-10 h-10 rounded-full bg-cream/90 hover:bg-white text-espresso flex items-center justify-center transition-transform hover:scale-105"
                      title={`Inquire about ${item.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  /* Collapsed Vertical Label */
                  <div className="absolute inset-0 flex items-end justify-center pb-7">
                    <span
                      className="font-serif text-lg lg:text-xl tracking-wide text-cream/95 whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {item.shortLabel}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Stackable Cards */}
        <div className="md:hidden flex flex-col gap-3">
          {weddingDecorAccordion.map((item) => {
            const isActive = item.id === activeId;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isActive ? 'h-72' : 'h-20'
                }`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/35 to-espresso/20" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-cream">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                    {isActive && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectRitual(item.title);
                        }}
                        className="text-xs bg-cream text-espresso px-3 py-1 rounded-full font-semibold"
                      >
                        Inquire
                      </button>
                    )}
                  </div>
                  {isActive && <p className="mt-1.5 text-xs text-cream/90">{item.description}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
