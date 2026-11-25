import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-cream-card border-t border-olive/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[11px] uppercase tracking-[0.26em] text-olive font-semibold mb-2.5">
            5.0 ★ Locally Trusted
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.3rem] text-espresso font-normal">
            Love, in their words
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="bg-cream rounded-2xl p-7 border border-olive/12 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, starIdx) => (
                      <Star key={starIdx} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-olive/25" />
                </div>
                <p className="text-sm text-espresso/90 leading-relaxed italic">“{item.quote}”</p>
              </div>

              <div className="mt-6 pt-4 border-t border-olive/10">
                <p className="font-serif text-xl text-espresso font-medium">{item.author}</p>
                <p className="text-xs text-muted mt-0.5">{item.eventType}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
