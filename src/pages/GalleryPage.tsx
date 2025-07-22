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

    {/* ---------- TITLE + INTRO ---------- */}
    <section className="py-16 md:py-20 bg-gradient-to-r from-amber-600 to-rose-600">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          36 Moments of Craft
        </h1>
        <p className="mt-3 text-lg md:text-xl max-w-3xl mx-auto">
          Scroll through every step that turns raw hide into heirloom footwear.
        </p>
      </div>
    </section>

    {/* ---------- FULL 36-IMAGE SHOWCASE ---------- */}
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-8">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="snap-center shrink-0 w-[85vw] sm:w-[400px] md:w-[500px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-800"
            >
              <div className="aspect-video flex items-center justify-center p-2">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div className="p-3 text-center text-sm font-medium">
                {slide.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ---------- CONTENT BLOCKS ---------- */}
    <section className="py-16 md:py-24 bg-neutral-800">
      <div className="container mx-auto px-6 max-w-5xl space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
            Hand-Crack Leather Selection
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Each hide is inspected under natural light, hand-crack tested for strength, and only the
            finest sections proceed to cutting. This guarantees durability and a unique patina over time.
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
            Unique Handmade Styles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Classic Oxford', desc: 'Brogue detailing & Goodyear welt' },
              { title: 'Minimalist Loafer', desc: 'Unlined nappa, rubber cup sole' },
              { title: 'Rugged Chelsea', desc: 'Elastic gore & storm welt' },
            ].map((style) => (
              <div
                key={style.title}
                className="bg-neutral-900 p-6 rounded-xl shadow-md"
              >
                <h3 className="font-bold text-amber-300">{style.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{style.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
            Sustainable Materials & Tools
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Chrome-free tanning saves 1.6 million litres of water yearly</li>
            <li>Natural rubber soles for flexibility & recyclability</li>
            <li>Cork insoles that mould to the wearer’s foot</li>
            <li>Hand-forged brass tools for edge burnish & detailing</li>
          </ul>
        </div>
      </div>
    </section>

    {/* ---------- CTA ---------- */}
    <section className="py-16 bg-amber-600 text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-4">Ready for your pair?</h3>
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