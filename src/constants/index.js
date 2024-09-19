import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import vaibhav from "../assets/Users/vaibhav.png";
import vedant from "../assets/Users/vedant.png";
import sujal from "../assets/Users/sujal.png";

import neuronurturer from "../assets/neuronurturer.png";

import codestam from "../assets/company/codestam.svg";
import Hydroponic from "../assets/company/hydroponic.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Codestam Technologies",
    icon: codestam,
    iconBg: "white",
    date: "March 2024 - April 2024",
    points: [
      "Led development tasks for ”Pradaya,” focusing on features like email verification and secure routing.",
      "Utilized the MERN stack—MongoDB, Express.js, React.js, and Node.js—for backend and frontend development.",
      "Implemented user authentication using NextAuth for secure sign-in and login processes.",
      "Collaborated with the team to improve front-end interfaces using Next.js and Tailwind CSS for better user experience.",
    ],
  },
  {
    title: "Finance and Management Intern",
    company_name: "Hydroponic Research and Development Center",
    icon: Hydroponic,
    iconBg: "#ffffff",
    date: "April 2024 - May 2024",
    points: [
      "gained valuable insights into financial analysis, project management, and sustainable agricultural practices.",
      "I collaborated with a dedicated team, honed my skills in data analysis and strategic planning.",
      "learned how to navigate the unique challenges and opportunities within the Pesticide industry.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as fast as Jayesh did that, He made it possible for us win a hackathon.",
    name: "Vaibhav Waghmare",
    designation: "Batchmate",
    company: "IIIT Nagpur",
    image: vaibhav,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their perfection.",
    name: "Vedant Shriwastava",
    designation: "College Mate",
    company: "IIIT Nagpur",
    image: vedant,
  },
  {
    testimonial:
      "After Jayesh optimized our finances and management work, our traffic increased by 50%. We can't thank them enough!",
    name: "Amol Nehe Patil",
    designation: "CEO",
    company: "HRDC",
    image: sujal,
  },
];

const projects = [
  {
    name: "NeuroNurturer",
    description:
      "Web-based platform that aims to provide a home-based cognitive solution for children aged 6-10 facing developmental disabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: neuronurturer,
    source_code_link: "https://github.com/Lucifer1727/Tech_Titans.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
