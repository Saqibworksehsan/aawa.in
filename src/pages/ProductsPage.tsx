import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  features: string[];
  specifications: {
    material: string;
    sole: string;
    construction: string;
    origin: string;
  };
}

const productData: Product[] = [
  {
    id: 1,
    name: "Men's Formal Oxford",
    description: "Premium handcrafted formal shoes with genuine leather uppers and hand-stitched details. Perfect for business meetings and formal occasions.",
    imageUrl: "https://images.pexels.com/photos/10894/pexels-photo-10894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Formal",
    features: [
      "Genuine leather upper",
      "Hand-stitched construction",
      "Leather sole with rubber heel",
      "Cushioned insole",
      "Classic Oxford design"
    ],
    specifications: {
      material: "Full-grain leather",
      sole: "Leather with rubber heel",
      construction: "Goodyear welted",
      origin: "Made in India"
    }
  },
  {
    id: 2,
    name: "Women's Casual Loafers",
    description: "Comfortable yet stylish casual leather shoes designed for everyday wear with superior comfort and modern aesthetics.",
    imageUrl: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Casual",
    features: [
      "Soft leather upper",
      "Memory foam insole",
      "Flexible rubber sole",
      "Slip-on design",
      "Breathable lining"
    ],
    specifications: {
      material: "Soft nappa leather",
      sole: "Flexible rubber",
      construction: "Cemented",
      origin: "Made in India"
    }
  },
  {
    id: 3,
    name: "Premium Sneakers",
    description: "Contemporary sneakers combining athletic performance with premium leather craftsmanship for the modern lifestyle.",
    imageUrl: "https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Sneakers",
    features: [
      "Premium leather and textile upper",
      "Cushioned midsole",
      "Non-slip rubber outsole",
      "Padded collar and tongue",
      "Modern athletic design"
    ],
    specifications: {
      material: "Leather and textile",
      sole: "Rubber with cushioning",
      construction: "Athletic construction",
      origin: "Made in India"
    }
  },
  {
    id: 4,
    name: "Leather Work Boots",
    description: "Durable, weather-resistant boots made with full-grain leather and reinforced stitching for demanding work environments.",
    imageUrl: "https://images.pexels.com/photos/4252948/pexels-photo-4252948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Boots",
    features: [
      "Full-grain leather upper",
      "Steel toe protection",
      "Oil-resistant sole",
      "Waterproof construction",
      "Reinforced stitching"
    ],
    specifications: {
      material: "Full-grain leather",
      sole: "Oil-resistant rubber",
      construction: "Direct attach",
      origin: "Made in India"
    }
  },
  {
    id: 5,
    name: "Women's Formal Heels",
    description: "Elegant formal heels crafted with precision for professional and special occasions, combining style with comfort.",
    imageUrl: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Formal",
    features: [
      "Premium leather upper",
      "Cushioned footbed",
      "Stable heel design",
      "Elegant silhouette",
      "Professional finish"
    ],
    specifications: {
      material: "Premium leather",
      sole: "Leather with rubber tip",
      construction: "Blake stitched",
      origin: "Made in India"
    }
  },
  {
    id: 6,
    name: "Men's Casual Boots",
    description: "Versatile casual boots perfect for weekend adventures and everyday wear, featuring premium materials and comfortable fit.",
    imageUrl: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Casual",
    features: [
      "Suede and leather upper",
      "Comfortable ankle height",
      "Durable rubber sole",
      "Lace-up closure",
      "Casual versatile style"
    ],
    specifications: {
      material: "Suede and leather",
      sole: "Rubber",
      construction: "Cemented",
      origin: "Made in India"
    }
  }
];

const categories = ["All", "Formal", "Casual", "Sneakers", "Boots"];

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === "All"
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-brown-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover our comprehensive range of premium leather footwear,
              crafted with precision and designed for every occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-brown-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-brown-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
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
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <span className="bg-brown-100 text-brown-800 text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">{product.description}</p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-brown-600 text-white font-medium py-2 px-4 rounded-md hover:bg-brown-700 transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <div className="mb-4">
                    <span className="bg-brown-100 text-brown-800 text-sm px-3 py-1 rounded-full">
                      {selectedProduct.category}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-brown-600 mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-medium text-gray-900">Material:</span>
                        <p className="text-gray-700">{selectedProduct.specifications.material}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Sole:</span>
                        <p className="text-gray-700">{selectedProduct.specifications.sole}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Construction:</span>
                        <p className="text-gray-700">{selectedProduct.specifications.construction}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Origin:</span>
                        <p className="text-gray-700">{selectedProduct.specifications.origin}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex-1 bg-brown-600 text-white font-medium py-3 px-6 rounded-md hover:bg-brown-700 transition-colors duration-300">
                      Request Quote
                    </button>
                    <button className="flex-1 bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-md hover:bg-gray-300 transition-colors duration-300">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductsPage;
