import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const features = [
    'All facilities in-house: components, designing, sampling, uppers, bottoming',
    'Fully integrated unit for all client requirements',
    'Better control over quality and delivery',
    'Factory located in a clean, green environment',
    'Tie-ups with tanneries for Goat, Sheep, Cow & Buffalo leather',
  ];

  const milestones = [
    { year: '2023', event: 'AAWA SHOES LLP founded by Mr. NIAZ' },
    { year: '30+', event: 'Years of combined experience in footwear industry' },
    { year: '2024', event: 'Expanded production capacity and international partnerships' },
    { year: 'Present', event: 'Serving global brands with premium leather footwear' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-brown-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About AAWA SHOES LLP</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Crafting premium leather footwear with passion, precision, and 30+ years of expertise
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Company Story */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  AAWA SHOES LLP started in the year 2023 by Mr. NIAZ, who is passionate about shoes and had 30 years of experience in this field. Our journey began with a vision to create premium leather footwear that combines traditional craftsmanship with modern innovation.
                </p>
                
                <p>
                  In AAWA, expertise in each field ensures that all orders and their specifications are met and monitored till the final process. With our long and close association with an Italian team, we continuously improve each department of shoe-making. Their touch in design and quality is apparent in every pair we create.
                </p>
                
                <p>
                  Committed to quality and delivery with trained technicians and staff, we have built a reputation for excellence in the footwear industry. Our dedication to superior craftsmanship has made us a trusted partner for global brands.
                </p>
                
                <p>
                  With the best craftsmanship, creativity and our passion towards shoe making, we make ourselves unique in sample and development of shoes. Every step of our process reflects our commitment to delivering footwear that exceeds expectations.
                </p>
              </div>
            </div>

            {/* What Makes Us Unique */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Makes Us Unique</h2>
              <p className="text-xl text-gray-700 mb-8 text-center">
                AAWA SHOES LLP is a self-reliant one-stop-shop for all shoe requirements:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg 
                        className="h-6 w-6 text-brown-600" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-brown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 text-center">
                    To provide premium quality leather footwear with exceptional craftsmanship and 
                    service that meets international standards, while maintaining sustainable 
                    production practices and fostering long-term partnerships with our clients.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-brown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 text-center">
                    To be recognized globally as a leading manufacturer of high-quality leather 
                    footwear, known for our commitment to excellence, innovation, and customer 
                    satisfaction while setting new standards in the industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-md">
                    <div className="flex-shrink-0 w-20 h-20 bg-brown-600 rounded-full flex items-center justify-center mr-6">
                      <span className="text-white font-bold text-sm text-center">{milestone.year}</span>
                    </div>
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-brown-600 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
              <p className="text-lg mb-6">
                Experience the AAWA difference in premium leather footwear manufacturing
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-white text-brown-600 font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
