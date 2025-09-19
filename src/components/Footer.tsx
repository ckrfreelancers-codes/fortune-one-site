import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HomeIcon
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
    <footer className="bg-gradient-to-br from-[#664930] via-[#997E67] to-[#CCBEB1] text-[#FFDBBB] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-40 h-40 border border-[#FFDBBB]/10 rounded-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 w-60 h-60 bg-[#FFDBBB]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
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
                    className="w-12 h-12 bg-gradient-to-br from-[#FFDBBB] to-[#CCBEB1] rounded-2xl flex items-center justify-center"
                  >
                    <HomeIcon className="h-6 w-6 text-[#664930]" />
                  </motion.div>
                  <span className="text-2xl font-bold text-[#FFDBBB]">Fortune One</span>
                </Link>
                <p className="text-[#FFDBBB]/80 text-lg leading-relaxed mb-6">
                  Safe, Secure & Memorable Real Estate Experiences!
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
                  <MapPinIcon className="h-5 w-5 text-[#CCBEB1] mt-1 flex-shrink-0" />
                  <div className="text-[#FFDBBB]/80">
                    <p>Fortune One Build Co Pvt Ltd.</p>
                    <p>19/3, Cunningham Road</p>
                    <p>Bangalore 560001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-[#CCBEB1] flex-shrink-0" />
                  <p className="text-[#FFDBBB]/80">+91 79960 00533</p>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-[#CCBEB1] flex-shrink-0" />
                  <p className="text-[#FFDBBB]/80">info@fortuneone.com</p>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([section, links], idx) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
              >
                <h3 className="text-xl font-semibold mb-4 capitalize">{section}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path}
                        className="text-[#FFDBBB]/80 hover:text-[#FFDBBB] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-12 flex space-x-6 justify-center">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.2 }}
                className="text-2xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#FFDBBB]/60">
            © {new Date().getFullYear()} Fortune One Build Co Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
