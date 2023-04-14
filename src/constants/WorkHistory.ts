import MattermostLogo from '../assets/mattermost.svg'
import SageLogo from '../assets/sage.png'
import ProgramizeLogo from '../assets/programize.png'
import DefaultLogo from '../assets/briefcase.png'

export type Link = {
  url: string
  description: string
}

export type Project = {
  name: string
  description: string
  technologies: string[]
  url?: string
}

export type Job = {
  title: string
  team?: string
  location: string
  description: string
  company: string
  period: {
    startDate: string
    endDate?: string
  },
  technologies: string[]
  projects?: Project[]
  appLinks?: Link[]
  contributionsLinks?: Link[]
  logo: string
}

export const JobHistory: Job[] = [{
  title: 'Senior Software Design Engineer',
  team: 'Desktop Platform team',
  location: 'Remote',
  description: `I joined Mattermost on Aug 2022 to help improve the desktop application of the product. Mattermost is an open source alternative to Slack. I was part of the Desktop Platform team, which means that we were responsible for creating solutions and standards that will help the other teams of the company, and the contributors, add more features and maintain them.`,
  company: 'Mattermost Inc.',
  period: {
    startDate: 'Aug 2022',
    endDate: 'Mar 2023',
  },
  logo: MattermostLogo,
  technologies: ['ReactJS', 'Typescript', 'NodeJS', 'ElectronJS', 'Jest', 'Mocha', 'Playwright'],
  appLinks: [{
    url: 'https://github.com/mattermost/desktop',
    description: 'Code repository'
  }],
  contributionsLinks: [{
    url: 'https://github.com/mattermost/desktop/pulls?q=author%3Atboulis',
    description: 'Pull requests'
  }],
}, {
  title: 'Senior Software Engineer',
  team: 'Sage Intelligent Time',
  location: 'Remote',
  description: `While I was working for Programize, the project I was working for (allocate.ai - startup) got acquired by Sage Intacct. The founders of the startup, Erik Zahnlecker and David Flatow wanted me in their team and arranged a transition with my previous employer.
  I was responsible for the web app and desktop client (time tracking application) of the product. I would also help a lot on the backend and the mobile application when needed.
  I've contributed to the application's cloud architecture and CI/CD process with automation e2e and unit tests using GitHub Actions, Cypress, Jest, Mocha, Spectron, CircleCI, CodeShip, Teamcity and AWS.`,
  company: 'Sage Intacct Inc.',
  period: {
    startDate: 'Sep 2019',
    endDate: 'Aug 2022',
  },
  logo: SageLogo,
  technologies: ['ReactJS', 'Typescript', 'NodeJS', 'React Native', 'PostgreSQL', 'Redis', 'SNS/SQS', 'Webpack', 'Svelte', 'Cypress', 'ElectronJS', 'Jest', 'Mocha', 'SpectronJS', 'AWS', 'CircleCI', 'LaunchDarkly', 'NewRelic', 'Datadog'],
  appLinks: [{
    url: 'https://time.sage.com',
    description: 'Web Application',
  }, {
    url: 'https://apps.apple.com/us/app/sage-intelligent-time/id1523625682',
    description: 'Mobile App (ios)',
  }, {
    url: 'https://play.google.com/store/apps/details?id=com.sage.intelligent.time',
    description: 'Mobile App (android)',
  }, {
    url: 'https://na-prod-sit-assets-tracker.s3.amazonaws.com/mac/Time+Assistant-1.5.2.dmg',
    description: 'Desktop App download link',
  }],
}, {
  title: 'Full-Stack Software Engineer',
  team: '',
  location: 'Holargos, Athens, Greece',
  description: 'Programize is a development house that builds all types of applications for startups, banks, governments and US universities.',
  company: 'Programize LLC',
  period: {
    startDate: 'Jan 2018',
    endDate: 'Aug 2019',
  },
  logo: ProgramizeLogo,
  technologies: ['ReactJS', 'React Native', 'Javascript', 'NodeJS', 'Wordpress', 'MongoDB'],
  projects: [{
    name: 'Applyed',
    description: '',
    technologies: ['ReactJS'],
  }, {
    name: 'theFerries',
    description: '',
    technologies: ['ReactJS'],
  }, {
    name: 'Gitlab analytics (internal)',
    description: '',
    technologies: ['ReactJS', 'Redux'],
  }, {
    name: 'Bafter',
    description: '',
    technologies: ['ReactJS', 'Redux', 'Wordpress'],
  }, {
    name: 'Glo Up',
    description: '',
    technologies: ['ReactJS', 'Redux'],
  }, {
    name: 'Hepis.gr',
    description: '',
    technologies: ['Wordpress'],
  }, {
    name: 'Nomad',
    description: '',
    technologies: ['Javascript', 'HTML', 'CSS'],
  }, {
    name: 'Feel',
    description: '',
    technologies: ['ReactJS', 'Redux'],
  }, {
    name: 'Launch (internal)',
    description: '',
    technologies: ['ReactJS', 'Redux'],
  }, {
    name: 'NBG Consent System',
    description: '',
    technologies: ['System Design', 'Microservices'],
  }, {
    name: 'Pollfair (internal)',
    description: '',
    technologies: ['ReactJS', 'Redux'],
  }, {
    name: 'www.borrowaboat.com',
    description: 'Legacy website',
    technologies: ['Custom Wordpress', 'PHP']
  }, {
    name: 'www.bafter.co.uk',
    description: '',
    technologies: ['ReactJS', 'Redux'],
  }, {
    name: 'allocate.ai',
    description: '',
    technologies: ['ReactJS', 'Redux', 'NodeJS', 'PostgreSQL', 'Redis', 'Heroku'],
  }],
}, {
  title: 'Full-Stack Software Engineer',
  team: '',
  location: 'Remote',
  description: '',
  company: 'Freelancer',
  period: {
    startDate: 'Sep 2016',
    endDate: 'Dec 2017',
  },
  technologies: ['Javascript', 'HTML', 'CSS', 'Wordpress', 'DiscordJS'],
  projects: [{
    name: 'Discord Bots',
    description: '',
    technologies: ['NodeJS', 'DiscordJS', 'Discord API'],
  }, {
    name: 'Wordpress Websites',
    description: '',
    technologies: ['Wordpress', 'Javascript', 'HTML', 'CSS', 'PHP'],
  }],
  logo: DefaultLogo,
}, {
  title: 'IT engineer',
  team: '',
  location: 'Aliveri, Evia, Greece',
  description: '',
  company: 'Bobax (Family Business)',
  period: {
    startDate: 'Sep 2016',
    endDate: 'Dec 2017',
  },
  logo: DefaultLogo,
  technologies: ['Windows OS', 'Server rooms', 'Networking', 'Hardware', 'Retail Software'],
}]
