import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80",
      title: "Luxury Living",
      subtitle: "Experience comfort and elegance like never before",
    },
    {
      src: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1950&q=80",
      title: "Modern Architecture",
      subtitle: "Designed with precision and sophistication",
    },
    {
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1950&q=80",
      title: "Urban Lifestyle",
      subtitle: "Live at the heart of the city with nature's touch",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentImage].src}
            src={images[currentImage].src}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
            alt={images[currentImage].title}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white drop-shadow-xl mb-6"
        >
          Fortune One
        </motion.h1>

        {/* Animated Title and Subtitle with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentImage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="text-2xl sm:text-3xl font-semibold text-[#FFDBBB] drop-shadow-lg">
              {images[currentImage].title}
            </div>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl drop-shadow-md">
              {images[currentImage].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Explore Properties
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Schedule a Visit
          </motion.button>
        </motion.div>

        {/* Pagination Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-24 flex space-x-3"
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="h-8 w-8 text-white opacity-80" />
        </motion.div>
      </div>

      {/* Side Navigation */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
        <div className="flex flex-col space-y-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-1 h-12 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          key={currentImage}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-white"
        />
      </div>
    </section>
  );
};

export default Hero;