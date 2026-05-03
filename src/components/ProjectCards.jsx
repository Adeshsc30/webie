const ProjectCards = ({ project, style, Icon }) => {
  return (
    <div
      className="absolute w-[280px] h-[360px] cursor-pointer transition-all duration-500 ease-out"
      style={style}
    >
      <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-white/10 rounded-[16px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:scale-105 hover:border-blue-500/50 hover:shadow-[0_12px_48px_rgba(0,102,255,0.3)] transition-all duration-300">
        <div className="flex flex-col h-full">

          {/* Icon Box */}
          <div className="w-14 h-14 rounded-[12px] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
            <Icon className="w-7 h-7 text-blue-500" />
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-semibold mb-2 text-white">
            {project.title}
          </h3>
          <p className="text-white/60 text-sm mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech Tag */}
          <div className="pt-4 border-t border-white/10 mb-4">
            <p className="text-xs text-blue-500 font-medium tracking-wide uppercase">
              {project.tech}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {/* Added the missing <a tag here */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
            >
              Live Demo
            </a>
            
            {/* Added the missing <a tag here */}
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
    </div>
  );
};

export default ProjectCards;