import { useEffect } from "react";

export const Navbar = ({ menuIsopen, setMenuIsopen }) => {
  useEffect(() => {
    document.body.style.overflow = menuIsopen ? "hidden" : "";
  }, [menuIsopen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - slightly smaller on very small screens */}
          <a href="#home" className="font-mono text-lg sm:text-xl font-bold text-white truncate max-w-[180px] sm:max-w-none">
            <span className="text-blue-500">najat khoudrouf</span>
          </a>

          {/* Mobile menu button - slightly bigger touch target */}
          <div
            className="w-12 h-12 flex items-center justify-center cursor-pointer z-40 lg:hidden"
            onClick={() => setMenuIsopen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors px-4">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors px-4">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors px-4">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors px-4">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};