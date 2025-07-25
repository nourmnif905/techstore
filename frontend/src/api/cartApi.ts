export const addToCart = async (productId: number) => {
  const res = await fetch(`https://your-api.com/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId })
  });
  return res.json();
};

export const removeFromCart = async (productId: number) => {
  const res = await fetch(`https://your-api.com/cart/${productId}`, {
    method: 'DELETE'
  });
  return res.json();
};