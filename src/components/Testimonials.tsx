import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechInnovate",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "An exceptional QA lead who transformed our testing processes. The automation framework implemented saved us countless hours and significantly improved our product quality. A true professional with a keen eye for detail."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Engineering Director",
      company: "SoftSolutions Inc.",
      text: "Working with such a dedicated QA professional was a game-changer for our team. The comprehensive test strategy and automation implementation reduced our regression testing time by 75% while increasing our test coverage. Highly recommended!",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Product Manager",
      company: "Digital Dynamics",
      text: "Our product quality improved dramatically thanks to the strategic QA leadership provided. Not only were technical skills impressive, but the ability to communicate effectively with all stakeholders made the entire process smooth and efficient.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "David Rodriguez",
      position: "Development Lead",
      company: "AppNova",
      text: "I've worked with many QA engineers, but none as thorough and proactive. The shift-left testing approach implemented caught issues early in the development cycle, saving us time and resources. A true quality advocate!",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            What colleagues and clients say about my work and contributions
          </p>
        </div>
        
        <div 
          ref={testimonialsRef} 
          className="max-w-4xl mx-auto transform translate-y-10 opacity-0 transition-all duration-1000 ease-out"
        >
          <div className="relative">
            <div className="absolute -top-8 left-8 md:left-16 text-teal-500 opacity-30">
              <Quote className="h-20 w-20" />
            </div>
            
            <div className="bg-slate-700 bg-opacity-50 rounded-xl p-6 md:p-10 backdrop-blur-sm shadow-xl">
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-200 mb-8 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-teal-400">{testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-slate-700 hover:bg-teal-600 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-teal-500 scale-125' : 'bg-slate-600 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-slate-700 hover:bg-teal-600 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;