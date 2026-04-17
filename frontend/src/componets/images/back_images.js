import React from "react";
import {images} from "./images";

function Images() {
    return (
        <>
{images.map((image, index) => (
    <div key={index} className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        <img
            src={image.img}
            alt={image.alt}
            className="absolute inset-0 w-full h-auto object-cover object-center transition-transform duration-300 "
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Centered Content */}
        <div className="relative z-10 p-8 rounded-lg text-center text-[#FFFFFF]">
            <h1 className="text-4xl font-bold mb-4">Better Together</h1>
            <p className="text-lg mb-6">Together</p>
        </div>
    </div>
))}
        </>
    );
}

export default Images;
