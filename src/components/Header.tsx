"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <motion.header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <motion.a 
              href="/" 
              className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mark<span className="text-gray-800 dark:text-gray-200">Dev</span>
            </motion.a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group text-sm lg:text-base"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Mobile menu button */}
              <button 
                className="lg:hidden text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <motion.div
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 }
                    }}
                    className="w-5 h-0.5 bg-current transform transition-all duration-200"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    className="w-5 h-0.5 bg-current mt-1 transform transition-all duration-200"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 }
                    }}
                    className="w-5 h-0.5 bg-current mt-1 transform transition-all duration-200"
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden mobile-menu-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-xl font-bold text-gray-800 dark:text-gray-200">Menu</span>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Close mobile menu"
                  >
                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Navigation Items */}
                <nav className="flex-1 p-6">
                  <div className="space-y-4">
                    {navigationItems.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="block py-3 px-4 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </nav>
                
                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Let's build something amazing together
                    </p>
                    <a
                      href="#contact"
                      onClick={closeMobileMenu}
                      className="inline-block w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
