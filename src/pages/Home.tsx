import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HomeModernIcon,
  BuildingOffice2Icon,
  KeyIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const stats = [
    { number: 5000, label: "Happy Families" },
    { number: 150, label: "Premium Projects" },
    { number: 20, label: "Years of Excellence" },
    { number: 50, label: "Awards Won" },
  ];

  const categories = [
    {
      title: "Luxury Villas",
      image:
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Modern Apartments",
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Commercial Spaces",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Plots",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const projects = [
    {
      title: "Skyline Residences",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Palm Villas",
      location: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1604014237744-8c9202250a9d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Fortune Towers",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const [counterOn, setCounterOn] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (statsInView) {
      setCounterOn(true);
    }
  }, [statsInView]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Fortune One Group</h1>
          <p className="text-xl md:text-2xl mb-8">Luxury Real Estate, Redefined</p>
          <button className="px-6 py-3 bg-[#FFDBBB] text-[#664930] font-semibold rounded-xl shadow-lg hover:bg-[#e6c6a1] transition-all duration-300">
            Explore Projects
          </button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="p-6 bg-white shadow-md rounded-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#664930] mb-2">
                {counterOn ? stat.number : "0"}+
              </h2>
              <p className="text-[#997E67] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#664930] mb-12">Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg group relative"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white text-2xl font-semibold">{cat.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#664930] text-center mb-12">
            Featured Projects
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {projects.map((project, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center">
                      <h3 className="text-3xl font-bold">{project.title}</h3>
                      <p className="text-lg">{project.location}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#664930] to-[#997E67] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your <span className="text-[#FFDBBB]">Dream Property?</span>
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Connect with our real estate experts and explore premium projects tailored for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#FFDBBB] text-[#664930] font-semibold rounded-xl shadow-lg hover:bg-[#e6c6a1] transition-all duration-300">
                Get in Touch
              </button>
              <button className="px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                Schedule a Visit
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80"
              alt="Dream Property"
              className="rounded-3xl shadow-2xl object-cover"
            />
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white/20 backdrop-blur-md p-6 rounded-2xl text-center shadow-xl"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <CheckCircleIcon className="h-10 w-10 text-[#FFDBBB] mx-auto mb-2" />
              <p className="text-white/90 font-medium">Verified Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c1c13] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Fortune One</h3>
            <p className="text-white/80 text-sm">
              Delivering premium real estate solutions with trust, transparency, and excellence.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/projects" className="hover:text-[#FFDBBB]">Projects</a></li>
              <li><a href="/about" className="hover:text-[#FFDBBB]">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#FFDBBB]">Contact</a></li>
              <li><a href="/careers" className="hover:text-[#FFDBBB]">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-white/80 text-sm">123 Premium Street, Bengaluru, India</p>
            <p className="text-white/80 text-sm">Email: info@fortuneone.com</p>
            <p className="text-white/80 text-sm">Phone: +91 98765 43210</p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Fortune One Group. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
