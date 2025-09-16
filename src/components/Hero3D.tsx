import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero3D = () => {
  return (
    <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background - static for performance */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
          >
            Fortune One
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Real Estate
            </span>
          </h1>
        </div>

        <p
          className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          style={{ textShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
        >
          Experience luxury living with our exclusive collection of premium properties. 
          From modern penthouses to elegant villas, we make your dream home a reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-10 py-5 bg-gradient-to-r from-amber-400 to-yellow-600 text-gray-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
            Explore Properties
          </button>
          <button className="px-10 py-5 border-2 border-white/30 text-white font-semibold text-lg rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-200">
            Schedule Visit
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDownIcon className="h-8 w-8 text-white/70" />
      </div>

      {/* Decorative cards disabled for performance */}
    </section>
  );
};

export default Hero3D;