import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, TrophyIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const ChannelPartners = () => {
  const benefits = [
    {
      icon: TrophyIcon,
      title: 'Exclusive Projects',
      description: 'Get access to our premium project portfolio before public launch'
    },
    {
      icon: ChartBarIcon,
      title: 'Attractive Commissions',
      description: 'Competitive commission structure with performance bonuses'
    },
    {
      icon: UsersIcon,
      title: 'Marketing Support',
      description: 'Complete marketing materials and sales support from our team'
    }
  ];

  const partnerTypes = [
    {
      title: 'Real Estate Brokers',
      description: 'Licensed real estate professionals looking to expand their portfolio',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Investment Consultants',
      description: 'Financial advisors specializing in real estate investments',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Corporate Partners',
      description: 'Companies looking to provide housing solutions for employees',
      image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#997E67] via-[#664930] to-[#997E67] text-[#FFDBBB] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/3 left-1/4 w-40 h-40 border-2 border-white/10 rounded-2xl"
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
              Fortune One 
              <span className="bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] bg-clip-text text-transparent">
                {' '}Channel Partners
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#CCBEB1] max-w-4xl mx-auto leading-relaxed">
              Join our exclusive network of channel partners and unlock premium real estate opportunities with attractive rewards and comprehensive support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#FFFBF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#664930] mb-6">
              Partner 
              <span className="bg-gradient-to-r from-[#997E67] to-[#664930] bg-clip-text text-transparent">
                {' '}Benefits
              </span>
            </h2>
            <p className="text-xl text-[#997E67]/80 max-w-3xl mx-auto">
              Why choose Fortune One as your channel partner
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, type: 'spring' }}
                whileHover={{ y: -10, rotateY: 10, scale: 1.05 }}
                className="bg-gradient-to-br from-[#FFDBBB]/40 to-[#CCBEB1]/30 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform perspective-1000"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#664930] to-[#997E67] rounded-2xl flex items-center justify-center mb-6"
                >
                  <benefit.icon className="h-8 w-8 text-[#FFDBBB]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#664930] mb-4">{benefit.title}</h3>
                <p className="text-[#664930]/80 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFDBBB]/30 to-[#CCBEB1]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#664930] mb-6">
              Who Can 
              <span className="bg-gradient-to-r from-[#997E67] to-[#664930] bg-clip-text text-transparent">
                {' '}Partner
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateX: 30 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: 'spring' }}
                whileHover={{ y: -15, rotateY: 5, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform perspective-1000"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#664930]/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#664930] mb-3">{type.title}</h3>
                  <p className="text-[#664930]/80 leading-relaxed">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#997E67] via-[#664930] to-[#997E67] text-[#FFDBBB] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner With Fortune One?
            </h2>
            <p className="text-xl text-[#CCBEB1] mb-8 max-w-2xl mx-auto">
              Join our network of successful channel partners and unlock exclusive opportunities in premium real estate.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] text-[#664930] font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChannelPartners;
