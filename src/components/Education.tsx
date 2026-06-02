import React from 'react';

export const Education: React.FC = () => {
  const certs = ['IELTS 6.5', 'Duolingo 125', 'SKA 408/800', 'Udemy'];
  return (
    <section id="education" className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="h2">Education</span>
          <span className="idx">SEOUL, SOUTH KOREA</span>
        </div>
        <div className="exp-row">
          <div className="exp-when">01 Sep 2017 — 25 Feb 2022</div>
          <div>
            <div className="exp-co">Sejong University</div>
            <div className="exp-role">Bachelor's Degree · Seoul, South Korea</div>
            <div className="edu-certs">
              {certs.map(c => <span className="tag" key={c}>{c}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
