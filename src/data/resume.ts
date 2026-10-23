import { type Period, yearsAcross } from '../lib/dates';

export interface Role {
  company: string;
  url: string;
  title: string;
  periods: Period[];
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export type IntroSegment = string | { text: string; work: string };

export interface Education {
  title: string;
  place: string;
  periods: Period[];
}

export const experience: Role[] = [
  {
    company: 'Sunweb Group',
    url: 'https://www.sunwebgroup.com/',
    title: 'Frontend Developer',
    periods: [{ start: '2021-01' }],
    description:
      'Build the customer account area and contribute to the multi-platform design system. Design and ship pages and features end to end, across many product teams. Moved the account area from Sitecore MVC to Next.js across 10 sites, market by market.',
  },
  {
    company: 'Algrano',
    url: 'https://algrano.com/',
    title: 'Frontend Developer',
    periods: [{ start: '2020-09', end: '2020-12' }],
    description:
      'Designed and built features end to end, and my redesign of key pages led to six times more messages between users. Helped set up the design system, with documentation and a scalable foundation.',
  },
  {
    company: 'Sunweb Group',
    url: 'https://www.sunwebgroup.com/',
    title: 'Frontend Developer',
    periods: [{ start: '2019-06', end: '2020-08' }],
    description:
      'Built user-facing features across the product in small, cross-functional teams. Helped build the multi-platform design system, working closely with designers to turn ideas into reusable components.',
  },
];

const location = 'Girona, Spain';

export const profile = {
  name: 'Roger Antonell',
  role: 'Frontend Developer',
  headline: 'Frontend developer who designs.',
  location,
  intro: [
    [
      `For ${yearsAcross(experience.flatMap((role) => role.periods))} years I’ve taken features from first sketch to production code. At Sunweb Group I was the main frontend developer on moving the `,
      { text: 'customer account area', work: 'my-account' },
      ' to Next.js across 10 travel sites, and I designed several of its pages, including booking details and ',
      { text: 'sign in', work: 'sign-in' },
      '.',
    ],
    ['Earlier, at Algrano, my redesign of key pages led to six times more messages between users.'],
  ] satisfies IntroSegment[][],
  metaDescription: `Frontend developer who designs. Design systems, React, Next.js and TypeScript. Based in ${location}, working remotely.`,
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
    title: 'Languages',
    items: ['English (professional)', 'Spanish (native)', 'Catalan (native)'],
  },
];

export const education: Education = {
  title: 'Professional Certificate in Web Application Development',
  place: 'Vic',
  periods: [{ start: '2015-03', end: '2016-02' }],
};
