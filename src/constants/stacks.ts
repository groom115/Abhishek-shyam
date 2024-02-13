export enum StackCategory {
  frontend = "frontend",
  backend = "backend",
  // cicd = "cicd",
  testing = "testing",
  application = "application",
  fundamentals = "fundamentals",
}

export type Stack = {
  name: string;
  description: string;
  category: StackCategory[];
  experience?: number; // 0 - 10
};

export const STACKS: Stack[] = [
  {
    name: "React",
    description: "",
    category: [StackCategory.frontend],
    experience: 10,
  },
  {
    name: "Javascript",
    description: "",
    category: [StackCategory.frontend],
    experience: 10,
  },
  {
    name: "Typescript",
    description: "",
    category: [
      StackCategory.frontend,
      StackCategory.backend,
      StackCategory.application,
    ],
    experience: 10,
  },
  {
    name: "Next.JS",
    description: "",
    category: [StackCategory.frontend],
    experience: 10,
  },
  {
    name: "React Native",
    description: "",
    category: [StackCategory.frontend, StackCategory.application],
    experience: 10,
  },
  // {
  //   name: "ElectronJS",
  //   description: "",
  //   category: [StackCategory.frontend],
  //   experience: 8,
  // },
  {
    name: "TailwindCss",
    description: "",
    category: [StackCategory.frontend, StackCategory.application],
    experience: 10,
  },
  {
    name: "Python",
    description: "",
    category: [StackCategory.backend],
    experience: 9,
  },
  // {
  //   name: "Docker",
  //   description: "",
  //   category: [StackCategory.backend, StackCategory.cicd],
  //   experience: 8,
  // },
  {
    name: "FastAPI",
    description: "",
    category: [StackCategory.backend],
    experience: 9,
  },
  {
    name: "DynamoDB",
    description: "",
    category: [StackCategory.backend],
    experience: 8,
  },
  {
    name: "Pydantic",
    description: "",
    category: [StackCategory.backend],
    experience: 10,
  },

  {
    name: "Mock & Patch",
    description: "",
    category: [StackCategory.testing],
    experience: 9,
  },

  {
    name: "React Testing Library",
    description: "",
    category: [StackCategory.testing],
    experience: 7,
  },
  // {
  //   name: "Github Actions",
  //   description: "",
  //   category: [StackCategory.cicd],
  //   experience: 8,
  // },

  {
    name: "Bootstrap",
    description: "",
    category: [StackCategory.frontend],
    experience: 10,
  },
  {
    name: "Material UI",
    description: "",
    category: [StackCategory.frontend],
    experience: 10,
  },
  {
    name: "Chakra UI",
    description: "",
    category: [StackCategory.frontend],
    experience: 10,
  },

  {
    name: "radix UI",
    description: "",
    category: [StackCategory.frontend],
    experience: 9,
  },
  {
    name: "Vite",
    description: "",
    category: [StackCategory.frontend],
    experience: 8,
  },
  {
    name: "OOPS ",
    description: "",
    category: [StackCategory.fundamentals],
    experience: 9,
  },
  {
    name: "Operating System ",
    description: "",
    category: [StackCategory.fundamentals],
    experience: 8,
  },
  {
    name: "Computer Networks ",
    description: "",
    category: [StackCategory.fundamentals],
    experience: 8,
  },
  {
    name: "DBMS",
    description: "",
    category: [StackCategory.fundamentals],
    experience: 8,
  },
  {
    name: "High Level Design ",
    description: "",
    category: [StackCategory.fundamentals],
    experience: 7,
  },
];
