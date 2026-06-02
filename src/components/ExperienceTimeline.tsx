import React from 'react';

const EXPERIENCE = [
  { when: '01 Apr 2025 — Present', now: true, co: 'KEFA', role: 'Middle Frontend Engineer',
    desc: "Korea Environment Facility Analysis. Build and maintain Flonit, KEFA's air-pollutant emission dashboard for industrial clients in South Korea. Own AWS infra and CI/CD across three projects." },
  { when: '01 Jul 2024 — 01 Apr 2025', co: 'The Ad Tech', role: 'Frontend Engineer',
    desc: 'Built sofilm.uz, an LMS connecting students and teachers, with Next.js end to end. Shipped student + admin panels, Lexical authoring, and real-time chat on WebSockets.' },
  { when: '01 Oct 2023 — 01 Jun 2024', co: 'Octopos', role: 'Frontend Engineer',
    desc: 'Built an offline-first restaurant POS live in Namangan and Seoul. Three dashboards (waiter, kitchen, admin) on a shared codebase. React + TanStack Query against a Go backend.' },
  { when: '01 Jun 2023 — 01 Sep 2023', co: 'Scientech Solutions', role: 'Intern Frontend Engineer',
    desc: "Developed startupbase.uz, Uzbekistan's startup investment platform, with React.js and Redux Toolkit. Built a dashboard for users and admins; added unit tests and SEO." },
];

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="h2">Experience</span>
          <span className="idx">2023 — PRESENT</span>
        </div>
        {EXPERIENCE.map((e, i) => (
          <div className="exp-row" key={i}>
            <div className="exp-when">
              {e.now ? <span className="now">{e.when}</span> : e.when}
            </div>
            <div>
              <div className="exp-co">{e.co}</div>
              <div className="exp-role">{e.role}</div>
              <p className="exp-desc">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
