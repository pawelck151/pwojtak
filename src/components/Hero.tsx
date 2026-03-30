import React, { useEffect, useRef } from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/hero.jpg';

const Hero: React.FC = () => {
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-6');
        el.classList.add('opacity-100', 'translate-y-0');
      }, 200 * i);
    });
  }, []);

  const ref = (i: number) => (el: HTMLElement | null) => {
    itemsRef.current[i] = el;
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${heroBg})` }}></div>
      </div>
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="max-w-4xl mx-auto text-left">

          <p
            ref={ref(0)}
            className="text-lg md:text-xl text-gray-400 mb-2 font-light tracking-widest uppercase opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            Hi, I'm
          </p>

          <h1
            ref={ref(1)}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <span className="block text-white">Paweł Wojtak</span>
          </h1>

          <h2
            ref={ref(2)}
            className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <span className="text-teal-400">Quality Assurance Lead</span>
            <span className="text-teal-400">|</span>
            <span className="text-gray-300">QA Automation Engineer</span>
          </h2>

          <p
            ref={ref(3)}
            className="text-sm text-gray-400 mb-10 max-w-xl opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            Ensuring software excellence through meticulous testing and innovative automation
          </p>

          <div
            ref={ref(4)}
            className="flex flex-wrap items-center gap-4 mb-12 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            {[
              "Test Automation Frameworks",
              "CI/CD Integration",
              "Performance Testing",
              "A11y Testing",
              "Test Strategy",
            ].map((skill, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-gray-300 text-sm">{skill}</span>
              </div>
            ))}
          </div>

          <div
            ref={ref(5)}
            className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 md:px-16 md:py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
            <a
              href="/pwojtak/public/resume.pdf"
              download
              className="px-8 py-4 md:px-16 md:py-4 bg-transparent border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white rounded-full font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105 text-center"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-white opacity-80" />
        </button>
      </div>
    </div>
  );
};

export default Hero;