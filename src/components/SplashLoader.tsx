import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashLoaderProps {
  onComplete?: () => void;
}

export function SplashLoader({ onComplete }: SplashLoaderProps) {
  const [visible, setVisible] = useState(true);
  const [isMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const duration = isMobile ? 3000 : 2200;
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [isMobile]);

  const barDuration = isMobile ? 2.65 : 1.85;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center px-6 select-none cursor-pointer"
          aria-label="People Care Event Management loading screen"
        >
          {/* Soft ambient halo behind logo matching reference splash */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="relative flex flex-col items-center justify-center"
          >
            <div
              className="absolute -inset-12 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(200,169,106,0.09) 35%, rgba(0,0,0,0) 70%)',
              }}
            />

            <motion.img
              src="/images/people-care-logo.jpg"
              alt="People Care Event Management Logo"
              initial={{ opacity: 0, scale: 0.88, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-52 sm:w-64 md:w-72 h-auto object-contain"
            />

            {/* Subtle illuminated loading bar */}
            <div className="relative mt-6 w-44 sm:w-52 h-[2px] bg-white/15 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: barDuration, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full bg-gradient-to-r from-gold/60 via-white to-gold/60"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-3 text-[10px] uppercase tracking-[0.28em] text-white/70 font-sans"
            >
              Davanagere • Celebrations &amp; Catering
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
