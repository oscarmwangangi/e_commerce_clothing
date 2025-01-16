import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Search from "./Header/search";
import Images from "./images/back_images";
import "../dependancy/index.css";
import Products from "./body/products";
import Footer from "./footer/footer";
import About from "./body/about";
import Contacts from "./body/contacts";
import Admin from "./admin/admin";
import ProductDetail from "./body/ProductDetail";
import CarouselDetail from "./body/CarouselDetail"
import CarouselDetailOne from "./body/CarouselDetailOne"
import Allproducts from "./body/Allproducts"
import RecentViewed from "./body/RecentViewed"
import AllRecentViewed from "./body/AllRecentViewed"

// ScrollToTop component to scroll to the top on route change
function ScrollToTop() {
  const location = useLocation(); // Get the current location
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the location changes
  }, [location]);
  return null;
}

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/example/")
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error(error));
  }, []);

  const location = useLocation(); // Get the current location
  const isAboutPage = location.pathname === "/about"; // Check if the current route is "/about"
  const isRecentViewed = location.pathname === "/RecentViewed"; // Check if the current route is "/about"
  const isAllRecentViewed = location.pathname === "/AllRecentViewed"; // Check if the current route is "/about"
  const isContactsPage = location.pathname === "/contacts";
  const isAdminPage = location.pathname === "/admin/admin"; // Adjust path to match your admin route
  const isProductDetail = location.pathname.startsWith("/product/");
  const isCarousel = location.pathname.startsWith("/carousel/");
  const isCarouselOne = location.pathname.startsWith("/carouselOne/");
  const isAllproducts  = location.pathname === "/Allproducts";
  return (
    <div>
      <ScrollToTop />

      {/* Conditionally render Header and Footer for non-admin pages */}
      {!isAdminPage && <Header />}

      {/* Render specific content based on the route */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/RecentViewed" element={<RecentViewed />} />
        <Route path="/AllRecentViewed" element={<AllRecentViewed />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin/admin" element={<Admin />} /> {/* Admin route */}
        <Route path="/product/:category/:id" element={<ProductDetail />} /> {/* Product detail route */}
        <Route path="/carousel/:id" element={<CarouselDetail />} />
        <Route path="/carouselOne/:id" element={<CarouselDetailOne />} />
        <Route path="/Allproducts" element={<Allproducts />} />
        {/* Add other routes for different pages */}
      </Routes>

      {/* Conditionally render other components for non-admin pages */}
      {!isAboutPage && !isContactsPage && !isAdminPage && !isProductDetail && !isCarousel &&!isCarouselOne  && !isAllproducts && !isRecentViewed && !isAllRecentViewed &&(
        <>
          <Search />
          <Images />
          <Products />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;


