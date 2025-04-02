"use client"; // Required for Next.js App Router to enable client-side code

import { useState, useEffect } from "react";
import Link from "next/link";
import data from "@/data/project-data.json";
import Card from "@/components/Card";


export default function Home() {
    const [projectCards, setProjectCards] = useState([]);

    const urlsToPing = [
        "https://advaithmalka-nc-calculator-api.hf.space/",
        "https://advaithmalka-cristae-detect-api.hf.space/",
        "https://advaithmalka-mito-detect-api.hf.space/"
    ]

    useEffect(() => {
        // Get up to 3 featured projects
        setProjectCards(
            data
            .filter((_, idx) => idx === 0 || idx === 1 || idx === 3)
            .map((project, idx) => (
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

        urlsToPing.forEach(async (url) => {
            const response = await fetch(url, { method: "GET" });
            console.log(`Pinged ${url} - Status: ${response.status}`);
        });
   
      
    }, []);

 

    return (
        <div className="min-h-screen text-white">
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center py-20 mt-60">
                <h1 className="text-7xl font-bold mb-6">Hi, I'm Advaith Malka</h1>
                <p className="text-2xl max-w-2xl mb-8">
                    I'm a sophomore student at Virginia Tech pursuing a BS in Computer Science focusing on machine learning and data science. Welcome to my personal website, where you can explore my work and learn more about what I do.
                </p>
                <Link href="/projects">
                    <button className="lit-card-btn">
                        See My Projects
                    </button>
                </Link>
            </div>

            {/* Featured Projects Section */}
            <div className="container mx-auto px-6 py-16">
                <h2 className="text-4xl font-semibold text-center mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectCards}
                </div>
            </div>
        </div>
    );
}