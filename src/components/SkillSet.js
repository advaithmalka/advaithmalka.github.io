import React from "react";
import {
    HTML, CSS, JS, SQL, PYTHON, JAVA, C, 
    DJANGO, REACT, NODE, MONGODB, SASS, NUMPY, PANDAS, TAILWINDCSS, JAKARTA, PYTORCH
} from "./svg/badges"; 

const SkillSet = () => {
    const skills = [
        { 
            title: "Languages", 
            items: [PYTHON, JAVA, C, HTML, CSS, JS, SQL],
            names: ["Python", "Java", "C", "HTML", "CSS", "JavaScript", "SQL"]
        },
        { 
            title: "Frameworks & Libraries", 
            items: [PYTORCH, NUMPY, PANDAS, JAKARTA, REACT, DJANGO, NODE, MONGODB, SASS, TAILWINDCSS],
            names: ["PyTorch", "NumPy", "Pandas", "JakartaEE", "React", "Django", "Node.js", "MongoDB", "SASS", "Tailwind CSS"]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {skills.map((category, idx) => (
                <div key={idx} className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
                    <h4 className="text-2xl font-semibold mb-4 text-white">{category.title}</h4>
                    <div className="flex flex-wrap justify-center gap-6">
                        {category.items.map((Skill, i) => (
                            <div key={i} className="flex flex-col items-center w-24">
                                <div className="flex justify-center w-20 h-20"> {/* Ensures proper alignment */}
                                    <Skill width={80} height={80} />
                                </div>
                                <p className="text-white text-md mt-2">{category.names[i]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillSet;