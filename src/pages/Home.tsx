import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, PlayIcon, SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";
import LoadingScreen from "../components/LoadingScreen";

// Swiper imports for gallery
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      title: "Luxury Living",
      subtitle: "Where Dreams Meet Reality",
      description: "Experience unparalleled comfort in our premium residential spaces"
    },
    {
      src: "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?auto=format&fit=crop&w=1600&q=80",
      title: "Premium Properties",
      subtitle: "Crafted for Excellence",
      description: "Meticulously designed homes that redefine modern living"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      title: "Investment Opportunities",
      subtitle: "Your Future Starts Here",
      description: "Smart investments in prime locations for lasting value"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
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
    { number: 15, label: "Years of Experience", icon: "🏆" },
    { number: 10000, label: "Happy Customers", icon: "😊" },
    { number: 500, label: "Trusted Partners", icon: "🤝" },
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

  return (
    <div className="min-h-screen relative">
      <LoadingScreen loading={loading} />
      
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Images with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              animate={{
                opacity: index === currentImage ? 1 : 0,
                scale: index === currentImage ? 1 : 1.05,
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={image.src}
                alt={image.title}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                y: [0, -200, 0],
                x: [0, Math.sin(i) * 100, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${70 + (i % 3) * 10}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Content - Redesigned Layout */}
        <div className="relative z-30 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-left"
              >
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
                >
                  <SparklesIcon className="h-4 w-4 text-[#FFDBBB] mr-2" />
                  <span className="text-white text-sm font-medium">Premium Real Estate</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  style={{ textShadow: '0 8px 30px rgba(0,0,0,0.8)' }}
                >
                  Fortune One
                </motion.h1>

                {/* Dynamic Content */}
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#FFDBBB] mb-3">
                    {images[currentImage].title}
                  </h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-4">
                    {images[currentImage].subtitle}
                  </p>
                  <p className="text-base text-white/80 max-w-lg">
                    {images[currentImage].description}
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] text-[#664930] font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Explore Properties</span>
                    <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 border-2 border-white/60 text-white font-semibold text-lg rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <PlayIcon className="h-5 w-5" />
                    <span>Virtual Tour</span>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Column - Image Indicators & Info */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="hidden lg:flex flex-col items-end space-y-8"
              >
                {/* Slide Indicators */}
                <div className="flex flex-col space-y-4">
                  {images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`w-3 h-12 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? 'bg-[#FFDBBB] shadow-lg'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Property Stats */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-white/80 text-sm">Premium Properties</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 lg:hidden"
        >
          <div className="flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? 'bg-[#FFDBBB] w-8'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/80"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDownIcon className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Redesigned */}
      <section
        ref={statsRef}
        className="relative py-24 bg-gradient-to-br from-[#664930] via-[#997E67] to-[#CCBEB1] overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFDBBB] mb-6">
              Embark on Your Dream Property Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-[#FFDBBB]/90 leading-relaxed">
                With over <span className="font-bold text-[#FFD28F]">10 years of experience</span> and 
                <span className="font-bold text-[#FFD28F]"> 10,000+ satisfied clients</span>, Fortune One Group 
                delivers safe, secure, and seamless real estate solutions.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 10, 
                  scale: 1.05,
                  rotateX: -5 
                }}
                className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:border-white/40 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-[#FFDBBB] mb-3"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {counts[i].toLocaleString()}+
                </motion.div>
                <p className="text-lg text-[#FFDBBB]/80 font-medium">{stat.label}</p>
                
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#FFDBBB]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Categories Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-white via-[#FFFBF7] to-[#FFF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#664930] mb-6">
              Discover Excellence in Every Category
            </h2>
            <p className="text-xl text-[#664930]/70 max-w-3xl mx-auto leading-relaxed">
              From luxury apartments to exclusive townships, each property is crafted with precision and designed for your lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Apartments", 
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
                description: "Modern living spaces with premium amenities",
                features: ["2-4 BHK", "Smart Homes", "Premium Amenities"]
              },
              { 
                title: "Plots", 
                image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&w=400&q=80",
                description: "Prime land parcels for your dream home",
                features: ["DTCP Approved", "Clear Titles", "Gated Community"]
              },
              { 
                title: "Villas", 
                image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&w=400&q=80",
                description: "Exclusive independent homes with luxury",
                features: ["3-5 BHK", "Private Gardens", "Premium Locations"]
              },
              { 
                title: "Townships", 
                image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&w=400&q=80",
                description: "Integrated communities with world-class facilities",
                features: ["Master Planned", "Complete Infrastructure", "Lifestyle Amenities"]
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateX: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -15, 
                  rotateY: 5, 
                  scale: 1.02,
                  rotateX: -5 
                }}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                style={{ transformStyle: 'preserve-3d' }}
                onClick={() => window.location.href = "/projects"}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Content */}
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-6"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <h3 className="text-2xl font-bold text-[#664930] mb-3 group-hover:text-[#997E67] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-[#664930]/70 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <motion.div
                    className="flex items-center text-[#997E67] font-semibold group-hover:translate-x-2 transition-transform duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>Explore</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </motion.div>
                </motion.div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#997E67]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-[#FFF8F2] via-[#F5ECE5] to-[#FFDBBB]/20">
        <div className="max-w-[95%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#664930] mb-6">
              Luxury Living Gallery
            </h2>
            <p className="text-xl text-[#664930]/70 max-w-3xl mx-auto leading-relaxed">
              Step inside our stunning properties and experience the epitome of luxury living
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              effect="fade"
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet custom-swiper-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active custom-swiper-bullet-active'
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              loop={true}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              {[
                {
                  img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
                  title: "Luxury Apartments",
                  subtitle: "Modern comfort meets elegant design"
                },
                {
                  img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&w=1600&q=80",
                  title: "Premium Villas",
                  subtitle: "Exclusive homes for discerning families"
                },
                {
                  img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&w=1600&q=80",
                  title: "Luxury Interiors",
                  subtitle: "Crafted with attention to every detail"
                },
                {
                  img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&w=1600&q=80",
                  title: "Premium Amenities",
                  subtitle: "World-class facilities at your doorstep"
                }
              ].map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-[600px]">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-12 left-12 text-white">
                      <motion.h3 
                        className="text-3xl md:text-4xl font-bold mb-2"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {slide.title}
                      </motion.h3>
                      <motion.p 
                        className="text-lg text-white/90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {slide.subtitle}
                      </motion.p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !text-[#664930] !bg-white/90 !rounded-full !w-12 !h-12 !shadow-lg hover:!bg-white transition-all duration-300"></div>
            <div className="swiper-button-next !text-[#664930] !bg-white/90 !rounded-full !w-12 !h-12 !shadow-lg hover:!bg-white transition-all duration-300"></div>
          </motion.div>

          {/* Gallery Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { icon: "🏠", title: "Premium Interiors", desc: "Luxury finishes and modern amenities" },
              { icon: "🌟", title: "Smart Features", desc: "Technology-integrated living spaces" },
              { icon: "🏞️", title: "Scenic Views", desc: "Breathtaking vistas from every window" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="text-xl font-bold text-[#664930] mb-2">{feature.title}</h4>
                <p className="text-[#664930]/70">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;