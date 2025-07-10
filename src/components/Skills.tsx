import React from 'react';
import { Database, BarChart3, Brain, Code, Cloud, Users } from 'lucide-react';

export default function Skills() {
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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500",
      teal: "bg-teal-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500"
    };
    return colors[color as keyof typeof colors] || "bg-gray-500";
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <category.icon className={`w-8 h-8 ${category.color === 'blue' ? 'text-blue-600' : 
                  category.color === 'teal' ? 'text-teal-600' : 
                  category.color === 'purple' ? 'text-purple-600' : 'text-orange-600'} mr-3`} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getColorClasses(category.color)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                <skill.icon className={`w-8 h-8 ${getTextColorClasses(skill.color)} mx-auto mb-2`} />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}