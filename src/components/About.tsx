import React, { useEffect, useRef } from 'react';
import { Code, Bug, TestTube, Database } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            A passionate QA professional dedicated to ensuring the highest quality standards through innovative testing approaches
          </p>
        </div>
        
        <div 
          ref={aboutRef} 
          className="grid md:grid-cols-2 gap-12 items-center transform translate-y-10 opacity-0 transition-all duration-1000 ease-out"
        >
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/src/assets/kawka.jpg" 
              alt="Professional QA Engineer at work" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Who I Am</h3>
            <p className="text-gray-600 mb-6">
              A strong technical background in test automation
              and quality assurance, with hands-on experience
              in designing and maintaining scalable automation
              frameworks using Playwright with TypeScript and
              C#/.NET. Proven experience in leading QA teams,
              defining test strategies, and integrating automated
              tests into CI/CD pipelines (e.g., Jenkins, Azure
              DevOps). Passionate about delivering high-quality
              software through robust E2E, integration, and API
              test coverage, while continuously improving QA
              processes. Focused on delivering impactful,
              maintainable automation solutions that align with
              long-term product and business goals in agile,
              innovation-driven environments.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Code className="h-6 w-6 text-teal-500" />,
                  title: "Automation Architect",
                  description: "Designing scalable test frameworks that improve coverage and efficiency"
                },
                {
                  icon: <Bug className="h-6 w-6 text-teal-500" />,
                  title: "Quality Advocate",
                  description: "Championing quality throughout the development lifecycle"
                },
                {
                  icon: <TestTube className="h-6 w-6 text-teal-500" />,
                  title: "Test Strategist",
                  description: "Creating comprehensive testing strategies for complex applications"
                },
                {
                  icon: <Database className="h-6 w-6 text-teal-500" />,
                  title: "Data-Driven Tester",
                  description: "Leveraging metrics and data analysis to optimize testing efforts"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-teal-50 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors duration-300"
            >
              View My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;