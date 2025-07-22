// ProductsPage.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

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
    name: "Men's Formal",
    description: "Premium handcrafted formal shoes with genuine leather uppers and hand-stitched details.",
    imageUrl: "https://images.pexels.com/photos/5264896/pexels-photo-5264896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Formal",
    features: ["Genuine leather upper", "Hand-stitched construction", "Leather sole with rubber heel", "Cushioned insole", "Classic Oxford design"],
    specifications: { material: "Full-grain leather", sole: "Leather with rubber heel", construction: "Goodyear welted", origin: "Made in India" }
  },
  {
    id: 2,
    name: "Women's Casual Loafers",
    description: "Effortlessly elegant loafers built for all-day comfort. Soft nappa leather hugs the foot while memory-foam cushioning adapts to every step—perfect for office-to-weekend transitions.",
    imageUrl: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Casual",
    features: ["Soft leather upper", "Memory foam insole", "Flexible rubber sole", "Slip-on design", "Breathable lining"],
    specifications: { material: "Soft nappa leather", sole: "Flexible rubber", construction: "Cemented", origin: "Made in India" }
  },
  {
    id: 3,
    name: "Premium Sneakers",
    description: "Street-ready aesthetics meet performance engineering. A fusion of supple leather and technical mesh keeps feet cool, while a responsive midsole delivers sneaker-level comfort in a refined silhouette.",
    imageUrl: "https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Sneakers",
    features: ["Premium leather and textile upper", "Cushioned midsole", "Non-slip rubber outsole", "Padded collar and tongue", "Modern athletic design"],
    specifications: { material: "Leather and textile", sole: "Rubber with cushioning", construction: "Athletic construction", origin: "Made in India" }
  },
  {
    id: 4,
    name: "Leather Work Boots",
    description: "Rugged protection without sacrificing style. Full-grain leather, steel toe cap and oil-resistant outsole stand up to harsh job sites, while waterproof sealing keeps you dry from dawn to dusk.",
    imageUrl: "https://images.pexels.com/photos/4252948/pexels-photo-4252948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Boots",
    features: ["Full-grain leather upper", "Steel toe protection", "Oil-resistant sole", "Waterproof construction", "Reinforced stitching"],
    specifications: { material: "Full-grain leather", sole: "Oil-resistant rubber", construction: "Direct attach", origin: "Made in India" }
  },
  {
    id: 5,
    name: "Women's Formal Heels",
    description: "Sophistication redefined—elegant lines meet engineered comfort. A stable heel and cushioned footbed keep you poised through long conferences and evening galas without compromise.",
    imageUrl: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Formal",
    features: ["Premium leather upper", "Cushioned footbed", "Stable heel design", "Elegant silhouette", "Professional finish"],
    specifications: { material: "Premium leather", sole: "Leather with rubber tip", construction: "Blake stitched", origin: "Made in India" }
  },
  {
    id: 6,
    name: "Men's Casual Boots",
    description: "Weekend-ready versatility in a refined package. Rich suede and smooth leather panels combine for a relaxed yet polished look, while a cushioned rubber sole keeps every step effortless.",
    imageUrl: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Casual",
    features: ["Suede and leather upper", "Comfortable ankle height", "Durable rubber sole", "Lace-up closure", "Casual versatile style"],
    specifications: { material: "Suede and leather", sole: "Rubber", construction: "Cemented", origin: "Made in India" }
  }
];

const categories = ["All", "Formal", "Casual", "Sneakers", "Boots"];

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === "All"
    ? productData
    : productData.filter(p => p.category === selectedCategory);

 

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero – Parallax video / image */}
      <section
        className="relative h-[50vh] md:h-[62vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(https://images.pexels.com/photos/22062553/pexels-photo-22062553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-2xl animate-fade-in-down">
            Our Collection
          </h1>
          <p className="mt-3 text-xl max-w-2xl mx-auto animate-fade-in-up">
            Explore handcrafted footwear that marries Italian tradition with Indian excellence.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium transition-all duration-300
                ${selectedCategory === cat
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-700 hover:text-amber-600'}`}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-amber-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Product grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(p => (
              <article
                key={p.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white text-sm font-semibold px-4 pb-4">{p.category}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{p.description}</p>
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="w-full bg-amber-600 text-white font-medium py-2.5 rounded-md hover:bg-amber-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-10 flex justify-between items-center p-4 md:p-6 border-b">
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <button
                className="text-3xl text-gray-500 hover:text-black"
                onClick={() => setSelectedProduct(null)}
              >
                &times;
              </button>
            </div>

            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="space-y-6">
                <p className="text-gray-700">{selectedProduct.description}</p>
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {selectedProduct.features?.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Specifications</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div><strong>Material:</strong> {selectedProduct.specifications?.material}</div>
                    <div><strong>Sole:</strong> {selectedProduct.specifications?.sole}</div>
                    <div><strong>Construction:</strong> {selectedProduct.specifications?.construction}</div>
                    <div><strong>Origin:</strong> {selectedProduct.specifications?.origin}</div>
                  </div>
                </div>
               <div className="flex flex-col sm:flex-row gap-4">
  <Link
    to="/contact"
    className="flex-1 bg-amber-600 text-white font-semibold py-3 rounded-lg text-center hover:bg-amber-700 transition"
  >
    Request Quote
  </Link>

  <Link
    to="/contact"
    className="flex-1 bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg text-center hover:bg-gray-300 transition"
  >
    Contact Us
  </Link>
</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* Keyframes for hero */}
      <style jsx global>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1.2s ease-out forwards; }
        .animate-fade-in-up   { animation: fade-in-up 1.2s ease-out 0.4s forwards; }
      `}</style>
    </div>
  );
};

export default ProductsPage;