import flonitShot from '../assets/flonit.webp';
import sofilmShot from '../assets/sofilm.webp';
import octoposShot from '../assets/octopos.webp';
import startupbaseShot from '../assets/startupbase.webp';

export interface Project {
  id: string;
  mk: string;
  name: string;
  year: string;
  company: string;
  role: string;
  desc: string;
  tags: string[];
  stack: string;
  type: string;
  region: string;
  points: string[];
  screenshots?: string[];
  url?: string;
  urlLabel?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'flonit', mk: 'FL', name: 'Flonit', year: '2025 →',
    company: 'KEFA · Korea Environment Facility Analysis',
    role: 'Middle Frontend Engineer',
    desc: 'A dashboard for industrial clients in South Korea that visualizes air-pollutant emission data and feeds it to the Korean government daily. The reliability bar is regulatory.',
    tags: ['React', 'TypeScript', 'AWS Lightsail', 'GitHub Actions'],
    stack: 'React · TypeScript · AWS', type: 'Regulatory dashboard', region: 'Seoul, KR',
    points: [
      'Built and maintain Flonit end to end — the KEFA emission-data dashboard inside Nexinsight, reported to regulators every day.',
      'Researched and integrated open-source tools to empower non-developers: Puck Editor for in-browser content editing without engineering involvement, and pdfme for page-specific PDF generation from the UI.',
      'Own AWS infrastructure end to end — deploying frontend builds via AWS Lightsail and authoring GitHub Actions CI/CD pipelines across three projects, cutting time to production.',
      'Dip into the API layer when reshaping a backend response is faster than client-side gymnastics — a full-stack mindset that ships product faster.',
    ],
    screenshots: [flonitShot],
    url: 'https://nexinsight.kr',
    urlLabel: 'Visit Nexinsight'
  },
  {
    id: 'sofilm', mk: 'SO', name: 'Sofilm', year: '2024',
    company: 'The Ad Tech', role: 'Frontend Engineer',
    desc: 'An LMS connecting students and teachers, built with Next.js end to end — student and admin panels, rich-text authoring and real-time chat.',
    tags: ['Next.js', 'WebSockets', 'Lexical', 'Unit testing'],
    stack: 'Next.js · WebSockets', type: 'Learning platform', region: 'Uzbekistan',
    points: [
      'Built sofilm.uz with Next.js end to end — both the student and admin panels.',
      'Held unit-testing discipline that kept the UX smooth as the surface area grew.',
      "Integrated Lexical (Meta's rich-text editor) for content authoring.",
      'Shipped a real-time live chat feature on WebSockets.',
      'Maintained documentation, supported users responsively, and collaborated cross-functionally on new features and quality improvements.',
    ],
    screenshots: [sofilmShot],
    url: 'https://sofilm.uz'
  },
  {
    id: 'octopos', mk: 'OC', name: 'Octopos', year: '2023',
    company: 'Octopos', role: 'Frontend Engineer',
    desc: 'An advanced restaurant POS — live today in restaurants across Namangan and Seoul — that automates daily operations and lifts margins for owners. Offline-first by design.',
    tags: ['React', 'TanStack Query', 'Offline-first', 'Go backend'],
    stack: 'React · TanStack · Go', type: 'Offline-first POS', region: 'Namangan / Seoul',
    points: [
      'Built an advanced restaurant POS platform live today in restaurants across Namangan and Seoul.',
      'Shipped three specialized dashboards (waiter, kitchen, admin) on a shared codebase, with a single source of truth for API clients and UI components used by all three apps.',
      "Offline-first by design — POS and Kitchen apps keep operating when the internet drops; orders queue locally and sync seamlessly when connectivity returns, because a restaurant can't stop serving guests when the WiFi blinks.",
      'Frontend in React with TanStack Query against a Go backend.',
    ],
    screenshots: [octoposShot],
    url: 'https://octopos.uz'
  },
  {
    id: 'startupbase', mk: 'SB', name: 'Startup Base', year: '2023',
    company: 'Scientech Solutions', role: 'Intern Frontend Engineer',
    desc: "Uzbekistan's startup investment and networking platform, built with React.js and Redux Toolkit — a dashboard serving both end users and admins.",
    tags: ['React.js', 'Redux Toolkit', 'SEO', 'Unit testing'],
    stack: 'React · Redux Toolkit', type: 'Investment network', region: 'Uzbekistan',
    points: [
      'Developed and maintained startupbase.uz with React.js and Redux Toolkit.',
      'Designed a user-friendly dashboard serving both end users and admins; closed meaningful design debt to lift interface consistency.',
      'Implemented unit tests for code reliability and optimized HTML semantics for SEO.',
    ],
    screenshots: [startupbaseShot],
    url: 'https://startupbase.uz/en'
  },
];
