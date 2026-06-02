import React, { useState, useEffect, useRef } from 'react';

const STEPS = [
  { key: 'fetch', tool: 'git', out: 'GET / Azizbek Juraev' },
  { key: 'build', tool: 'vite', out: 'dist/ in 412ms' },
  { key: 'deploy', tool: 'aws', out: 'lightsail-prod' },
];

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [showSteps, setShowSteps] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSteps(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, showSteps]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Available commands: help, about, projects, contact, ls, whoami, pwd, date, clear';
        break;
      case 'about':
        response = 'Azizbek Juraev: Middle Frontend Engineer based in Seoul/Namangan.';
        break;
      case 'projects':
        response = 'Shipped: Flonit, sofilm.uz, Octopos, startupbase.uz';
        break;
      case 'contact':
        response = 'Email: abdulazizj050@gmail.com';
        break;
      case 'ls':
        response = 'assets  src  index.html  package.json  pnpm-lock.yaml  tsconfig.json';
        break;
      case 'whoami':
        response = 'azizbek';
        break;
      case 'pwd':
        response = '/Users/azizbek/portfolio';
        break;
      case 'date':
        response = new Date().toString();
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        response = `Command not found: ${cmd}. Type "help" for assistance.`;
    }

    setHistory([...history, `> ${input}`, response]);
    setInput('');
  };

  return (
    <div className="term">
      <div className="term-bar">
        <div className="term-dots"><i></i><i></i><i></i></div>
        <div className="term-title">azizbek — bash</div>
      </div>
      <div className="term-body" ref={bodyRef}>
        <div className="term-line">
          <span className="term-prompt">~/portfolio</span>
          <span className="term-cmd">npm run deploy</span>
        </div>
        
        {STEPS.map((s, i) => (
          <div key={s.key} className={`term-step ${showSteps ? 'in' : ''}`} style={{ transitionDelay: `${i * 150}ms` }}>
            <span className="term-arrow">→</span>
            <span className="term-key">{s.key}</span>
            <span className="term-tool">[{s.tool}]</span>
            <span className="term-lead"></span>
            <span className="term-out">{s.out}</span>
          </div>
        ))}
        
        <div className={`term-success ${showSteps ? 'in' : ''}`} style={{ transitionDelay: '600ms' }}>
          <span className="term-check">✓</span>
          <span>Deploy successful</span>
          <span className="term-200">HTTP 200</span>
        </div>

        <div className="term-history" style={{ marginTop: '10px' }}>
          {history.map((line, i) => (
            <div key={i} style={{ color: line.startsWith('>') ? '#9A9A9A' : '#F7F7F4', marginBottom: '4px' }}>
              {line}
            </div>
          ))}
        </div>

        <form onSubmit={handleCommand} className="term-cursor-line" style={{ display: 'flex', gap: '8px' }}>
          <span className="term-prompt">~/portfolio</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              fontFamily: 'inherit', 
              fontSize: 'inherit',
              outline: 'none',
              flex: 1,
              padding: 0
            }}
          />
          {input === '' && <span className="term-cursor"></span>}
        </form>
      </div>
    </div>
  );
};
