"use client";
import { useEffect, useState } from "react";

export default function CursorSpotlight() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // RADIUS
    const spotlightRadius = '400px';

    return (
        <div
            className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
            style={{
                background: `radial-gradient(${spotlightRadius} at ${position.x}px ${position.y}px, rgba(19, 80, 107, 0.28), transparent 80%)`, // Blue tint
            }}
        />
    );
}
