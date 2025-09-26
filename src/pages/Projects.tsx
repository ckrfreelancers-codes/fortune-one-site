import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import LoadingScreen from '../components/LoadingScreen';
import img1 from '../public/img1.png';
import img2 from '../public/img2.png';
import img3 from '../public/img3.png';


const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [showSiteVisitForm, setShowSiteVisitForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    preferredDate: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Fortune One Grandeur',
      location: 'Whitefield, Bangalore',
      price: 'Starting ₹2.5 Cr',
      type: 'Luxury Apartments',
      image: '/img1.png',
      status: 'Available',
      features: ['3-4 BHK', 'Smart Home', 'Gym & Pool', 'Parking']
    },
    {
      id: 2,
      title: 'Fortune One Elite Villas',
      location: 'Sarjapur Road, Bangalore',
      price: 'Starting ₹3.8 Cr',
      type: 'Premium Villas',
      image: '/img2.png',
      status: 'Selling Fast',
      features: ['4-5 BHK', 'Private Garden', 'Club House', '24/7 Security']
    },
    {
      id: 3,
      title: 'Fortune One Skyline',
      location: 'Electronic City, Bangalore',
      price: 'Starting ₹4.2 Cr',
      type: 'Penthouse Suites',
      image: '/img3.png'
      status: 'Pre-Launch',
      features: ['3-4 BHK', 'Sea View', 'Private Elevator', 'Concierge']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Site visit form submitted:', formData);
    alert('Thank you! We will contact you soon to schedule your site visit.');
    setShowSiteVisitForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      preferredDate: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-[#FFDBBB] via-[#CCBEB1] to-[#997E67] relative">
      <LoadingScreen loading={loading} />
      
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
                onClick={() => setShowSiteVisitForm(true)}
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

      {/* Site Visit Form Modal */}
      {showSiteVisitForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSiteVisitForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#664930]">Schedule Site Visit</h3>
              <button
                onClick={() => setShowSiteVisitForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#664930] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#664930] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#664930] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-[#664930] mb-2">
                  Interested Project
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent"
                >
                  <option value="">Select a project</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.title}>
                      {project.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-[#664930] mb-2">
                  Preferred Visit Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#664930] mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#CCBEB1] rounded-xl focus:ring-2 focus:ring-[#997E67] focus:border-transparent resize-none"
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowSiteVisitForm(false)}
                  className="flex-1 py-3 border-2 border-[#CCBEB1] text-[#664930] font-semibold rounded-xl hover:bg-[#CCBEB1]/20 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-[#664930] to-[#997E67] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Schedule Visit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;