// AboutPage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const features = [
    'All facilities in-house: components, designing, sampling, uppers, bottoming',
    'Fully integrated unit for all client requirements',
    'Better control over quality and delivery',
    'Factory located in a clean, green environment',
    'Tie-ups with tanneries for Goat, Sheep, Cow & Buffalo leather',
  ];

  const milestones = [
    { year: '2023', event: 'AAWA SHOES LLP founded by Mr. Niaz' },
    { year: '30+', event: 'Years of combined footwear mastery' },
    { year: '2024', event: 'Expanded capacity & global partnerships' },
    { year: 'Today', event: 'Trusted by premium brands worldwide' },
  ];

  return (
    <>
      <Navbar />

      {/* HERO – Gradient, no photo */}
      <section className="relative h-[62vh] flex items-center justify-center bg-gradient-to-br from-amber-600 via-amber-700 to-rose-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-2xl">
            Crafted by Passion, <br />
            <span className="text-amber-200">Led by Vision</span>
          </h1>
          <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto">
            “Three decades of shoemaking excellence distilled into every pair we create.”
            <br />
            <span className="mt-2 block font-light italic">
              – Mr. Niaz, Founder AAWA SHOES LLP
            </span>
          </p>
        </div>

        {/* Scroll-down cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-7 h-7 text-white/80"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

  {/* SPOTLIGHT – Hover-enhanced small photo + full story */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
    
    {/* Image */}
    <div className="relative group max-w-xs mx-auto lg:mx-0">
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition duration-500" />
      <img
        src="/images/founder.jpg"
        alt="Mr. Niaz – Founder"
        className="relative w-full h-auto rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Text */}
    <div className="flex-1 space-y-5">
      <h2 className="text-4xl font-bold text-gray-900">
        The Visionary Behind Every Stitch
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed">
        In 2023, Mr. Niaz distilled more than thirty years of global footwear expertise into
        the birth of <strong>AAWA SHOES LLP</strong>—a company rooted in the conviction that
        every pair must carry the integrity of the hands that craft it.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Raised amid the rhythmic clatter of family-run ateliers, he learned early that leather
        has memory: it remembers the patience of the cutter, the precision of the stitcher,
        and the passion of the finisher. Those lessons became the blueprint for fusing
        old-world craftsmanship with modern innovation.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Over three decades he partnered with revered Italian maestri in Vigevano and Marche,
        perfecting lasts, patterns, and ethically sourced hides. Together they cut waste by
        22 %, introduced chrome-free tanning that saves 1.6 million litres of water yearly,
        and pioneered a hand-finishing method that gives every pair bespoke soul.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Under his direction, AAWA’s 52 000 sq ft facility unites cutting, stitching, lasting
        and bottoming under one roof—an ecosystem where each component is inspected by
        technicians trained for no less than eighteen months.
      </p>

      <blockquote className="border-l-4 border-amber-500 pl-4 italic text-xl text-amber-700">
        “Quality is not an act, it is a habit.”
      </blockquote>
    </div>
  </div>
</section>

      {/* What Makes Us Unique */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">What Makes Us Unique</h2>
          <p className="text-xl text-gray-700 text-center mb-10">
            A self-reliant one-stop shop for all your footwear needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-800 font-medium">{f}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Journey So Far</h2>
        <div className="container mx-auto px-6 flex overflow-x-auto snap-x snap-mandatory space-x-8 pb-8">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-72 bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="text-3xl font-bold text-amber-600 mb-2">{m.year}</div>
              <p className="text-gray-700">{m.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              Deliver premium leather footwear through sustainable craftsmanship and
              customer-first service that sets global benchmarks.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the world’s most trusted name in premium leather footwear—where innovation,
              tradition, and responsibility walk together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Step Forward Together?
          </h2>
          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-amber-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;