// Navbar.jsx
import { useEffect } from "react";

export const Navbar = ({ menuIsopen, setMenuIsopen }) => {
  useEffect(() => {
    document.body.style.overflow = menuIsopen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuIsopen]);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#home" 
            className="font-mono text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white truncate max-w-[140px] xs:max-w-[160px] sm:max-w-[200px] md:max-w-none"
          >
            <span className="text-blue-500">najat khoudrouf</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer xl:hidden hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMenuIsopen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuIsopen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10 text-sm lg:text-base">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10 text-sm lg:text-base">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10 text-sm lg:text-base">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10 text-sm lg:text-base">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`xl:hidden fixed inset-0 z-30 transition-all duration-300 ${
        menuIsopen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuIsopen(false)}
        />
        
        <div className={`absolute top-16 left-0 right-0 bg-[rgba(10,10,10,0.95)] backdrop-blur-lg border-b border-white/10 transform transition-transform duration-300 ${
          menuIsopen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="flex flex-col py-2 sm:py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <a href="#home" className="text-gray-300 hover:text-white hover:bg-white/10 transition-colors px-4 sm:px-6 py-3 sm:py-4 border-b border-white/5 text-sm sm:text-base"
              onClick={() => setMenuIsopen(false)}>
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white hover:bg-white/10 transition-colors px-4 sm:px-6 py-3 sm:py-4 border-b border-white/5 text-sm sm:text-base"
              onClick={() => setMenuIsopen(false)}>
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white hover:bg-white/10 transition-colors px-4 sm:px-6 py-3 sm:py-4 border-b border-white/5 text-sm sm:text-base"
              onClick={() => setMenuIsopen(false)}>
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white hover:bg-white/10 transition-colors px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base"
              onClick={() => setMenuIsopen(false)}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};