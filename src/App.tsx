import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CelebrationsGrid } from './components/CelebrationsGrid';
import { AboutSection } from './components/AboutSection';
import { WeddingAccordion } from './components/WeddingAccordion';
import { ServicesSection } from './components/ServicesSection';
import { RealMomentsGallery } from './components/RealMomentsGallery';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedOccasion, setPreselectedOccasion] = useState<string>('');

  const scrollToContact = (occasion?: string) => {
    if (occasion) {
      setPreselectedOccasion(occasion);
    }
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-cream text-espresso">
        <Navbar onBookClick={() => scrollToContact()} />
        <main className="flex-1">
          <Hero onBookClick={() => scrollToContact()} />
          <CelebrationsGrid />
          <AboutSection onBookClick={() => scrollToContact()} />
          <WeddingAccordion onSelectRitual={(ritual) => scrollToContact(ritual)} />
          <ServicesSection onRequestQuote={() => scrollToContact()} />
          <RealMomentsGallery />
          <TestimonialsSection />
          <ConsultationSection preselectedOccasion={preselectedOccasion} />
        </main>
        <Footer onBookClick={() => scrollToContact()} />
      </div>
    </MotionConfig>
  );
}
