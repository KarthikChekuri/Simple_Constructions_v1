import React from 'react';

interface LogoProps {
  isScrolled: boolean;
  variant?: 'default' | 'light';
}

const Logo: React.FC<LogoProps> = ({ isScrolled, variant = 'default' }) => {
  const textColor = variant === 'light' 
    ? 'text-gray-300 group-hover:text-white' 
    : (isScrolled ? 'text-gray-800 group-hover:text-black' : 'text-white group-hover:text-gray-200');
  const middleBg = variant === 'light'
    ? 'bg-transparent group-hover:bg-white/10'
    : (isScrolled ? 'bg-white group-hover:bg-gray-100' : 'bg-transparent group-hover:bg-black/20');
  const middleTextColor = variant === 'light'
    ? 'text-gray-400'
    : (isScrolled ? 'text-gray-500' : 'text-gray-200');

  return (
    <a href="#" className="flex items-center justify-center relative w-48 h-24 group">
      <span className={`font-serif text-8xl font-bold ${textColor} transition-colors`}>S</span>
      <div className="relative h-full flex items-center mx-4">
        <div className={`h-full w-px ${variant === 'light' ? 'bg-gray-500' : (isScrolled ? 'bg-gray-400' : 'bg-gray-400')}`}></div>
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 transition-colors ${middleBg}`}>
           <span className={`text-xs font-medium tracking-widest uppercase whitespace-nowrap ${middleTextColor}`}>Simple Constructions</span>
        </div>
      </div>
      <span className={`font-serif text-8xl font-bold ${textColor} transition-colors`}>C</span>
    </a>
  );
};

export default Logo;