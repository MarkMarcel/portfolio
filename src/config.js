module.exports = {
  email: 'marcelmarkamoako@yahoo.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/markmarcel',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mark-m-b0b836162',
    },
  ],

  navLinks: [
    {
      key: 'navAbout',
      url: '/#about',
    },
    {
      key: 'navSkills',
      url: '/#skills',
    },
    {
      key: 'navProjects',
      url: '/#projects',
    },
    {
      key: 'navCommunities',
      url: '/#communities',
    },
    {
      key: 'navContact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#19b67a',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
