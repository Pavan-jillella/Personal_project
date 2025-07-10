import React from 'react';
import { ExternalLink, Github, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export default function Projects() {
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
          <button className="inline-flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            <Users className="w-5 h-5" />
            <span>Hire Me for Similar Work</span>
          </button>
        </div>
      </div>
    </section>
  );
}