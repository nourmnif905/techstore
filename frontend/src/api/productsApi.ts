export const fetchProducts = async () => {
  const res = await fetch('https://your-api.com/products');
  return res.json();
};
