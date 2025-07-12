import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, TrendingUp, Users, DollarSign, Clock, X, Send } from 'lucide-react';

export default function Projects() {
  // Add state for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Add form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    message: ''
  });

  // Define animation styles
  const modalAnimation = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  `;

  // Move the useEffect inside the component
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = modalAnimation;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    try {
      const response = await fetch('https://formspree.io/f/xgvyoggz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Reset form and close modal
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectDetails: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setIsModalOpen(false);
        // Show success message (you can implement this with a toast notification)
        alert('Thanks for your inquiry! I will contact you soon.');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('There was a problem submitting your form. Please try again later.');
    }
  };

  const projects = [
    {
      title: "E-commerce Customer Segmentation & Predictive Analytics",
      role: "Data Analyst",
      problem: "Large e-commerce platform struggled with customer retention and couldn't identify high-value segments for targeted marketing.",
      solution: "Developed an ML-powered customer segmentation system using RFM analysis, clustering algorithms, and predictive modeling to identify customer lifetime value.",
      results: [
        "35% increase in customer retention rate",
        "$1.2M additional revenue in 6 months",
        "50% improvement in marketing campaign ROI"
      ],
      tech: ["Python", "Scikit-learn", "PostgreSQL", "Tableau", "AWS"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#"
    },
    {
      title: "Healthcare Operations Dashboard & Predictive Modeling",
      role: "Business Intelligence Analyst",
      problem: "Hospital network needed to optimize resource allocation and predict patient admission patterns during peak seasons.",
      solution: "Built an automated BI dashboard with real-time patient flow monitoring and ML models for demand forecasting.",
      results: [
        "25% reduction in patient wait times",
        "20% improvement in resource utilization",
        "90% accuracy in admission predictions"
      ],
      tech: ["Power BI", "SQL Server", "Python", "Azure", "DAX"],
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#"
    },
    {
      title: "Financial Risk Assessment & Fraud Detection",
      role: "Data Analyst",
      problem: "Fintech startup faced increasing fraud losses and needed automated risk assessment for loan approvals.",
      solution: "Implemented ensemble ML models with real-time fraud detection and risk scoring system integrated with existing loan platform.",
      results: [
        "75% reduction in fraud losses",
        "40% faster loan approval process",
        "95% accuracy in risk assessment"
      ],
      tech: ["Python", "XGBoost", "MongoDB", "FastAPI", "Docker"],
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#"
    },
    {
      title: "Supply Chain Optimization Analytics",
      role: "Data & Analytics Consultant",
      problem: "Manufacturing company struggled with inventory management and supply chain inefficiencies causing significant cost overruns.",
      solution: "Developed predictive analytics platform for demand forecasting, inventory optimization, and supplier performance analysis.",
      results: [
        "30% reduction in inventory costs",
        "45% improvement in delivery times",
        "$800K annual cost savings"
      ],
      tech: ["R", "Shiny", "Snowflake", "Plotly", "dbt"],
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world case studies showcasing data-driven solutions that deliver measurable business impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.role}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Problem:</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Solution:</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-gray-700 dark:text-gray-300 text-sm flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <Users className="w-5 h-5" />
            <span>Hire Me for Similar Work</span>
          </button>
        </div>

        {/* Contact Form Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6 relative animate-fadeIn"
              style={{ animation: 'fadeIn 0.3s ease-out' }}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Work Together
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Please fill out this form with your project details, and I'll get back to you within 24-48 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Describe your project needs"
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select...</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000+">$25,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select...</option>
                      <option value="Less than 1 month">Less than 1 month</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Any other details you'd like to share"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
}