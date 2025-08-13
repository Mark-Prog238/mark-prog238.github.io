"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission or integrate with a service like EmailJS/Formspree
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitResult(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">Contact Me</h2>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ opacity: 1, transform: 'translateY(0)' }} // Fallback for static export
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-600">Get In Touch</h3>
            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              Whether you have a question, want to discuss a potential project, or just want to say hello,
              feel free to reach out. I'll do my best to get back to you as soon as possible!
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full text-blue-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium">Email</h4>
                  <a href="mailto:marksalamon01@gmail.com" className="text-blue-600 hover:underline text-sm sm:text-base">marksalamon01@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full text-blue-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium">GitHub</h4>
                  <a href="https://github.com/Mark-Prog238" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm sm:text-base">
                    github.com/Mark-Prog238
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full text-blue-600 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/mark-salamon-b8a09435a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm sm:text-base">
                    linkedin.com/in/mark-salamon-b8a09435a
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ opacity: 1, transform: 'translateY(0)' }} // Fallback for static export
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
              {submitResult && (
                <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-md text-sm sm:text-base ${submitResult.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitResult.message}
                </div>
              )}

              <div className="mb-4 sm:mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base transition-all duration-200"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base transition-all duration-200"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base transition-all duration-200 resize-none"
                  placeholder="Your message"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
