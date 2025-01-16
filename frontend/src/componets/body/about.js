import React from "react";
import Footer from "../footer/footer";

function About() {
  return (
    <>
    
      <section
        className="relative bg-cover bg-center h-96 text-white flex justify-center items-center"
        style={{ backgroundImage: "url('/images/image.webp')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">About us</h1>
          <p className="text-lg font-serif mb-6">
            Explore our premium collection of unique and luxurious fabrics for
            every occasion.
          </p>
          {/* <a
            href="#"
            className="bg-pink-600 px-6 py-2 text-xl font-semibold rounded-full hover:bg-pink-700"
          >
            Shop Now
          </a> */}
        </div>
      </section>
      <section className="p-8 bg-[#f4f1f0]">
      <div className="flex flex-col md:flex-row items-start justify-between">
        {/* Text on the left side */}
        <div className="w-full md:w-1/2 pr-8 mb-6 md:mb-0">
          <h1 className="text-4xl font-serif font-bold">Welcome to Dream Fabric</h1>
          <p className="text-lg  mt-4 leading-8 mb-6">
            At Dream Fabric, we offer a premium selection of luxurious and
            unique fabrics, tailored for every occasion. Whether you're creating
            your dream outfit or designing your space, we have the perfect fabric
            for you. Explore our collection and bring your ideas to life with
            our exquisite range of fabrics.
          </p>
          <a
            href="#"
            className="bg-pink-600 px-6 py-2 text-xl font-semibold rounded-full hover:bg-pink-700"
          >
            Shop Now
          </a>
        </div>

        {/* Image on the right side */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/logo-orange-fabric.png"
            alt="Dream Fabric"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse items-start mt-32 justify-between">
        {/* Text on the left side */}
        <div className="w-full md:w-1/2 pl-8 mb-6 md:mb-0">
          <h1 className="text-4xl font-serif font-bold">Mission</h1>
          <p className="text-lg mt-4 leading-8 mb-6">
            At Dream Fabric, we offer a premium selection of luxurious and
            unique fabrics, tailored for every occasion. Whether you're creating
            your dream outfit or designing your space, we have the perfect fabric
            for you. Explore our collection and bring your ideas to life with
            our exquisite range of fabrics.
          </p>
          <a
            href="#"
            className="bg-pink-600 px-6 py-2 text-xl font-semibold rounded-full hover:bg-pink-700"
          >
            Shop Now
          </a>
          <div className="mt-10">
          <h1 className="text-4xl font-serif font-bold">vision</h1>
          <p className="text-lg mt-4 leading-8 mb-6">
            Our vision is to inspire creativity and innovation in the fabric and
          fashion industry. By providing high-quality, unique fabrics, we aim
          to help our customers create beautiful and timeless designs that will
          leave a lasting impact.
          </p></div>
        </div>

        {/* Image on the right side */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/aiony-haust-K0DxxljcRv0-unsplash.jpg"
            alt="Dream Fabric"
            className="w-[600px] h-[700px] object-center rounded-lg"
          />
        </div>
      </div>
      {/* Team Section */}
      <div className="text-center mt-32">
      <h2 className="text-4xl font-serif font-bold mb-6 text-center">Meet Our Team</h2>
<div className="flex flex-wrap justify-center gap-8">
  {/* Team Member 1 */}
  <div className="w-[250px] text-center">
    <img
      src="/images/logo-gray-fabric.png"
      alt="Team Member"
      className="w-[150px] h-[150px] rounded-full object-cover mb-4 mx-auto"
    />
    <h4 className="text-2xl font-semibold">John Doe</h4>
    <p className="text-md">Fabric Specialist</p>
  </div>

  {/* Team Member 2 */}
  <div className="w-[250px] text-center">
    <img
      src="/images/logo-gray-fabric.png"
      alt="Team Member"
      className="w-[150px] h-[150px] rounded-full object-cover mb-4 mx-auto"
    />
    <h4 className="text-2xl font-semibold">Jane Smith</h4>
    <p className="text-md">Design Expert</p>
  </div>

  {/* Team Member 3 */}
  <div className="w-[250px] text-center">
    <img
      src="/images/logo-gray-fabric.png"
      alt="Team Member"
      className="w-[150px] h-[150px] rounded-full object-cover mb-4 mx-auto"
    />
    <h4 className="text-2xl font-semibold">Alex Johnson</h4>
    <p className="text-md">Production Manager</p>
  </div>

  {/* Team Member 4 */}
  <div className="w-[250px] text-center">
    <img
      src="/images/logo-gray-fabric.png"
      alt="Team Member"
      className="w-[150px] h-[150px] rounded-full object-cover mb-4 mx-auto"
    />
    <h4 className="text-2xl font-semibold">Emily Davis</h4>
    <p className="text-md">Marketing Specialist</p>
  </div>

  {/* Team Member 5 */}
  <div className="w-[250px] text-center">
    <img
      src="/images/logo-gray-fabric.png"
      alt="Team Member"
      className="w-[150px] h-[150px] rounded-full object-cover mb-4 mx-auto"
    />
    <h4 className="text-2xl font-semibold">Michael Brown</h4>
    <p className="text-md">Customer Relations</p>
  </div>

  {/* Team Member 6 */}
  <div className="w-[250px] text-center">
    <img
      src="/images/logo-gray-fabric.png"
      alt="Team Member"
      className="w-[150px] h-[150px] rounded-full object-cover mb-4 mx-auto"
    />
    <h4 className="text-2xl font-semibold">Sarah Wilson</h4>
    <p className="text-md">Fabric Designer</p>
  </div>
</div>


         
        </div>
    </section>
    <Footer />
    </>
  );
}

export default About;
