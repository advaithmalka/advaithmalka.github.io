"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Tooltip({ children, content }) {
    const id = useId();
    const trigger = useRef(null);
    const tooltip = useRef(null);
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState(null);

    useLayoutEffect(() => {
        if (!visible) return;
        const update = () => {
            const anchor = trigger.current.getBoundingClientRect();
            const label = tooltip.current.getBoundingClientRect();
            const left = Math.max(8, Math.min(anchor.left + anchor.width / 2 - label.width / 2, window.innerWidth - label.width - 8));
            const above = anchor.top >= label.height + 16;
            setPosition({ left, top: above ? anchor.top - label.height - 8 : anchor.bottom + 8, arrow: anchor.left + anchor.width / 2 - left, above });
        };
        update();
        window.addEventListener("scroll", update, true);
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update, true);
            window.removeEventListener("resize", update);
        };
    }, [visible]);

    const hide = () => { setVisible(false); setPosition(null); };
    return (
        <span ref={trigger} className="tooltip-trigger" aria-describedby={visible ? id : undefined} onPointerEnter={(event) => { if (event.pointerType === "mouse") setVisible(true); }} onPointerLeave={hide} onFocus={() => setVisible(true)} onBlur={hide} onKeyDown={(event) => { if (event.key === "Escape") hide(); }}>
            {children}
            {visible && createPortal(
                <span ref={tooltip} id={id} role="tooltip" className={`icon-tooltip ${position?.above ? "is-above" : "is-below"}`} style={{ left: position?.left ?? 0, top: position?.top ?? 0, visibility: position ? "visible" : "hidden", "--tooltip-arrow": `${position?.arrow ?? 0}px` }}>{content}</span>,
                document.body
            )}
        </span>
    );
}
