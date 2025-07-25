export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  category: string;
  badge?: 'populaire' | 'promo';
}

export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}