import React, { useState } from 'react';
import { Download, Eye, FileText, X, Award, BookOpen, Calendar, Mail, MapPin, Linkedin } from 'lucide-react';

export default function Resume() {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Single resume data
  const resumeData = {
    title: "Pavan Jillella",
    description: "Full Stack & AI Developer with expertise in React, TypeScript, Firebase, and Tailwind CSS—specializing in building intelligent, data-driven applications that leverage AI, automation, and modern analytics to deliver real-time insights and seamless user experiences.",
    size: "1.2 MB",
    lastUpdated: "July 2025",
    downloadUrl: "/assets/Pavan_Jillella_Resume.pdf",
    content: {
      experience: [
        {
          position: "AI Developer & Founder",
          company: "The Joborbit",
          period: "2024 - Present",
          description: "JobOrbit is a next-gen AI platform that automates and streamlines the entire job search process. From real-time job scraping and intelligent resume tailoring to bulk auto-applications and interview coaching, JobOrbit acts as your 24/7 job search assistant. Using advanced AI, machine learning, and automation, it helps job seekers apply smarter, faster, and more effectively—maximizing visibility and landing offers quicker than ever."
        },
        {
          position: "Data Analyst",
          company: "MORGAN STANLEY",
          period: "Jan 2024 – Present",
          description: "Led end-to-end data analysis using SQL, Python, and R to uncover strategic insights through EDA, clustering, segmentation, and hypothesis testing. Designed interactive dashboards in Tableau and Power BI, improved reporting efficiency, and built ARIMA time-series models for forecasting and proactive planning. Collaborated with stakeholders to define KPIs and deliver customer segmentation reports aligned with business objectives."
        },
        {
          position: "Business Analyst",
          company: "STRYKER",
          period: "Mar 2021 – July 2022",
          description: "Collaborated with stakeholders to gather and document business requirements, define product roadmaps, and prioritize features aligned with strategic goals. Led user research, analyzed customer journey data, and conducted market and SWOT analyses to improve product fit and engagement. Delivered actionable insights through Power BI dashboards, authored BRDs, and supported Agile delivery through sprint planning and cross-functional collaboration."
        },
        {
          position: "Data Analyst",
          company: "WALMART GLOBAL TECH",
          period: "Feb 2019 – Feb 2021",
          description: "Collaborated with stakeholders to gather and document business requirements, define product roadmaps, and prioritize features aligned with strategic goals. Led user research, analyzed customer journey data, and conducted market and SWOT analyses to improve product fit and engagement. Delivered actionable insights through Power BI dashboards, authored BRDs, and supported Agile delivery through sprint planning and cross-functional collaboration."
        }
      ],
      education: [
        {
          degree: "Master’s Degree (M.S.) in Data Analytics Engineering",
          institution: "George Mason University",
          year: "2024",
          details: "Specialized in Artificial Intelligence, Machine Learning, and Data Analytics"
        },
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "Vellore Institute of Technology",
          year: "2017 - 2021",
          details: "Focused on software development and database management"
        }
      ],
      skills: [
        { 
          category: "Frontend", 
          icon: "💻",
          color: "blue",
          items: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "Redux", "Next.js"] 
        },
        { 
          category: "Backend", 
          icon: "⚙️",
          color: "indigo",
          items: ["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB", "SQL", "Firebase"] 
        },
        { 
          category: "Data Analysis", 
          icon: "📊",
          color: "green",
          items: ["Python", "R", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau", "Excel"] 
        },
        { 
          category: "AI & Machine Learning", 
          icon: "🧠",
          color: "purple",
          items: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "OpenAI API", "NLTK", "spaCy", "XGBoost", "ARIMA", "Time Series Forecasting", "Clustering", "Regression", "Classification"] 
        },
        { 
          category: "Tools & Others", 
          icon: "🛠️",
          color: "orange",
          items: ["Git", "AWS", "Docker", "Jest", "Webpack", "CI/CD", "Agile/Scrum", "Jupyter Notebook", "Google Colab"] 
        }
      ],
      contact: {
        email: "pavanjillella.1711@gmail.com",
        phone: "+1 (XXX) XXX-XXXX",
        location: "Virginia, USA",
        linkedin: "linkedin.com/in/pavan-jillella"
      }
    }
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Left Side - Resume Preview */}
              <div className="md:w-1/3 bg-blue-600 p-8 text-white flex flex-col justify-between">
                <div>
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm inline-block mb-6">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">My Resume</h3>
                  <p className="text-blue-100 mb-6">
                    Data Analytics & AI Developer with expertise in Python, machine learning, and data-driven insight generation
                  </p>
                </div>

                <div className="space-y-3 text-sm text-blue-100">
                  <div className="flex justify-between">
                    <span>Last Updated:</span>
                    <span className="font-medium text-white">{resumeData.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>File Size:</span>
                    <span className="font-medium text-white">{resumeData.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="font-medium text-white">PDF</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Resume Highlights */}
              <div className="md:w-2/3 p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Resume Highlights
                </h3>

                <div className="space-y-6 mb-8">
                  {/* Experience Highlight */}
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">AI Developer and Founder </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">The Joborbit | 2024 - Present</p>
                    </div>
                  </div>

                  {/* Education Highlight */}
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">MS in Data Analytics Engineering</h4>
                      <p className="text-sm text-green-600 dark:text-green-400 mb-2">George Mason University | 2022 - 2024</p>
                    </div>
                  </div>

                  {/* Skills Highlight */}
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">4+ Years Experience</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Specialized in Data and AI development</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Eye className="w-5 h-5" />
                    <span>View Resume</span>
                  </button>
                  <a 
                    href={resumeData.downloadUrl}
                    download="Pavan_Jillella_Resume.pdf"
                    className="inline-flex items-center justify-center space-x-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                {/* Title and Contact Info */}
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Pavan Jillella - AI Developer & Founder
                  </h3>
                  
                  {/* Contact Icons Row - Icons Only with Tooltips */}
                  <div className="flex items-center space-x-4">
                    <div className="group relative">
                      <a 
                        href={`mailto:${resumeData.content.contact.email}`}
                        className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-colors"
                        aria-label="Send email"
                      >
                        <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </a>
                      {/* Email tooltip - Fixed positioning */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2 py-1 bg-gray-800 text-white text-xs rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                        {resumeData.content.contact.email}
                      </div>
                    </div>
                    
                    <div className="group relative">
                      <div className="p-1.5 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-100 dark:hover:bg-green-800/40 transition-colors">
                        <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      {/* Location tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                        {resumeData.content.contact.location}
                      </div>
                    </div>
                    
                    <div className="group relative">
                      <a 
                        href={`https://${resumeData.content.contact.linkedin.replace(/^https?:\/\//, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-800/40 transition-colors"
                        aria-label="View LinkedIn profile"
                      >
                        <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </a>
                      {/* LinkedIn tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                        {resumeData.content.contact.linkedin}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex space-x-2">
                  <a 
                    href={resumeData.downloadUrl}
                    download="Pavan_Jillella_Resume.pdf"
                    className="inline-flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {/* Experience Section */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Professional Experience
                </h4>
                <div className="space-y-6">
                  {resumeData.content.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-gray-700">
                      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-600 -translate-x-1/2"></div>
                      <h5 className="text-base font-semibold text-gray-900 dark:text-white">{exp.position}</h5>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{exp.company} | {exp.period}</p>
                      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Education Section */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Education
                </h4>
                <div className="space-y-6">
                  {resumeData.content.education.map((edu, index) => (
                    <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200 dark:before:bg-gray-700">
                      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-green-600 -translate-x-1/2"></div>
                      <h5 className="text-base font-semibold text-gray-900 dark:text-white">{edu.degree}</h5>
                      <p className="text-sm text-green-600 dark:text-green-400 mb-2">{edu.institution} | {edu.year}</p>
                      <p className="text-gray-600 dark:text-gray-300">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Skills Section - Compact UI */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Skills & Technologies
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  {resumeData.content.skills.map((skillGroup, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex items-center mb-1.5">
                        <span className="text-lg mr-1.5">{skillGroup.icon}</span>
                        <h5 className="text-base font-semibold text-gray-900 dark:text-white">
                          {skillGroup.category}
                        </h5>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 ml-6">
                        {skillGroup.items.map((skill, i) => {
                          const colors = {
                            blue: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/20",
                            indigo: "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800/20",
                            green: "bg-green-50 text-green-700 border-green-100 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800/20", 
                            purple: "bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800/20",
                            orange: "bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800/20"
                          };
                          
                          return (
                            <span 
                              key={i} 
                              className={`px-2 py-0.5 rounded-md text-xs ${colors[skillGroup.color]}`}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Compact Display */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Key Skills
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {resumeData.content.skills.slice(0, 3).map((skillGroup, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="text-xl mr-2">{skillGroup.icon}</span>
                        <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                          {skillGroup.category}
                        </h5>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {skillGroup.items.slice(0, 3).join(", ")}
                        {skillGroup.items.length > 3 && "..."}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}