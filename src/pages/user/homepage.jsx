import React, { useEffect, useState } from "react";
import Footer from "../../components/user/footer/footer";
import { Link } from "react-router-dom";
import Navbar from "../../components/user/navbar/navbar";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import { Helmet } from "react-helmet";

// Scroll Progress Bar Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      style={{ scaleX: scrollProgress / 100 }}
      className="fixed top-0 left-0 h-2 bg-blue-500 origin-left z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.2 }}
    />
  );
};

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should run only once
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Mera Bestie</title>
      </Helmet>
      <div className="w-full">
        <ScrollProgress />
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <motion.img
              src="https://cdn.wallpapersafari.com/89/8/lybQgH.jpg"
              alt="Background"
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 container mx-auto max-w-4xl px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-pink-100/90 p-8 md:p-12 rounded-lg backdrop-blur-sm">
              <h1 className="mb-6 text-4xl md:text-5xl font-serif text-center">
                Revolutionizing Gift Giving
              </h1>
              <p className="mb-8 text-gray-700 text-center max-w-2xl mx-auto">
                A world of unique gifts for every moment and milestone
              </p>
              <div className="text-center">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-white bg-gradient-to-r text-black hover:bg-gray-50 px-8 py-2 rounded uppercase text-sm tracking-wider"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Products Section */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold mb-4">Products</h2>
              <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our diverse range of products crafted for all occasions.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delayChildren: 0.2, staggerChildren: 0.2 },
                },
              }}
            >
              {[
                {
                  img: "https://i.pinimg.com/originals/96/24/6e/96246e3c133e6cb5ae4c7843f9e45b22.jpg",
                  title: "Stationery Items",
                },
                {
                  img: "https://tse1.mm.bing.net/th?id=OIP.EYAqW5p_HzCoXKq1dXvGyQHaFj&pid=Api&P=0&h=180",
                  title: "Gift Items",
                },
                {
                  img: "https://tse3.mm.bing.net/th?id=OIP.90zsFkK9l2Nttf3fQu12ZwHaE8&pid=Api&P=0&h=180",
                  title: "Decor Items",
                },
              ].map((product, index) => (
                // <motion.div
                //   key={index}
                //   className="overflow-hidden rounded-lg shadow-md group"
                //   variants={{
                //     hidden: { opacity: 0, y: 20 },
                //     visible: { opacity: 1, y: 0 },
                //   }}
                // >
                //   <div className="relative h-64">
                //     <img
                //       src={product.img}
                //       alt={`Product: ${product.title}`}
                //       className="w-full h-full object-cover"
                //       loading="lazy"
                //     />
                //   </div>
                //   <div className="p-6 bg-pink-100">
                //     <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                //     <p className="text-gray-600 text-sm">
                //       Discover high-quality and creative gift ideas.
                //     </p>
                //   </div>
                // </motion.div>
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md group hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="relative h-64">
                    <img
                      src={product.img}
                      alt={`Product: ${product.title}`}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-all"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-t from-pink-200 to-pink-100">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Discover high-quality and creative gift ideas.
                    </p>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                      View Details
                    </button>
                  </div>
                </motion.div>

              ))}
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="relative min-h-[600px] overflow-hidden" data-aos="zoom-in">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.RNJBshhRJcxPoSt2Slj5bAHaEK&pid=Api&P=0&h=180"
              alt="Vision background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20"></div>
          </div>

          {/* Content */}
          <div className="container relative z-10 mx-auto max-w-6xl px-4 py-16">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="bg-pink-100/90 p-8 md:p-12 rounded-lg backdrop-blur-sm">
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-700 mb-8">
                  Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
                  aptent dapibus metus maecenas consequat. Elementum interdum a
                  semper.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-black text-white hover:bg-gray-900 px-6 py-2 rounded uppercase text-sm font-medium tracking-wider"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;