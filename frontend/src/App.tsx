// ================== App.tsx ==================
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import FiltersSidebar from './components/FilterSidebar';
import Footer from './components/Footer';
import { CartProvider } from './context/CarteProvider';
import './styles/global.css';

const App = () => {
  return (
    <CartProvider>
      <Header />
      <HeroSection /> {/* Hero vient AVANT les filtres */}
      <main style={{ display: 'flex', padding: '20px' }}>
        <FiltersSidebar />
        <div style={{ flex: 1 }}>
          <ProductList />
        </div>
      </main>
      <Footer />
    </CartProvider>
  );
};

export default App;
