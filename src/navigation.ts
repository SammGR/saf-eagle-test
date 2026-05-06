import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Research',
      links: [
        {
          text: 'HYDRO-SAF',
          href: getPermalink('/hydro-saf'),
        },
        {
          text: 'SAF-FALCON',
          href: 'https://blogs.ujaen.es/tep250/?page_id=100',
        },
        {
          text: 'METHOD-EAGLE',
          href: getPermalink('/method-eagle'),
        },
      ],
    },
    {
      text: 'Facilities',
      href: getPermalink('/facilities'),
    },
    {
      text: 'Publications',
      href: getPermalink('/publications'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Research',
      links: [
        { text: 'HYDRO-SAF', href: getPermalink('/hydro-saf') },
        { text: 'SAF-FALCON', href: 'https://blogs.ujaen.es/tep250/?page_id=100' },
        { text: 'METHOD-EAGLE', href: getPermalink('/method-eagle') },
      ],
    },
    {
      title: 'Project',
      links: [
        { text: 'Facilities', href: getPermalink('/facilities') },
        { text: 'Publications', href: getPermalink('/publications') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com' }],
  footNote: `
    SAF-EAGLE Project · University of Castilla-La Mancha (UCLM)
  `,
};
