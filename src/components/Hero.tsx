"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-20 sm:top-40 sm:left-40 w-40 h-40 sm:w-80 sm:h-80 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in-up">
            <div className="animate-fade-in-scale animation-delay-200">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-gray-800 dark:text-gray-200">Hi, I'm </span>
                <span className="text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Mark</span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up animation-delay-400">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Full Stack Developer & Computer Science Student
              </h2>
            </div>
            
            <div className="animate-fade-in-up animation-delay-600">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I build modern web applications with React, Next.js, and Node.js.
                Currently studying Computer Science at the Faculty of Computer and Information Science.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="animate-fade-in-up animation-delay-1000"
              >
                <Link 
                  href="#projects" 
                  className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center text-base sm:text-lg"
                >
                  View My Work
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="animate-fade-in-up animation-delay-1200"
              >
                <Link 
                  href="#contact" 
                  className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 backdrop-blur-sm text-center text-base sm:text-lg"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center animate-fade-in-scale">
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg rounded-full overflow-hidden border border-white/30 dark:border-gray-700/30 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold relative">
                  <span className="relative z-10">M</span>
                  
                  {/* Animated background elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-purple-500/50 animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 sm:w-6 sm:h-6 bg-white/20 rounded-full animate-bounce animation-delay-1000"></div>
                </div>
              </div>
              
              {/* Floating elements around the profile */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-bounce animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
