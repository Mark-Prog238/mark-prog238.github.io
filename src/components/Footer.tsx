import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Mark<span className="text-blue-400">Dev</span></h3>
            <p className="text-gray-400 max-w-xs mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
              A passionate full stack developer creating modern and responsive web applications.
            </p>
          </div>
          
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base py-1">Home</Link>
              <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base py-1">About</Link>
              <Link href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base py-1">Skills</Link>
              <Link href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base py-1">Projects</Link>
              <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base py-1">Contact</Link>
            </nav>
          </div>
          
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Social Media</h4>
            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4">
              <a 
                href="https://github.com/Mark-Prog238" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-2 sm:p-3 rounded-full transition-colors hover:scale-110 transform duration-200"
                aria-label="GitHub Profile"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/mark-salamon-b8a09435a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-2 sm:p-3 rounded-full transition-colors hover:scale-110 transform duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="mailto:marksalamon01@gmail.com"
                className="bg-gray-700 hover:bg-gray-600 p-2 sm:p-3 rounded-full transition-colors hover:scale-110 transform duration-200"
                aria-label="Send Email"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; {currentYear} Mark<span className="text-blue-400">Dev</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
