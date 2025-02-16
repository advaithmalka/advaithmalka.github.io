"use client"; // Required if this component uses hooks later

import Image from "next/image"; // Next.js optimized image
import "@/app/assets/css/Card.scss"; // Ensure the path is correct
import { badgeIdentifiers } from "./BadgeIdentifiers";; // Adjusted path to components
import "tippy.js/dist/tippy.css";

const Card = ({ title, desc, date, img, link, badges, style }) => {
    const allBadges = badges.map((badge) => badgeIdentifiers[badge]);

    return (
        <div className="col-lg-4 col-md-6">
            <div className="lit-card my-4 bg-gray-800" style={style}>
                    <Image
                        src={`/img/${img}`} 
                        alt="Project"
                        className="lit-card-img"
                        width={1000}
                        height={1000}
                    />
                {allBadges}
                <div className="lit-card-body ">
                    <h1 className="lit-card-title text-blue-400 mb-3 f-inter">{title}</h1>
                    <p className="lit-card-text mb-4 text-stone-400">{desc}</p>
                    <p className="fs-13 lit-card-date text-white">{date}</p>
                    <a target="_blank" rel="noopener noreferrer" href={link} className="text-decoration-none">
                        <button className="lit-card-btn router-link">View</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;