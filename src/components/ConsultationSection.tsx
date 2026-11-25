import { useState, useEffect, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Mail, CheckCircle2, Send, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface ConsultationSectionProps {
  preselectedOccasion?: string;
}

const eventTypes = [
  'Wedding & Mandap',
  'Grand Reception',
  'Birthday Party',
  'Baby Shower / Naming',
  'Housewarming (Griha Pravesh)',
  'Anniversary / Private Party',
  'Corporate / Farewell',
  'Catering Only (100–1,000+ Guests)',
];

const guestRanges = ['Under 100', '100 – 300', '300 – 600', '600 – 1,000+'];

const serviceOptions = [
  'Decor & Theme Styling',
  'Catering & Menu',
  'Full Event Planning',
  'DJ & Photography',
];

export function ConsultationSection({ preselectedOccasion }: ConsultationSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState(guestRanges[1]);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Decor & Theme Styling',
    'Catering & Menu',
  ]);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedOccasion) {
      setNotes(`Interested in: ${preselectedOccasion}`);
    }
  }, [preselectedOccasion]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const buildWhatsappUrl = () => {
    const text = [
      `Hello ${siteConfig.brandName}!`,
      `Name: ${name || 'Not specified'}`,
      `Phone: ${phone || 'Not specified'}`,
      `Event: ${eventType}`,
      `Date: ${eventDate || 'Flexible'}`,
      `Guests: ${guestCount}`,
      `Services: ${selectedServices.join(', ') || 'General Inquiry'}`,
      notes ? `Notes: ${notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5"
          >
            <p className="text-[11px] uppercase tracking-[0.26em] text-olive font-semibold mb-2.5">
              Start Planning With Us
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-espresso font-normal leading-tight">
              Let’s bring your celebration to life
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
              Whether you are planning months ahead or putting together a last-minute gathering, share your vision and
              we’ll craft a personalized decor and catering plan.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-cream-card border border-olive/12">
                <MapPin className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-olive">Office Location</p>
                  <p className="text-sm text-espresso mt-0.5">{siteConfig.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-cream-card border border-olive/12">
                <Phone className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-olive">Call or WhatsApp</p>
                  <a href={siteConfig.phoneHref} className="text-sm text-espresso hover:text-olive mt-0.5 block">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-cream-card border border-olive/12">
                <Instagram className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-olive">Instagram Portfolio</p>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-espresso hover:text-olive mt-0.5 block"
                  >
                    {siteConfig.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-cream-card border border-olive/12">
                <Mail className="w-5 h-5 text-olive shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-olive">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-espresso hover:text-olive mt-0.5 block">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Consultation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:col-span-7 bg-cream-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-olive/15 shadow-sm"
          >
            {submitted ? (
              <div className="py-10 text-center max-w-md mx-auto">
                <div className="w-14 h-14 rounded-full bg-olive-tint text-olive flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-3xl text-espresso">Thank you, {name || 'friend'}!</h3>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">
                  Your consultation details for <strong>{eventType}</strong> are ready. Send them directly via
                  WhatsApp for the fastest response from our Davanagere team.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={buildWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-cream px-6 py-3 rounded-full text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium border border-olive/25 text-espresso hover:bg-cream"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-olive mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ananya Rao"
                      className="w-full rounded-xl border border-olive/20 bg-cream px-4 py-2.5 text-sm text-espresso focus:outline-none focus:border-olive"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-olive mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98XXX XXXXX"
                      className="w-full rounded-xl border border-olive/20 bg-cream px-4 py-2.5 text-sm text-espresso focus:outline-none focus:border-olive"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-olive mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full rounded-xl border border-olive/20 bg-cream px-3.5 py-2.5 text-sm text-espresso focus:outline-none focus:border-olive"
                    >
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-olive mb-1.5">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full rounded-xl border border-olive/20 bg-cream px-3.5 py-2.5 text-sm text-espresso focus:outline-none focus:border-olive"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-olive mb-1.5">
                      Estimated Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full rounded-xl border border-olive/20 bg-cream px-3.5 py-2.5 text-sm text-espresso focus:outline-none focus:border-olive"
                    >
                      {guestRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-olive mb-2">
                    Services Needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => {
                      const active = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                            active
                              ? 'bg-olive text-cream'
                              : 'bg-cream border border-olive/20 text-muted hover:text-espresso'
                          }`}
                        >
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-olive mb-1.5">
                    Theme Ideas, Venue or Catering Preferences
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about your dream mandap, birthday theme, or menu preferences..."
                    className="w-full rounded-xl border border-olive/20 bg-cream px-4 py-2.5 text-sm text-espresso focus:outline-none focus:border-olive resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-cream px-6 py-3.5 rounded-full text-sm font-semibold transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Request Consultation &amp; Quote
                  </button>
                  <a
                    href={buildWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-olive/30 hover:border-olive text-olive px-5 py-3.5 rounded-full text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
