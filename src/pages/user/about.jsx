import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <Helmet>
      <title>About Us | Mera Bestie</title>
    </Helmet>
    <Navbar />    
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              About Our Company
            </span>
            <span className="text-gray-800">: Lorem Ipsum Dolor</span>
          </h1>
        </div>

        {/* About Sections */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* About Our Company Section */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About Our Company
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Objective Section */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg lg:col-span-2"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Objective</h2>
            <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-2">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </li>
              <li>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
            </ul>
          </div>

          {/* Vision Section */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Mission Section */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #ffe6f2 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-16 text-center">
          <img
            src="src/assets/bg shop.png"
            alt="Company"
            className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
          />
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Lorem Ipsum
            </span>
            <span className="text-gray-800">, Dolor Sit Amet</span>
          </h2>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
