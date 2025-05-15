import { RevealOnScroll } from "../RevealOnScroll";
import { FtTransc } from "../projects/ft_transc";
import { Cub3d } from "../projects/cub3d";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showVideoCub, setshowVideoCub] = useState(false);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="gradient-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Full-Stack Project: ft_transcendence --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">ft_transcendence</h3>
              <p className="text-gray-400 mb-4">
                Designed a real-time multiplayer gaming platform using Django and React/TypeScript, implementing WebSocket communication and secure user authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Django", "React", "TypeScript", "WebSocket"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setShowVideo(!showVideo)}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2 underline"
                >
                  {showVideo ? "Hide Demo" : "Watch Demo"}
                </button>
              </div>
              {showVideo && <FtTransc />}
            </div>

            {/* <!-- Graphics Project: cub3d --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">cub3d</h3>
              <p className="text-gray-400 mb-4">
                Designed a ray-casting 3D rendering engine with optimized rendering pipeline, texture mapping, and collision detection.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "3D Rendering", "Ray-Casting", "Collision Detection"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setshowVideoCub(!showVideoCub)}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2 underline"
                >
                  {showVideoCub ? "Hide Demo" : "Watch Demo"}
                </button>
              </div>
              {showVideoCub && <Cub3d />}
            </div>
            {/* <!-- System Engineering Project: ft_irc --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">ft_irc</h3>
              <p className="text-gray-400 mb-4">
                Developed a robust IRC server implementing RFC 2812 protocol specifications in C++, handling concurrent connections and complex state management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C++", "IRC", "RFC 2812", "Concurrency"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Nkhou/ft_irc"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* <!-- System Engineering Project: inception --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">inception</h3>
              <p className="text-gray-400 mb-4">
                Architected a containerized production infrastructure using Docker, customized Debian Linux images, and automated deployment workflows.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Docker", "Linux", "Debian", "CI/CD"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Nkhou/inception"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* <!-- System Project: minishell --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">minishell</h3>
              <p className="text-gray-400 mb-4">
                Created a custom shell implementation in C, supporting built-in commands and external program execution.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "Shell", "Linux", "Command Execution"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Sboulal/minishell"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* <!-- System Project: philosopher --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">philosopher</h3>
              <p className="text-gray-400 mb-4">
                Created a multi-threaded simulation of the Dining Philosophers problem, implementing mutex locks and semaphores to prevent deadlocks and resource contention.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "Threads", "Concurrency", "Resource Management"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Nkhou/philosopher"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* <!-- System Project: ft_printf --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">ft_printf</h3>
              <p className="text-gray-400 mb-4">
                Reimplemented the printf function in C from scratch, supporting multiple format specifiers and handling various data types and modifiers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "String Manipulation", "Variadic Functions", "Memory Management"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Nkhou/printf_42/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* <!-- System Project: get_nextline --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">get_next_line</h3>
              <p className="text-gray-400 mb-4">
                Developed a function that reads a line from a file descriptor, with efficient buffer management and handling for multiple file descriptors.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "File I/O", "Memory Management", "Static Variables"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Nkhou/get_next_line_42"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* <!-- System Project: pushswap --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">push_swap</h3>
              <p className="text-gray-400 mb-4">
                Implemented an efficient sorting algorithm using two stacks with a limited set of operations, optimizing for the minimum number of moves.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "Algorithm Design", "Data Structures", "Complexity Optimization"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Nkhou/push_swap"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* <!-- System Security Project: born2beroot --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">born2beroot</h3>
              <p className="text-gray-400 mb-4">
                Configured a secure virtual infrastructure with full system hardening, including LVM, SSH, and UFW.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Linux", "System Hardening", "LVM", "SSH", "UFW"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
              </div>
            </div>


            {/* <!-- Network Project: minitalk --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">minitalk</h3>
              <p className="text-gray-400 mb-4">
                Implemented a reliable client-server communication using UNIX signals with error handling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "UNIX Signals", "Client-Server", "Error Handling"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Nkhou/minitalk"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>



            {/* <!-- Network Project: NetPractice --> */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">NetPractice</h3>
              <p className="text-gray-400 mb-4">
                Implemented advanced network concepts, including subnetting, routing, and TCP/IP configuration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Networking", "Subnetting", "Routing", "TCP/IP"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}