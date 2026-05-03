import React, { useState, useEffect, useRef } from 'react';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer logic to detect when footer is on screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of footer is visible
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="border-t border-white/10 py-12 mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-6 font-mono">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="text-white">ADESH</span>
              <span className="text-blue-500">.</span>
            </div>
            <p className="text-white/40 text-sm font-light tracking-wide">
              A passionate developer...
            </p>
          </div>

          {/* Credits Section */}
          <div className="text-center md:text-right">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <p className="text-white/40 text-sm mt-1">
              Thanks fot the <span className="text-blue-500 hover:text-blue-400 cursor-help transition-colors">visit</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}