import TaxiLogo from "../assets/Taxi.jpg";
import HalloweenLogo from "../assets/Halloween.jpg";
import YoutubeLogo from "../assets/Youtube.png";
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

export const ProjectHistory: Job[] = [
  {
    title: "Smart Taxi",
    team: "",
    // location: "Remote",
    description: `An intuitive interface where you effortlessly select source and destination addresses from smart suggestions. A dynamic marker points selected addresses bridges the gap, displaying distance and estimated travel time. Also you can select a vehicle and can confirm booking with a click`,
    company: "Frontend project",
    period: {
      startDate: "sept 2023",
      endDate: "Oct 2023",
    },
    logo: TaxiLogo,
    technologies: [
      "Typescript",
      "NextJS",
      "MapBox",
      "TailwindCss",
      "Stripe",
      "Clerk Auth",
    ],

    contributionsLinks: [
      {
        url: "https://github.com/groom115/SmartTaxi",
        description: "Github Repo",
      },
    ],
  },
  {
    title: "YouTube Clone",
    team: "Freshkart",

    description: `Developed the YouTube clone frontend using HTML, TailwindCSS ,MaterialUI and JavaScript, with ReactJs as the primary framework. Employed RESTful API calls to retrieve video data.
    Implemented key features including video playback with customizable controls, user-friendly search functionality with real-time results, and Channel profile management with uploads`,
    company: "Freshkart",
    period: {
      startDate: "Jun 2023",
      endDate: "Jun 2023",
    },
    logo: YoutubeLogo,
    technologies: ["ReactJS", "Typescript", "TailwindCss", "Material UI"],
    contributionsLinks: [
      {
        url: "https://github.com/groom115/youtube_clone",
        description: "Github Repo",
      },
    ],
    appLinks: [
      {
        url: "https://64d72fabf5a8af59c046d3ae--fluffy-llama-2c216a.netlify.app/",
        description: "Web application",
      },
    ],
  },
  {
    title: "Halloween E commerce Website",
    team: "",
    location: "Bangalore, India",
    description: `This eerie creation features a sleek and responsive design to ensure a seamless user experience on any device. But that's not all - I've also incorporated a bewitching dark mode feature that allows users to toggle between light and dark themes, enhancing the site's visual appeal and usability.Check it out, if you dare! And remember, the night is dark and full of terrors and delightful web experiences! 🌙🦇🕷️(link below) `,
    company: "BrightChamps",
    period: {
      startDate: "Dec 2022",
      endDate: "Jan 2023",
    },
    logo: HalloweenLogo,
    technologies: ["ReactJS", "TailwindCss", "Javascript", "Netlify"],
    contributionsLinks: [
      {
        url: "https://github.com/groom115/Halloween-customer-website",
        description: "Github Repo",
      },
    ],
    appLinks: [
      {
        url: "https://inquisitive-jelly-27604d.netlify.app/",
        description: "Web application",
      },
    ],
  },
];
