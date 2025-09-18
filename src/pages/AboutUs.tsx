// src/pages/AboutUs.tsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Properties Delivered' },
    { number: '₹12,000+ Cr', label: 'Project Pipeline' },
    { number: '50+', label: 'Partners & Institutions' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-yellow-800 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                {' '}The Company
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Real estate development and advisory firm specializing in development, 
              portfolio management, and strategic planning for High-Net-Worth Individuals (HNIs), 
              Ultra-HNIs, family offices, and corporate clients across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, rotateY: 10, z: 50 }}
                className="text-center p-8 bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Journey of
                <span className="bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent">
                  {' '}Growth
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  We began our journey as a developer, building local residential properties in Chennai, 
                  rooted in a commitment to quality, timely delivery, and client trust.
                </p>
                <p>
                  From 2021 to 2025, we evolved into a Development Management (DM) company, partnering 
                  with landowners, HNIs, investors, and institutions to deliver high-value projects across India.
                </p>
                <p>
                  With strong advisory and execution capabilities, we unlocked multi-channel revenue streams 
                  and built long-term partnerships across Bengaluru, Mysuru, Gurgaon, Mumbai, Chennai, and other emerging corridors.
                </p>
                <p>
                  Today, with a proven portfolio and ₹12,000+ Cr pipeline, we are transitioning into a full-scale 
                  developer with strategic ambitions, scaling horizons in residential and commercial developments.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ rotateY: -5, scale: 1.02 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Luxury Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
              </div>

              {/* Floating accents */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-green-500 rounded-2xl shadow-xl opacity-90"
              />
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-amber-500 rounded-xl shadow-lg opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </section>  
    </div>
  );
};

export default AboutUs;
