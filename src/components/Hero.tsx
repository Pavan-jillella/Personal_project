import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Linkedin, Github, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  // State for profile image carousel
  const [currentImage, setCurrentImage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  
  // Add job title carousel state
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isTitleChanging, setIsTitleChanging] = useState(false);
  
  const profileImages = [
    "/assets/profile-image.jpg",
    "/assets/profile-image2.jpg",
    "/assets/profile-image3.jpg",
  ];
  
  // Define job titles to rotate through
  const jobTitles = [
    "Data & Business Analyst",
    "AI Developer",
    "Founder"
  ];
  
  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % profileImages.length);
        setTimeout(() => {
          setIsFlipping(false);
        }, 100);
      }, 750);
    }, 5000);
    
    return () => clearInterval(imageInterval);
  }, []);
  
  // Auto-rotate job titles every 3 seconds
  useEffect(() => {
    const titleInterval = setInterval(() => {
      setIsTitleChanging(true);
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % jobTitles.length);
        setTimeout(() => {
          setIsTitleChanging(false);
        }, 300);
      }, 700);
    }, 3000);
    
    return () => clearInterval(titleInterval);
  }, []);
  
  // Function to handle manual image navigation
  const changeImage = (direction) => {
    setIsFlipping(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentImage((prev) => (prev + 1) % profileImages.length);
      } else {
        setCurrentImage((prev) => (prev - 1 + profileImages.length) % profileImages.length);
      }
      setTimeout(() => {
        setIsFlipping(false);
      }, 100);
    }, 750); // Half the flip animation duration
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements - Keep existing background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Keep existing content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Pavan Jillella
              </h1>
              
              {/* Animated job title */}
              <div className="relative h-12">
                {jobTitles.map((title, index) => (
                  <h2 
                    key={index}
                    className={`absolute inset-0 text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-semibold transition-all duration-700 ease-in-out ${
                      currentTitle === index 
                        ? 'opacity-100 transform-none' 
                        : 'opacity-0 transform -translate-y-4'
                    }`}
                  >
                    {title}
                  </h2>
                ))}
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mt-4">
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

          {/* Professional Profile Image Carousel */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Image container with clean animation */}
              <div className="w-full h-full overflow-hidden rounded-xl shadow-xl relative">
                {/* Profile images with professional fade transition */}
                {profileImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      currentImage === index 
                        ? 'opacity-100 z-10 translate-x-0' 
                        : index < currentImage 
                          ? 'opacity-0 -translate-x-full z-0' 
                          : 'opacity-0 translate-x-full z-0'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Pavan Jillella profile ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                  </div>
                ))}
                
                {/* Professional border effect */}
                <div className={`absolute inset-0 border-2 border-white/20 rounded-xl z-20 transition-opacity duration-500 ${isFlipping ? 'opacity-70' : 'opacity-0'}`}></div>
                
                {/* Elegant corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none z-30">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M0,0 L100,0 Q60,0 0,60 Z" fill="rgba(255,255,255,0.3)" />
                  </svg>
                </div>
                
                {/* Bottom info panel */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 z-20">
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                    <p className="text-white text-sm font-medium">Available for Projects</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation arrows - more subtle positioning */}
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-2 z-30">
                <button 
                  onClick={() => changeImage('prev')} 
                  className="p-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button 
                  onClick={() => changeImage('next')} 
                  className="p-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-all duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
              
              {/* Refined indicator dots */}
              <div className="absolute -bottom-8 inset-x-0 flex justify-center space-x-2 z-20">
                {profileImages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-8 h-1.5 rounded-full transition-all ${
                      index === currentImage 
                        ? 'bg-blue-600 w-12' 
                        : 'bg-gray-300/50 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
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

      {/* Clean, professional animations */}
      <style jsx global>{`
        /* Update the image change function for smoother transitions */
        .changeImage {
          transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Title animation */
        @keyframes titleFadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes titleFadeOut {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }

        /* Subtle hover effect on navigation buttons */
        button:hover .nav-arrow {
          transform: scale(1.2);
        }
        
        /* Elegant pulse for indicator dots */
        @keyframes subtle-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        /* Clean up existing animation styles that might conflict */
        .animate-flip-card, .animate-border-pulse, .animate-ripple,
        .animate-corner-tl, .animate-corner-br {
          animation: none;
        }
        
        /* Remove particle animations */
        .particle-1, .particle-2, .particle-3 {
          display: none;
        }
      `}</style>
    </section>
  );
}