import React, { useEffect, useRef, useState } from 'react';
import { Database, BarChart3, Brain, Code, Cloud, Users } from 'lucide-react';

// Add this custom hook at the top of your file
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInView];
}

export default function Skills() {
  // Define animation styles
  const styles = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
      40% {transform: translateY(-20px);}
      60% {transform: translateY(-10px);}
    }
  `;

  // Move useEffect inside the component
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const skillCategories = [
    {
      title: "Data Analysis & Visualization",
      icon: BarChart3,
      color: "blue",
      skills: [
        { name: "SQL", level: 95 },
        { name: "Python", level: 90 },
        { name: "R", level: 85 },
        { name: "Power BI", level: 92 },
        { name: "Tableau", level: 88 },
        { name: "Excel", level: 95 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "teal",
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "MLflow", level: 78 },
        { name: "OpenAI API", level: 88 },
        { name: "NLP", level: 82 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Cloud,
      color: "purple",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "AWS", level: 82 },
        { name: "Azure", level: 78 },
        { name: "Snowflake", level: 80 },
        { name: "dbt", level: 75 }
      ]
    },
    
    {
      title: "Programming & Tools",
      icon: Code,
      color: "orange",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 85 },
        { name: "Jupyter", level: 95 },
        { name: "VS Code", level: 92 },
        { name: "Streamlit", level: 88 },
        { name: "FastAPI", level: 80 }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain, color: "blue" },
    { name: "Communication", icon: Users, color: "teal" },
    { name: "Critical Thinking", icon: BarChart3, color: "purple" },
    { name: "Project Management", icon: Database, color: "orange" },
    { name: "Stakeholder Management", icon: Users, color: "green" },
    { name: "Continuous Learning", icon: Code, color: "red" }
  ];

  // Add these refs for each section
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1 });
  const [softSkillsRef, softSkillsInView] = useInView({ threshold: 0.1 });

  // Update this function to return lighter color classes
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-400/70",
      teal: "bg-teal-400/70",
      purple: "bg-purple-400/70",
      orange: "bg-orange-400/70"
    };
    return colors[color as keyof typeof colors] || "bg-gray-400/70";
  };

  const getTextColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      teal: "text-teal-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      green: "text-green-600",
      red: "text-red-600"
    };
    return colors[color as keyof typeof colors] || "text-gray-600";
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for modern data analysis and business intelligence
          </p>
        </div>

        {/* Technical Skills */}
        <div 
          ref={skillsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg transition-all duration-700 hover:shadow-xl border border-gray-100 dark:border-gray-700 ${
                skillsInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                background: `linear-gradient(135deg, ${category.color === 'blue' ? 'rgba(59, 130, 246, 0.05)' : 
                  category.color === 'teal' ? 'rgba(20, 184, 166, 0.05)' : 
                  category.color === 'purple' ? 'rgba(168, 85, 247, 0.05)' : 
                  'rgba(249, 115, 22, 0.05)'} 0%, rgba(255, 255, 255, 0) 100%)` 
              }}
            >
              <div className="flex items-center mb-5">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                  category.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' : 
                  category.color === 'teal' ? 'bg-teal-100 dark:bg-teal-900/30' : 
                  category.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' : 
                  'bg-orange-100 dark:bg-orange-900/30'
                }`}>
                  <category.icon className={`w-6 h-6 ${category.color === 'blue' ? 'text-blue-600' : 
                    category.color === 'teal' ? 'text-teal-600' : 
                    category.color === 'purple' ? 'text-purple-600' : 'text-orange-600'} mr-0`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {/* Replace the skill bars with circular indicators */}
                {/* Enhanced Skill Indicators */}
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-6 group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:font-semibold transition-all flex items-center">
                        <span className={`inline-block w-2 h-2 rounded-full ${getColorClasses(category.color)} mr-2`}></span>
                        {skill.name}
                      </span>
                      
                      {/* Only visible percentage */}
                      <div className="flex items-center">
                        <span className={`text-sm font-bold ${getTextColorClasses(category.color)} bg-opacity-20 px-2 py-0.5 rounded-full ${
                          category.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' : 
                          category.color === 'teal' ? 'bg-teal-100 dark:bg-teal-900/30' : 
                          category.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' : 
                          'bg-orange-100 dark:bg-orange-900/30'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Bar indicator with lighter colors and enhanced animation */}
                    <div className="relative h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getColorClasses(category.color)} rounded-full transition-all duration-1500 ease-out relative backdrop-blur-sm`}
                        style={{ 
                          width: skillsInView ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 0.15}s`,
                          boxShadow: `0 0 8px 0 ${
                            category.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : 
                            category.color === 'teal' ? 'rgba(20, 184, 166, 0.3)' : 
                            category.color === 'purple' ? 'rgba(168, 85, 247, 0.3)' : 
                            'rgba(249, 115, 22, 0.3)'
                          }`
                        }}
                      >
                        {/* Enhanced shimmer effect */}
                        <div className="absolute inset-0 bar-shimmer"></div>
                      </div>
                    </div>
                    
                    {/* Removed the percentage markers section */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills / Core Competencies - Enhanced Design */}
        {/* Core Competencies - Card Design Refresh */}
        <div 
          ref={softSkillsRef}
          className={`bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg transition-all duration-700 border border-gray-100 dark:border-gray-700 ${
            softSkillsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white relative inline-block pb-3">
              Core Competencies
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
              Beyond technical expertise, these professional skills drive success in collaborative environments
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:shadow-lg"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Split background design */}
                <div className="absolute inset-0 z-0">
                  <div className={`absolute top-0 right-0 w-full h-1/2 ${
                    skill.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/10' : 
                    skill.color === 'teal' ? 'bg-teal-50 dark:bg-teal-900/10' : 
                    skill.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/10' :
                    skill.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/10' :
                    skill.color === 'green' ? 'bg-green-50 dark:bg-green-900/10' :
                    'bg-red-50 dark:bg-red-900/10'
                  } transition-all duration-300`}></div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white dark:bg-gray-900 transition-all duration-300"></div>
                  
                  {/* Diagonal divider */}
                  <div className={`absolute top-1/2 left-0 w-full h-10 origin-left -translate-y-1/2 -rotate-6 transform ${
                    skill.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/10' : 
                    skill.color === 'teal' ? 'bg-teal-50 dark:bg-teal-900/10' : 
                    skill.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/10' :
                    skill.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/10' :
                    skill.color === 'green' ? 'bg-green-50 dark:bg-green-900/10' :
                    'bg-red-50 dark:bg-red-900/10'
                  }`}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-4 flex flex-col items-center justify-between h-full">
                  {/* Skill icon */}
                  <div 
                    className={`w-14 h-14 p-3 rounded-lg flex items-center justify-center mb-4 bg-white dark:bg-gray-800 shadow-sm group-hover:shadow-md transition-all duration-300 ${
                      skill.color === 'blue' ? 'border-b-4 border-blue-400' : 
                      skill.color === 'teal' ? 'border-b-4 border-teal-400' : 
                      skill.color === 'purple' ? 'border-b-4 border-purple-400' :
                      skill.color === 'orange' ? 'border-b-4 border-orange-400' :
                      skill.color === 'green' ? 'border-b-4 border-green-400' :
                      'border-b-4 border-red-400'
                    }`}
                  >
                    <skill.icon 
                      className={`w-8 h-8 ${getTextColorClasses(skill.color)} transform transition-all duration-300 group-hover:scale-110`} 
                    />
                  </div>
                  
                  {/* Skill name - without indicator bars */}
                  <div className="text-center mt-auto">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 transition-all duration-300 group-hover:font-bold">
                      {skill.name}
                    </h4>
                    
                    {/* Removed the skill level bars section */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fix the style tag */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Existing styles */
        
        /* Softer glowing effect */
        .shadow-glow-blue {
          box-shadow: 0 0 8px 1px rgba(59, 130, 246, 0.3);
        }
        
        .shadow-glow-teal {
          box-shadow: 0 0 8px 1px rgba(20, 184, 166, 0.3);
        }
        
        .shadow-glow-purple {
          box-shadow: 0 0 8px 1px rgba(168, 85, 247, 0.3);
        }
        
        .shadow-glow-orange {
          box-shadow: 0 0 8px 1px rgba(249, 115, 22, 0.3);
        }
        
        /* Improved shimmer effect for lighter bars */
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .bar-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: shimmer 2.5s infinite ease-in-out;
          background-size: 200% 100%;
          width: 100%;
          height: 100%;
        }
        
        /* Bar loading animation - additional effect */
        @keyframes bar-loading {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
        
        .bar-loading-effect {
          background-size: 30px 30px;
          background-image: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.15) 75%,
            transparent 75%,
            transparent
          );
          animation: bar-loading 3s linear infinite;
        }

        /* Add this new animation for the rotating border */
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        /* Enhanced bounce animation for competencies */
        @keyframes enhanced-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) scale(1); }
          40% { transform: translateY(-12px) scale(1.03); }
          60% { transform: translateY(-5px) scale(1.01); }
        }
      `}} />
    </section>
  );
}