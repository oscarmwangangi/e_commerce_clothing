import React from "react";
import Carousel from "./Carousel Component"; // Import the reusable Carousel component
import RecentViewed from "./RecentViewed";

const ProductPage = () => {
  return (
    <div>
      {/* <h1>Product Page</h1> */}
      {/* Carousel for another set of products */}
      <Carousel 
      apiEndpoint="http://localhost:8000/api/carouselOne/" linkPrefix="/carouselOne" 
      source="carouselOne" // Pass source explicitly
      />
      
    </div>
  );
};

export default ProductPage;

