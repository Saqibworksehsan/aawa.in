import React from 'react';

interface Client {
  id: number;
  name: string;
  logo: string;
}

const clientData: Client[] = [
  {
    id: 1,
    name: "Deichmann",
    logo: "/images/clients/deichmann-logo.png"
  },
  {
    id: 2,
    name: "Free Mood",
    logo: "/images/clients/freemood-logo.png"
  },
  {
    id: 3,
    name: "Claudio Conti",
    logo: "/images/clients/claudio-conti-logo.png"
  },
  {
    id: 4,
    name: "5th Avenue",
    logo: "/images/clients/5th-avenue-logo.png"
  },
  {
    id: 5,
    name: "Hush Puppies",
    logo: "/images/clients/hush-puppies-logo.png"
  },
  {
    id: 6,
    name: "Marina Militare",
    logo: "/images/clients/marina-militare-logo.png"
  },
  {
    id: 7,
    name: "Matteo Rossi",
    logo: "/images/clients/matteo-rossi-logo.png"
  },
  {
    id: 8,
    name: "Boggi Milano",
    logo: "/images/clients/boggi-milano-logo.png"
  },
  {
    id: 9,
    name: "Canguro",
    logo: "/images/clients/canguro-logo.png"
  },
  {
    id: 10,
    name: "AM Shoe Company",
    logo: "/images/clients/am-shoe-company-logo.png"
  }
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <div className="w-20 h-1 bg-brown-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Some of the Brands We Deal With
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clientData.map((client) => (
            <div 
              key={client.id} 
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-24 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg">
            We're proud to work with some of the world's most prestigious footwear brands.
            Our commitment to quality and craftsmanship has made us a trusted partner
            for leading names in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
