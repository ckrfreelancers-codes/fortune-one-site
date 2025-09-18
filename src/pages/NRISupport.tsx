import React from 'react';
import { motion } from 'framer-motion';
import { GlobeAltIcon, CreditCardIcon, PhoneIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

const NRISupport = () => {
  const services = [
    {
      icon: GlobeAltIcon,
      title: 'Global Reach',
      description: 'Dedicated support for NRIs across the world with local expertise'
    },
    {
      icon: CreditCardIcon,
      title: 'Easy Financing',
      description: 'Specialized NRI loan assistance and flexible payment options'
    },
    {
      icon: DocumentCheckIcon,
      title: 'Legal Assistance',
      description: 'Complete documentation support and legal compliance guidance'
    },
    {
      icon: PhoneIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support across multiple time zones'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Virtual meeting to understand your requirements and budget'
    },
    {
      step: '02',
      title: 'Property Selection',
      description: 'Curated property options based on your preferences'
    },
    {
      step: '03',
      title: 'Virtual Tours',
      description: 'High-quality virtual tours and video calls with our team'
    },
    {
      step: '04',
      title: 'Documentation',
      description: 'Complete paperwork assistance and legal verification'
    },
    {
      step: '05',
      title: 'Property Handover',
      description: 'Seamless property handover with quality assurance'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#664930] via-[#997E67] to-[#CCBEB1] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 right-1/3 w-32 h-32 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-[#FFDBBB]/20 rounded-2xl blur-2xl"
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
              NRI 
              <span className="bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] bg-clip-text text-transparent">
                {' '}Support
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F5E9E1] max-w-4xl mx-auto leading-relaxed">
              Specialized services for Non-Resident Indians looking to invest in premium real estate back home. We make your property investment journey seamless from anywhere in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              NRI 
              <span className="bg-gradient-to-r from-[#664930] to-[#997E67] bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support tailored for Non-Resident Indians
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: 'spring' }}
                whileHover={{ y: -15, rotateY: 10, scale: 1.05 }}
                className="bg-gradient-to-br from-[#FFFBF8] to-[#F5E9E1] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#664930] to-[#997E67] rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <service.icon className="h-8 w-8 text-[#FFDBBB]" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFFBF8] to-[#F5E9E1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our 
              <span className="bg-gradient-to-r from-[#664930] to-[#997E67] bg-clip-text text-transparent">
                {' '}Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 5-step process to make your property investment hassle-free
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5 }}
                  className={`max-w-lg bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-[#664930] to-[#997E67] rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4"
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#664930] via-[#997E67] to-[#CCBEB1] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Invest from Abroad?
            </h2>
            <p className="text-xl text-[#F5E9E1] mb-8 max-w-2xl mx-auto">
              Let our NRI specialists guide you through your property investment journey with personalized support every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] text-gray-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-2xl hover:bg-white hover:text-[#664930] transition-all duration-300"
              >
                Download NRI Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NRISupport;
