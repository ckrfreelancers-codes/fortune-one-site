import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/24/outline';

const Menu = () => {
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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About Us', path: '/about', icon: '👥' },
    { name: 'Projects', path: '/projects', icon: '🏢' },
    { name: 'Channel Partners', path: '/partners', icon: '🤝' },
    { name: 'NRI Support', path: '/nri-support', icon: '🌍' },
    { name: 'Career', path: '/career', icon: '💼' },
    { name: 'Contact Us', path: '/contact', icon: '📞' },
  ];

  return (
    <>
      {/* Menu Toggle Button - Fixed Position */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`fixed top-6 right-6 z-50 transition-all duration-300 ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative p-4 rounded-2xl shadow-2xl backdrop-blur-md border transition-all duration-300 ${
            isOpen
              ? 'bg-[#664930] text-[#FFDBBB] border-[#997E67]'
              : scrolled
              ? 'bg-white/90 text-[#664930] border-[#CCBEB1]/30 hover:bg-[#FFDBBB]'
              : 'bg-[#664930]/80 text-[#FFDBBB] border-[#997E67]/50 hover:bg-[#664930]'
          }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <XMarkIcon className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Bars3Icon className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Logo - Fixed Position */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className={`fixed top-6 left-6 z-50 transition-all duration-300 ${
          scrolled ? 'top-4' : 'top-6'
        }`}
      >
        <Link to="/" className="block">
          <motion.img
            src="/Fortune One.png"
            alt="Fortune One Logo"
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`object-contain drop-shadow-2xl transition-all duration-300 ${
              scrolled ? 'h-12 w-auto' : 'h-16 w-auto'
            }`}
          />
        </Link>
      </motion.div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-br from-[#664930] via-[#997E67] to-[#CCBEB1] z-40 shadow-2xl"
            >
              {/* Menu Header */}
              <div className="p-8 border-b border-[#FFDBBB]/20">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-[#FFDBBB] rounded-2xl flex items-center justify-center">
                    <HomeIcon className="h-6 w-6 text-[#664930]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#FFDBBB]">Fortune One</h2>
                    <p className="text-[#FFDBBB]/80 text-sm">Premium Real Estate</p>
                  </div>
                </motion.div>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className={`group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-[#FFDBBB] text-[#664930] shadow-lg'
                          : 'text-[#FFDBBB] hover:bg-[#FFDBBB]/10 hover:translate-x-2'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className={`text-2xl transition-all duration-300 ${
                          location.pathname === item.path ? 'scale-110' : ''
                        }`}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="flex-1">
                        <span className="text-lg font-semibold">{item.name}</span>
                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="w-full h-0.5 bg-[#664930] rounded-full mt-1"
                          />
                        )}
                      </div>
                      <motion.div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'bg-[#664930] scale-100'
                            : 'bg-[#FFDBBB]/40 scale-0 group-hover:scale-100'
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#FFDBBB]/20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <p className="text-[#FFDBBB]/80 text-sm mb-2">
                    Safe, Secure & Memorable
                  </p>
                  <p className="text-[#FFDBBB]/60 text-xs">
                    Real Estate Experiences
                  </p>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-20 right-8 w-32 h-32 bg-[#FFDBBB]/10 rounded-full blur-2xl" />
              <div className="absolute bottom-32 left-8 w-24 h-24 bg-[#CCBEB1]/10 rounded-full blur-xl" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation (for phones) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30">
        <div className="bg-gradient-to-r from-[#664930] via-[#997E67] to-[#CCBEB1] backdrop-blur-md border-t border-[#FFDBBB]/20">
          <div className="flex justify-around items-center py-2">
            {menuItems.slice(0, 4).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-[#FFDBBB] bg-[#664930]/50'
                    : 'text-[#FFDBBB]/70 hover:text-[#FFDBBB]'
                }`}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="text-lg mb-1"
                >
                  {item.icon}
                </motion.div>
                <span className="text-xs font-medium">{item.name.split(' ')[0]}</span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="mobileActiveIndicator"
                    className="w-1 h-1 bg-[#FFDBBB] rounded-full mt-1"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;