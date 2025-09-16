import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section with Auto Image Slider */}
      <section className="relative h-screen w-full">
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          className="h-full"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury Apartment"
              className="h-screen w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-bold text-white text-center"
              >
                Welcome to <span className="text-yellow-400">Fortune One</span>
              </motion.h1>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              alt="Modern Villa"
              className="h-screen w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-bold text-white text-center"
              >
                Premium <span className="text-purple-400">Living Spaces</span>
              </motion.h1>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?auto=format&fit=crop&w=1600&q=80"
              alt="City Real Estate"
              className="h-screen w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-bold text-white text-center"
              >
                Invest in <span className="text-blue-400">Your Future</span>
              </motion.h1>
            </div>
          </div>
        </Carousel>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Your Dream Home
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore premium real estate projects designed for luxury, comfort,
            and long-term value.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="/about"
              className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
