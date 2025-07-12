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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Pavan Jillella
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                Data & Business Analyst 
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                AI-Powered Problem Solver transforming complex data into actionable insights that drive business growth and innovation.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="https://www.linkedin.com/in/pavan-jillella" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a 
                href="https://github.com/pavanjillella" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="mailto:pavanjillella.1711@gmail.com" 
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6 text-teal-600" />
              </a>
              <a 
                href="/assets/Pavan_Jillella_Resume.pdf" 
                download
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                title="Download Resume"
              >
                <Download className="w-6 h-6 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Animated gradient border */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-cyan-400 p-2 animate-spin-slow relative">
                {/* Profile image container */}
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden relative">
                  {/* The image */}
                  <img
                    src="/assets/profile-image.jpg" 
                    alt="Profile photo with city skyline in background"
                    className="w-full h-full object-cover animate-subtle-zoom"
                  />
                  
                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-shine"></div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">📊</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-18 h-18 rounded-full flex items-center justify-center animate-pulse delay-300">
                <span className="text-xl">👨‍💻</span>
              </div>
              <div className="absolute -top-4 -left-4 w-14 h-14 rounded-full flex items-center justify-center animate-bounce delay-150">
                <span className="text-lg">🧠</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 0.2; }
          30% { opacity: 0.3; }
          40% { opacity: 0; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .animate-shine {
          animation: shine 4s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}