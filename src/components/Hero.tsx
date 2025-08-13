"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: 1, transform: 'translateY(0)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-800 dark:text-gray-200">Hi, I'm </span>
                <span className="text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Mark</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer & Computer Science Student
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl">
                I build modern web applications with React, Next.js, and Node.js.
                Currently studying Computer Science at the Faculty of Computer and Information Science.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="#projects" 
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="#contact" 
                  className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: 1, transform: 'scale(1)' }}
          >
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="w-72 h-72 md:w-96 md:h-96 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-full overflow-hidden border border-white/30 dark:border-gray-700/30 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 flex items-center justify-center text-white text-5xl font-bold relative">
                  <span className="relative z-10">M</span>
                  
                  {/* Animated background elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-500/50 animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full animate-bounce animation-delay-1000"></div>
                </div>
              </div>
              
              {/* Floating elements around the profile */}
              <motion.div
                className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-4 h-4 bg-green-400 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
