import React from "react";
import {images} from "./images";

function Images() {
    return (
        <>
            {images.map((image, index) => (
                <div key={index} className="relative w-full min-h-[100vh] max-h-[100vh] flex justify-center items-center overflow-hidden">
                    <img
                        src={image.img}
                        alt={image.alt}
                        className="w-full object-cover transition-transform duration-300"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute  left-0 w-full h-full bg-black bg-opacity-50"></div>

                    {/* Centered Content */}
                    <div className="absolute p-8 rounded-lg text-center text-[#FFFFFF]">
                        <h1 className="text-4xl font-bold mb-4">Better Together</h1>
                        <p className="text-lg mb-6">Together</p>
                        {/* <a href="#" className="bg-pink-600 px-6 py-2 text-xl font-semibold rounded-full hover:bg-pink-700">
                            Shop Now
                        </a> */}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Images;
