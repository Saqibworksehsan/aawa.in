import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Clients />
      <Footer />
    </div>
  );
};

export default HomePage;
