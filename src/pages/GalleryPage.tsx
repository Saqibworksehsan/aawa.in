// GalleryPage.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TOTAL_IMAGES = 36;

const heroSlides = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
];

const GalleryPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([]);

  useEffect(() => setLoaded(Array(TOTAL_IMAGES).fill(false)), []);

  /* ---------- HERO SLIDER ---------- */
  useEffect(() => {
    const timer = setInterval(() => setHeroIndex((i) => (i + 1) % heroSlides.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const slides = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
    id: i,
    src: `/images/${i + 1}.png`,
    alt: `Store photo ${i + 1}`,
  }));

  const next = useCallback(() => setCurrent((c) => (c + 1) % TOTAL_IMAGES), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + TOTAL_IMAGES) % TOTAL_IMAGES), []);

  /* ---------- KEYBOARD ---------- */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, next, prev]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200">
      <Navbar />

      {/* ---------- HERO SLIDER ---------- */}
      <section className="relative h-[60vh] md:h-[72vh] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={heroIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[heroIndex]})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl"
          >
            AAWA Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-3xl drop-shadow-md"
          >
            From hand-cut leather to finished pairs—step inside our world of craftsmanship.
          </motion.p>
        </div>
      </section>

      {/* ---------- STORY SECTION ---------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl space-y-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-amber-900"
          >
            Hand-Crafted Heritage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            At AAWA Shoes LLP every pair begins its journey on the cutting table in Somalapuram,
            Tamil Nadu. Artisans hand-select full-grain hides, cut each pattern with millimetre
            precision, and stitch every seam with silk thread. Our Goodyear-welted soles are
            built to last decades, while chrome-free tanning saves 1.6 million litres of water
            annually. From dawn sketches to dusk finishes, tradition meets innovation—one stitch
            at a time.
          </motion.p>
        </div>
      </section>

      {/* ---------- MASONRY GALLERY ---------- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Behind the Scenes
          </motion.h2>
          <motion.div
            layout
            className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
          >
            {slides.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: loaded[i] ? 1 : 0, scale: loaded[i] ? 1 : 0.9 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-amber-500/30 cursor-pointer relative group"
                onClick={() => { setCurrent(i); setOpen(true); }}
              >
                {!loaded[i] && (
                  <div className="w-full h-56 bg-stone-200 animate-pulse rounded-2xl" />
                )}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  onLoad={() =>
                    setLoaded((l) => l.map((v, idx) => (idx === i ? true : v)))
                  }
                  className={`w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 ${
                    loaded[i] ? 'block' : 'hidden'
                  }`}
                />
                {/* Brushed-gold border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------- LIGHTBOX ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={slides[current].src}
                alt={slides[current].alt}
                className="rounded-xl shadow-2xl max-h-[85vh] w-auto"
              />
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-3 -right-3 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-light shadow-lg hover:bg-amber-500 transition"
                aria-label="Close"
              >
                ×
              </button>

              {/* Prev / Next */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 text-white bg-black/40 px-4 py-2 rounded-md text-sm">
                {slides[current].alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default GalleryPage;