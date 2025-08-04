import React, { useState, useEffect } from 'react';
import Logo from './ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
  ];

  const linkClasses = `font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-20">
        {/* Logo - Left side */}
        <div className="flex-shrink-0">
          <Logo isScrolled={isScrolled} />
        </div>
        
        {/* Navigation - Right side */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={linkClasses}>
              {link.name}
            </a>
          ))}
          
          {/* CTA - Right side */}
          <div className="flex items-center ml-8">
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-5 rounded-sm transition-colors duration-300">
              Get a Quote
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800" aria-label="Open menu">
             <svg className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
         <div className="md:hidden bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col items-center space-y-4 py-4">
                {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-700 hover:text-black font-medium">
                    {link.name}
                </a>
                ))}
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-5 rounded-sm transition-colors duration-300">
                    Get a Quote
                </a>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;