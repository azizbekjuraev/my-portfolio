import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { Project, PROJECTS } from '../constants';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const open = !!project;
  const [shown, setShown] = useState<Project | null>(project);
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (project) {
      setShown(project);
      setTimeout(() => closeBtnRef.current?.focus(), 100);
    }
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const p = shown;

  return (
    <>
      <div 
        className={`ov-scrim ${open ? 'open' : ''}`} 
        onClick={onClose}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
      ></div>
      <aside 
        className={`ov ${open ? 'open' : ''}`} 
        aria-hidden={!open}
        role="dialog"
        aria-labelledby="detail-title"
        aria-modal="true"
      >
        {p && (
          <div className="ov-in">
            <div className="ov-top">
              <span className="mono-label">Case · {p.year}</span>
              <button 
                className="ov-close" 
                onClick={onClose} 
                aria-label="Close"
                ref={closeBtnRef}
              >
                <Icon name="x" />
              </button>
            </div>
            <h2 id="detail-title" className="h1" style={{ fontSize: '52px' }}>{p.name}</h2>
            <p className="body" style={{ marginTop: '8px' }}>{p.company}</p>
            
            <div className="ov-hero" style={{ padding: 0, background: 'var(--ink)' }}>
              {p.screenshots && p.screenshots.length > 0 ? (
                <img 
                  src={p.screenshots[0]} 
                  alt={`${p.name} screenshot`} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    filter: 'grayscale(1)',
                    transition: 'filter 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(1)'}
                />
              ) : (
                <span className="mk">{p.mk}</span>
              )}
            </div>

            <div className="ov-meta">
              <div><div className="k">Role</div><div className="v">{p.role}</div></div>
              <div><div className="k">Stack</div><div className="v">{p.stack}</div></div>
              <div><div className="k">Type</div><div className="v">{p.type}</div></div>
            </div>
            <div className="ov-body">
              <h3 className="h4">What I did</h3>
              <ul>{p.points.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
              <div style={{ marginTop: '28px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export const WorkList: React.FC = () => {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
  }, [active]);

  return (
    <section id="work" className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="h2">Selected work</span>
          <span className="idx">01 / 04 — TAP A PROJECT</span>
        </div>
        {PROJECTS.map((p, i) => (
          <button 
            className="work-row" 
            key={p.id} 
            onClick={() => setActive(p)}
            aria-label={`View details for ${p.name}`}
          >
            <span className="ix">0{i + 1}</span>
            <span>
              <span className="ttl">{p.name}</span>
              <span className="desc" style={{ display: 'block' }}>{p.desc}</span>
              <span className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</span>
            </span>
            <span className="yr">
              <span className="spec">
                <span className="spec-yr">{p.year}</span>
                <span className="spec-row">{p.stack}</span>
                <span className="spec-row">{p.region}</span>
              </span>
              <span className="arrow"><Icon name="arrow-up-right" size={22} /></span>
            </span>
          </button>
        ))}
      </div>
      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
};
