import React from 'react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    quote: "Working with Simple Constructions was a dream. They were professional, communicative, and the final result exceeded all our expectations. Truly top-tier craftsmanship.",
    author: 'Alex & Jordan Smith',
    company: 'Homeowners, Aspen Grove'
  },
  {
    quote: "The team's attention to detail is unmatched. They transformed our outdated office into a modern, inspiring workspace that our employees love. Highly recommended.",
    author: 'Sarah Chen',
    company: 'CEO, Innovate Co.'
  },
];

const QuoteIcon = () => (
    <svg className="w-12 h-12 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);


const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Testimonials</h2>
          <p className="mt-4 font-serif text-3xl md:text-4xl text-gray-900">What Our Clients Say</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <figure key={index} className="flex flex-col p-8 bg-gray-50 rounded-sm border border-gray-100">
                <div className="mb-4">
                    <QuoteIcon />
                </div>
                <blockquote className="text-gray-600 text-lg mb-6 flex-grow">
                    <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;