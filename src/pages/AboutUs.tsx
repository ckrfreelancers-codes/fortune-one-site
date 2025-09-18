import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  const sections = [
    {
      title: "Mission",
      text: "To redefine the real estate experience by delivering exceptional properties, expert guidance, and comprehensive services. We focus on customer satisfaction, innovation, and transparency to ensure every client achieves their dream investment.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Vision",
      text: "To be a global leader in real estate, providing world-class properties and seamless investment opportunities while enriching lives through personalized, innovative, and secure solutions.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Values",
      text: `Integrity: Upholding the highest ethical standards.\nCustomer-Centricity: Prioritizing our clients' needs.\nExcellence: Striving for superior quality in everything we do.\nInnovation: Embracing creativity and forward-thinking solutions.\nTrust: Building lasting relationships based on transparency and reliability.`,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // show loader for 2 seconds
    return () => clearTimeout(timer);
  }, []);

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
          src="/Fortune One.png"
          alt="Logo"
          className="h-auto w-auto max-w-32 max-h-32" // keeps original scale, small size
          animate={{ scale: [1, 1.1, 1] }} // subtle zoom effect
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}


  return (
    <div className="min-h-screen bg-white py-20">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center text-center rounded-b-3xl bg-gradient-to-r from-[#FFDBBB] via-[#CCBEB1] to-[#997E67]">
        <div className="relative z-10 max-w-3xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#664930] drop-shadow-lg"
          >
            Transforming Real Estate for Over 20 Years
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-[#664930]/90 mt-4 leading-relaxed"
          >
            Fortune One Group was founded over two decades ago with a clear vision: to make real estate investment accessible and rewarding. Starting as a small team, we have grown into a global leader, offering innovative and diverse real estate solutions.
          </motion.p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {sections.map((sec, index) => (
          <motion.div
            key={sec.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={sec.image}
                alt={sec.title}
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-[#664930] mb-4">{sec.title}</h3>
              <p className="text-[#664930]/90 leading-relaxed whitespace-pre-line text-lg md:text-xl">{sec.text}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-[#FFDBBB] py-16 text-center rounded-t-3xl mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#664930] mb-6">
          Your Dream Property Awaits
        </h2>
        <p className="text-lg md:text-xl text-[#664930]/90 max-w-3xl mx-auto mb-8">
          Explore our diverse portfolio of apartments, villas, plots, and townships. Let us guide you in making an investment that shapes your future.
        </p>
        <button className="px-8 py-4 bg-[#664930] text-[#FFDBBB] font-bold rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
          Explore Properties
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
