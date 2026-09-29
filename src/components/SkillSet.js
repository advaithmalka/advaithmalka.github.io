import { HTML, CSS, JS, SQL, PYTHON, JAVA, C, DJANGO, REACT, NODE, MONGODB, SASS, NUMPY, PANDAS, TAILWINDCSS, JAKARTA, PYTORCH } from "./svg/badges";

const categories = [
    { title: "Languages", items: [["Python", PYTHON], ["Java", JAVA], ["C", C], ["HTML", HTML], ["CSS", CSS], ["JavaScript", JS], ["SQL", SQL]] },
    { title: "Frameworks & Libraries", items: [["PyTorch", PYTORCH], ["NumPy", NUMPY], ["Pandas", PANDAS], ["JakartaEE", JAKARTA], ["React", REACT], ["Django", DJANGO], ["Node.js", NODE], ["MongoDB", MONGODB], ["SASS", SASS], ["Tailwind CSS", TAILWINDCSS]] },
];

export default function SkillSet() {
    return (
        <div className="skills-list">
            {categories.map(({ title, items }) => (
                <div className="skill-category" key={title}>
                    <h4>{title}</h4>
                    <ul>{items.map(([name, Icon]) => (
                        <li className="skill-item" key={name}>
                            <div className="skill-icon" aria-hidden="true"><Icon width={80} height={80} /></div>
                            <span>{name}</span>
                        </li>
                    ))}</ul>
                </div>
            ))}
        </div>
    );
}
