import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ecommercebackend-8gx8.onrender.com/post-complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userType: 'unregistered'
        })
      });

      const data = await response.json();

      if (response.ok && data.message === "Complaint registered successfully") {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          setShowSuccess(false);
          window.location.href = '/contact';
        }, 3000);
      } else {
        console.error('Failed to submit complaint');
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

  return (
    <>
    <Helmet>
      <title>Contact Us | Mera Bestie</title>
    </Helmet>
    <Navbar />
    <div className="min-h-screen bg-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      {showSuccess && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 360]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 mx-auto mb-4 text-green-500"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                  d="M20 6L9 17l-5-5"
                />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
            <p className="text-gray-600">We will answer you shortly.</p>
            <p className="text-gray-600">Continue browsing...</p>
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 text-transparent bg-clip-text">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Reach out to us for any queries or
            support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="mb-4"
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="mb-4"
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="mb-4"
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 px-6 rounded-xl font-medium hover:from-pink-600 hover:to-pink-800 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
            style={{
              background: "linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <FaPhone className="text-pink-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 234 567 8901</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <FaEnvelope className="text-pink-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <FaMapMarkerAlt className="text-pink-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">1234 Example St, City, Country</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9f1b1a1b1!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen="true"
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 text-transparent bg-clip-text">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 mt-2">
            We're here to answer any questions you may have about our programs
            and services.
          </p>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
