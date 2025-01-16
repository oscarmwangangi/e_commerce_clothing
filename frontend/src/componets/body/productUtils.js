const handleProductClick = (product, source, navigate) => {
  let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

  // Add the source explicitly to the product
  const productWithSource = { ...product, source };

  // Check if the product is already in the recently viewed list
  if (!recentlyViewed.some(item => item.id === product.id && item.source === source)) {
    recentlyViewed.push(productWithSource);
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }

  // Optional: Use navigate function if provided
  if (navigate) {
    navigate(`/product/${product.id}`);
  }
};
export default handleProductClick;
