import { useMemo, useState } from 'react';
import { projects } from '../data.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  const tags = useMemo(() => ['All', ...new Set(projects.flatMap((p) => p.tags))], []);
  const [active, setActive] = useState('All');

  const shown = active === 'All' ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section className="container section">
      <h1 className="page-title">Projects</h1>
      <div className="filters" role="group" aria-label="Filter projects">
        {tags.map((t) => (
          <button
            key={t}
            className={`filter ${active === t ? 'active' : ''}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}