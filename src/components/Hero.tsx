import React from 'react';
import { Button } from './Button';
import { Terminal } from './Terminal';

export const Hero: React.FC = () => {
  return (
    <header id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-main">
          <span className="kicker">
            <span className="line"></span>
            <span className="mono-label">Frontend Engineer — React · Next.js · TypeScript</span>
          </span>
          <h1 className="display hero-title">
            I build production<br />frontends that<br />survive the deploy.
          </h1>
          <p className="hero-sub body-lg">
            Middle frontend engineer with ~3 years shipping React, Next.js and TypeScript —
            plus the AWS infrastructure and CI/CD pipelines that keep those apps alive
            after launch. Happy to go one layer deeper into the API when it makes the
            frontend dramatically faster.
          </p>
          <div className="hero-cta">
            <Button variant="primary" href="#work" icon="arrow-up-right">See selected work</Button>
            <Button variant="secondary" href="#contact">Get in touch</Button>
          </div>
        </div>
        <div className="hero-side">
          <Terminal />
        </div>
      </div>
      <div className="wrap">
        <div className="hero-foot">
          <div className="stat"><div className="n">~3 yrs</div><div className="l">Shipping production</div></div>
          <div className="stat"><div className="n">4</div><div className="l">Products shipped</div></div>
          <div className="stat"><div className="n">C1</div><div className="l">English · +KO / RU</div></div>
        </div>
      </div>
    </header>
  );
};
