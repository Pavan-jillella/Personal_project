import React from 'react';
import { BarChart3, TrendingUp, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming data into strategic insights with a passion for innovation and business growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With over 4 years of experience in data analytics and business intelligence, I specialize in turning complex datasets into actionable insights that drive strategic decision-making. My expertise spans across multiple industries including fintech, healthcare, and e-commerce.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about leveraging cutting-edge AI tools and advanced analytics to solve real-world business problems. From predictive modeling to automated reporting systems, I help organizations unlock the full potential of their data.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              In addition to my work as a data professional, I'm also an AI developer and founder, focused on building innovative solutions that bridge the gap between data science and real-world applications.
            </p>

             <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not diving deep into data, you'll find me exploring the latest trends in machine learning, contributing to open-source projects, or mentoring aspiring data professionals. I believe that great insights come from combining technical expertise with creative problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center">
              <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">150+</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            
            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl text-center">
              <TrendingUp className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$2M+</h3>
              <p className="text-gray-600 dark:text-gray-300">Revenue Impact</p>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl text-center">
              <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-300">Teams Collaborated</p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">15+</h3>
              <p className="text-gray-600 dark:text-gray-300">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}