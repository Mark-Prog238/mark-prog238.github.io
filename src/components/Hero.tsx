"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: 1, transform: 'translateY(0)' }} // Fallback for static export
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-800">Hi, I'm </span>
              <span className="text-blue-600">Mark</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
              Full Stack Developer & Computer Science Student
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-xl">
              I build modern web applications with React, Next.js, and Node.js.
              Currently studying Computer Science at the Faculty of Computer and Information Science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="#projects" 
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View My Work
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: 1, transform: 'scale(1)' }} // Fallback for static export
          >
            <div className="w-72 h-72 md:w-96 md:h-96 bg-blue-600 rounded-full overflow-hidden border-8 border-white shadow-xl">
              {/* Replace with your actual profile image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center text-white text-5xl font-bold">
                M
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
