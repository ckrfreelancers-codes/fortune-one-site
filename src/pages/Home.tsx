import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, PlayIcon, SparklesIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";

// Swiper imports for gallery
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      title: "Luxury Living",
      subtitle: "Where Dreams Meet Reality",
      description: "Experience unparalleled luxury in our premium residential spaces"
    },
    {
      src: "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?auto=format&fit=crop&w=1600&q=80",
      title: "Premium Properties",
      subtitle: "Crafted for Excellence",
      description: "Meticulously designed properties that redefine modern living"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      title: "Investment Opportunities",
      subtitle: "Your Future Starts Here",
      description: "Smart investments in prime locations for guaranteed returns"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Loader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
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

  if (loading) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-transparent flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.img
            src="/Fortune One.png"
            alt="Fortune One Logo"
            className="w-auto h-auto max-w-40 max-h-40 drop-shadow-2xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Full-Screen Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 1.05,
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="relative h-full w-full">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                y: [0, -200, 0],
                x: [0, Math.sin(i) * 100, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
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

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-left"
              >
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <SparklesIcon className="h-4 w-4 mr-2" />
                  Premium Real Estate Solutions
                </motion.div>

                <motion.h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Fortune One
                  <span className="block bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] bg-clip-text text-transparent">
                    Real Estate
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#FFDBBB] mb-3">
                    {heroSlides[currentSlide].title}
                  </h2>
                  <p className="text-lg text-white/90 mb-4 leading-relaxed">
                    {heroSlides[currentSlide].description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-[#664930] to-[#997E67] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Explore Properties</span>
                    <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <PlayIcon className="h-5 w-5" />
                    <span>Virtual Tour</span>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Content - Slide Indicators & Info */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="hidden lg:flex flex-col items-end space-y-8"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-sm">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {heroSlides[currentSlide].subtitle}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Discover exceptional properties that combine luxury, comfort, and investment potential.
                  </p>
                </div>

                {/* Slide Navigation */}
                <div className="flex flex-col space-y-4">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-12 h-1 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-white w-16'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-6 gap-8 h-full">
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    opacity: [0.1, 0.5, 0.1],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + (i % 3),
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Embark on Your Dream Property Journey
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                  With more than <span className="font-bold text-[#FFDBBB]">15 years of experience</span> and 
                  <span className="font-bold text-[#FFDBBB]"> 10,000+ satisfied clients</span>, 
                  <span className="font-cursive text-2xl text-[#FFDBBB]"> Fortune One Group</span> delivers safe, secure, 
                  and seamless real estate solutions. Explore exceptional properties and let us guide you to 
                  <span className="italic font-semibold text-[#FFDBBB]"> unforgettable investments!</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsData.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  rotateX: -5,
                  y: -10
                }}
                className="group bg-white/15 backdrop-blur-md rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3 
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  animate={{ scale: statsInView ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {counts[i].toLocaleString()}+
                </motion.h3>
                <p className="text-lg text-white/90 font-medium">{stat.label}</p>
                
                {/* Decorative element */}
                <motion.div
                  className="w-16 h-1 bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Categories - Redesigned */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-64 h-64 border border-[#CCBEB1]/20 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-20 w-48 h-48 bg-[#FFDBBB]/10 rounded-3xl blur-2xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-[#664930] mb-6"
            >
              Discover the Pinnacle of 
              <span className="block bg-gradient-to-r from-[#997E67] to-[#664930] bg-clip-text text-transparent">
                Real Estate Excellence
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-xl text-[#664930]/80 max-w-3xl mx-auto leading-relaxed"
            >
              Choose from our carefully curated property selections, thoughtfully categorized to match your lifestyle and investment goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Apartments", 
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
                description: "Modern living spaces with premium amenities",
                features: ["2-4 BHK", "Smart Homes", "Premium Locations"]
              },
              { 
                title: "Plots", 
                image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&w=400&q=80",
                description: "Prime land parcels for custom construction",
                features: ["DTCP Approved", "Clear Titles", "Gated Communities"]
              },
              { 
                title: "Villas", 
                image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&w=400&q=80",
                description: "Luxury independent homes with gardens",
                features: ["3-5 BHK", "Private Gardens", "Premium Finishes"]
              },
              { 
                title: "Townships", 
                image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&w=400&q=80",
                description: "Integrated communities with all amenities",
                features: ["Complete Infrastructure", "Schools & Hospitals", "Recreation Centers"]
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
                  scale: 1.02
                }}
                className="group cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#CCBEB1]/20"
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
                  
                  {/* Hover Features */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {category.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#664930] mb-2 group-hover:text-[#997E67] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-[#664930]/70 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <motion.div
                    className="flex items-center text-[#997E67] font-semibold text-sm group-hover:text-[#664930] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Explore Options</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#CCBEB1]/20 to-[#997E67]/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Enhanced */}
      <section className="relative py-24 bg-gradient-to-br from-[#F8F4F0] to-[#F0E6D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-[#664930] mb-6"
            >
              Explore Our Luxury 
              <span className="bg-gradient-to-r from-[#997E67] to-[#664930] bg-clip-text text-transparent">
                {' '}Property Gallery
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-xl text-[#664930]/80 max-w-3xl mx-auto leading-relaxed"
            >
              Discover stunning properties with modern designs and premium amenities. Experience the future of luxury living.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              spaceBetween={0}
              slidesPerView={1}
              effect="fade"
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-[#664930]',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#997E67]'
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
                  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
                  title: "Modern Apartments",
                  description: "Contemporary living spaces with world-class amenities"
                },
                {
                  image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&w=1600&q=80",
                  title: "Premium Plots",
                  description: "Prime land parcels in developing neighborhoods"
                },
                {
                  image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&w=1600&q=80",
                  title: "Luxury Villas",
                  description: "Exclusive independent homes with private gardens"
                },
                {
                  image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&w=1600&q=80",
                  title: "Integrated Townships",
                  description: "Complete communities with all modern facilities"
                }
              ].map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-[600px] group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Slide Content */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-8 text-white"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <div className="max-w-2xl">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          {slide.title}
                        </h3>
                        <p className="text-lg text-white/90 mb-6 leading-relaxed">
                          {slide.description}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-xl text-white font-semibold hover:bg-white/30 transition-all duration-300"
                        >
                          <span>View Details</span>
                          <ArrowRightIcon className="h-5 w-5 ml-2" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !text-[#664930] !bg-white/90 !rounded-full !w-12 !h-12 !mt-0 !left-4 hover:!bg-white transition-all duration-300 shadow-lg"></div>
            <div className="swiper-button-next !text-[#664930] !bg-white/90 !rounded-full !w-12 !h-12 !mt-0 !right-4 hover:!bg-white transition-all duration-300 shadow-lg"></div>
          </motion.div>

          {/* Gallery Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { icon: CheckCircleIcon, title: "Quality Assured", description: "Every property meets our strict quality standards" },
              { icon: SparklesIcon, title: "Premium Amenities", description: "World-class facilities and modern conveniences" },
              { icon: CheckCircleIcon, title: "Prime Locations", description: "Strategic locations with excellent connectivity" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#CCBEB1]/30"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-[#664930] to-[#997E67] rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#664930] mb-2">{feature.title}</h3>
                <p className="text-[#664930]/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;