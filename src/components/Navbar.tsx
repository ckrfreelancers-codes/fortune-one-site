import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Channel Partners", to: "/partners" },
  { label: "NRI Support", to: "/nri-support" },
  { label: "Career", to: "/career" },
  { label: "Contact Us", to: "/contact" },
];

const listItemVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.06, type: "spring", stiffness: 120 },
  }),
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-water to-lavender text-branddark z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center space-x-3">
            <img src="/logo.png" alt="Fortune One Logo" className="h-10 w-auto" />
            <span className="text-lg font-semibold tracking-wide">Fortune One</span>
          </Link>

          {/* "Menu" button in the right corner */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-lavenderblush text-branddark hover:bg-cornsilk transition ml-auto font-semibold text-lg"
          >
            {open ? <X size={22} /> : "Menu"}
          </button>
        </div>
      </header>

      {/* Dim background (only when open) */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          open ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      {/* Side panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-water to-nyanza text-branddark z-50 transform transition-transform duration-400 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="px-6 pt-16">
          {/* Only menu items */}
          <nav>
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item, idx) => (
                <motion.li
                  key={item.label}
                  className="menu-item"
                  custom={idx}
                  initial="hidden"
                  animate={open ? "visible" : "hidden"}
                  variants={listItemVariants}
                >
                  <Link
                    to={item.to}
                    onClick={closeMenu}
                    className="block text-lg font-medium hover:text-lavender transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Contact block */}
          <div className="mt-8 text-sm text-branddark">
            <h4 className="font-semibold mb-2">Head Office</h4>
            <p>19/3 Cunningham Road, Bengaluru 560001</p>
            <p className="mt-2">Call: +91 79960 00533</p>
            <p>Email: reach@fortuneone.co</p>
          </div>
        </div>

        {/* Close action at bottom */}
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={closeMenu}
            className="w-full py-2 bg-lavender text-branddark rounded-md hover:bg-lavenderblush transition"
          >
            Close Menu
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
