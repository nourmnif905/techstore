import React from 'react';
import type { Product } from '../types';
import { useCart } from '../context/useCart';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '10px', width: '220px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
      <h4>{product.name}</h4>
      {product.oldPrice && <del>{product.oldPrice} TND</del>} <strong>{product.price} TND</strong>
      <p>{'⭐'.repeat(product.rating)}</p>
      <button onClick={() => addToCart({ ...product, quantity: 1 })}>Ajouter au panier</button>
    </div>
  );
};

export default ProductCard;