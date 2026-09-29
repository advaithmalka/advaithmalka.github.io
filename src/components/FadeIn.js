// Keep content visible on first paint; motion is reserved for interactive surfaces.
export default function FadeIn({ children, className = "" }) {
    return <div className={className}>{children}</div>;
}
