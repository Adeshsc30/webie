import React, { useState, useEffect, useRef } from 'react';
import { FaCode, FaServer, FaLightbulb } from "react-icons/fa";

const skills = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description: "Building responsive web apps using modern frameworks like React and Next.js.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Developing scalable server-side logic and managing database architectures.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    description: "Applying logical thinking to debug complex issues and optimize performance.",
  },
];

const About =()=> {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="flex items-center justify-center py-32"
    >
      <div className="w-full mx-auto px-6 font-mono">
        
        {/* Header Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-white/70 mb-16 max-w-2xl leading-relaxed">
            I am a full stack developer passionate about building elegant solutions. 
            Focused on writing clean, maintainable code and collaborating to deliver quality software.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              style={{ transitionDelay: `${index * 200}ms` }}
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:border-blue-500/30 group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <span className="text-blue-500 text-xl">{skill.icon}</span>
              </div>

              <h3 className="text-lg font-semibold mb-3">{skill.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;