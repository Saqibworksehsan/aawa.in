import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Clients />
      <Footer />
    </div>
  );
};

export default HomePage;
