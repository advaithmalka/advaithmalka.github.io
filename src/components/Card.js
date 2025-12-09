"use client";
import Image from "next/image";
import "@/app/assets/css/Card.scss";
import { badgeIdentifiers } from "./BadgeIdentifiers";;
// import Tooltip from "./Tooltip";

const Card = ({ title, desc, date, img, link, badges, style }) => {
    const allBadges = badges.map((badge) => badgeIdentifiers[badge]);

    return (
        <div className="col-lg-4 col-md-6">
            <div className="lit-card my-4" style={style}>
                <Image
                    src={`/img/${img}`}
                    alt="Project"
                    className="lit-card-img"
                    width={1000}
                    height={1000}
                />
                <div className="lit-card-body !pt-1">
                    <div className="flex justify-between items-start mb-1">
                        <h1 className="lit-card-title text-blue-400 f-inter m-0 mt-2">{title}</h1>
                        <div className="flex flex-wrap justify-end relative z-10 -mr-6">
                            {allBadges}
                        </div>
                    </div>
                    <p className="lit-card-text mb-4 text-stone-400">{desc}</p>
                    <p className="fs-13 lit-card-date text-white/80">{date}</p>
                    <a target="_blank" rel="noopener noreferrer" href={link} className="text-decoration-none">
                        <button className="lit-card-btn router-link">View</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;