import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { href: '#work', label: 'Work', n: '01' },
  { href: '#experience', label: 'Experience', n: '02' },
  { href: '#education', label: 'Education', n: '03' },
  { href: '#skills', label: 'Skills', n: '04' },
  { href: '#contact', label: 'Contact', n: '05' },
];

export const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <nav className={`nav ${open ? 'nav-open' : ''}`}>
        <div className="wrap nav-in">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <span className="brand-sq">aj<span className="brand-caret">_</span></span>
            <span className="brand-name">Azizbek Juraev</span>
          </a>
          <div className="nav-links">
            {SECTIONS.map(s => <a key={s.href} href={s.href}>{s.label}</a>)}
            <span className="nav-avail"><span className="dot-live"></span>Open to work</span>
          </div>
          <button
            className={`nav-burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-sheet ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="nav-sheet-top">
          <span className="mono-label" style={{ color: 'var(--fg-invert-2)' }}>Menu</span>
          <span className="nav-avail" style={{ color: 'var(--fg-invert-2)' }}>
            <span className="dot-live" style={{ background: 'var(--paper)' }}></span>Open to work
          </span>
        </div>
        <div className="nav-sheet-links">
          {SECTIONS.map(s => (
            <a key={s.href} href={s.href} onClick={() => setOpen(false)}>
              <span className="ix">{s.n}</span>{s.label}
            </a>
          ))}
        </div>
        <a className="nav-sheet-mail" href="mailto:azizbek.juraev.dev@gmail.com" onClick={() => setOpen(false)}>
          azizbek.juraev.dev@gmail.com
        </a>
      </div>
    </>
  );
};
