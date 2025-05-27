import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import './styles/tailwind.css';

function App() {
  const basename = import.meta.env.PROD ? '/aawa.in' : '';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;