// GalleryPage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TOTAL_IMAGES = 36;
const slides = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  id: i,
  src: `/images/${i + 1}.png`,
  alt: `Store photo ${i + 1}`,
}));

const GalleryPage: React.FC = () => (
  <div className="min-h-screen bg-neutral-900 text-white">
    <Navbar />

    {/* ---------- HERO ---------- */}
    <section className="py-16 md:py-24 bg-gradient-to-r from-amber-600 via-amber-500 to-rose-500">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl">
          AAWA Gallery
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          36 snapshots of our hand-crafted journey—from raw hide to runway-ready pairs.
        </p>
      </div>
    </section>

    {/* ---------- 36-IMAGE HORIZONTAL SLIDER ---------- */}
    <section className="py-8">
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-8 px-6 pb-12">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="snap-center shrink-0 w-[300px] md:w-[400px] rounded-2xl overflow-hidden shadow-xl bg-neutral-800"
          >
            <div className="aspect-[4/3] flex items-center justify-center p-3">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div className="p-3 text-center text-sm font-medium">
              {slide.alt}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ---------- HAND-CRACK LEATHER SECTION ---------- */}
    <section className="py-16 md:py-24 bg-neutral-800">
      <div className="container mx-auto px-6 max-w-5xl space-y-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400">
              Hand-crafted Leather Selection
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Every AAWA shoe begins with a single sheet of full-grain leather.  
              Our artisans hand-crack each hide to reveal natural grain patterns,  
              ensuring only the strongest sections are cut for lasting durability.
            </p>
          </div>
          <div className="aspect-video bg-neutral-700 rounded-xl flex items-center justify-center">
            <p className="text-neutral-500 italic">— Leather selection process —</p>
          </div>
        </div>
      </div>
    </section>

    {/* ---------- UNIQUE HAND-MADE STYLES ---------- */}
    <section className="py-16 md:py-24 bg-neutral-900">
      <div className="container mx-auto px-6 max-w-5xl space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400">
          Unique Hand-Made Styles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Classic Oxford', desc: 'Timeless brogue detailing & Goodyear welt' },
            { title: 'Minimalist Loafer', desc: 'Clean lines, unlined nappa, rubber cup sole' },
            { title: 'Rugged Chelsea', desc: 'Elastic gore, storm welt, oil-resistant lug' },
          ].map((style) => (
            <div
              key={style.title}
              className="bg-neutral-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-amber-300 mb-2">
                {style.title}
              </h3>
              <p className="text-gray-400">{style.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ---------- MATERIAL SHOWCASE ---------- */}
    <section className="py-16 md:py-24 bg-neutral-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-12">
          Material Showcase
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Full-Grain Leather', desc: 'Natural scars & oils for patina' },
            { title: 'Chrome-Free Tanning', desc: 'Eco-friendly dye, water saved' },
            { title: 'Cork Insoles', desc: 'Moulds to foot, anti-bacterial' },
            { title: 'Natural Rubber', desc: 'Flexible, recyclable sole' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-neutral-900 p-6 rounded-xl shadow-md"
            >
              <h4 className="font-bold text-amber-300">{item.title}</h4>
              <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ---------- CTA ---------- */}
    <section className="py-16 bg-amber-600 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-4">Want your own pair?</h3>
        <a
          href="/contact"
          className="inline-block bg-white text-amber-700 font-semibold px-10 py-4 rounded-lg hover:bg-amber-100 transition"
        >
          Contact AAWA Shoes
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default GalleryPage;