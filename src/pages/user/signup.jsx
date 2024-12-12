import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Navbar from "../../components/user/navbar/navbar";
import { motion } from 'framer-motion';  // Import motion
import { Helmet } from "react-helmet";
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await signup(name, email, password, mobile); // Adjusted to include mobile
      window.location.href = '/HomePage';
    } catch (err) {
      setError('Error signing up. Try again.');
    }
  };

  return (
    <>
    <Helmet>
      <title>Sign Up | Mera Bestie</title>
    </Helmet>
    <div className="min-h-screen bg-pink-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="flex-grow flex items-center justify-center mt-16">
        <motion.div
          className="w-full max-w-md bg-white shadow-md rounded-lg p-8"
          whileHover={{ scale: 1.05 }}  // Scale effect on hover
          transition={{ duration: 0.3 }} // Smooth transition
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Sign Up</h2>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-lg text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>

            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-lg text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-lg text-gray-700">Mobile Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </motion.div>

            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
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
                  className="absolute right-2 top-2 text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </motion.div>

            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <label className="block text-lg text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300 text-lg"
              whileHover={{ scale: 1.05 }}  // Button hover scale effect
              transition={{ duration: 0.3 }}
            >
              Sign Up
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
    </>
  );
}
