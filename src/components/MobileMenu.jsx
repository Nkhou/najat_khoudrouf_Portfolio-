import { useEffect } from "react";

export const MobileMenu = ({ menuIsopen, setMenuIsopen }) => {
  return (
    <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
      transition-all duration-300 ease-in-out lg:hidden
      ${menuIsopen ? "h-screen opacity-100" : "h-0 opacity-0 pointer-events-none"}
    `}>
      {/* Close button - increased size and padding for better touch target */}
      <button 
        onClick={() => setMenuIsopen(false)} 
        className="absolute top-4 right-4 text-white text-4xl p-2 focus:outline-none cursor-pointer"
      >
        &times;
      </button>
      
      {/* Navigation links - improved spacing and sizing */}
      <div className="flex flex-col items-center space-y-8 mt-12 w-full px-4">
        <a 
          href="#home" 
          className="text-gray-300 hover:text-white transition-colors text-xl w-full text-center py-2"
          onClick={() => setMenuIsopen(false)}
        >
          <span className="inline-block mr-2">🏠</span> Home
        </a>
        <a 
          href="#about" 
          className="text-gray-300 hover:text-white transition-colors text-xl w-full text-center py-2"
          onClick={() => setMenuIsopen(false)}
        >
          <span className="inline-block mr-2">👤</span> About
        </a>
        <a 
          href="#projects" 
          className="text-gray-300 hover:text-white transition-colors text-xl w-full text-center py-2"
          onClick={() => setMenuIsopen(false)}
        >
          <span className="inline-block mr-2">💼</span> Projects
        </a>
        <a 
          href="#contact" 
          className="text-gray-300 hover:text-white transition-colors text-xl w-full text-center py-2"
          onClick={() => setMenuIsopen(false)}
        >
          <span className="inline-block mr-2">✉️</span> Contact
        </a>
      </div>
    </div>
  );
};