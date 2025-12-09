"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-12">
            <div className="container mx-auto px-6">
                <p className="text-lg font-semibold text-white">&copy; {new Date().getFullYear()} Advaith Malka.</p>

                {/* Contact Icons */}
                {/* <div className="flex justify-center gap-6 mt-4">
                    <a
                        href="https://github.com/AdvaithMalka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-300"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/advaithmalka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition duration-300"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="mailto:your.email@example.com"
                        className="text-gray-400 hover:text-red-500 transition duration-300"
                    >
                        <FaEnvelope size={30} />
                    </a>
                </div> */}
            </div>
        </footer>
    );
}
