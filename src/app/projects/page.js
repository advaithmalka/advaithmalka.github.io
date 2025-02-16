"use client"; // Required for Next.js App Router to enable client-side code

import { useEffect, useState } from "react";
import Card from "@/components/Card";
import data from "@/data/project-data.json";

export default function Projects() {
    const [projectCards, setProjectCards] = useState([]);
    const [bgPosition, setBgPosition] = useState("0px 0px");

    // Handle scroll event and set background position dynamically
    useEffect(() => {
        document.title = "Projects";
        const handleScroll = () => {
            // Update background position only if the window width is large enough
            if (window.matchMedia("(min-width: 1000px)").matches) {
                setBgPosition(`0px ${Math.round(window.scrollY * -0.65)}px`);
            }
        };

        // Set initial project cards
        setProjectCards(
            data.reverse().map((project, idx) => (
                <Card
                    key={idx}
                    title={project.name}
                    desc={project.description}
                    link={project.link}
                    img={project.img}
                    date={project.date}
                    badges={project.badges.slice().reverse()}
                />
            ))
        );

        // Attach the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Background section with parallax effect */}
            <div
                className="h-[370px] bg-cover bg-center text-center text-white flex items-center"
                style={{
                    backgroundImage: `url(/img/project-backdrop.jpg)`,
                    backgroundPosition: bgPosition,
                }}
            >
                <div className="mx-auto">
                    <h1 className="text-7xl my-6">Projects</h1>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectCards}
                </div>
            </div>
        </>
    );
}