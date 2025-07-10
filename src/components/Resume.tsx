import React from 'react';
import { Download, Eye, FileText, ExternalLink } from 'lucide-react';

export default function Resume() {
  const resumeVersions = [
    {
      title: "Data Analyst Resume",
      description: "Focused on data analysis, visualization, and statistical modeling",
      size: "1.2 MB",
      pages: 2,
      downloadUrl: "#"
    },
    {
      title: "Business Analyst Resume",
      description: "Emphasizes business intelligence, process optimization, and stakeholder management",
      size: "1.1 MB",
      pages: 2,
      downloadUrl: "#"
    },
    {
      title: "ML Engineer Resume",
      description: "Highlights machine learning, AI projects, and technical implementation",
      size: "1.3 MB",
      pages: 2,
      downloadUrl: "#"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ATS-optimized resumes tailored for different roles and opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Preview */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="w-24 h-32 bg-white dark:bg-gray-700 rounded-lg shadow-lg mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Alex Chen - Data Analyst
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional resume highlighting 5+ years of data analysis experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Stats
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                    <span className="font-medium text-gray-900 dark:text-white">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Projects:</span>
                    <span className="font-medium text-gray-900 dark:text-white">150+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Certifications:</span>
                    <span className="font-medium text-gray-900 dark:text-white">15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Revenue Impact:</span>
                    <span className="font-medium text-gray-900 dark:text-white">$2M+</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Core Competencies
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm">SQL</span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm">Tableau</span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm">Power BI</span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm">AWS</span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm">ML</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                <Eye className="w-5 h-5" />
                <span>View Resume</span>
              </button>
              <button className="inline-flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Resume Versions */}
          <div className="grid md:grid-cols-3 gap-6">
            {resumeVersions.map((resume, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-20 bg-white dark:bg-gray-700 rounded-lg shadow-md mx-auto mb-3 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {resume.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {resume.description}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Size:</span>
                    <span className="text-gray-900 dark:text-white">{resume.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Pages:</span>
                    <span className="text-gray-900 dark:text-white">{resume.pages}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a href={resume.downloadUrl} className="flex-1 inline-flex items-center justify-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                  <a href={resume.downloadUrl} className="inline-flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                ATS-Optimized & Mobile-Friendly
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All resumes are optimized for Applicant Tracking Systems (ATS) and formatted for perfect display across all devices and platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}