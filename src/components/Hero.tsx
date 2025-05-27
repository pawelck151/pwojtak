import React, { useEffect, useRef } from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 py-16 z-10">
        <div 
          ref={heroRef} 
          className="max-w-3xl mx-auto text-center transform translate-y-10 opacity-0 transition-all duration-1000 ease-out"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">QA Automation Engineer</span>
            <span className="block mt-2 text-teal-400">& Quality Assurance Lead</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Ensuring software excellence through meticulous testing and innovative automation
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
            {[
              "Test Automation Frameworks", 
              "CI/CD Integration", 
              "Performance Testing", 
              "Test Strategy"
            ].map((skill, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-amber-400 mr-2" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
            <button 
              className="px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-slate-900 rounded-lg font-medium transition-colors duration-300"
              onClick={() => window.open('/resume.pdf')}
            >
              Download Resume
            </button>
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