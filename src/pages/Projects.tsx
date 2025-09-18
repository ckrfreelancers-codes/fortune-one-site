import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Skyline Residences',
      location: 'Downtown Metropolitan',
      price: 'Starting ₹2.5 Cr',
      type: 'Luxury Apartments',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Available',
      features: ['3-4 BHK', 'Smart Home', 'Gym & Pool', 'Parking']
    },
    {
      id: 2,
      title: 'Garden Villas',
      location: 'Green Valley Estate',
      price: 'Starting ₹3.8 Cr',
      type: 'Premium Villas',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Selling Fast',
      features: ['4-5 BHK', 'Private Garden', 'Club House', '24/7 Security']
    },
    {
      id: 3,
      title: 'Marina Heights',
      location: 'Waterfront District',
      price: 'Starting ₹4.2 Cr',
      type: 'Penthouse Suites',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Pre-Launch',
      features: ['3-4 BHK', 'Sea View', 'Private Elevator', 'Concierge']
    },
    {
      id: 4,
      title: 'Tech Park Commons',
      location: 'IT Corridor',
      price: 'Starting ₹1.8 Cr',
      type: 'Smart Apartments',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Available',
      features: ['2-3 BHK', 'Co-working Space', 'EV Charging', 'High-Speed Internet']
    },
    {
      id: 5,
      title: 'Heritage Manor',
      location: 'Old Town District',
      price: 'Starting ₹5.5 Cr',
      type: 'Luxury Mansions',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Exclusive',
      features: ['5-7 BHK', 'Heritage Design', 'Wine Cellar', 'Home Theater']
    },
    {
      id: 6,
      title: 'Eco Green Towers',
      location: 'Sustainable City',
      price: 'Starting ₹2.1 Cr',
      type: 'Eco-Friendly Homes',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Coming Soon',
      features: ['2-4 BHK', 'Solar Panels', 'Rainwater Harvesting', 'Organic Gardens']
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#FFDBBB] via-[#CCBEB1] to-[#997E67]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#664930] via-[#997E67] to-[#CCBEB1] text-[#FFDBBB] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-1/4 right-1/4 w-64 h-64 border border-[#FFDBBB]/10 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1] 
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute bottom-1/4 left-1/6 w-48 h-48 bg-[#FFDBBB]/10 rounded-3xl blur-2xl"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                background: 'linear-gradient(135deg, #FFDBBB 0%, #CCBEB1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-[#FFDBBB]/90 max-w-4xl mx-auto leading-relaxed"
            >
              Discover our portfolio of exceptional properties, from luxury apartments to exclusive villas, each designed to exceed your expectations.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-[#FFDBBB] via-[#CCBEB1] to-[#997E67]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#664930] mb-6">
              Featured 
              <span 
                className="bg-gradient-to-r from-[#997E67] to-[#664930] bg-clip-text text-transparent"
              >
                {' '}Developments
              </span>
            </h2>
            <p className="text-xl text-[#664930]/70 max-w-3xl mx-auto">
              Each project represents our commitment to quality, innovation, and luxury living
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-[#997E67] via-[#CCBEB1] to-[#FFDBBB] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-10 left-10 w-32 h-32 border border-[#664930]/20 rounded-2xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#664930] mb-6">
              Why Choose Fortune One?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Locations",
                description: "Prime locations in the heart of the city with excellent connectivity",
                icon: "🏙️"
              },
              {
                title: "Quality Construction",
                description: "Superior construction quality with international standards",
                icon: "🏗️"
              },
              {
                title: "Timely Delivery",
                description: "Commitment to delivering projects on time with no delays",
                icon: "⏰"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotateY: 5
                }}
                className="bg-white/30 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-5xl mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-[#664930] mb-4">{feature.title}</h3>
                <p className="text-[#664930]/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#664930] via-[#997E67] to-[#CCBEB1] text-[#FFDBBB] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Explore?
            </h2>
            <p className="text-xl text-[#FFDBBB]/80 mb-8 max-w-2xl mx-auto">
              Schedule a visit to our premium properties and experience luxury living firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] text-[#664930] font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Site Visit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-[#FFDBBB] text-[#FFDBBB] font-semibold text-lg rounded-2xl hover:bg-[#FFDBBB] hover:text-[#664930] transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;