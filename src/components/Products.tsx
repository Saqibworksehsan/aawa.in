import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

const productData: Product[] = [
  {
    id: 1,
    name: "Men's Formal",
    description: "Premium handcrafted formal shoes with genuine leather uppers and hand-stitched details.",
    imageUrl: "https://images.pexels.com/photos/5264896/pexels-photo-5264896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Formal"
  },
  {
    id: 2,
    name: "Women's Casual",
    description: "Comfortable yet stylish casual leather shoes designed for everyday wear with superior comfort.",
    imageUrl: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Casual"
  },
  {
    id: 3,
    name: "Sneakers",
    description: "Contemporary sneakers combining athletic performance with premium leather craftsmanship.",
    imageUrl: "https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Sneakers"
  },
  {
    id: 4,
    name: "Leather Boots",
    description: "Durable, weather-resistant boots made with full-grain leather and reinforced stitching.",
    imageUrl: "https://images.pexels.com/photos/4252948/pexels-photo-4252948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Boots"
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-brown-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We specialize in crafting premium leather footwear across various categories,
            combining traditional craftsmanship with modern design elements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <button className="text-brown-600 font-medium hover:text-brown-800 transition-colors duration-300 flex items-center">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-block bg-brown-600 text-white font-medium py-3 px-8 rounded-md hover:bg-brown-700 transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;