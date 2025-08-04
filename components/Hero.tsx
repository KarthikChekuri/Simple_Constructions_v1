import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        const headerOffset = 80; // Corresponds to h-20
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section className="relative h-screen flex items-center bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl text-white">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Excellence in Custom Home Building & Remodeling
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-300">
            Welcome to Simple Constructions - your trusted partner for custom builds and luxury remodeling services, turning dreams into reality and enhancing the spaces you cherish most.
            </p>
            <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="mt-10 inline-block bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-sm transition-colors duration-300 cursor-pointer"
            >
            View Our Work
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;