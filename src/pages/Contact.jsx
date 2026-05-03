import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="text-7xl font-mono">Let's Work Together</div>
        <div className="text-xl text-white/60 font-mono">
          OPEN FOR ANY KIND OF VACANCY
        </div>
        <div className="flex gap-1 justify-center items-center font-mono text-4xl font-bold">
          <CgMail className="text-blue-500" />
          shah.adesh30@gmail.com
        </div>
        <div className="flex justify-center gap-6 mt-4 text-4xl">
          <a
            href="https://www.linkedin.com/in/adesh-shahi-9258882a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Adeshsc30"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
