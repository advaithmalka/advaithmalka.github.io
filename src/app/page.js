"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Card from "@/components/Card";
import SkillSet from "@/components/SkillSet";
import FadeIn from "@/components/FadeIn";

import projectData from "@/data/project-data.json";
import experienceDataJson from "@/data/experience-data.json";

const urlsToPing = [
    "https://advaithmalka-nc-calculator-api.hf.space/",
    "https://advaithmalka-structai-api.hf.space/",
    "https://advaithmalka-cristae-detect-api.hf.space/",
    "https://advaithmalka-mito-detect-api.hf.space/",
    "https://cop-classifier-api.onrender.com/",
    "https://advaithmalka-traffic-sim.hf.space/"
];

export default function Home() {
    const projects = projectData;
    const experience = experienceDataJson;

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
        <main className="min-h-screen portfolio">
            <section id="home" className="hero flex flex-col items-center justify-center text-center min-h-screen relative px-6">
                <FadeIn>
                    <p className="eyebrow hero-eyebrow">SOFTWARE ENGINEERING · APPLIED AI</p>
                    <h1>Advaith Malka</h1>
                    <p className="hero-description">Software engineer building<br />AI systems and products.</p>
                    <p className="hero-meta">Virginia Tech <span aria-hidden="true">·</span> Computer Science</p>
                    <div className="hero-actions">
                        <Link href="#projects" className="quiet-button">Explore my work <span aria-hidden="true">↓</span></Link>
                        <a href="/advaith-resume-2026-3.pdf" target="_blank" rel="noopener noreferrer" className="text-link">View resume <span aria-hidden="true">↗</span></a>
                    </div>
                </FadeIn>
                <a href="#projects" className="hero-scroll" aria-label="Scroll to projects"><span aria-hidden="true">↓</span></a>
            </section>

            {/* Projects Section */}
            <section id="projects" className="container mx-auto px-6 py-24">
                <FadeIn>
                    <div className="section-heading"><h2>Projects</h2></div>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <FadeIn key={idx}>
                            <Card
                                title={project.name}
                                desc={project.description}
                                link={project.link}
                                img={project.img}
                                preview={project.preview}
                                diagram={project.diagram}
                                date={project.date}
                                badges={project.badges}
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
                                <h2 className="about-title">A little about me.</h2>
                                <p className="about-copy">
                                    Hi! I’m Advaith Malka, a Computer Science senior at Virginia Tech focused on
                                    machine learning and AI systems. I’ve built everything from fine-tuned LLMs to
                                    computer vision pipelines, and I’ve shipped production AI tools at Collins Aerospace (RTX).
                                    When I’m not coding, you can find me on the court playing basketball, pickleball, or tennis.
                                </p>
                            </div>
                            <div className="about-portrait shrink-0 overflow-hidden flex items-center justify-center">
                                <Image
                                    width={400}
                                    height={400}
                                    sizes="(max-width: 767px) 280px, (max-width: 1100px) 300px, 400px"
                                    src="/img/about-photo.png"
                                    alt="Advaith Malka"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Experience */}
                    <FadeIn>
                        <div id="experience" className="section-heading"><h3>Where I’ve worked.</h3></div>
                        <div className="experience-list glass-surface">
                            {experience.map((exp, index) => (
                                <div key={index} className="experience-row">
                                    <div className="experience-summary">
                                    <h4 className="experience-role">{exp.title}</h4>
                                    <p className="experience-company">{exp.link ? <a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.company} <span aria-hidden="true">↗</span></a> : exp.company}</p>
                                    <p className="experience-location">{exp.location}</p>
                                    <p className="experience-date">{exp.duration}</p>
                                    </div>
                                    <ul className="experience-details">
                                        {Array.isArray(exp.description) ? (
                                            exp.description.map((bullet, i) => (
                                                <li key={i} >
                                                    {bullet}
                                                </li>
                                            ))
                                        ) : (
                                            <li >
                                                {exp.description}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Skills */}
                    <FadeIn>
                        <div id="skills" className="section-heading"><h3>Skills</h3></div>
                        <SkillSet />
                    </FadeIn>

                    <FadeIn>
                        <div id="contact" className="contact-panel glass-surface">
                            <p className="eyebrow">LET’S CONNECT</p>
                            <div className="contact-heading"><h3>Have something<br /><em>interesting</em> in mind?</h3><a href="mailto:advaithmalka@vt.edu" className="quiet-button">Get in touch <span aria-hidden="true">↗</span></a></div>
                            <div className="contact-links">
                                <a href="https://github.com/AdvaithMalka" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                                <a href="https://www.linkedin.com/in/advaithmalka" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                                <a href="mailto:advaithmalka@vt.edu">Email ↗</a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
