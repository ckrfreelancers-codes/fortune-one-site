import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const ContactUs = () => {
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      details: ['Fortune one build co Pvt Ltd. 19/3 , Cunningham Road Bangalore 560001']
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: ['+917996000533', '+91 98765 43211', 'Toll Free: 1800-123-456']
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: ['reach@fortuneone.co']
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Saturday: 10:00 AM - 5:00 PM', 'Sunday: Closed']
    }
  ];

  const offices = [
    {
      city: 'Bengaluru',
      address: 'Fortune one build co Pvt Ltd. 19/3 , Cunningham Road Bangalore 560001',
      phone: '+917996000533',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      city: 'Delhi',
      address: '456 Corporate Plaza, Connaught Place',
      phone: '+91 98765 43211',
      image: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      city: 'Bangalore',
      address: '789 Tech Park, Electronic City',
      phone: '+91 98765 43212',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#664930] via-[#997E67] to-[#CCBEB1] text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Contact 
              <span className="bg-gradient-to-r from-[#FFDBBB] to-[#CCBEB1] bg-clip-text text-transparent">
                {' '}Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#FFDBBB] max-w-4xl mx-auto leading-relaxed">
              Ready to find your dream home or have questions about our services? We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In 
              <span className="bg-gradient-to-r from-[#664930] to-[#997E67] bg-clip-text text-transparent">
                {' '}Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for all your real estate needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-[#FFF8F2] to-[#F7E9DD] p-6 rounded-2xl shadow-lg hover:shadow-2xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#664930] to-[#997E67] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#664930] mb-3">{info.title}</h3>
                {info.details.map((d, i) => (
                  <p key={i} className="text-gray-600 text-sm">{d}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-r from-[#FFF8F2] to-[#F7E9DD]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Send Us a 
              <span className="bg-gradient-to-r from-[#664930] to-[#997E67] bg-clip-text text-transparent">
                {' '}Message
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              {/* Name and Email Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="input" placeholder="First Name" />
                <input className="input" placeholder="Last Name" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="input" placeholder="Email" />
                <input className="input" placeholder="Phone" />
              </div>

              <select className="input">
                <option>Select a subject</option>
                <option>Property Inquiry</option>
                <option>Schedule Viewing</option>
                <option>Investment Consultation</option>
              </select>

              <textarea rows={6} className="input resize-none" placeholder="Tell us about your requirements..." />

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#664930] to-[#997E67] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our 
              <span className="bg-gradient-to-r from-[#664930] to-[#997E67] bg-clip-text text-transparent">
                {' '}Offices
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={office.image} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-2">
                    <MapPinIcon className="h-5 w-5 text-[#664930] mt-1 mr-3" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-[#664930] mr-3" />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
