import React from "react";
import NavLink from "./NavLink"; // Import your custom NavLink

function Header() {
    return (
        <>
            <div className="bg-[#c5b1ae] h-12 w-full">
                <p className="text-[#424242] text-center text-lg">Dream fabric</p>
            </div>
            <div className="sticky top-0 bg-black bg-opacity-10 left-0 w-full bg-black/1 h-28 z-20 flex items-center">
                <nav className="container flex items-center justify-around">
                    {/* Search Bar */}
                    <div className="text-2xl font-semibold text-pink-600">
                        <h1>Dream Fabrics</h1>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex space-x-8">
                        <NavLink to="/" label="HOME" />
                        <NavLink to="/Allproducts" label="SHOP" />
                        <NavLink to="../admin/admin" label="LOOKBOOK" />
                        <NavLink to="/contacts" label="CONTACTS" />
                        <NavLink to="/about" label="ABOUT" />
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
