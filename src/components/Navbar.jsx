import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={`fixed text-white font-mono top-6 left-1/2 w-[90%] max-w-4xl -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled ? "top-4" : "top-6"}`}
      >
        <div
          className={`backdrop-blur-md transition-all duration-500 border rounded-2xl px-8 py-4 flex items-center justify-between shadow-2xl
                         ${
                           isScrolled
                             ? "bg-black/40 border-white/20 py-3 shadow-blue-500/10"
                             : "bg-white/5 border-white/10"
                         }`}
        >
          <div className="text-blue-500 text-xl font-bold tracking-tight cursor-pointer hover:scale-105 transition-transform">
           <a href="/">ADESHSHAHITHAKURI<span className="">.</span></a> 
          </div>
          <div className="flex justify-between gap-8">
            <div><a href="/">HOME</a></div>
            <div><a href="about">ABOUT</a></div>
            <div><a href="projects">PROJECTS</a></div>
            <div><a href="contact">CONTACT</a></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
