import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Footer from '../footer/footer';
import RecentViewed from './RecentViewed';


function ProductDetail() {
  const { category, id } = useParams(); // Get category and id from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Construct the fetch URL dynamically based on category and id
    fetch(`http://localhost:8000/api/${category}/${id}/`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [category, id]); // Fetch product whenever category or id changes

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-[#f4f1f0]">
      <div className="flex h-screen  pl-24 pt-24">
        {/* Image Section */}
        <div className="w-1/2 h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-1/2 p-20 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-lg mb-4 text-gray-600 font-serif">
            KSH{product.price}
          </p>

          {/* Color Circles */}
          <div className="mb-4">
            <p className="text-lg text-gray-700 font-sans">
              COLOR
              <span className="text-sm p-1 text-gray-500">{product.color}</span>
            </p>
            <div className="flex space-x-4">
              <div className="w-14 h-14 rounded-full bg-black hover:border-2 hover:border-gray-400 transition duration-300 ease-in-out cursor-pointer"></div>
              <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-300 hover:border-2 hover:border-gray-400 transition duration-300 ease-in-out cursor-pointer"></div>
              <div className="w-14 h-14 rounded-full bg-blue-700 hover:border-2 hover:border-gray-400 transition duration-300 ease-in-out cursor-pointer"></div>
              <div className="w-14 h-14 rounded-full bg-green-700 hover:border-2 hover:border-gray-400 transition duration-300 ease-in-out cursor-pointer"></div>
            </div>
          </div>

          {/* Size Boxes */}
          <div className="mb-4">
            <p className="text-lg text-gray-700 font-sans">
              SIZES
              <span className="text-sm p-1 text-gray-500">{product.size}</span>
            </p>
            <div className="grid grid-cols-4 gap-2 text-black font-mono">
              {/* Size boxes */}
              <div className="px-10 py-3 border border-gray-300 rounded text-center bg-black text-white hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer">
                XXL
              </div>
              {/* Other size boxes */}
              <div className="px-10 py-3 border border-gray-300 rounded text-center hover:bg-gray-200 transition duration-300 ease-in-out cursor-pointer">
                XS
              </div>
              {/* More size boxes */}
            </div>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded">
            Add to Cart | {product.price}
          </button>
        </div>
      </div>
      <div className="pt-[5rem] px-[5rem] mt-[57px]">
        <h1 className="text-6xl font-semibold font-sans pt-8 uppercase">
          {/* Other items */}
        </h1>
      </div>
      <div className="mt-[-140px]">
      <RecentViewed />
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetail;
