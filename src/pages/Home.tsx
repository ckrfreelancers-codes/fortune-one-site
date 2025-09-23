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
          className="text-5xl md:text-7xl font-bold text-white drop-shadow-xl"
        >
          Fortune One
        </motion.h1>

        {/* Animated Title and Subtitle with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${images[currentImage].title}-${currentImage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="mt-6"
          >
            <div className="text-2xl sm:text-3xl font-semibold text-[#FFDBBB] drop-shadow-lg">
              {images[currentImage].title}
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-3 text-lg sm:text-xl text-white/90 max-w-2xl drop-shadow-md"
            >
              {images[currentImage].subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="h-8 w-8 text-white opacity-80" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;