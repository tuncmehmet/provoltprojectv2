import React from 'react';
import { Logo } from './Icons';

const Hero: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop')",
          filter: 'saturate(70%)'
        }}
      ></div>
      
      <div className="relative z-10 p-6 flex flex-col items-center">
        <div className="transform scale-[2.25] sm:scale-[3] md:scale-[4] mb-16 md:mb-24">
          <Logo />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-wider [text-shadow:0_2px_4px_rgba(0,0,0,0.7)]">
          Your Trusted Electrical Contractors
        </h2>
        <p className="mt-4 max-w-3xl text-gray-200 text-xl md:text-2xl [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]">
          Providing professional, reliable, and safe electrical services for residential and commercial properties across the region.
        </p>
        <a 
          href="#services" 
          onClick={handleScrollToServices}
          className="mt-8 bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-500 transition-transform duration-300 hover:scale-105"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
