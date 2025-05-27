import React from 'react';

const About: React.FC = () => {
  const features = [
    'All facilities in-house: components, designing, sampling, uppers, bottoming',
    'Fully integrated unit for all client requirements',
    'Better control over quality and delivery',
    'Factory located in a clean, green environment',
    'Tie-ups with tanneries for Goat, Sheep, Cow & Buffalo leather',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-brown-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            AAWA SHOES LLP started in the year 2023 by Mr.NIAZ, who is passionate about shoes and had 30 years of experience in this field.
          </p>
          
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            In AAWA, expertise in each field ensures that all orders and their specifications 
            are met and monitored till the final process. With our long and close association 
            with an Italian team, we continuously improve each department of shoe-making. 
            Their touch in design and quality is apparent.
          </p>
          
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Committed to quality and delivery with trained technicians and staffs.
          </p>
          
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            With the best craftsmanship, creativity and our passion towards the shoe making, makes us unique in sample and development of shoes.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            AAWA SHOES LLP is a self-reliant one-stop-shop for all shoe requirements:
          </h3>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg 
                    className="h-5 w-5 text-brown-600" 
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
                <p className="ml-3 text-gray-700">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide premium quality leather footwear with exceptional craftsmanship and 
              service that meets international standards, while maintaining sustainable 
              production practices.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be recognized globally as a leading manufacturer of high-quality leather 
              footwear, known for our commitment to excellence, innovation, and customer 
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
