import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col gap-10 items-center justify-center">

        {/* Heading — smaller on mobile */}
        <div className="text-4xl md:text-7xl font-mono text-center text-white">
          Let's Work Together
        </div>

        {/* Subheading */}
        <div className="text-sm md:text-xl text-white/60 font-mono text-center">
          OPEN FOR ANY KIND OF VACANCY
        </div>

        {/* Email — Wrapped in a mailto link for functionality */}
        <a 
          href="mailto:shah.adesh30@gmail.com"
          className="flex flex-wrap gap-2 justify-center items-center font-mono text-xl md:text-4xl font-bold text-center px-4 text-white hover:text-blue-500 transition-colors duration-300"
        >
          <CgMail className="text-blue-500 flex-shrink-0" />
          <span>shah.adesh30@gmail.com</span>
        </a>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mt-4 text-4xl text-white">
          
          {/* Fixed LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/adesh-shahi-9258882a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
          >
            <FaLinkedin />
          </a>
          
          {/* Fixed GitHub Link */}
          <a
            href="https://github.com/Adeshsc30"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
          >
            <FaGithub />
          </a>
        </div>
<div className="w-full py-20">
      <ContactForm />
    </div>
      </div>
    </div>
  );
};

export default Contact;