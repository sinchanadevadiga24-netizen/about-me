import { about, education, profile } from '../data.js';

export default function About() {
  return (
    <section className="container section">
      <h1 className="page-title">About me</h1>
      <div className="two-col">
        <div>
          {about.map((p, i) => (
            <p key={i} className="lead-sm">
              {p}
            </p>
          ))}
          <p className="muted small">📍 {profile.location}</p>
        </div>

        <div>
          <h2 className="h3">Education</h2>
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.title} className="timeline__item">
                <span className="timeline__period">{e.period}</span>
                <h3>{e.title}</h3>
                <p className="muted">{e.place}</p>
                <p className="small">{e.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}