import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS", "javascript", "html","css"
  ];

  const backendSkills = [
    "Django", 
    "Python", 
    "MariaDB", 
    "PostgreSQL", 
    "Java", 
    "Docker", 
    "Linux Administration", 
    "Virtualization"
  ];
  
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="gradient-text">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionné de technologie et innovateur en génie logiciel, je combine une expertise technique approfondie en
              développement full-stack, administration système et programmation bas niveau avec une capacité remarquable à
              concevoir des solutions techniques complexes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-4">
                <li>
                  <strong className="text-lg text-white">School 1337 (Network 42) – Khouribga, Morocco</strong> - 2023 – Present
                </li>
                <li className="ml-4">Advanced Software Engineering Program with hands-on projects</li>
                <li className="ml-4">Mastery of algorithms, system architecture, and design patterns</li>
                <li className="ml-4">Developed problem-solving skills through self-directed learning</li>

                <li>
                  <strong className="text-lg text-white">Polydisciplinary Faculty of Khouribga</strong> - Bachelor's Degree in Mathematical and Computer Sciences – 2020 – 2021
                </li>
                <li className="ml-4">In-depth courses in advanced mathematics, algorithms, and computer architecture</li>
                <li className="ml-4">Mastery of algorithms, system architecture, and design patterns</li>
              </ul>


            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Mathematics Instructor – Braime Rahine Academy 2023{" "}
                  </h4>
                  <ul>
                    <li className="ml-4">Developed a comprehensive mathematics program for students</li>
                    <li className="ml-4">Used innovative teaching methodologies to improve student performance</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};