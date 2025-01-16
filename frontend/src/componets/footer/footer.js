import React from "react";

function Footer() {
  return (
    <>
    <section className="py-16 bg-[#f4f1f0]">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-8">Follow Us on Social Media</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Facebook Icon */}
      <a href="#" target="_blank" className="flex justify-center items-center bg-slate-200 text-white rounded-lg p-4 hover:bg-gray-700 transition duration-300">
        <i className="fab fa-facebook-f text-4xl text-blue-600"></i>
      </a>
      {/* Twitter Icon */}
      <a href="#" target="_blank" className="flex justify-center items-center bg-slate-200 text-white rounded-lg p-4 hover:bg-gray-700 transition duration-300">
        <i className="fab fa-twitter text-4xl text-blue-400"></i>
      </a>
      {/* Instagram Icon */}
      <a href="#" target="_blank" className="flex justify-center items-center bg-slate-200 text-white rounded-lg p-4 hover:bg-gray-700 transition duration-300">
        <i className="fab fa-instagram text-4xl text-pink-500"></i>
      </a>
      {/* LinkedIn Icon */}
      <a href="#" target="_blank" className="flex justify-center items-center bg-slate-200 text-white rounded-lg p-4 hover:bg-gray-700 transition duration-300">
        <i className="fab fa-linkedin-in text-4xl text-blue-700"></i>
      </a>
    </div>
  </div>
</section>

      <div className="w-full bg-[#C6ACA8] text-white py-3 text-center hover:cursor-pointer hover:bg-[#b5938e]" id="backToTop">
        <span className="text-sm font-semibold hover:underline">Back to Top</span>
      </div>

      <footer className="bg-[#eedad7] text-gray-900">
        <div className="container mx-auto py-[3.3rem] px-6">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="text-lg font-bold text-red-500">Dream Fabrics</h2>
              <p className="mt-2 text-sm">Premium products for every occasion.</p>
            </div>

            {/* <!-- Newsletter Signup --> */}
            <div>
              <h3 className="text-lg font-semibold text-center">Sign up to our newsletter</h3>
              <p className="text-sm mt-2 text-center">Receive news and updates about our products.</p>
              <form className="flex flex-col sm:flex-row justify-center mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md border border-gray-600 bg-gray-700 text-gray-300 focus:outline-none focus:ring focus:ring-red-400"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-600 text-gray-900 font-bold rounded-r-md hover:bg-red-500 focus:outline-none"
                >
                  Sign Up
                </button>
              </form>
            </div>

            {/* <!-- Social Media & Payment --> */}
            <div>
              <h3 className="text-lg font-semibold">Connect with us</h3>
              <p className="text-sm mt-2">Follow us on all our social media pages.</p>
              
              <h4 className="text-lg font-semibold mt-6">Payment Method</h4>
              <div className="inline-flex items-center">
                <img src="/images/M-PESA_LOGO-01.svg" alt="M-Pesa Logo" className="h-16 w-auto" />
              </div>
            </div>
          </div>

          {/* <!-- Bottom Section --> */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 mt-10">
            {/* <!-- Customer Service --> */}
            <div>
              <h3 className="text-lg font-bold">Customer Service</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-red-400 text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 text-sm">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 text-sm">
                    Report Abuse
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- About Dream Fabrics --> */}
            <div>
              <h3 className="text-lg font-bold">About Dream Fabrics</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="/about" className="hover:text-red-400 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 text-sm">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400 text-sm">
                    Return and Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Copyright Section --> */}
          <div className="text-right mt-10 text-gray-500">
            <p>© {new Date().getFullYear()} Dream Fabrics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
