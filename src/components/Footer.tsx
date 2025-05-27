import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Code2 className="h-8 w-8 text-teal-500 mr-2" />
            <span className="text-xl font-bold">QA Engineer</span>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            {['about', 'skills', 'projects', 'experience', 'testimonials', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-400 hover:text-teal-400 capitalize text-sm transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-slate-800 hover:bg-teal-600 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} QA Automation Engineer. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm">
            Designed and developed with <span className="text-red-500">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;