import React from "react";
import Carousel from "./Carousel Component"; // Import the reusable Carousel component

const Home = () => {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      {/* Carousel for the first set of products */}
      <Carousel 
      apiEndpoint="http://localhost:8000/api/carousel/" linkPrefix="/carousel" 
      source="carousel" // Pass source explicitly
      />
      
    </div>
  );
};

export default Home;
