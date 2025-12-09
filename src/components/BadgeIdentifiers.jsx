import { HTML, CSS, JS, PHP, SQL, DJANGO, REACT, NODE, TS, GRAPHQL, MONGODB, EXPRESS, TAILWINDCSS, FIREBASE, FLASK, PYTORCH, PYTHON, OPENCV } from './svg/badges';
import Tooltip from './Tooltip';

const badgeClassName = 'mt-1 mr-1 float-right';

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
    { id: 'opencv', label: 'OpenCV', Component: OPENCV },

];

export const badgeIdentifiers = badgeData.reduce((acc, { id, label, Component }) => {
    acc[id] = (
        <Tooltip key={id} content={label}>
            <span className={badgeClassName}>
                <Component width={30} />
            </span>
        </Tooltip>
    );
    return acc;
}, {});