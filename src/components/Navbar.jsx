import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Controls mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed text-white font-mono top-6 left-1/2 w-[90%] max-w-4xl -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? "top-4" : "top-6"
        }`}
      >
        <div
          className={`backdrop-blur-md transition-all duration-500 border rounded-2xl px-6 py-4 shadow-2xl
            ${
              isScrolled
                ? "bg-black/40 border-white/20 py-3 shadow-blue-500/10"
                : "bg-white/5 border-white/10"
            }`}
        >
          {/* Top row — logo and hamburger/links */}
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-blue-500 text-lg font-bold tracking-tight cursor-pointer hover:scale-105 transition-transform">
              <a href="/">ADESHSHAHITHAKURI<span>.</span></a>
            </div>

            {/* Desktop links — hidden on mobile */}
            <div className="hidden md:flex justify-between gap-8">
              <a href="/" className="hover:text-blue-400 transition-colors">HOME</a>
              <a href="about" className="hover:text-blue-400 transition-colors">ABOUT</a>
              <a href="projects" className="hover:text-blue-400 transition-colors">PROJECTS</a>
              <a href="contact" className="hover:text-blue-400 transition-colors">CONTACT</a>
            </div>

            {/* Hamburger button — only visible on mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
            >
              {/* Three lines that animate to X when menu is open */}
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}/>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
            </button>

          </div>

          {/* Mobile menu — only visible when hamburger is clicked */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col gap-4 pt-4 pb-2 border-t border-white/10 mt-4">
              
              {/* Added missing <a tags below */}
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-400 transition-colors"
              >
                HOME
              </a>
              
              <a
                href="about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-400 transition-colors"
              >
                ABOUT
              </a>
              
              <a
                href="projects"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-400 transition-colors"
              >
                PROJECTS
              </a>
              
              <a
                href="contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-400 transition-colors"
              >
                CONTACT
              </a>
            </div>
          )}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;