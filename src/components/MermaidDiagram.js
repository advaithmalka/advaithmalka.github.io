"use client";

import { useEffect, useId, useState } from "react";
import diagramIcons from "@/data/diagram-icons.json";

export default function MermaidDiagram({ chart, label }) {
    const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
    const [svg, setSvg] = useState("");

    useEffect(() => {
        let active = true;
        import("mermaid").then(async ({ default: mermaid }) => {
            mermaid.registerIconPacks([{ name: "project", icons: diagramIcons }]);
            mermaid.initialize({
                startOnLoad: false,
                securityLevel: "strict",
                theme: "base",
                themeVariables: {
                    background: "#111725",
                    primaryColor: "#202b3c",
                    primaryBorderColor: "#60718c",
                    primaryTextColor: "#edf1fa",
                    secondaryColor: "#202b3c",
                    secondaryTextColor: "#edf1fa",
                    tertiaryColor: "#172235",
                    tertiaryTextColor: "#edf1fa",
                    clusterBkg: "#172235",
                    clusterBorder: "#52617a",
                    lineColor: "#8fa5c7",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px"
                },
                flowchart: { htmlLabels: false, curve: "linear", nodeSpacing: 22, rankSpacing: 24, padding: 10 }
            });
            const result = await mermaid.render(`diagram-${id}`, chart);
            if (active) setSvg(result.svg);
        }).catch((error) => console.error("Unable to render project diagram", error));
        return () => { active = false; };
    }, [chart, id]);

    return <div className="lit-card-diagram" role="img" aria-label={label}>
        <div className="lit-card-diagram-kicker">DATA PIPELINE</div>
        {svg ? <div className="lit-card-diagram-flow" dangerouslySetInnerHTML={{ __html: svg }} /> : <div className="lit-card-diagram-flow">eBay + Amazon → JSON → OpenAI → Database</div>}
    </div>;
}
