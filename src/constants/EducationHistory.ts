import DefaultLogo from "../assets/briefcase.png";
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

export const EducationHistory: Job[] = [
  {
    title: "National Institute of Technology, Silchar",
    team: "",
    location: "Silchar,Assam, India",
    description: `I have successfully earned my degree in Electronics and Communication Engineering from the prestigious NIT, Silchar. Throughout my academic journey, I not only delved into the intricacies of ECE but also pursued a parallel course of study in Computer Science which made my carier more inclined towards software. I aslo participated in many hackathons, public speaking, Eco clubs etc,all of which collectively sculpted my character and amplified my confidence. CGPA: 9/10 `,
    company: "Electronics and Communication Engineering",
    period: {
      startDate: "Jul 2019",
      endDate: "Jun 2023",
    },
    logo: DefaultLogo,
    technologies: [
      "Typescript",
      "NextJS",
      "MapBox",
      "TailwindCss",
      "Stripe",
      "Clerk Auth",
    ],
  },
  {
    title: "SS College",
    team: "Freshkart",
    location: "Hailakandi, Assam , India",
    description: `I took Science stream in my class 11-12 and secured an aggregate of 90%`,
    company: "Higher secondary",
    period: {
      startDate: "Jun 2016",
      endDate: "Jun 2018",
    },
    logo: DefaultLogo,
    technologies: ["ReactJS", "Typescript", "TailwindCss", "Material UI"],
  },
];
