import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, Award, FileText } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experienceList: ExperienceItem[] = [
    {
      company: "ClearCourse",
      position: "CoE Lead QA",
      period: "2024 - Present",
      description: "Defining and overseeing QA standards, best practices, and testing strategies across the entire organization as part of the Centre of Excellence.",
      achievements: [
        "Established a QA Community of Practice to foster collaboration and knowledge exchange across teams",
        "Organized and led QA workshops to upskill team members and promote testing best practices",
        "Initiated and facilitated company-wide knowledge sharing sessions, increasing cross-functional awareness",
        "Defined and implemented QA standards for both manual and automated testing across all projects"
      ]
    },
    {
      company: "ClearCourse",
      position: "Senior Test Automation Engineer",
      period: "2023 - 2024",
      description: "Led a team of QA engineers delivering automated testing solutions for enterprise-level applications.",
      achievements: [
        "Built a Playwright-based test framework from scratch covering UI and API testing",
        "Designed and maintained CI/CD pipelines (YAML) for nightly and regression runs",
        "Mentored and knowledge-shared across manual and automation testers"
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
        "Prepared and maintained test environments using virtual machines",
        "Designed and automated test cases based on requirements",
        "Set up Jenkins jobs and test reports as part of CI pipeline"
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
        "Prepared performance test suites with JMeter and manual test cases based on requirements",
        "Responsible for defect reporting and root cause analysis"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          itemRefs.current.forEach((el, i) => {
            if (!el) return;
            setTimeout(() => {
              el.classList.remove('opacity-0', 'translate-y-4');
              el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
            }, 200 * i);
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

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            My journey as a quality assurance professional across different organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-teal-200"></div>

            {/* Timeline Items */}
            {experienceList.map((item, index) => (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`timeline-item relative flex flex-col md:flex-row mb-8 md:mb-16 opacity-0 transition-all duration-700 ease-out translate-y-4 md:translate-y-0 ${
                  index % 2 === 0
                    ? 'md:flex-row-reverse md:-translate-x-10'
                    : 'md:translate-x-10'
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 z-10 mt-5 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/60 backdrop-blur-sm border border-white/80 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-slate-800">{item.position}</h3>
                      <span className="flex items-center text-slate-400 text-sm whitespace-nowrap ml-2">
                        <Calendar className="h-4 w-4 mr-1 shrink-0" />
                        {item.period}
                      </span>
                    </div>

                    <div className="flex items-center mb-4">
                      <Briefcase className="h-5 w-5 text-teal-500 mr-2 shrink-0" />
                      <span className="text-teal-700 font-medium">{item.company}</span>
                    </div>

                    <p className="text-gray-600 mb-4">{item.description}</p>

                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                        <Award className="h-4 w-4 text-amber-500 mr-2 shrink-0" />
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
            <a
              href="/pwojtak/resume.pdf"
              download
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;