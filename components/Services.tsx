import React from 'react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    title: 'General Contracting',
    description: 'Comprehensive management for your construction project, ensuring it\'s delivered on time and on budget with the highest quality standards.'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    title: 'Design + Build',
    description: 'A unified workflow from concept to creation. We provide a single, dedicated team to handle every aspect of your project seamlessly.'
  },
  {
    imageUrl: '/images/pic5.jpg',
    title: 'Custom Renovations',
    description: 'Transforming existing spaces into beautiful, functional environments. We specialize in kitchen, bath, and whole-home renovations.'
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Our Services</h2>
          <p className="mt-4 font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900">Expertise You Can Rely On</p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 px-4">We offer a comprehensive range of services to meet your construction and remodeling needs, delivering solutions that exceed expectations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x224/cccccc/666666?text=${encodeURIComponent(service.title)}`;
                  }}
                />
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;