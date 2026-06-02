import React from 'react';
import './styles/colors_and_type.css';
import './styles/kit.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { WorkList } from './components/WorkList';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Education } from './components/Education';
import { SkillsGrid } from './components/SkillsGrid';
import { ContactFooter } from './components/ContactFooter';

const App: React.FC = () => {
  React.useEffect(() => {
    
    window.scrollTo(0, 0);
    
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkList />
        <ExperienceTimeline />
        <Education />
        <SkillsGrid />
      </main>
      <ContactFooter />
    </>
  );
};

export default App;
