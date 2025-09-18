import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HomeIcon,
  BuildingOfficeIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Story', path: '/about' },
      { name: 'Leadership', path: '/about' },
      { name: 'Careers', path: '/career' }
    ],
    services: [
      { name: 'Luxury Homes', path: '/projects' },
      { name: 'Investment Advisory', path: '/projects' },
      { name: 'Property Management', path: '/projects' },
      { name: 'NRI Services', path: '/nri-support' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'Channel Partners', path: '/partners' },
      { name: 'Help Center', path: '/contact' },
      { name: 'Documentation', path: '/contact' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-water via-lavender to-nyanza text-branddark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-40 h-40 border border-white/20 rounded-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 w-60 h-60 bg-lavender/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Link to="/" className="flex items-center space-x-3 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-br from-water to-lavender rounded-2xl flex items-center justify-center shadow-md"
                  >
                    <HomeIcon className="h-6 w-6 text-branddark" />
                  </motion.div>
                  <span className="text-2xl font-bold">Fortune One</span>
                </Link>
                <p className="text-brandprimary text-lg leading-relaxed mb-6">
                  Crafting extraordinary real estate experiences for over 15 years. 
                  We don't just sell properties; we create lifestyles and build communities where families thrive.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-5 w-5 text-lavender mt-1 flex-shrink-0" />
                  <div className="text-brandprimary">
                    <p>123 Business Tower, Financial District</p>
                    <p>Fortune One Build Co Pvt Ltd. 19/3, Cunningham Road, Bangalore 560001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-lavender flex-shrink-0" />
                  <p className="text-brandprimary">+91 79960 00533</p>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-lavender flex-shrink-0" />
                  <p className="text-brandprimary">reach@fortuneone.co</p>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <BuildingOfficeIcon className="h-5 w-5 mr-2 text-lavender" />
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-brandprimary hover:text-lavender transition-colors duration-200 hover:translate-x-2 inline-block transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <HomeIcon className="h-5 w-5 mr-2 text-lavender" />
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-brandprimary hover:text-lavender transition-colors duration-200 hover:translate-x-2 inline-block transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <UsersIcon className="h-5 w-5 mr-2 text-lavender" />
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-brandprimary hover:text-lavender transition-colors duration-200 hover:translate-x-2 inline-block transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/40 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-lavender/40 transition-all duration-300"
                      title={social.name}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-brandprimary mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest updates on new projects, market insights, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-l-xl sm:rounded-r-none rounded-r-xl bg-white/60 border border-white/40 text-branddark placeholder-brandprimary focus:outline-none focus:ring-2 focus:ring-lavender"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-lavender to-water text-branddark font-semibold rounded-r-xl sm:rounded-l-none rounded-l-xl hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <div className="text-brandprimary text-sm">
                <p>&copy; 2025 Fortune One. All rights reserved.</p>
              </div>
              <div className="flex items-center space-x-6 text-sm text-brandprimary">
                <a href="#" className="hover:text-lavender transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-lavender transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-lavender transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
              <div className="flex items-center text-brandprimary text-sm">
                <span>Made By Chethana K R</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
