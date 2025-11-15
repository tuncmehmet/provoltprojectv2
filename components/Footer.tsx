
import React from 'react';
import { Logo } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <Logo />
        <p className="text-gray-400 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} ProVolt Electrical. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
