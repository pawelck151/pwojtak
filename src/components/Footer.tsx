import React from 'react';
import { Code2, ArrowUp, Linkedin, GitBranch } from 'lucide-react';

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
            <span className="text-xl font-bold">Paweł Wojtak</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 md:mb-0">
            {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-400 hover:text-teal-400 capitalize text-sm transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <a
              href="https://www.linkedin.com/in/pawe%C5%82-wojtak-2b5181b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 hover:bg-teal-600 rounded-full transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-800 hover:bg-teal-600 rounded-full transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitBranch className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-teal-600 rounded-full transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Paweł Wojtak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;