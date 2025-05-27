import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://cdn.shopify.com/s/files/1/0510/0647/2389/files/Christchurch.jpg?v=1613005167")',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="block">AAWA SHOES LLP</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 font-light">
            Obsessed with Quality – Crafted in Ambur
          </p>
          <a
            href="#contact"
            className="inline-block bg-brown-600 text-white font-medium py-3 px-8 rounded-md hover:bg-brown-700 transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;