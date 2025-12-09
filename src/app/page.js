"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Card from "@/components/Card";
import SkillSet from "@/components/SkillSet";
import FadeIn from "@/components/FadeIn";
import Tooltip from "@/components/Tooltip";

import projectData from "@/data/project-data.json";
import experienceDataJson from "@/data/experience-data.json";

export default function Home() {
    const projects = projectData;
    const experience = experienceDataJson;

    const urlsToPing = [
        "https://advaithmalka-nc-calculator-api.hf.space/",
        "https://advaithmalka-structai-api.hf.space/",
        "https://advaithmalka-cristae-detect-api.hf.space/",
        "https://advaithmalka-mito-detect-api.hf.space/",
        "https://cop-classifier-api.onrender.com/"
    ];

    useEffect(() => {
        urlsToPing.forEach(async (url) => {
            try {
                const response = await fetch(url, { method: "GET" });
                console.log(`Pinged ${url} - Status: ${response.status}`);
            } catch (e) {
                console.log(`Failed to ping ${url}`);
            }
        });
    }, []);

    return (
        <div className="min-h-screen text-white">
            {/* Hero Section */}
            <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen relative z-10 px-4">
                <FadeIn>
                    <h1 className="text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-sm">
                        Hi, I'm Advaith Malka
                    </h1>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-xl max-w-2xl mb-8 text-slate-300 font-light leading-relaxed mx-auto">
                        I'm a junior at Virginia Tech pursuing a BS in Computer Science focusing on machine learning and data science. Welcome to my personal website, where you can explore my work and learn more about what I do.
                    </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <Link href="#projects">
                        <button className="lit-card-btn px-8 py-3 text-lg font-semibold tracking-wide shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                            See My Projects
                        </button>
                    </Link>
                </FadeIn>
            </section>

            {/* Projects Section */}
            <section id="projects" className="container mx-auto px-6 py-24">
                <FadeIn>
                    <h2 className="text-5xl font-bold text-center mb-16 text-white">Projects</h2>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <FadeIn key={idx} delay={idx * 0.05}>
                            <Card
                                title={project.name}
                                desc={project.description}
                                link={project.link}
                                img={project.img}
                                date={project.date}
                                badges={project.badges.slice().reverse()}
                            />
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="container mx-auto px-6 py-24">
                <div className="mx-4 lg:mx-20 xl:mx-40">
                    {/* Who am I? */}
                    <FadeIn>
                        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                            <div className="flex-1">
                                <h2 className="text-5xl font-bold mb-8 text-stone-200">Who am I?</h2>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Hi! I’m Advaith Malka, a passionate developer with a strong foundation in various programming languages.
                                    Currently, I’m pursuing a Computer Science degree at Virginia Tech.
                                    When I’m not coding, you can find me on the court playing basketball, pickleball, or tennis.
                                </p>
                            </div>
                            <div className="size-[400px] shrink-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl flex items-center justify-center">
                                <img
                                    src="/img/about-photo.png"
                                    alt="Advaith Malka"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Experience */}
                    <FadeIn delay={0.2}>
                        <h3 className="text-5xl font-semibold mb-12 text-white">Experience</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                            {experience.map((exp, index) => (
                                <div key={index} className="bg-slate-900/60 p-8 rounded-xl shadow-xl border border-slate-700/50 backdrop-blur-sm">
                                    <h4 className="text-3xl text-white font-semibold mb-2">{exp.title}</h4>
                                    <p className="text-xl text-blue-400 mb-1">{exp.company}</p>
                                    <p className="text-md text-slate-500 mb-4">{exp.duration}</p>
                                    <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Skills */}
                    <FadeIn delay={0.3}>
                        <h3 className="text-white text-5xl font-semibold mb-8">Skills</h3>
                        <SkillSet />
                    </FadeIn>

                    {/* Get in Touch */}
                    <FadeIn delay={0.4}>
                        <div className="text-center mt-24">
                            <h3 className="text-5xl font-semibold mb-8 text-white">Get in Touch</h3>
                            <div className="flex justify-center gap-8">
                                <Tooltip content="GitHub">
                                    <a
                                        href="https://github.com/AdvaithMalka"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
                                    >
                                        <FaGithub size={60} />
                                    </a>
                                </Tooltip>

                                <Tooltip content="LinkedIn">
                                    <a
                                        href="https://www.linkedin.com/in/advaithmalka"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110"
                                    >
                                        <FaLinkedin size={60} />
                                    </a>
                                </Tooltip>

                                <Tooltip content="Email">
                                    <a
                                        href="mailto:your.email@example.com"
                                        className="text-gray-400 hover:text-red-500 transition duration-300 transform hover:scale-110"
                                    >
                                        <FaEnvelope size={60} />
                                    </a>
                                </Tooltip>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}