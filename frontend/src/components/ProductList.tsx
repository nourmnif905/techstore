import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productsApi';
import type { Product } from '../types';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', flex: 1 }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;