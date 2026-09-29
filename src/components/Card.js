"use client";
import Image from "next/image";
import { TechnologyBadge } from "./BadgeIdentifiers";
import MermaidDiagram from "./MermaidDiagram";
import OneRepPreview from "./OneRepPreview";
import "@/app/assets/css/Card.scss";
import "@/app/assets/css/OneRepPreview.scss";

export default function Card({ title, desc, date, img, preview, diagram, link, badges = [], style }) {
    const [month, , year] = date.split("/");
    const monthLabel = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][Number(month) - 1];
    const illuminate = (event) => {
        if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    };
    return (
        <article className="lit-card glass-surface" style={style} onPointerMove={illuminate}>
            <div className="lit-card-image-wrap">
                {diagram ? <MermaidDiagram chart={diagram} label={`${title} pipeline`} /> : preview === "onerep" ? <OneRepPreview /> : <Image src={`/img/${img}`} alt={`${title} preview`} className={`lit-card-img${img.endsWith(".svg") ? " lit-card-img-contained" : ""}`} width={1000} height={1000} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />}
            </div>
            <div className="lit-card-body">
                <div className="lit-card-heading"><h3 className="lit-card-title">{title}</h3><div className="project-badges">{badges.slice().reverse().map((badge) => <TechnologyBadge key={badge} id={badge} />)}</div></div>
                <p className="lit-card-text">{desc}</p>
                <div className="lit-card-meta"><time dateTime={`20${year}-${month.padStart(2, "0")}`}>{monthLabel} 20{year}</time></div>
                <a className="lit-card-view quiet-button" href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} (opens in a new tab)`}>View</a>
            </div>
        </article>
    );
}
