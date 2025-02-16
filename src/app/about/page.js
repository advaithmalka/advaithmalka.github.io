"use client"; // Required for client-side rendering in Next.js 13

import { useEffect, useState } from "react";
import SkillSet from "@/components/SkillSet";
import data from "@/data/experience-data.json";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importing icons
import Tippy from "@tippyjs/react";

export default function About() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [experienceData, setExperienceData] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        setExperienceData(
            data.map((experience, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-xl">
                    <h4 className="text-3xl text-white font-semibold">{experience.title}</h4>
                    <p className="text-xl text-gray-400">{experience.company}</p>
                    <p className="text-md text-gray-500">{experience.duration}</p>
                    <p className="text-gray-300 mt-4">{experience.description}</p>
                </div>
            ))
        );

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Parallax Background Section */}
            <div
                className="h-[370px] bg-cover bg-center text-center text-white flex items-center"
                style={{
                    backgroundImage: `url(/img/about-backdrop.jpg)`,
                    backgroundPosition: `0px ${Math.round(scrollPosition * -0.65)}px`,
                }}
            >
                <div className="mx-auto">
                    <h1 className="text-7xl my-6">About Me</h1>
                </div>
            </div>

            {/* Information Section */}
            <div className="container mx-auto px-auto">
                <div className="py-12 mx-10 lg:mx-60">
                    {/* Who am I? Section */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Text Content */}
                        <div className="flex-1">
                            <h2 className="text-5xl font-bold mb-6 text-stone-200">Who am I?</h2>
                            <p className="text-xl text-gray-300">
                                Hi! I’m Advaith Malka, a passionate developer with a strong foundation in various programming languages. 
                                Currently, I’m pursuing a Computer Science degree at Virginia Tech. 
                                When I’m not coding, you can find me on the court playing basketball, pickleball, or tennis.
                            </p>
                        </div>

                        {/* Profile Image */}
                        <div className="size-[500] rounded-full overflow-hidden border-4 border-blue-500 shadow-lg flex items-center justify-center">
                            <img
                                src="/img/about-photo.png"
                                alt="Advaith Malka"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Experience Section */}
                    <h3 className="text-5xl font-semibold mt-10 mb-6 text-white">Experience</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {experienceData}
                    </div>

                    <h3 className="text-white text-5xl font-semibold mt-10 mb-4">Skills</h3>
                    <SkillSet />

                    {/* Get in Touch Section */}
                    <h3 className="text-5xl font-semibold mt-10 my-4 text-white">Get in Touch</h3>
                    <div className="flex justify-center gap-6 mt-4">
                        <Tippy content="GitHub">
                            <a
                                href="https://github.com/AdvaithMalka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-300"
                            >
                                <FaGithub size={70} />
                            </a>
                        </Tippy>

                        <Tippy content="LinkedIn">
                            <a
                                href="https://www.linkedin.com/in/advaithmalka"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition duration-300"
                            >
                                <FaLinkedin size={70} />
                            </a>
                        </Tippy>

                        <Tippy content="Email">
                            <a
                                href="mailto:your.email@example.com"
                                className="text-gray-400 hover:text-red-500 transition duration-300"
                            >
                                <FaEnvelope size={70} />
                            </a>
                        </Tippy>
                    </div>
                </div>
            </div>
        </>
    );
}