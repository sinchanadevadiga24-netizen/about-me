import { skills } from '../data.js';

export default function Skills() {
  return (
    <section className="container section">
      <h1 className="page-title">Skills</h1>
      <div className="grid">
        {skills.map((g) => (
          <div key={g.group} className="card">
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((i) => (
                <li key={i} className="chip">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}