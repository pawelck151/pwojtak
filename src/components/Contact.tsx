import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Have a project in mind or want to discuss quality assurance opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div 
          ref={contactRef} 
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 transform translate-y-10 opacity-0 transition-all duration-1000 ease-out"
        >
          <div className="bg-slate-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-teal-100 text-teal-600 rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Email</h4>
                  <a href="mailto:contact@qaengineer.com" className="text-teal-600 hover:text-teal-800 transition-colors">
                    wojtakpawel@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-teal-100 text-teal-600 rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Phone</h4>
                  <a href="tel:+11234567890" className="text-teal-600 hover:text-teal-800 transition-colors">
                    +48 660463861
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 bg-teal-100 text-teal-600 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700">Kraków</h4>
                  <p className="text-gray-600">Małopolska</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 bg-slate-200 hover:bg-teal-500 text-slate-700 hover:text-white rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-slate-200 hover:bg-teal-500 text-slate-700 hover:text-white rounded-full transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-slate-200 hover:bg-teal-500 text-slate-700 hover:text-white rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send A Message</h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 flex items-center justify-center rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-700 transform hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;