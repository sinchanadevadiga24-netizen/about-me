export default function ProjectCard({ project }) {
  return (
    <article className="card project">
      <h3>{project.title}</h3>
      <p className="muted">{project.summary}</p>
      <ul className="chips">
        {project.stack.map((s) => (
          <li key={s} className="chip">
            {s}
          </li>
        ))}
      </ul>
      <div className="project__links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            Code ↗
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live ↗
          </a>
        )}
      </div>
    </article>
  );
}