import React from 'react';
import { Icon } from './Icon';

export const ContactFooter: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <span className="kicker">
          <span className="line"></span>
          <span className="mono-label" style={{ color: 'var(--fg-invert-2)' }}>Available for new work</span>
        </span>
        <h2 className="h1">Ready to ship code<br />that lasts.</h2>
        <a className="contact-mail" href="mailto:abdulazizj050@gmail.com">abdulazizj050@gmail.com</a>
        <div className="socials">
          <a className="soc" href="https://github.com/azizbekjuraev" target="_blank" rel="noopener noreferrer">
            <Icon name="github" size={16} /> GitHub
          </a>
          <a className="soc" href="https://www.linkedin.com/in/azizbek-juraev-656b95253/" target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size={16} /> LinkedIn
          </a>
          <a className="soc" href="https://t.me/azizbek_juraev1" target="_blank" rel="noopener noreferrer">
            <Icon name="send" size={16} /> Telegram
          </a>
          <a className="soc" href="tel:+998941500330">
            <Icon name="mail" size={16} /> +998 94 150 03 30
          </a>
        </div>
        <div className="foot-bar">
          <span>© 2026 Azizbek Juraev — Frontend Engineer</span>
          <a className="soc" href="#top" style={{ border: 'none', padding: 0 }}>
            Back to top <Icon name="arrow-up-right" size={15} className="-rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
};
