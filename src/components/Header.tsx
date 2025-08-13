"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Mark<span className="text-gray-800">Dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-gray-800 hover:text-blue-600 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-800 hover:text-blue-600 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-800 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-gray-800 hover:text-blue-600 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-800 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
