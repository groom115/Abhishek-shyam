import EnvestLogo from "../assets/envest.png";
import BrightLogo from "../assets/BrightChamps.png";
import FreshLogo from "../assets/Freshkart.png";
export type Link = {
  url: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
};

export type Job = {
  title: string;
  team?: string;
  location?: string;
  description: string;
  company: string;
  period: {
    startDate: string;
    endDate?: string;
  };
  technologies: string[];
  projects?: Project[];
  appLinks?: Link[];
  contributionsLinks?: Link[];
  logo: string;
};

export const JobHistory: Job[] = [
  {
    title: "Full Stack developer",
    team: "",
    location: "Remote",
    description: `I joined Envest as a Founding Software Developer to fasten its development process. Envest had 1200+ users, 7.3% conversion date and AUM of 20,000. I led the Mobile App development process and also contributed to our web page. PS: Now closed due to funding issue`,
    company: "Envest",
    period: {
      startDate: "Oct 2023",
      endDate: "Aug 2024",
    },
    logo: EnvestLogo,
    technologies: [
      "ReactJS",
      "Typescript",
      "NextJS",
      "React Native",
      "TailwindCss",
      "Expo",
    ],
    appLinks: [
      {
        url: "https://www.envest.money/",
        description: "Web application",
      },
      {
        url: "https://drive.google.com/file/d/1SdwQwLjkMraomXOHhSk0oAmAfKVjMwTL/view?usp=sharing",
        description: "Mobile App",
      },
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    team: "Freshkart",
    location: "Brussels, Belgium (Remote)",
    description: `I joined Freshkart as a full-stack developer in a compact team of three, including the CTO, overseeing all software operations.
    As a frontend developer, I am solely responsible for our internal operation portal.
    And as a backend developer, I work along with my CTO to create new Apis, mantaining old APis for new data model, designed and optimised database schema's. Incorporated Uber Eats into our backend infrastructure.
    Defined and introduced unit-tests across critical parts of the software platform.
    Also contributed to the application's cloud architecture and also with some essential tools sendgrid, weglot, retool `,
    company: "Freshkart",
    period: {
      startDate: "Jun 2023",
      endDate: "May 2024",
    },
    logo: FreshLogo,
    technologies: [
      "ReactJS",
      "Typescript",
      "NextJs",
      "React Native",
      "Python",
      "FastApi",
      "DynamoDB",
      "TailwindCss",
      "Weglot",
      "AWS",
      "Sendgrid",
      "Retool",
    ],
  },
  {
    title: "Frontend Developer",
    team: "",
    location: "Bangalore, India",
    description: `BrightChamps is a ed-tech startup providing education to school kids. I was a part of both Mobile App team and Web team. I developed new features of both the platform ,converted figma designs into code, bug fixes, code reviews etc `,
    company: "BrightChamps",
    period: {
      startDate: "Jan 2023",
      endDate: "Sept 2023",
    },
    logo: BrightLogo,
    technologies: ["ReactJS", "React Native", "Javascript", "NextJs", "Redux"],
    appLinks: [
      {
        url: "https://brightchamps.com/",
        description: "Web application",
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.brightchamps.e10x&hl=en&gl=US",
        description: "Mobile App(Android)",
      },
    ],
  },
];
