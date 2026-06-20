import { RevealOnScroll } from "../RevealOnScroll";
import profile from "../../assets/najaat.khoudrouf.png";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                    {/* 👤 TEXT */}
                    <div className="text-center md:text-left z-10">
                        <h1 className="gradient-text text-4xl md:text-6xl font-bold mb-4">
                            Hi, I'm Najat Khoudrouf 
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                            Full Stack Developer specialized in{" "}
                            <span className="text-blue-400">React, Django, and DevOps</span>.
                            Trained at <span className="text-blue-400">1337 (42 Network)</span>,
                            I build scalable applications, design RESTful APIs, and deploy systems using Docker & CI/CD.
                        </p>

                        <p className="text-gray-400 mb-8">
                            I’m passionate about clean architecture, performance, and solving real-world problems through modern technologies.
                        </p>

                        <div className="flex justify-center md:justify-start gap-4">
                            <a
                                href="#projects"
                                className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition hover:-translate-y-1 
                                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded-lg font-medium transition 
                                hover:-translate-y-1 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* 🖼️ IMAGE */}
                    <div className="flex justify-center">
                        <div className="relative group">
                            <img
                                src={profile}
                                alt="Najat Khoudrouf"
                                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl 
                                border border-blue-500/20 transform transition duration-500 
                                "
                            />

                            {/* Glow animation */}
                            <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-2xl opacity-0 
                                group-hover:opacity-100 transition duration-500">
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};