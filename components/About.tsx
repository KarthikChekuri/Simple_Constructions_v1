import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-sm overflow-hidden">
                 <img 
                   src="/images/abouttest.avif" 
                   alt="About Simple Constructions" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.src = 'https://via.placeholder.com/600x400/cccccc/666666?text=About+Simple+Constructions';
                   }}
                 />
            </div>
            <div>
                <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">About Simple Constructions</h2>
                <p className="mt-4 font-serif text-3xl md:text-4xl text-gray-900 leading-tight">
                    Your Trusted Partner in Building and Remodeling
                </p>
                <p className="mt-6 text-base text-gray-600 leading-relaxed">
                  Simple Constructions is a full service design & build company creating timeless spaces with a modern aesthetic. From concept to completion, our team of skilled designers, architects, and builders work collaboratively to bring your vision to life.
                </p>
                 <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  We believe in transparency, quality craftsmanship, and a seamless client experience, ensuring every project is a true partnership. Reach out to us today to initiate the conversation and discover how we can make your dreams come true.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;