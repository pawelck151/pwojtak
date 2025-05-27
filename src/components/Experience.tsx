import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, Award } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  const experienceList: ExperienceItem[] = [
    {
      company: "ClearCourse",
      position: "Lead QA Automation Engineer",
      period: "2023 - 2024",
      description: "Leading a team of QA engineers to implement automated testing solutions for enterprise-level applications.",
      achievements: [
        "Reduced regression testing time by 80% through strategic test automation",
        "Implemented CI/CD pipeline integration for continuous testing",
        "Led the transition from manual to automated testing processes",
        "Established QA best practices and coding standards for the team"
      ]
    },
    {
      company: "JCommerce Sp. z o.o.",
      position: "Test Automation Engineer",
      period: "2020 - 2023",
      description: "Responsible for designing and implementing test automation frameworks for web and mobile applications.",
      achievements: [
        "Created and executed functional tests for web and mobile applications",
        "Developed and implemented API tests to validate backend services"
      ]
    },
    {
      company: "GlobalLogic",
      position: "Test Automation Engineer",
      period: "2019 - 2020",
      description: "Performed manual and automated testing for various web applications, focusing on functional and regression testing.",
      achievements: [
        "Collaborated with the team to create a testing framework for embedded applications",
        "Prepared the test environment (host with virtual machines)",
        "Designed and automated test cases based on requirements",
        "Set up Jenkins jobs and test reports (CI)"
      ]
    },
    {
      company: "Infover",
      position: "Test Automation Engineer",
      period: "2017 - 2019",
      description: "Conducted manual and automation testing for web and mobile applications, created test cases, and reported defects.",
      achievements: [
        "Created test architecture from scratch using Page Object Pattern (Selenium with C#)",
        "Performed functional testing for web, desktop, and mobile applications",
        "Developed expertise in exploratory testing techniques",
        "Prepared test suites for performance testing with JMeter and test cases for manual testing based on requirements",
        "Responsible for error and bug reporting"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10', 'opacity-0');
          
          // Animate timeline items
          const timelineItems = document.querySelectorAll('.timeline-item');
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.remove('opacity-0');
              item.classList.add('opacity-100', 'translate-x-0');
            }, 200 * index);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            My journey as a quality assurance professional across different organizations
          </p>
        </div>
        
        <div 
          ref={experienceRef} 
          className="max-w-4xl mx-auto transform translate-y-10 opacity-0 transition-all duration-1000 ease-out"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-teal-200"></div>
            
            {/* Timeline Items */}
            {experienceList.map((item, index) => (
              <div 
                key={index} 
                className={`timeline-item relative flex flex-col md:flex-row mb-8 md:mb-16 opacity-0 transition-all duration-700 ease-out ${
                  index % 2 === 0 
                    ? 'md:flex-row-reverse -translate-x-10' 
                    : 'translate-x-10'
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 z-10 mt-5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                
                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-slate-800">{item.position}</h3>
                      <span className="flex items-center text-slate-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <Briefcase className="h-5 w-5 text-teal-500 mr-2" />
                      <span className="text-teal-700 font-medium">{item.company}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                        <Award className="h-4 w-4 text-amber-500 mr-2" />
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={() => window.open('/resume.pdf')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              View Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;