import React from 'react';
import Logo from './ui/Logo';

const Footer: React.FC = () => {
    
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        // Handle root link separately
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

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
    
    const FooterLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} onClick={(e) => handleNavClick(e, href)} className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">{children}</a>
    </li>
);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo isScrolled={true} variant="light" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for custom home builds and luxury remodeling services, turning dreams into reality and enhancing the spaces you cherish most.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wider uppercase mb-4">Links</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#projects">Our Work</FooterLink>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wider uppercase mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                    <span className="mt-1 mr-3 h-4 w-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.223.654-.369.395-.22.86-.486 1.358-.789.75-.456 1.527-1.027 2.212-1.72.684-.693 1.25-1.45 1.688-2.247.438-.796.726-1.63.856-2.45.13-.82.16-1.649.124-2.433a9.949 9.949 0 00-.777-3.218 9.94 9.94 0 00-2.228-3.218A9.952 9.952 0 0010 1.5a9.952 9.952 0 00-6.308 2.228A9.94 9.94 0 001.464 6.946a9.949 9.949 0 00-.777 3.218c-.036.784-.006 1.613.124 2.433.13.82.418 1.65.856 2.45.438.797 1 1.554 1.688 2.247.684.693 1.462 1.264 2.212 1.72.498.302.963.57 1.358.788.254.147.468.27.654.37l.018.008.006.003zM10 8a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    </span>
                    <span>Parker, CO</span>
                </li>
                <li className="flex items-start">
                    <span className="mt-1 mr-3 h-4 w-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" /></svg>
                    </span>
                    <a href="mailto:info@simpleconstructions.net" className="hover:text-white transition-colors">info@simpleconstructions.net</a>
                </li>
            </ul>
          </div>
          
          {/* Column 4: Get a Quote */}
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wider uppercase mb-4">Get Started</h4>
            <p className="text-gray-400 text-sm mb-4">
              Have a project in mind? Contact us today to start the conversation.
            </p>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-5 rounded-sm transition-colors duration-300 cursor-pointer">
                Get a Quote
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Simple Constructions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;