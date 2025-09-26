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
      details: ['+917996000533', 'Toll Free: 1800-123-456']
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

  const office = {
    city: 'Bengaluru',
    address: 'Fortune one build co Pvt Ltd. 19/3 , Cunningham Road Bangalore 560001',
    phone: '+917996000533',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200'
  };

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

      {/* Send Us a Message Section */}
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
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-200"
          >
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="border-b-2 border-gray-300 focus:border-branddark outline-none p-3 rounded-lg shadow-sm"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="border-b-2 border-gray-300 focus:border-branddark outline-none p-3 rounded-lg shadow-sm"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="border-b-2 border-gray-300 focus:border-branddark outline-none p-3 rounded-lg shadow-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="border-b-2 border-gray-300 focus:border-branddark outline-none p-3 rounded-lg shadow-sm"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-2">Subject</label>
                <select
                  className="border-b-2 border-gray-300 focus:border-branddark outline-none p-3 rounded-lg shadow-sm"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="property_inquiry">Property Inquiry</option>
                  <option value="schedule_viewing">Schedule Viewing</option>
                  <option value="investment_consultation">Investment Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="border-b-2 border-gray-300 focus:border-branddark outline-none p-3 rounded-lg shadow-sm resize-none"
                  placeholder="Hi, I am interested in a 3BHK apartment in Bangalore. Please provide details on availability, pricing, and schedule a visit."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#664930] to-[#997E67] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our 
              <span className="bg-gradient-to-r from-[#664930] to-[#997E67] bg-clip-text text-transparent">
                {' '}Office
              </span>
            </h2>
          </div>

          <motion.div
            whileHover={{ y: -5, scale: 1.01 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-full mx-auto"
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img src={office.image} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{office.city}</h3>
              </div>
            </div>
            <div className="p-6 md:p-8">
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
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
