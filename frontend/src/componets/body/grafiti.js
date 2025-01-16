import React from "react";

function Grafiti (){
    return(
        <>
        <section className="relative mt-12 p-4 bg-[#f4f1f0] text-white overflow-hidden">
      {/* Marquee text */}
      <div className="absolute top-0 w-full">
        <marquee behavior="scroll" direction="left" className="text-4xl font-extrabold graffiti-text text-pink-500">
          Fashion is Art &bullet; Stay Bold &bullet; Express Yourself
        </marquee>
      </div>
      
    
      {/* Graffiti-style text */}
      <div className="flex flex-wrap justify-around items-center h-screen gap-2">
        <p className="text-6xl font-extrabold graffiti-text text-yellow-400">
          Street Style
        </p>
        <p className="text-6xl font-extrabold graffiti-text text-blue-500">
          Stay Trendy
        </p>
        <p className="text-6xl font-extrabold graffiti-text text-green-400">
          Wear Confidence
        </p>
        <p className="text-6xl font-extrabold graffiti-text text-purple-500">
          Bold Moves
        </p>
        <p className="text-6xl font-extrabold graffiti-text text-red-500">
          Urban Edge
        </p>
        <p className="text-6xl font-extrabold graffiti-text text-orange-400">
          Be Yourself
        </p>
      </div>
    </section>
        
        </>


    )
}
export default Grafiti;