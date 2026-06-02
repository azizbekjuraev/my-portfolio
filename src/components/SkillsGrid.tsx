import React from 'react';

export const SkillsGrid: React.FC = () => {
  const tech = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue', 'Node.js', 'Go', 'TanStack Query'];
  const infra = ['AWS Lightsail', 'GitHub Actions', 'CI/CD', 'Docker', 'Git'];
  const extra = ['Architecture', 'Web performance', 'Offline-first', 'Project management'];
  const langs = [
    { n: 'Uzbek', lvl: 'Native' },
    { n: 'English', lvl: 'C1' },
    { n: 'Korean', lvl: 'Intermediate' },
    { n: 'Russian', lvl: 'Intermediate' },
  ];
  return (
    <section id="skills" className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="h2">Skills &amp; stack</span>
          <span className="idx">IELTS 6.5 · SKA 408/800</span>
        </div>
        <div className="skills">
          <div className="skill-cell">
            <div className="k">Technologies</div>
            <div className="chips">{tech.map(s => <span className="chip" key={s}>{s}</span>)}</div>
          </div>
          <div className="skill-cell">
            <div className="k">Infrastructure</div>
            <div className="chips">{infra.map(s => <span className="chip" key={s}>{s}</span>)}</div>
          </div>
          <div className="skill-cell">
            <div className="k">Additional</div>
            <div className="chips">{extra.map(s => <span className="chip" key={s}>{s}</span>)}</div>
          </div>
          <div className="skill-cell">
            <div className="k">Languages</div>
            <div>{langs.map(l => (
              <div className="lang" key={l.n}><span className="n">{l.n}</span><span className="lvl">{l.lvl}</span></div>
            ))}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
