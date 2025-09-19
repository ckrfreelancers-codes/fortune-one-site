import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, PlayIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      title: "Luxury Living",
      subtitle: "Where Dreams Meet Reality"
    },
    {
      src: "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?auto=format&fit=crop&w=1600&q=80",
      title: "Premium Properties",
      subtitle: "Crafted for Excellence"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      title: "Investment Opportunities",
      subtitle: "Your Future Starts Here"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loader
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Stats for rolling counters
  const statsData = [
    { number: 15, label: "Years of Collective Experience" },
    { number: 10000, label: "Customer Satisfaction" },
    { number: 500, label: "Partners" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!statsInView) return;
    statsData.forEach((stat, i) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const increment = end / (duration / 16);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(start);
          return updated;
        });
      }, 16);
    });
  }, [statsInView]);

  if (loading) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-[#FFDBBB] flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.img
            src="/Fortune One.png" // replace with your logo path
            alt="Logo"
            className="w-auto h-auto max-w-32 max-h-32"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDBBB] via-[#CCBEB1] to-[#997E67]">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden pt-24 sm:pt-32 lg:pt-0">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              animate={{
                opacity: index === currentImage ? 1 : 0,
                scale: index === currentImage ? 1 : 1.1,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#664930]/20 via-[#997E67]/20 to-[#CCBEB1]/20 z-0" />
            </motion.div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#FFDBBB]/30 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${60 + i * 5}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.h1
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
                style={{
                  color: '#FFDBBB',
                  textShadow: '0 6px 25px rgba(0,0,0,0.6)',
                }}
              >
                Fortune One
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#FFDBBB] mb-4"
              >
                {images[currentImage].title}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-lg sm:text-xl md:text-2xl text-[#FFDBBB]/90 mb-8"
              >
                {images[currentImage].subtitle}
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-[#FFDBBB]/80 mb-12 max-w-4xl mx-auto leading-relaxed"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
            >
              Experience luxury living with our exclusive collection of premium properties.
              From modern penthouses to elegant villas, we transform dreams into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: '0 20px 40px rgba(102,73,48,0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-gradient-to-r from-[#664930] to-[#997E67] text-[#FFDBBB] font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
              >
                <SparklesIcon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore Properties</span>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: 'rgba(255,219,187,0.1)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 border-2 border-[#FFDBBB]/60 text-[#FFDBBB] font-semibold text-lg rounded-2xl backdrop-blur-sm hover:border-[#FFDBBB] transition-all duration-300 flex items-center space-x-3"
              >
                <PlayIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Virtual Tour</span>
              </motion.button>
            </motion.div>

            {/* Image Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex justify-center space-x-3 mt-12"
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? 'bg-[#FFDBBB] w-8'
                      : 'bg-[#FFDBBB]/40 hover:bg-[#FFDBBB]/60'
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-[#FFDBBB]/80"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDownIcon className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="relative py-20 bg-gradient-to-br from-[#664930]/90 via-[#997E67]/80 to-[#CCBEB1]/70 perspective-1000"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#FFDBBB] mb-6"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            Embark on Your Dream Property with Fortune One
          </motion.h2>

          <motion.p
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3, duration: 1 }}
  className="relative text-lg md:text-xl text-[#FFDBBB]/95 mb-12 max-w-3xl mx-auto pl-6 border-l-4 border-[#FFD28F] leading-relaxed"
>
  With more than <span className="font-semibold text-[#FFD28F]">10 years of experience</span> and 
  <span className="font-semibold text-[#FFD28F]"> 10,000+ satisfied clients</span>,  
  <span className="font-cursive text-[#FFE6C7]"> Fortune One Group</span> delivers safe, secure, 
  and seamless real estate solutions. Explore exceptional properties domestically and internationally,  
  and let us guide you to <span className="italic text-[#FFD28F]">unforgettable investments!</span>
</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          >
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                className="bg-[#997E67]/90 backdrop-blur-md rounded-2xl p-8 shadow-lg"
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
              >
                <h3 className="text-4xl font-bold text-[#FFDBBB] mb-2">
                  {counts[i].toLocaleString()}+
                </h3>
                <p className="text-lg text-[#FFDBBB]/90">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Property Categories Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#664930] mb-6"
          >
            Discover the Pinnacle of Real Estate Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl md:text-2xl text-[#664930]/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Choose from our carefully curated property selections, thoughtfully categorized to match your lifestyle and investment goals.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Apartments", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" },
              { title: "Plots", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&w=400&q=80" },
              { title: "Villas", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&w=400&q=80" },
              { title: "Townships", image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&w=400&q=80" },
            ].map((category) => (
              <motion.div
                key={category.title}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cursor-pointer rounded-2xl overflow-hidden shadow-xl"
                onClick={() => window.location.href = "/projects"}
              >
                <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-center bg-white">
                  <h3 className="text-2xl font-bold text-[#664930]">{category.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
