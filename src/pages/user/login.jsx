import React, { useState } from "react";
import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";




const Login = () => {
  const { login } = useAuth();
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(emailOrMobile, password);
      if (response === 'Login successful') {
        window.location.href = '/';
        alert("Login successful")

      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Mera Bestie</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 py-12 px-4 sm:px-6 lg:px-8 flex flex-col animate-fade-in">
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="flex-grow flex items-center justify-center mt-16">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 animate-zoom-in">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 animate-text-focus-in">
              Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg text-gray-700">Email</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={emailOrMobile}
                  onChange={(e) => setEmailOrMobile(e.target.value)}
                />
              </div>
              <div className="mb-4 animate-fade-in-right">
                <label className="block text-lg text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-700 hover:text-pink-500 transition-all"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 animate-bounce-on-hover text-lg"
              >
                Login
              </button>
            </form>
            <div className="mt-6 flex justify-center space-x-4">
              <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-transform duration-300 transform hover:rotate-12 animate-float">
                <FaFacebook />
              </button>
              <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-transform duration-300 transform hover:rotate-12 animate-float">
                <FaGoogle />
              </button>
              <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-transform duration-300 transform hover:rotate-12 animate-float">
                <FaTwitter />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
