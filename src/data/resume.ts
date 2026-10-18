import { type Period, yearsAcross } from '../lib/dates';

export interface Role {
  company: string;
  title: string;
  periods: Period[];
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Education {
  title: string;
  place: string;
  periods: Period[];
}

export const experience: Role[] = [
  {
    company: 'Sunweb Group',
    title: 'Frontend Developer',
    periods: [{ start: '2019-06', end: '2020-08' }, { start: '2021-01' }],
    description:
      'Build the customer account area and contribute to the multi-platform design system. Design and ship pages and features end to end, across many product teams. Moved the account area from Sitecore MVC to Next.js across 10 sites, market by market.',
  },
  {
    company: 'Algrano',
    title: 'Frontend Developer',
    periods: [{ start: '2020-09', end: '2020-12' }],
    description:
      'Designed and built features end to end. Helped set up the design system, with documentation and a scalable foundation.',
  },
];

export const profile = {
  name: 'Roger Antonell',
  role: 'Frontend Developer',
  headline: 'Frontend developer who designs.',
  intro: [
    `For ${yearsAcross(experience.flatMap((role) => role.periods))} years I’ve taken features from first sketch to production code. At Sunweb Group I was the main frontend developer on moving the customer account area to Next.js across 10 travel sites, and I designed several of its pages, including booking details and sign in.`,
    'Earlier, at Algrano, my redesign of key pages led to six times more messages between users.',
  ],
  metaDescription:
    'Frontend developer who designs. Design systems, React, Next.js and TypeScript. Based in Girona, Spain, working remotely.',
  email: 'roger.antonell@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/roger-antonell-huerta' },
    { label: 'GitHub', href: 'https://github.com/RAntonell' },
  ],
  source: 'https://github.com/RAntonell/Portfolio',
};

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'CSS', 'Jest'],
  },
  {
    title: 'Design',
    items: ['Figma', 'Design systems', 'Storybook', 'Accessibility'],
  },
  {
    title: 'Delivery',
    items: ['Feature flags', 'Canary releases', 'Performance monitoring'],
  },
  {
    title: 'Languages',
    items: ['English (professional)', 'Spanish (native)', 'Catalan (native)'],
  },
];

export const education: Education = {
  title: 'Professional Certificate in Web Application Development',
  place: 'Vic',
  periods: [{ start: '2015-03', end: '2016-02' }],
};
