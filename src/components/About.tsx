import React, { useEffect, useRef } from 'react';
import kawkaImg from '../assets/kawka.jpg';
import { Code, Bug, TestTube, Database } from 'lucide-react';

const About: React.FC = () => {
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          itemsRef.current.forEach((el, i) => {
            if (!el) return;
            setTimeout(() => {
              el.classList.remove('opacity-0', 'translate-y-6');
              el.classList.add('opacity-100', 'translate-y-0');
            }, 150 * i);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (itemsRef.current[0]) {
      observer.observe(itemsRef.current[0]);
    }

    return () => observer.disconnect();
  }, []);

  const ref = (i: number) => (el: HTMLElement | null) => {
    itemsRef.current[i] = el;
  };

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={ref(0)}
            className="opacity-0 translate-y-6 transition-all duration-700 ease-out p-4"
          >
            <div className="rounded-xl overflow-hidden shadow-xl group">
              <img
                src={kawkaImg}
                alt="Professional QA Engineer at work"
                className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
            </div>
          </div>

          <div>
            <h3
              ref={ref(1)}
              className="text-2xl font-bold text-slate-800 mb-6 opacity-0 translate-y-6 transition-all duration-700 ease-out"
            >
              Who I Am
            </h3>

            <div
              ref={ref(2)}
              className="opacity-0 translate-y-6 transition-all duration-700 ease-out space-y-4 mb-6"
            >
              <p className="text-gray-600">
                QA Technical Lead and Manager with over 8 years of experience in software quality assurance. I have led cross-functional QA teams of 10+ engineers, driving quality culture across entire organizations.
              </p>
              <p className="text-gray-600">
                I built and scaled a Centre of Excellence for QA from the ground up — establishing a company-wide QA Community of Practice, defining standards, and running workshops that upskilled teams across multiple projects.
              </p>
              <p className="text-gray-600">
                Beyond leadership, I take a hands-on approach: onboarding engineers into projects, defining tailored test strategies, and selecting the right tools and automation frameworks to fit each product's needs.
              </p>
            </div>

            <div
              ref={ref(3)}
              className="space-y-4 mb-8 opacity-0 translate-y-6 transition-all duration-700 ease-out"
            >
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
              ref={ref(4)}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105 opacity-0 translate-y-6 mt-4"
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