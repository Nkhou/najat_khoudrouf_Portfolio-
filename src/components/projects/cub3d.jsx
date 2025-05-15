import { useState, useEffect } from "react";

export const Cub3d = () => {
  // Instead of using error state, let's use an approach that cycles through possible paths
  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const videoPaths = [
    "/cub.mp4",
    "./cub.mp4",
    "../public/cub.mp4",
    "../../public/cub.mp4",
    "/public/cub.mp4",
    "./public/cub.mp4"
  ];
  
  // Try next path if current one fails
  const tryNextPath = () => {
    if (currentPathIndex < videoPaths.length - 1) {
      setCurrentPathIndex(currentPathIndex + 1);
    }
  };
  
  // Add a fallback to iframe embedding if all direct paths fail
  const [useIframeEmbed, setUseIframeEmbed] = useState(false);
  
  useEffect(() => {
    // If we've tried all paths, fall back to iframe
    if (currentPathIndex === videoPaths.length - 1) {
      const timer = setTimeout(() => {
        setUseIframeEmbed(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [currentPathIndex]);
  
  // Render normal video or error state
  return (
    <div className="w-full">
      {currentPathIndex < videoPaths.length && !useIframeEmbed ? (
        <div className="relative">
          <video
            controls
            className="w-full rounded-lg mb-4"
            onError={tryNextPath}
            key={currentPathIndex} // Force re-render on path change
          >
            <source src={videoPaths[currentPathIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="text-center text-xs text-gray-500 mb-2">
            Trying path: {videoPaths[currentPathIndex]}
          </div>
        </div>
      ) : useIframeEmbed ? (
        // Fallback: Try embedding with iframe (works in some environments)
        <div className="w-full mb-4">
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`/cub.mp4`}
              title="Video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="bg-blue-900/20 text-center py-8 rounded-lg mb-4">
          <p className="text-gray-300">Unable to load video</p>
          <p className="text-gray-400 text-sm mt-2">
            Try one of these alternatives:
          </p>
          <div className="mt-4 space-y-2">
            {/* Quick fix options */}
            <button 
              onClick={() => window.open("https://github.com/Nkhou/cub3d", "_blank")}
              className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-300 transition"
            >
              View project on GitHub instead
            </button>
            <div>
              <button
                onClick={() => {
                  setCurrentPathIndex(0);
                  setUseIframeEmbed(false);
                }}
                className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-300 transition"
              >
                Try loading video again
              </button>
            </div>
          </div>
        </div>
      )}
      
      <p className="text-gray-400 mb-4">
        A ray-casting 3D rendering engine with optimized rendering pipeline, texture mapping, and collision detection.
      </p>
      
      <div className="flex justify-between items-center">
        <a
          href="https://github.com/Nkhou/cub3d"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};