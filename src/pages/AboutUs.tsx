import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  const sections = [
    {
      title: "Mission",
      text: `Our mission is to redefine the real estate experience by offering not just properties, but thoughtfully designed spaces that reflect luxury, trust, and innovation. We are committed to providing expert guidance and end-to-end services, ensuring every client’s journey — from discovery to ownership — is smooth and rewarding. With a foundation built on customer satisfaction, transparency, and excellence, we strive to craft landmark developments that create lasting value and inspire future generations.`,
      image: "/WhatsApp Image 2025-09-25 at 14.47.26_f5e0d268.jpg",
    },
    {
      title: "Vision",
      text: `Our vision is to be a global leader in real estate, setting new benchmarks in design, quality, and customer care. We aspire to create iconic properties that blend modern living with sustainable practices, transforming skylines and enriching lives. By embracing innovation, personalization, and integrity, we aim to build communities where dreams take root and prosperity grows.`,
      image: "/WhatsApp Image 2025-09-25 at 14.47.25_cb718229.jpg",
    },
    {
      title: "Values",
      values: [
        "Integrity – We uphold the highest ethical standards, ensuring honesty in every decision.",
        "Customer-Centricity – Our clients’ aspirations guide every step we take.",
        "Excellence – We pursue perfection, delivering unmatched quality and attention to detail.",
        "Innovation – We embrace creativity, technology, and forward-thinking solutions.",
        "Trust – We nurture lasting relationships built on transparency, reliability, and respect.",
      ],
      image: "/WhatsApp Image 2025-09-25 at 14.47.28_1865cf5f.jpg",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white py-20 relative">
      <LoadingScreen loading={loading} />
      
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
            For 20+ years, Fortune One Group has turned visions into <span className="font-semibold">landmarks of trust, elegance, and innovation</span>. We don’t just build properties — we create <span className="font-semibold">timeless spaces where dreams find a home</span>.
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
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
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
              <h3 className="text-3xl md:text-4xl font-bold text-[#664930] mb-4">
                {sec.title}
              </h3>
              {sec.values ? (
                <ul className="list-disc pl-6 space-y-3 text-left text-lg md:text-xl text-[#664930]/90">
                  {sec.values.map((value, i) => (
                    <li key={i}>{value}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-[#664930]/90 leading-relaxed text-lg md:text-xl">
                  {sec.text}
                </p>
              )}
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
          Explore our diverse portfolio of apartments, villas, plots, and townships. 
          Let us guide you in making an investment that shapes your future.
        </p>
        <Link to="/projects">
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#664930] text-[#FFDBBB] font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Explore Properties
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
