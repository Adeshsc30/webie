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
  const [isExpanded, setIsExpanded] = useState(false)

  // Check if screen is mobile
  const isMobile = window.innerWidth < 768

  const getStackedStyles = (index) => ({
    transform: `rotate(${(index - 1) * 4}deg) translateY(${index * 8}px) scale(${1 - index * 0.02})`,
    zIndex: projects.length - index,
    opacity: 1,
  })

  const getExpandedStyles = (index) => {
    const xOffset = (index - 0.5) * 320
    return {
      transform: `translate(${xOffset}px, 0px) rotate(0deg) scale(1)`,
      zIndex: 1,
      opacity: 1,
    }
  }

  // On mobile — show simple grid, no animation
  if (isMobile) {
    return (
      <section className="w-full flex flex-col items-center gap-6 pt-16 pb-10">
        <h2 className="text-3xl font-bold font-mono text-center">Projects</h2>
        <div className="flex flex-col gap-6 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 rounded-[16px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            >
              <div className="flex flex-col gap-4">

                {/* Icon */}
                <div className="w-12 h-12 rounded-[12px] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-blue-500" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-white/60 text-sm">{project.description}</p>

                {/* Tech */}
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-blue-500 font-medium tracking-wide uppercase">
                    {project.tech}
                  </p>
                </div>

                {/* Links - Fixed opening <a> tags here */}
                <div className="flex gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
                  >
                    Live Demo
                  </a>
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition duration-200"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  // On desktop — show original stacked animation
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