import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Ensure you are using Link component
import Footer from '../footer/footer';

function AllRecentViewed() {
  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    // Fetch recently viewed items from localStorage
    const items = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
  
    // Remove duplicates by checking unique IDs
    const uniqueItems = items.reduce((acc, current) => {
      const isDuplicate = acc.some(item => item.id === current.id);
      if (!isDuplicate) {
        acc.push(current);
      }
      return acc;
    }, []);
  
    setRecentItems(uniqueItems);
  }, []);
  

  // Function to get product link based on its category
  const getProductLink = (product, source) => {
    const productLinks = {
      'products_one': `/product/products_one/${product.id}`,
      'products_two': `/product/products_two/${product.id}`,
      'products_three': `/product/products_three/${product.id}`,
      'carouselOne': `/carouselOne/${product.id}`,  // Added carouselOne
      'carousel': `/carousel/${product.id}`,  // Added carouselOne

    };
    return productLinks[source] || `/product/default/${product.id}`;  // Fallback if source is not found
  };

  const clearRecentlyReviewed = () => {
    localStorage.removeItem('recentlyViewed');  // Removes the stored "recently viewed" items from localStorage
    setRecentItems([]);  // Reset state to clear displayed items
  };

  return (
    <>
    <div className="recent-viewed-container p-4">
    {/* <button 
      onClick={clearRecentlyReviewed} 
      className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
    >
      Clear Recently Reviewed
    </button> */}
  
    <h2 className="text-2xl font-bold mb-6">Recently Viewed Items</h2>
  
    {recentItems.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {recentItems.map((product, index) => (
          <div key={index} className="product-item   rounded  transform-gpu">
            <Link to={getProductLink(product, product.source)} className="block">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-[80vh] object-cover rounded transition-transform  duration-500" 
              />
              <div className="product-details mt-2 mb-4 text-center">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-600 text-sm">{product.description} | ${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500">No recently viewed items.</p>
    )}
    
  </div>
  <Footer />
  </>
  );
}

export default AllRecentViewed;
