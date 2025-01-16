import '@fortawesome/fontawesome-free/css/all.min.css';
import Carousel from "./Carousel";
import CarouselOne from "./CarouselOne";
import Grafiti from "./grafiti";
import React, { useState, useEffect } from "react";
import handleProductClick from "./productUtils";
import { Link, useParams } from 'react-router-dom';

function Products() {
  const [productsOne, setProductsOne] = useState([]);
  const [productsTwo, setProductsTwo] = useState([]);
  const [productsThree, setProductsThree] = useState([]);
  const { source, productId } = useParams(); // Extract source and productId from the URL

  useEffect(() => {
    // Fetch ProductsOne data
    fetch('/api/products_one/')
      .then(response => response.json())
      .then(data => setProductsOne(data));

    // Fetch ProductsTwo data
    fetch('/api/products_two/')
      .then(response => response.json())
      .then(data => setProductsTwo(data));

    // Fetch ProductsThree data
    fetch('/api/products_three/')
      .then(response => response.json())
      .then(data => setProductsThree(data));
  }, []);

  // Function to handle product click and add to recently viewed list
  const handleProductClickWrapper = (product, source) => {
    const recentItems = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const updatedItem = { ...product, source }; // Attach source to the product
    const updatedItems = [updatedItem, ...recentItems.filter(item => item.id !== product.id)];
    localStorage.setItem('recentlyViewed', JSON.stringify(updatedItems));
    handleProductClick(product); // Existing click logic if any
  };

  return (
    <>
      <section className="bg-[#C6ACA8] h-44 m-0 p-0 flex justify-center items-center">
        <div>
          <p className="text-[#1F1919] font-">
            Explore our premium collection of unique and luxurious fabrics for every occasion.
          </p>
        </div>
      </section>
      <CarouselOne />

      {/* Products One */}
      <section className="bg-gray-100" id="products_one">
        <div className="m-0 p-0 flex gap-0">
          {productsOne.map((product, index) => (
            <Link
              to={`/product/products_one/${product.id}`}
              className="w-1/2"
              key={index}
              onClick={() => handleProductClickWrapper(product, 'products_one')} // Track the click with source
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-screen object-cover"
              />
            </Link>
          ))}
        </div>
      </section>

      <Carousel />

      {/* Products Two */}
      <section className="bg-gray-100" id="products_two">
        <div className="m-0 p-0 flex gap-0">
          {productsTwo.map((product, index) => (
            <Link
              to={`/product/products_two/${product.id}`}
              className="w-1/2"
              key={index}
              onClick={() => handleProductClickWrapper(product, 'products_two')} // Track the click with source
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-screen object-cover"
              />
            </Link>
          ))}
        </div>
      </section>

      <Grafiti />

      {/* Products Three */}
      <section className="grid grid-cols-6 grid-rows-2 gap-1 p-2 bg-gray-100" id="products_three">
        {productsThree.map((product, index) => (
          <div
            key={index}
            className="relative group flex justify-center items-center w-full h-[254px]"
            onClick={() => handleProductClickWrapper(product, 'products_three')} // Track the click with source
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 ...more paths here..." />
              </svg>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Products;
