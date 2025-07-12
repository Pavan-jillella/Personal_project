import React from 'react';
import { ChevronDown, Download, Mail, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  const scrollToNextSection = () => {
    // Find the next section after hero (typically "about")
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 lg:min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left">
            <div className="mb-6 md:mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
                Pavan Jillella
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-3 sm:mb-4">
                Data & Business Analyst 
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
                AI-Powered Problem Solver transforming complex data into actionable insights that drive business growth and innovation.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:space-x-4">
              <a 
                href="https://www.linkedin.com/in/pavan-jillella" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </a>
              <a 
                href="https://github.com/pavanjillella" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="mailto:pavanjillella.1711@gmail.com" 
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </a>
              <a 
                href="/assets/Pavan_Jillella_Resume.pdf" 
                download
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Download Resume"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </a>
            </div>

            {/* Call-to-action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center font-medium"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center font-medium"
              >
                View Projects
              </a>
            </div>
          </div>
          
          {/* Image/Profile - Add your image here */}
          <div className="hidden md:block">
            {/* Your profile image or illustration */}
          </div>
        </div>
      </div>
    </section>
  );
}