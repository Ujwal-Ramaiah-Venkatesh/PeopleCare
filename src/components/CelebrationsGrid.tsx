import { motion } from 'framer-motion';
import { worldOfCelebrations } from '../data/celebrations';

export function CelebrationsGrid() {
  return (
    <section id="celebrations" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.26em] text-olive font-semibold mb-3">
            Celebrations We Craft
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.4rem] text-espresso font-normal leading-tight">
            A world of celebrations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted">
            From intimate home ceremonies to grand multi-day weddings, each backdrop and dining experience is tailored
            around your family.
          </p>
        </motion.div>

        {/* 4-Card Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {worldOfCelebrations.map((item, idx) => (
            <motion.a
              key={item.id}
              href="#wedding-decor"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="group block"
            >
              <div className="relative aspect-[4/4.6] rounded-xl overflow-hidden bg-cream-warm shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.occasions.map((occ) => (
                      <span
                        key={occ}
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-cream/90 text-espresso"
                      >
                        {occ}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center px-1">
                <h3 className="font-serif text-2xl text-espresso group-hover:text-olive transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted leading-relaxed">{item.subtitle}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Subtle Sub-heading Marker matching video flow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <span className="inline-block text-xs uppercase tracking-[0.26em] text-olive/80 font-medium border-b border-olive/25 pb-1.5">
            Celebration Collections
          </span>
        </motion.div>
      </div>
    </section>
  );
}
