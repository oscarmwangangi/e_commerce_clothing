import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import handleProductClick from "./productUtils";
import axios from 'axios';
import { Link } from "react-router-dom";


const Carousel = ({ apiEndpoint, linkPrefix, source }) => {
  const [products, setProducts] = useState([]); // State to hold products
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Fetch products from the given API endpoint
    axios.get(apiEndpoint)
      .then((response) => {
        setProducts(response.data); // Set fetched products to state
      })
      .catch((error) => {
        console.error("There was an error fetching the products:", error);
      });
  }, [apiEndpoint]); // This will re-fetch if the apiEndpoint changes
  const handleProductClickWrapper = (product, source) => {
    const recentItems = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const updatedItem = { ...product, source }; // Attach source to the product
    const updatedItems = [updatedItem, ...recentItems.filter(item => item.id !== product.id)];
    localStorage.setItem('recentlyViewed', JSON.stringify(updatedItems));
    handleProductClick(product); // Existing click logic if any
  };
  return (
    <section className="mb-16 w-full relative mt-24 pt-4" id="carousel">
      {/* <h2 className="text-xl font-bold mb-4">{source}</h2> Display source title */}
      <Swiper
        spaceBetween={5}
        slidesPerView={6}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="font-sans">
            <div className="flex flex-col items-center">
              <Link to={`${linkPrefix}/${product.id}`}>
                <img
                  src={product.image}  // Use product image from API
                  alt={product.name}
                  className="w-full h-96 object-cover"
                  onClick={() => handleProductClickWrapper(product, source)} // Pass source here
                />
              </Link>
              <div className="text-center mt-2">
                <p className="text-[14px] text-[#1F1919] font-montserrat font-semibold">
                  {product.name}
                </p>
                <p className="text-[12px] text-[#1F1919]">
                  {product.color} | {product.price}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <button
        ref={prevRef}
        className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white text-3xl p-2 rounded-full z-10"
      >
        ‹
      </button>
      <button
        ref={nextRef}
        className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white text-3xl p-2 rounded-full z-10"
      >
        ›
      </button>
     
    </section>
  );
};

export default Carousel;
