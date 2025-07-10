import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Data Analytics Engineering",
      institution: "George Mason University",
      location: "Fairfax, VA",
      period: "2022 - 2024",
      gpa: "3.89/4.0",
      description: "Specialized in Machine Learning and Statistical Analysis with focus on Business Applications",
      coursework: ["Machine Learning", "Statistical Methods", "Data Mining", "Business Analytics", "Deep Learning"]
    },
    {
      degree: "Master of Technology in Computer Science",
      institution: "Vellore Institute of Technology",
      location: "Vellore, India",
      period: "2021 - 2022",
      gpa: "4.0/4.0",
      description: "Concentration in Computer Systems and Software Engineering",
      coursework: ["Advanced Algorithms","Machine Learning","Deep Learning","Data Mining","Computer Vision","Business Analytics","Software Architecture",
    "Distributed Computing",
    "Database Systems",
    "Linear Algebra",
    ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "vellore Institute of Technology",
      location: "Vellore, India",
      period: "2017 - 2021",
      gpa: "8.5/10.0",
      description: "Concentration in Database Systems and Software Engineering",
      coursework: ["Database Systems", "Algorithms", "Software Engineering", "Statistics", "Linear Algebra"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect Associate SAA-C03",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "",
      verified: true,
      logo: "/logos/sa.png",
      verifyUrl: "https://www.credly.com/badges/e674269d-fe15-4cc7-a680-4b130e68efa2/public_url/"
    },
    {
      name: "AWS Certified Cloud Practitioner CLF-C02",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "",
      verified: true,
      logo: "/logos/cp.png",
      verifyUrl: "https://www.credly.com/badges/e674269d-fe15-4cc7-a680-4b130e68efa2/public_url/"
    },
    {
      name: "Big Data Modeling and Management Systems",
      issuer: "Coursera",
      date: "2023",
      credentialId: "",
      verified: true,
      logo: "/logos/bdm.jpeg",
      verifyUrl: "https://coursera.org/share/998eebbeed9e2810cc39221a11979398"
    },
    {
      name: "Database Management Essentials",
      issuer: "Coursera",
      date: "2022",
      credentialId: "",
      verified: true,
      logo: "/logos/dme.jpeg",
      verifyUrl: "https://coursera.org/share/626b0196ae3f162706968ee5bb2df001"
    },
    {
      name: "Object-Oriented Design",
      issuer: "Coursera",
      date: "2021",
      credentialId: "",
      verified: true,
      logo: "/logos/ood.jpeg",
      verifyUrl: "https://coursera.org/share/03d2e4c359477520b53a5270318d8a65"
    }
  ];

  const courses = [
    {
      name: "Machine Learning Engineering for Production (MLOps)",
      provider: "DeepLearning.AI",
      date: "2023",
      certificate: "#"
    },
    {
      name: "Advanced SQL for Data Scientists",
      provider: "Coursera",
      date: "2023",
      certificate: "#"
    },
    {
      name: "Business Intelligence and Analytics",
      provider: "MIT Professional Education",
      date: "2022",
      certificate: "#"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in data science and analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="w-7 h-7 text-blue-600 mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <p className="text-sm font-medium text-green-600 dark:text-green-400">
                        GPA: {edu.gpa}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span key={courseIndex} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="w-7 h-7 text-teal-600 mr-3" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Certification Logo */}
                      {cert.logo && (
                        <div className="w-10 h-10 flex-shrink-0">
                          <img 
                            src={cert.logo} 
                            alt={`${cert.name} logo`} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      
                      {/* Certification Details */}
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {cert.verifyUrl ? (
                            <a 
                              href={cert.verifyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hover:text-blue-600 dark:hover:text-blue-400"
                            >
                              {cert.name}
                            </a>
                          ) : (
                            cert.name
                          )}
                        </h4>
                        <p className="text-teal-600 dark:text-teal-400 font-medium mb-1">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    
                    {cert.verified && (
                      <a 
                        href={cert.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors flex items-center">
                          Verified
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </span>
                      </a>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center mt-2 ml-13">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Issued: {cert.date}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Courses */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {course.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {course.provider}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {course.date}
                  </p>
                  <a href={course.certificate} className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}