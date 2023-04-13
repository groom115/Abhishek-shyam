export enum StackCategory {
  frontend = 'frontend',
  infrastructure = 'infrastructure',
  backend = 'backend',
  cicd = 'cicd',
  testing = 'testing',
}

export type Stack = {
  name: string
  description: string
  category: StackCategory[]
  experience?: number // 0 - 10
}

export const STACKS: Stack[] = [{
  name: 'React',
  description: '',
  category: [StackCategory.frontend],
  experience: 10,
}, {
  name: 'Javascript',
  description: '',
  category: [StackCategory.frontend],
  experience: 10,
}, {
  name: 'Typescript',
  description: '',
  category: [StackCategory.frontend, StackCategory.backend],
  experience: 10,
}, {
  name: 'NodeJS',
  description: '',
  category: [StackCategory.frontend],
  experience: 10,
}, {
  name: 'React Native',
  description: '',
  category: [StackCategory.frontend],
  experience: 9,
}, {
  name: 'ElectronJS',
  description: '',
  category: [StackCategory.frontend],
  experience: 10,
}, {
  name: 'Svelte',
  description: '',
  category: [StackCategory.frontend],
  experience: 9,
}, {
  name: 'Docker',
  description: '',
  category: [StackCategory.backend, StackCategory.cicd],
  experience: 9,
}, {
  name: 'PostgreSQL',
  description: '',
  category: [StackCategory.backend],
  experience: 9,
}, {
  name: 'MongoDB',
  description: '',
  category: [StackCategory.backend],
  experience: 9,
}, {
  name: 'MariaDB',
  description: '',
  category: [StackCategory.backend],
  experience: 8,
}, {
  name: 'Redis',
  description: '',
  category: [StackCategory.backend, StackCategory.cicd],
  experience: 10,
}, {
  name: 'Go',
  description: '',
  category: [StackCategory.backend],
  experience: 5,
}, {
  name: 'Rust',
  description: '',
  category: [StackCategory.backend],
  experience: 2,
}, {
  name: 'Jest',
  description: '',
  category: [StackCategory.testing],
  experience: 10,
}, {
  name: 'Mocha',
  description: '',
  category: [StackCategory.testing],
  experience: 10,
}, {
  name: 'Cypress',
  description: '',
  category: [StackCategory.testing],
  experience: 10,
}, {
  name: 'Playwright',
  description: '',
  category: [StackCategory.testing],
  experience: 10,
}, {
  name: 'React Testing Library',
  description: '',
  category: [StackCategory.testing],
  experience: 9,
}, {
  name: 'AWS',
  description: '',
  category: [StackCategory.infrastructure, StackCategory.cicd],
  experience: 8,
}, {
  name: 'Github Actions',
  description: '',
  category: [StackCategory.infrastructure, StackCategory.cicd],
  experience: 10,
}, {
  name: 'CircleCI',
  description: '',
  category: [StackCategory.infrastructure, StackCategory.cicd],
  experience: 10,
}, {
  name: 'TravisCI',
  description: '',
  category: [StackCategory.infrastructure, StackCategory.cicd],
  experience: 10,
}, {
  name: 'Code Signing | Notarization (MS & Apple)',
  description: '',
  category: [StackCategory.frontend, StackCategory.cicd],
  experience: 10,
}, {
  name: 'App Store Connect (Apple)',
  description: '',
  category: [StackCategory.frontend, StackCategory.cicd],
  experience: 10,
}, {
  name: 'Bootstrap',
  description: '',
  category: [StackCategory.frontend],
  experience: 9,
}, {
  name: 'Material UI',
  description: '',
  category: [StackCategory.frontend],
  experience: 9,
}, {
  name: 'Ant Design',
  description: '',
  category: [StackCategory.frontend],
  experience: 10,
}, {
  name: 'Semantic UI',
  description: '',
  category: [StackCategory.frontend],
  experience: 9,
}, {
  name: 'Webpack',
  description: '',
  category: [StackCategory.frontend],
  experience: 10,
}, {
  name: 'Vite',
  description: '',
  category: [StackCategory.frontend],
  experience: 8,
}, {
  name: 'Rollup',
  description: '',
  category: [StackCategory.frontend],
  experience: 8,
}, {
  name: 'CoreJS',
  description: '',
  category: [StackCategory.frontend],
  experience: 8,
}]
