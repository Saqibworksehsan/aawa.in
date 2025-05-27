import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo2.png"
                alt="AAWA SHOES LLP"
                className="h-8 w-auto mr-3 filter brightness-0 invert"
              />
              <h3 className="text-white text-lg font-semibold">AAWA SHOES LLP</h3>
            </div>
            <p className="mb-4">
              Premium leather shoe manufacturer based in Ambur, Tamil Nadu, India.
              Delivering quality footwear to global brands since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-300">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              S.No: 102/1, 102/2, 103/1, 103/3A, Somalapuram Road, Somalapuram,
              Ambur – 635802, Tamil Nadu, India
            </p>
            <p className="mb-2">+91 9894621519 / +91 9894621518</p>
            <p>info@aawa.in</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()}  ARQAM CREATIONS. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="mr-4 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;