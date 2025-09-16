import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Skyline Residences',
      location: 'Downtown Metropolitan',
      price: 'Starting $2.5M',
      type: 'Luxury Apartments',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Available',
      features: ['3-4 BHK', 'Smart Home', 'Gym & Pool', 'Parking']
    },
    {
      id: 2,
      title: 'Garden Villas',
      location: 'Green Valley Estate',
      price: 'Starting $3.8M',
      type: 'Premium Villas',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Selling Fast',
      features: ['4-5 BHK', 'Private Garden', 'Club House', '24/7 Security']
    },
    {
      id: 3,
      title: 'Marina Heights',
      location: 'Waterfront District',
      price: 'Starting $4.2M',
      type: 'Penthouse Suites',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Pre-Launch',
      features: ['3-4 BHK', 'Sea View', 'Private Elevator', 'Concierge']
    },
    {
      id: 4,
      title: 'Tech Park Commons',
      location: 'IT Corridor',
      price: 'Starting $1.8M',
      type: 'Smart Apartments',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Available',
      features: ['2-3 BHK', 'Co-working Space', 'EV Charging', 'High-Speed Internet']
    },
    {
      id: 5,
      title: 'Heritage Manor',
      location: 'Old Town District',
      price: 'Starting $5.5M',
      type: 'Luxury Mansions',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Exclusive',
      features: ['5-7 BHK', 'Heritage Design', 'Wine Cellar', 'Home Theater']
    },
    {
      id: 6,
      title: 'Eco Green Towers',
      location: 'Sustainable City',
      price: 'Starting $2.1M',
      type: 'Eco-Friendly Homes',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1200',
      status: 'Coming Soon',
      features: ['2-4 BHK', 'Solar Panels', 'Rainwater Harvesting', 'Organic Gardens']
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, -50, 0],
              opacity: [0.3, 0.7, 0.3] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute bottom-1/4 left-1/6 w-48 h-48 bg-blue-500/20 rounded-2xl blur-xl"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our 
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {' '}Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Discover our portfolio of exceptional properties, from luxury apartments to exclusive villas, each designed to exceed your expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Developments
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
    </div>
  );
};

export default Projects;
