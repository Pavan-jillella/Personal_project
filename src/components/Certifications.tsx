import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certification Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-xl">Microsoft Certified: Data Analyst Associate</h3>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Validates expertise in preparing, modeling, visualizing data, and deploying Power BI solutions.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                <span className="font-medium">Issuer:</span> Microsoft<br />
                <span className="font-medium">Issued:</span> January 2023<br />
                <span className="font-medium">Credential ID:</span> ABC123456
              </p>
            </div>
            <a 
              href="https://www.microsoft.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Credential <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Certification Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-xl">Google Data Analytics Professional Certificate</h3>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Comprehensive program covering data analysis, visualization, and key analytics tools.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                <span className="font-medium">Issuer:</span> Google<br />
                <span className="font-medium">Issued:</span> March 2023<br />
                <span className="font-medium">Credential ID:</span> XYZ789012
              </p>
            </div>
            <a 
              href="https://www.google.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Credential <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Certification Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="font-semibold text-xl">AWS Certified Data Analytics - Specialty</h3>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Advanced certification for designing and implementing AWS data analytics solutions.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                <span className="font-medium">Issuer:</span> Amazon Web Services<br />
                <span className="font-medium">Issued:</span> June 2023<br />
                <span className="font-medium">Credential ID:</span> DEF345678
              </p>
            </div>
            <a 
              href="https://aws.amazon.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Credential <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}