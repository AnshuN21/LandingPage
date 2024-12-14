/* eslint-disable no-unused-vars */
import React from "react";


const FooterSection = () => {
  return (
    <footer id="4" className="bg-gray-100">
      
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/assets/pexels-photo-238377.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              Learn more about our listing process, as well as our additional staging and design work.
            </h2>
            <button className="bg-white text-black px-6 py-2 rounded font-medium hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

     
      <div className="bg-blue-500 py-6">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          
          <ul className="flex items-center space-x-8 text-white text-sm">
            <li className="ml-16"><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>

          
          <div className="flex items-center space-x-2 mr-20">
            <span className="text-white">Subscribe to:</span>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 rounded text-sm focus:outline-none"
            />
            <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-900 text-gray-400 text-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span>&copy; All Rights Reserved 2023</span>
           
           <img className="w-40" src="/assets/logo.svg"/>

          <div className="flex items-center space-x-4 mr-24">
            <a href="#" className="hover:text-white">
              {/* <i className="fab fa-twitter"></i>  */}
              <img className="text-white" src="/assets/Frame.svg"></img>
            </a>
            <a href="#" className="hover:text-white">
              {/* <i className="fab fa-facebook"></i> */}
              <img className="text-white" src="/assets/Linkedin.svg"></img>
            </a>
            <a href="#" className="hover:text-white">
              {/* <i className="fab fa-instagram"></i> */}
              <img className="text-white" src="/assets/Group-1.svg"></img>
            </a>
            <a href="#" className="hover:text-white">
              {/* <i className="fab fa-linkedin"></i> */}
              <img className="text-white" src="/assets/Group.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
