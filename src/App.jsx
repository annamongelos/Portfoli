 import React from "react";
import {
    FiSun,
    FiGlobe,
    FiLinkedin,
    FiGithub,
    FiMail,
    FiDownload,
    FiArrowUpRight,
} from "react-icons/fi";
import { motion } from "framer-motion";
import profilePic from "./assets/profile.jpg";

export default function App() {
    return (
        <div className="flex flex-col bg-[#f4f4f6] text-[#1a1a1a] font-sans min-h-screen">

            {/* MAIN CONTENT */}
            <main className="px-6 py-10">

                {/* NAVBAR */}
                <header className="flex justify-between items-center max-w-5xl mx-auto mb-10">
                    <nav className="flex gap-10 text-lg font-medium">
                        <a href="#home" className="hover:opacity-60 transition">Home</a>
                        <a href="#experience" className="hover:opacity-60 transition">Experiencia</a>
                        <a href="#projects" className="hover:opacity-60 transition">Projectes</a>
                    </nav>
                    <div className="flex gap-4 text-2xl">
                        <button><FiSun /></button>
                        <button><FiGlobe /></button>
                    </div>
                </header>

                {/* HERO SECTION */}
                <motion.section
                    id="home"
                    className="flex flex-col items-center text-center py-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <img
                        src={profilePic}
                        alt="profile"
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 object-cover"

                    />

                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight">
                        Hola, soc l' <span className="text-[#111]">Anna</span>
                    </h1>

                    <span className="inline-block bg-white border px-4 py-1 rounded-full shadow-sm text-sm mb-6">
                        Preparada per a treballar
                    </span>

                    <p className="text-xl leading-relaxed mb-10 text-[#333]">
                        <strong className="text-[#d12d42]">1 any d'experiencia</strong> soc estudiant del grau de Matematiques Computacionals i Analisis de dades.
                       . Tinc experiencia amb C++, Python, SQL, AWS, R.
                    </p>

                    {/* SOCIAL BUTTONS */}
                    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                        <a
                            className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md text-lg"
                            href="https://www.linkedin.com/in/anna-mongelos-amill/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiLinkedin className="text-2xl" /> Linkedin
                        </a>


                        <a className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md text-lg" href="https://github.com/annamongelos">
                            <FiGithub className="text-2xl" /> GitHub
                        </a>

                        <a className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md text-lg" href="#">
                            <FiMail className="text-2xl" /> Email
                        </a>

                        <a className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md text-lg" href="#">
                            <FiDownload className="text-2xl" /> Curriculum Vitae
                        </a>
                    </div>
                </motion.section>

                {/* EXPERIENCE SECTION */}
                <motion.section
                    id="experience"
                    className="max-w-4xl mx-auto mb-32"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-8">Experiencia</h2>

                    {/*<div className="flex flex-col gap-6">*/}
                    <div className="bg-red-500">
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-semibold">Sinergia TIC</h3>
                            <p className="text-[#555] mb-2">Octubre 2025 - Present</p>
                            <p>
                               Treballant amb CRM i SDA.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-2xl font-semibold">Unity Developer</h3>
                            <p className="text-[#555] mb-2">blabla</p>
                            <p>blalba</p>
                        </div>
                    </div>
                </motion.section>

                {/* PROJECTS SECTION */}
                <motion.section
                    id="projects"
                    className="max-w-5xl mx-auto mb-32"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-12">Projectes</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* PROJECT CARD */}
                        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold mb-2">Treball de Fi de Grau</h3>
                            <p className="text-[#555] mb-4">Prediccio de l'alfuencia del Festiva Cruilla.</p>
                            <a href="#" className="flex items-center gap-2 text-[#d12d42] font-medium">
                                View project <FiArrowUpRight />
                            </a>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
                            <p className="text-[#555] mb-4">A short description of the project and its purpose.</p>
                            <a href="#" className="flex items-center gap-2 text-[#d12d42] font-medium">
                                View project <FiArrowUpRight />
                            </a>
                        </div>
                    </div>
                </motion.section>

            </main>

            {/* FOOTER */}
            <footer className="text-center text-[#777] py-10 border-t">
                © {new Date().getFullYear()} Anna Mongelos Amill - All rights reserved.
            </footer>
        </div>
    );
}