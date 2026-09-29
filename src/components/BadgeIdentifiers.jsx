import { HTML, CSS, JS, PHP, SQL, DJANGO, REACT, NODE, TS, GRAPHQL, MONGODB, EXPRESS, TAILWINDCSS, FIREBASE, FLASK, PYTORCH, PYTHON, OPENCV } from './svg/badges';
import Tooltip from './Tooltip';
import { SiSwift, SiApple, SiAmazonwebservices, SiFlask, SiSelenium, SiPandas, SiOpenai, SiPydantic } from 'react-icons/si';


export const badgeData = [
    { id: 'html', label: 'HTML', Component: HTML },
    { id: 'css', label: 'CSS', Component: CSS },
    { id: 'js', label: 'JavaScript', Component: JS },
    { id: 'php', label: 'PHP', Component: PHP },
    { id: 'sql', label: 'SQL', Component: SQL },
    { id: 'django', label: 'Django', Component: DJANGO },
    { id: 'react', label: 'React', Component: REACT },
    { id: 'node', label: 'Node.js', Component: NODE },
    { id: 'ts', label: 'TypeScript', Component: TS },
    { id: 'graphql', label: 'GraphQL', Component: GRAPHQL },
    { id: 'mongodb', label: 'MongoDB', Component: MONGODB },
    { id: 'express', label: 'Express', Component: EXPRESS },
    { id: 'tailwindcss', label: 'TailwindCSS', Component: TAILWINDCSS },
    { id: 'firebase', label: 'Firebase', Component: FIREBASE },
    { id: 'pytorch', label: 'PyTorch', Component: PYTORCH },
    { id: 'flask', label: 'Flask', Component: SiFlask, color: '#dddfe8' },
    { id: 'python', label: 'Python', Component: PYTHON },
    { id: 'opencv', label: 'OpenCV', Component: OPENCV },
    { id: 'swift', label: 'Swift', Component: SiSwift, color: '#f2774a' },
    { id: 'watchkit', label: 'WatchKit', Component: SiApple, color: '#d8dde8' },
    { id: 'ec2', label: 'AWS EC2', Component: SiAmazonwebservices, color: '#ffb34a' },
    { id: 'selenium', label: 'Selenium', Component: SiSelenium, color: '#64bc65' },
    { id: 'pandas', label: 'Pandas', Component: SiPandas, color: '#d0a4ff' },
    { id: 'openai', label: 'OpenAI API', Component: SiOpenai, color: '#9ed1c2' },
    { id: 'pydantic', label: 'Pydantic', Component: SiPydantic, color: '#e886b3' },

];

export function TechnologyBadge({ id }) {
    const badge = badgeData.find((item) => item.id === id);
    if (!badge) return null;
    const Icon = badge.Component;
    return <Tooltip content={badge.label}><span className="technology-badge" style={badge.color ? { color: badge.color } : undefined} role="img" aria-label={badge.label} tabIndex={0}><Icon width={30} /></span></Tooltip>;
}
