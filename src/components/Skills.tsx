import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  proficiency: number;
  category: 'Automation' | 'Testing' | 'Tools' | 'Languages';
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const skills: Skill[] = [
    // Automation
    { name: 'Playwright', proficiency: 100, category: 'Automation' },
    { name: 'Selenium', proficiency: 90, category: 'Automation' },
    { name: 'Appium', proficiency: 80, category: 'Automation' },
    { name: 'CodedUI', proficiency: 80, category: 'Automation' },
    { name: 'TestComplete', proficiency: 75, category: 'Automation' },

    // Testing
    { name: 'API Testing', proficiency: 100, category: 'Testing' },
    { name: 'Performance Testing', proficiency: 80, category: 'Testing' },
    { name: 'E2E Testing', proficiency: 100, category: 'Testing' },
    { name: 'BDD Testing', proficiency: 100, category: 'Testing' },
    { name: 'Accessibility Testing', proficiency: 80, category: 'Testing' },

    // Tools
    { name: 'Jenkins', proficiency: 90, category: 'Tools' },
    { name: 'JIRA', proficiency: 100, category: 'Tools' },
    { name: 'Docker', proficiency: 85, category: 'Tools' },
    { name: 'Git', proficiency: 100, category: 'Tools' },
    { name: 'Postman', proficiency: 100, category: 'Tools' },

    // Languages
    { name: 'TypeScript', proficiency: 100, category: 'Languages' },
    { name: 'C#', proficiency: 100, category: 'Languages' },
    { name: 'JavaScript', proficiency: 75, category: 'Languages' },
    { name: 'Python', proficiency: 70, category: 'Languages' },
    { name: 'SQL', proficiency: 100, category: 'Languages' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Staggered cards
          cardRefs.current.forEach((el, i) => {
            if (!el) return;
            setTimeout(() => {
              el.classList.remove('opacity-0', 'translate-y-6');
              el.classList.add('opacity-100', 'translate-y-0');
            }, 150 * i);
          });

          // Animate skill bars
          const skillBars = document.querySelectorAll('.skill-bar-fill');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = bar.getAttribute('data-width') || '0%';
            }, 100 * index);
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cardRef = (i: number) => (el: HTMLElement | null) => {
    cardRefs.current[i] = el;
  };

  const categories = ['Automation', 'Testing', 'Tools', 'Languages'] as const;

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            My technical toolkit is continuously evolving to keep pace with industry trends and best practices
          </p>
        </div>

        <div>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, i) => (
              <div
                key={category}
                ref={cardRef(i)}
                className="bg-white rounded-xl shadow-md p-6 opacity-0 translate-y-6 transition-all duration-700 ease-out"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-6">{category}</h3>
                <div className="space-y-5">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-slate-700 font-medium">{skill.name}</span>
                          <span className="text-slate-600">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full">
                          <div
                            className="skill-bar-fill h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: '0%' }}
                            data-width={`${skill.proficiency}%`}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div
            ref={cardRef(4)}
            className="mt-8 bg-white rounded-xl shadow-md p-8 opacity-0 translate-y-6 transition-all duration-700 ease-out"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Additional Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Test Planning", "Test Strategy", "Agile/Scrum", "CI/CD",
                "Mobile Testing", "Cross-Browser Testing", "Regression Testing", "Continuous Testing",
                "Test Management", "Risk Analysis", "Defect Management", "Test Metrics", "Root Cause Analysis"
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-teal-50 text-teal-700 border border-teal-100 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;