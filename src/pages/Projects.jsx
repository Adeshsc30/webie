import React, { useState } from 'react';
import ProjectCards from '../components/ProjectCards'
import { FaGlobe, FaPalette, FaDatabase, FaCode, FaRocket } from "react-icons/fa";

const projects = [
  { id: 1, title: "E-Commerce Platform", description: "Full-stack marketplace", tech: "React, Node.js", icon: FaGlobe },
  { id: 2, title: "Design System", description: "Component library", tech: "TypeScript, Tailwind", icon: FaPalette },
  { id: 3, title: "Task Manager API", description: "RESTful API updates", tech: "MongoDB, Socket.io", icon: FaDatabase },
  { id: 4, title: "Portfolio Generator", description: "CLI tool for sites", tech: "Node.js, Vite", icon: FaCode },
  { id: 5, title: "Deployment Dashboard", description: "Cloud monitor", tech: "AWS, Docker", icon: FaRocket },
];

const Projects = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  // 1. The "Stacked" Formula (Math for the deck)
  const getStackedStyles = (index) => ({
    transform: `rotate(${(index - 2) * 3}deg) translateY(${index * 8}px) scale(${1 - index * 0.02})`,
    zIndex: projects.length - index,
    opacity: 1,
  });

  // 2. The "Expanded" Formula (Math for the grid)
  const getExpandedStyles = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const xOffset = (col - 1) * 320; // Move left/right
    const yOffset = row * 360;       // Move up/down
    
    return {
      transform: `translate(${xOffset}px, ${yOffset}px) rotate(0deg) scale(1)`,
      zIndex: 1,
      opacity: 1,
    };
  };
  return (
    <section className={`relative w-full flex flex-col items-center justify-start pt-32 transition-all duration-700 ease-in-out
        ${isExpanded ? 'h-[1000px]' : 'h-[700px]'}
      `}>
      <div className="relative h-[450px] w-full flex items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCards
            key={project.id}
            project={project}
            Icon={project.icon}
            // Here is the switch: if expanded, use grid math, otherwise use stack math
            style={isExpanded ? getExpandedStyles(index) : getStackedStyles(index)}
          />
        ))}
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-20 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/20"
      >
        {isExpanded ? "Stack Projects" : "Explore Projects"}
      </button>
    </section>
  )
}

export default Projects