import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-white pt-8 pb-6">
      {/* Top curved border */}
      <div className="absolute top-0 left-0 right-0 -mt-20">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-20 transform rotate-180"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Social Media Section */}
          <div className="w-full lg:w-4/12 px-4">
            <h2 className="text-3xl font-bold mb-4">MERA Bestie</h2>
            <div className="flex mt-6 space-x-4">
              <Link 
                to="#" 
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link 
                to="#" 
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link 
                to="#" 
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="w-full lg:w-4/12 px-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <address className="not-italic">
              <p>3181 Skjdsd Sdbs Ahsdjad Ahbaja Adjadsa,</p>
              <p>Sgd Nshs Jbbb 12232,</p>
              <p>India</p>
            </address>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-wrap items-center md:justify-between justify-center mt-8 border-t border-gray-200 pt-8">
          <div className="w-full px-4 mx-auto text-center">
            <p className="text-sm text-gray-600">
              Copyright © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;