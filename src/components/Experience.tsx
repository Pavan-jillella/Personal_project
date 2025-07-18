import React from 'react';
import { Calendar, MapPin, TrendingUp, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Founder | AI & Data Developer",
      company: "the Joborbit",
      logo: "/logos/joborbit.png", // Add logo path here
      location: "Herndon, VA",
      period: "Nov 2024 - Present",
      type: "Full-time",
      description: "Founder and lead AI & Data Developer at JobOrbit, a next-gen job automation platform. Spearheaded the design and development of intelligent systems to automate job search, real-time application tracking, resume customization, and career path optimization using cutting-edge AI and data science frameworks.",
      achievements: [
        "Built and launched a full-stack AI job application platform used by over 1,000 users in the first quarter",
        "Designed and deployed machine learning models that increased interview conversion rates by 40%",
        "Integrated GPT-based resume tailoring and email automation features, reducing job application time by 80%",
        "Established strategic partnerships with job boards and APIs to enhance data quality and outreach capabilities"
      ],
      "skills": ["Python", "SQL", "React", "Firebase", "AWS", "Machine Learning", "GPT-4", "TailwindCSS"]
    },
    {
      title: "AI Developer",
      company: "George Mason University",
      logo: "/logos/gmu.png", // Add logo path here
      location: "Fairfax, VA",
      period: "Nov 2024 - Present",
      type: "Full-time",
      description: "Lead AI & data Developer at Joborbit for spearheading the development of predictive analytics and business intelligence solutions for enterprise clients, with a focus on automating job search, application tracking, and career optimization through AI-driven tools.",
      achievements: [
        "Led cross-functional team of 8 developers to deliver revenue impact through predictive modeling",
        "Developed automated reporting systems that reduced manual work by 75%",
        "Implemented ML models that improved customer retention by 35% across 3 major clients",
        "Mentored 5 junior analysts and established best practices for data quality and governance"
      ],
      skills: ["Python", "SQL", "Tableau", "AWS", "Machine Learning"]
    },
    {
      title: "Data Analyst",
      company: "Morgan Stanley",
      logo: "/logos/ms.png",
      location: "New York, NY",
      period: "Jan 2024 - Nov 2024",
      type: "Contract",
      description: "Specialized in Financial Analytics and Operational Intelligence, delivering actionable insights for portfolio networks and investors to optimize performance, manage risk, and drive data-informed investment strategies.",
      achievements: [
        "Conducted advanced EDA using SQL, Python, and R, uncovering trends and patterns to support strategic business decisions",
        "Designed Tableau and Power BI dashboards, improving reporting efficiency and enabling actionable insights for stakeholders.",
        "Applied clustering, segmentation, and hypothesis testing to validate hypotheses, uncover patterns, and drive business insights.",
        "Built ARIMA and time-series forecasting models for proactive planning and informed decision-making in dynamic markets.",
        "Defined KPIs with stakeholders, designing frameworks to monitor real time metrics, supporting data-driven decision-making.",
        "Performed customer segmentation and market studies, producing analytical reports aligned with business goals and priorities."

      ],
      skills: ["Power BI", "SQL Server", "Azure", "DAX", "Healthcare Analytics"]
    },
    {
      title: "Business Analyst",
      company: "Stryker",
      logo: "/logos/Stryker.png",
      location: "Bengaluru, India",
      period: "Mar 2021 – July 2022",
      type: "Full-time",
      description: "Collaborated with cross-functional teams to drive product enhancements, improve customer experience, and support strategic business initiatives.",
      achievements: [
      "Elicited and documented detailed business requirements through stakeholder collaboration, ensuring project alignment",
    "Conducted market and competitor analysis to define product roadmaps and prioritize features for improved product fit",
    "Led user research and pain point analysis to enhance usability and drive higher engagement",
    "Analyzed customer journey data to uncover retention drivers and support product optimization strategies",
    "Defined KPIs and developed dashboards to support data-driven decision-making across the product lifecycle",
    "Participated in Agile sprint planning and backlog grooming to ensure timely delivery of high-value features",
    "Authored BRDs and specifications to align stakeholder expectations with technical implementation",
    "Facilitated workshops and cross-functional alignment meetings to maintain momentum and clarity",
    "Built and maintained Power BI dashboards to track operational performance and business health metrics",
    "Performed SWOT analysis for new initiatives to evaluate risk, opportunity, and strategic alignment"
  ],
  "skills": ["Power BI", "Agile", "BRD", "Stakeholder Management", "Product Analytics", "SWOT Analysis", "Requirements Gathering"]
},
    {
  title: "Data Analyst",
  company: "Walmart Global Tech",
  logo: "/logos/w.png",
  location:"Bengaluru, India",
  period: "Feb 2019 – Feb 2021",
  type: "Full-time",
  description: "Leveraged advanced analytics and predictive modeling to support data-driven marketing, customer insights, and go-to-market strategies.",
  achievements: [
    "Analyzed large datasets using Python, SQL, and Tableau to uncover insights driving marketing and sales strategies",
    "Built predictive models including regression, clustering, and time series forecasting to anticipate customer behavior",
    "Executed A/B testing and ROI analysis to evaluate marketing campaigns and improve engagement",
    "Implemented K-Means clustering for customer segmentation to enhance targeting precision",
    "Performed competitive and market analysis to support pricing and positioning strategies",
    "Conducted funnel analysis to identify conversion bottlenecks and improve user flow",
    "Used cohort and survival analysis to assess churn risk and develop retention strategies"
  ],
  "skills": ["Python", "SQL", "Tableau", "A/B Testing", "Predictive Modeling", "Customer Segmentation", "Cohort Analysis"]
}
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A proven track record of delivering impactful data solutions across diverse industries
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                
                {/* Content */}
                <div className="ml-16 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center">
                        {exp.logo && (
                          <div className="w-8 h-8 mr-2 relative flex-shrink-0">
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`} 
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                        )}
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:text-right mt-2 md:mt-0">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                        <Calendar className="w-4 h-4 mr-1 text-blue-500 dark:text-blue-400" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-1 text-red-500 dark:text-red-400" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Award className="w-5 h-5 text-green-500 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}