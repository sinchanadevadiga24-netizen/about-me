import { Link } from 'react-router-dom';
import { profile, projects } from '../data.js';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Home() {
  return (
    <>
      <section className="hero container">
        <p className="eyebrow">Hello, I am</p>
        <h1>{profile.name}</h1>
        <h2 className="hero__role">{profile.role}</h2>
        <p className="lead">{profile.tagline}</p>
        <div className="hero__cta">
          <Link to="/projects" className="btn btn--primary">
            View projects
          </Link>
          <Link to="/contact" className="btn">
            Get in touch
          </Link>
          {profile.resumeUrl !== '#' && (
            <a href={profile.resumeUrl} className="btn" download>
              Resume
            </a>
          )}
        </div>
        <p className="muted small">
          {profile.year} · {profile.college}
        </p>
      </section>

      <section className="container section">
        <div className="section__head">
          <h2>Featured projects</h2>
          <Link to="/projects" className="link">
            See all →
          </Link>
        </div>
        <div className="grid">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}