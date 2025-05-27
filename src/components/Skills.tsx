import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  proficiency: number;
  category: 'Automation' | 'Testing' | 'Tools' | 'Languages';
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Automation
    { name: 'Selenium', proficiency: 95, category: 'Automation' },
    { name: 'Cypress', proficiency: 90, category: 'Automation' },
    { name: 'Playwright', proficiency: 85, category: 'Automation' },
    { name: 'Appium', proficiency: 80, category: 'Automation' },
    { name: 'Protractor', proficiency: 75, category: 'Automation' },
    
    // Testing
    { name: 'API Testing', proficiency: 95, category: 'Testing' },
    { name: 'Performance Testing', proficiency: 85, category: 'Testing' },
    { name: 'Security Testing', proficiency: 80, category: 'Testing' },
    { name: 'E2E Testing', proficiency: 90, category: 'Testing' },
    { name: 'BDD', proficiency: 85, category: 'Testing' },
    
    // Tools
    { name: 'Jenkins', proficiency: 90, category: 'Tools' },
    { name: 'JIRA', proficiency: 95, category: 'Tools' },
    { name: 'Docker', proficiency: 85, category: 'Tools' },
    { name: 'Git', proficiency: 90, category: 'Tools' },
    { name: 'Postman', proficiency: 95, category: 'Tools' },
    
    // Languages
    { name: 'Java', proficiency: 90, category: 'Languages' },
    { name: 'JavaScript', proficiency: 85, category: 'Languages' },
    { name: 'TypeScript', proficiency: 80, category: 'Languages' },
    { name: 'Python', proficiency: 85, category: 'Languages' },
    { name: 'SQL', proficiency: 90, category: 'Languages' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
          
          // Animate skill bars
          const skillBars = document.querySelectorAll('.skill-bar-fill');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = bar.getAttribute('data-width') || '0%';
            }, 100 * index);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const categories = ['Automation', 'Testing', 'Tools', 'Languages'] as const;

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            My technical toolkit is continuously evolving to keep pace with industry trends and best practices
          </p>
        </div>
        
        <div 
          ref={skillsRef} 
          className="transform translate-y-10 opacity-0 transition-all duration-1000 ease-out"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category} className="bg-white rounded-xl shadow-md p-6">
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
          
          <div className="mt-16 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Additional Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Test Planning", "Test Strategy", "Agile/Scrum", "CI/CD", "Accessibility Testing",
                "Mobile Testing", "Cross-Browser Testing", "Regression Testing", "Continuous Testing",
                "Test Management", "Risk Analysis", "Defect Management", "Test Metrics", "Root Cause Analysis"
              ].map((item, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
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