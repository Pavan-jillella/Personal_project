import React from 'react';
import { Heart, ArrowUp, Linkedin, Github, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Pavan Jillella</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Data & Business Analyst and AI Developer passionate about transforming complex data into actionable insights and building intelligent solutions that drive business growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/pavan-jillella" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/Pavan-jillella" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/your-twitter-handle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="mailto:pavanjillella.1711@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Data Analysis</span>
              </li>
              <li>
                <span className="text-gray-400">Business Intelligence</span>
              </li>
              <li>
                <span className="text-gray-400">Machine Learning</span>
              </li>
              <li>
                <span className="text-gray-400">Data Visualization</span>
              </li>
              <li>
                <span className="text-gray-400">Analytics Consulting</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Pavan Jillella. Built with{' '}
            <Heart className="w-4 h-4 inline text-red-500" />{' '}.
          
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300 transform hover:scale-105"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}