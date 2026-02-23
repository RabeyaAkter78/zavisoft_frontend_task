import React from "react";
import f1 from "../../assets/images/f1.png";
import f2 from "../../assets/images/f2.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="container mx-auto relative">
      <div className="relative bg-[#4F46E5] rounded-t-3xl p-8 md:p-12 pb-20 mb-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="text-lg mb-6">
              Sign up for free! Join the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white flex-grow"
              />
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image src={f1} alt="f1" width={400} height={400}></Image>
            {/* <div className="text-white text-6xl md:text-8xl font-black">
              KICKS
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Section - Dark */}
      <div className="absolute bg-[#1C1C1C] rounded-t-3xl p-8 md:p-12 text-white -mt-10 z-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* About Us */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-orange-400 font-rubik">
                About us
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Runners
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Sneakers
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Basketball
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Outdoor
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Golf
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Hiking
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">
                  About
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Blogs
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 017.944 3.525c.636-.247 1.363-.416 2.427-.465C10.583 2.013 10.938 2 12.315 2m0-2C9.764 0 9.38.013 8.317.062 7.25.112 6.488.283 5.822.551a7.022 7.022 0 00-2.531 1.65A7.022 7.022 0 001.642 5.822c-.268.666-.44 1.428-.49 2.492C1.103 9.38 1.09 9.764 1.09 12.315v.63c0 2.551.013 2.935.062 3.998.05 1.064.222 1.826.49 2.492a7.022 7.022 0 001.649 2.531 7.022 7.022 0 002.531 1.649c.666.268 1.428.44 2.492.49 1.063.049 1.447.062 3.998.062h.63c2.551 0 2.935-.013 3.998-.062 1.064-.05 1.826-.222 2.492-.49a7.022 7.022 0 002.531-1.649 7.022 7.022 0 001.649-2.531c.268-.666.44-1.428.49-2.492.049-1.063.062-1.447.062-3.998v-.63c0-2.551-.013-2.935-.062-3.998-.05-1.064-.222-1.826-.49-2.492a7.022 7.022 0 00-1.649-2.531A7.022 7.022 0 0018.822.551c-.666-.268-1.428-.44-2.492-.49C15.25.013 14.866 0 12.315 0h-.63zm0 5.938a6.377 6.377 0 110 12.754 6.377 6.377 0 010-12.754zm0 10.527a4.15 4.15 0 110-8.3 4.15 4.15 0 010 8.3zm6.756-9.649a1.49 1.49 0 110-2.98 1.49 1.49 0 010 2.98z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Large KICKS text overlay */}
          <div className="absolute bottom-0 right-0 left-0 z-0">
         <Image src={f2} alt="f1" ></Image>
          </div>

          {/* Copyright */}
          <div className="relative z-10 text-center text-gray-500 text-sm">
            &copy; All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
