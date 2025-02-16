// Import the badge components
import { HTML, CSS, JS, PHP, SQL, DJANGO, REACT, NODE, TS, GRAPHQL, MONGODB, EXPRESS, TAILWINDCSS, FIREBASE, FLASK, PYTORCH, PYTHON } from './svg/badges';
import Tippy from '@tippyjs/react';

// Define a consistent class for styling the badges
const badgeClassName = 'mt-1 mr-1 float-right';

// Define badge details
const badgeData = [
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
    { id: 'flask', label: 'Flask', Component: FLASK },
    { id: 'python', label: 'Python', Component: PYTHON },
];

// Generate badge components dynamically
export const badgeIdentifiers = badgeData.reduce((acc, { id, label, Component }) => {
    acc[id] = (
        <Tippy key={id} content={label}>
            <span className={badgeClassName}>
                <Component width={30} />
            </span>
        </Tippy>
    );
    return acc;
}, {});