import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Channel Partners', path: '/partners' },
    { name: 'NRI Support', path: '/nri-support' },
    { name: 'Career', path: '/career' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className={`fixed w-full z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-[#997E67]/40 backdrop-blur-lg shadow-lg border-b border-[#CCBEB1]/30'
      : 'bg-[#997E67]/20 backdrop-blur-md'
  }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src="/Fortune One.png"
              alt="Fortune One Logo"
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ y: -2, scale: 1.05 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    location.pathname === item.path
                      ? 'text-[#FFDBBB] bg-[#664930] shadow-lg'
                      : scrolled
                      ? 'text-[#FFDBBB] hover:text-white hover:bg-[#664930]/20'
                      : 'text-[#664930] hover:text-[#997E67] hover:bg-[#FFDBBB]/30'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFDBBB] rounded-full"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                scrolled ? 'text-[#FFDBBB] hover:bg-[#664930]/20' : 'text-[#664930] hover:bg-[#FFDBBB]/30'
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-[#997E67]/95 backdrop-blur-md border-t border-[#CCBEB1]/30"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-[#FFDBBB] bg-[#664930] shadow-lg'
                    : 'text-[#FFDBBB] hover:text-white hover:bg-[#664930]/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
