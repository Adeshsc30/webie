import { useState } from 'react';
import ProjectCards from '../components/ProjectCards'
import { FaBriefcase, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Job Tracker",
    description: "A full-stack MERN app to track job applications with JWT auth, status updates and dashboard",
    tech: "React, Node.js, MongoDB, Tailwind",
    icon: FaBriefcase,
    liveLink: "https://job-tracker-silk-seven.vercel.app",
    githubLink: "https://github.com/Adeshsc30/job-tracker",
  },
  {
    id: 2,
    title: "GitHub Finder",
    description: "Search any GitHub user to explore their profile, repositories, followers and stats",
    tech: "React, Tailwind, GitHub API",
    icon: FaGithub,
    liveLink: "https://github-finder-livid-three.vercel.app/",
    githubLink: "https://github.com/Adeshsc30/github-finder",
  },
];

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStackedStyles = (index) => ({
    transform: `rotate(${(index - 1) * 4}deg) translateY(${index * 8}px) scale(${1 - index * 0.02})`,
    zIndex: projects.length - index,
    opacity: 1,
  });

  const getExpandedStyles = (index) => {
    const xOffset = (index - 0.5) * 320
    return {
      transform: `translate(${xOffset}px, 0px) rotate(0deg) scale(1)`,
      zIndex: 1,
      opacity: 1,
    };
  };

  return (
    <section className={`relative w-full flex flex-col items-center justify-start pt-32 transition-all duration-700 ease-in-out
        ${isExpanded ? 'h-[700px]' : 'h-[600px]'}
      `}>
      <div className="relative h-[450px] w-full flex items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCards
            key={project.id}
            project={project}
            Icon={project.icon}
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