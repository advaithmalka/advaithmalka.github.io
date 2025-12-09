"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "projects", "about"];
            const scrollPos = window.scrollY + 200; // Offset for navbar

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPos && (element.offsetTop + element.offsetHeight) > scrollPos) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial state
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full text-white shadow-md z-50 text-xl bg-slate-900/80 backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Home Icon */}
                <Link href="#home">
                    <div className="cursor-pointer">
                        <svg className={`duration-200 hover:fill-blue-500 ${activeSection === "home" ? "fill-blue-400" : "fill-white"
                            }`} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            height="40px" viewBox="0 0 495.398 495.398"
                            xmlSpace="preserve">
                            <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
                                    v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
                                    c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
                                    c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
                            <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
                                    c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
                                    c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
                        </svg>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link
                        href="#projects"
                        className={`hover:text-blue-500 transition duration-200 ${activeSection === "projects" ? "text-blue-400 border-b-2 border-blue-400" : ""
                            }`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="#about"
                        className={`hover:text-blue-500 transition duration-200 ${activeSection === "about" ? "text-blue-400 border-b-2 border-blue-400" : ""
                            }`}
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}