import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Operations",
      company: "TechFlow Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "Alex's analytical skills are exceptional. The customer segmentation model he developed increased our revenue by 35% in just six months. His ability to translate complex data into actionable insights is remarkable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "DataCorp Analytics",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "Working with Alex transformed our approach to healthcare analytics. His predictive models and dashboards have become essential tools for our hospital network. Highly recommended for any data-driven organization.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "FinTech Innovations",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "Alex's fraud detection system saved our company hundreds of thousands in potential losses. His expertise in ML and financial modeling is outstanding. A true professional who delivers results.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Head of Analytics",
      company: "StartUp Analytics Co.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "Alex has an incredible talent for making complex data accessible to business stakeholders. His visualizations and presentations helped secure our Series A funding. Excellent communication and technical skills.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Director of Business Intelligence",
      company: "Healthcare Systems Inc.",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "The operational efficiency improvements Alex delivered were game-changing for our organization. His data-driven approach to problem-solving and attention to detail are exactly what we needed.",
      rating: 5
    },
    {
      name: "Robert Wilson",
      role: "COO",
      company: "Manufacturing Solutions",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "Alex's supply chain optimization models delivered $800K in annual savings. His ability to understand business processes and translate them into analytical solutions is impressive. A valuable asset to any team.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Testimonials from colleagues, clients, and industry leaders who have experienced the impact of data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-blue-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join these satisfied clients and let's transform your data into actionable insights that drive real business results.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}