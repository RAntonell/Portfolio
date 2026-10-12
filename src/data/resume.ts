/** Year and month in ISO 8601 format, e.g. "2019-06". */
export type YearMonth = `${number}-${number}`;

export interface Period {
  start: YearMonth;
  /** Omit for an ongoing period. */
  end?: YearMonth;
}

export interface Entry {
  title: string;
  subtitle?: string;
  periods: Period[];
  location?: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const profile = {
  name: 'Roger Antonell',
  role: 'Frontend Developer',
  summary:
    'Frontend developer focused on design systems, long-term maintainability, and building consistent UI for real products.',
  location: 'Girona, Spain',
  workMode: 'Remote',
  email: 'roger.antonell@gmail.com',
  links: [
    {
      label: 'linkedin.com/in/roger-antonell-huerta',
      href: 'https://www.linkedin.com/in/roger-antonell-huerta',
    },
    {
      label: 'github.com/RAntonell',
      href: 'https://github.com/RAntonell',
    },
  ],
} as const;

export const education: Entry[] = [
  {
    title: 'Professional Certificate in Web Application Development',
    periods: [{ start: '2015-03', end: '2016-02' }],
    location: 'Vic',
    description:
      'Technical training in web application development, covering frontend, backend fundamentals, databases, and deployment.',
  },
];

export const experience: Entry[] = [
  {
    title: 'Sunweb Group',
    subtitle: 'Frontend Developer',
    periods: [{ start: '2021-01' }, { start: '2019-06', end: '2020-08' }],
    description:
      'Working remotely in small agile teams across different product areas. Helped build and scale a multi-platform design system with a focus on consistency and maintainability. Currently migrating legacy systems to React, Next.js, and TypeScript. Also contribute to design, shipping features designed end to end.',
  },
  {
    title: 'Algrano',
    subtitle: 'Frontend Developer',
    periods: [{ start: '2020-09', end: '2020-12' }],
    description:
      'Designed and implemented features end to end within the platform. Redesigned key pages, which led to a sixfold increase in user messages. Also helped build their design system, with documentation and a scalable foundation.',
  },
  {
    title: 'Javajan',
    subtitle: 'Frontend Developer',
    periods: [{ start: '2017-05', end: '2017-11' }],
    description:
      'First professional role designing and building websites for clients. Handled layout, visual design, and frontend implementation using HTML, CSS, and JavaScript. Worked directly with clients on small projects, translating requirements into functional websites.',
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Styled-components',
      'Jest',
    ],
  },
  {
    title: 'UI & Systems',
    items: [
      'Storybook',
      'Component Architecture',
      'Reusable Components',
      'Accessibility',
      'Design Handoff',
      'Figma',
    ],
  },
  {
    title: 'Languages',
    items: ['English', 'Spanish', 'Catalan'],
  },
];
