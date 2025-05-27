import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  repoLink?: string;
  highlights: string[];
  type: 'Automation' | 'Testing' | 'Tool';
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Automation Framework",
      description: "Built a comprehensive test automation framework for a large e-commerce platform using Selenium, TestNG, and Java.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Selenium", "Java", "TestNG", "Maven", "Jenkins"],
      demoLink: "#",
      repoLink: "#",
      highlights: [
        "Reduced regression testing time by 70%",
        "Implemented page object model and data-driven testing",
        "Integrated with CI/CD pipeline for continuous testing"
      ],
      type: 'Automation'
    },
    {
      id: 2,
      title: "API Testing Framework",
      description: "Developed a robust API testing framework using RestAssured and Cucumber for BDD-style test specifications.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["RestAssured", "Cucumber", "Java", "Maven", "CircleCI"],
      demoLink: "#",
      repoLink: "#",
      highlights: [
        "99% API coverage with automated tests",
        "Implemented contract testing",
        "Created custom reporting dashboard"
      ],
      type: 'Testing'
    },
    {
      id: 3,
      title: "Mobile Testing Framework",
      description: "Created a cross-platform mobile testing solution using Appium with parallel test execution capability.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Appium", "TypeScript", "Mocha", "Chai", "Docker"],
      demoLink: "#",
      repoLink: "#",
      highlights: [
        "Supports both iOS and Android testing",
        "Reduced test execution time by 60%",
        "Implemented visual testing capabilities"
      ],
      type: 'Automation'
    },
    {
      id: 4,
      title: "Performance Testing Suite",
      description: "Implemented comprehensive performance testing using JMeter and Gatling for a high-traffic web application.",
      image: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["JMeter", "Gatling", "Scala", "Grafana", "InfluxDB"],
      demoLink: "#",
      repoLink: "#",
      highlights: [
        "Identified and resolved 5 critical bottlenecks",
        "Created reusable performance test scripts",
        "Implemented real-time performance monitoring"
      ],
      type: 'Testing'
    },
    {
      id: 5,
      title: "QA Metrics Dashboard",
      description: "Developed a real-time QA metrics dashboard to track test coverage, defects, and automation ROI.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      repoLink: "#",
      highlights: [
        "Consolidated data from multiple testing tools",
        "Created customizable KPI dashboards",
        "Automated weekly quality reports"
      ],
      type: 'Tool'
    },
    {
      id: 6,
      title: "Security Testing Toolkit",
      description: "Built a security testing toolkit integrating OWASP ZAP for automated vulnerability scanning.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["OWASP ZAP", "Python", "Docker", "Jenkins", "AWS"],
      demoLink: "#",
      repoLink: "#",
      highlights: [
        "Automated security testing integrated with CI/CD",
        "Identified 23 critical vulnerabilities",
        "Implemented compliance reporting for SOC2"
      ],
      type: 'Testing'
    },
  ];

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            A showcase of my key projects and achievements in the QA and test automation domain
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {['All', 'Automation', 'Testing', 'Tool'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 text-sm font-medium ${
                  activeFilter === filter
                    ? 'bg-teal-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-200 ${
                  filter === 'All' ? 'rounded-l-lg' : ''
                } ${
                  filter === 'Tool' ? 'rounded-r-lg' : ''
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div 
          ref={projectsRef} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transform translate-y-10 opacity-0 transition-all duration-1000 ease-out"
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded">
                    {project.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-700 mb-2">Key Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-teal-600 hover:text-teal-800 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  
                  {project.repoLink && (
                    <a 
                      href={project.repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-teal-600 hover:text-teal-800 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;