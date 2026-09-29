"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [["projects", "Work"], ["about", "About"], ["experience", "Experience"]];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const update = () => {
            setScrolled(window.scrollY > 40);
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
                setActiveSection("");
                return;
            }
            const sections = ["home", "projects", "about", "experience", "skills", "contact"];
            let current = "home";
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element && element.getBoundingClientRect().top <= 180) current = id;
            });
            setActiveSection(current === "skills" || current === "contact" ? "" : current);
        };
        const closeOnEscape = (event) => { if (event.key === "Escape") setOpen(false); };
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("keydown", closeOnEscape);
        update();
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, []);

    return (
        <nav aria-label="Main navigation" className={`site-nav glass-surface ${scrolled ? "is-scrolled" : ""}`}>
            <Link href="#home" className="nav-home" aria-label="Home" aria-current={activeSection === "home" ? "location" : undefined} onClick={() => setOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" /></svg>
            </Link>
            <button className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}> {open ? "Close ×" : "Menu ☰"}</button>
            <div id="navigation-links" className={`nav-links ${open ? "is-open" : ""}`}>
                {links.map(([id, label]) => (
                    <Link key={id} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined} onClick={() => setOpen(false)}>{label}</Link>
                ))}
                <a href="/advaith-resume-2026-3.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Resume <span aria-hidden="true">↗</span></a>
            </div>
        </nav>
    );
}
