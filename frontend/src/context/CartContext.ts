// context/CartContext.ts
import { createContext } from 'react';
import type { CartItem } from '../types';

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
