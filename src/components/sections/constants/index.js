import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  icon42,
  fpk,
  google,
  ibm,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../../../assets";

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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "École 1337 (Network 42)",
    company_name: "Intensive Software Engineering Program",
    icon: icon42,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Completed the rigorous Common Core curriculum at École 1337, part of the prestigious global 42 Network. This peer-to-peer learning program focused on project-based software development with emphasis on algorithms, system programming, and collaborative problem-solving.",
      "Mastered fundamental and advanced programming concepts through hands-on projects including operating systems, web development, and algorithmic challenges.",
        ],
  },
  {
    title: "Multidisciplinary Faculty of Khouribga (FPK)",
    company_name: "Bachelor's Degree in Mathematical and Computer Sciences",
    icon: fpk,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Gained strong theoretical and practical foundations in mathematics and computer science through a comprehensive curriculum covering discrete mathematics, calculus, linear algebra, data structures, algorithms, and software development methodologies.",
      "CMathematical modeling, algorithmic thinking, software architecture, and problem-solving",
    ],
  },
  {
    title: "Google IT Automation with Python Professional Certificate",
    company_name: "Google/Coursera",
    icon: google,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing practical Python programming skills for automating IT tasks, managing systems, and solving real-world problems. The program covers Python fundamentals, Git and GitHub, troubleshooting techniques, configuration management, and automation at scale",
      "Crash Course on Python",
      "Using Python to Interact with the Operating System",
      "Introduction to Git and GitHub",
      "Troubleshooting and Debugging Techniques",
      "Configuration Management and the Cloud",
      "Automating Real-World Tasks with Python",
    ],
  },
  {
    title: "Introduction to Agile Development and Scrum",
    company_name: "IBM/Coursera",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Mastered Agile methodologies and Scrum framework for efficient project management and software development.",
    ],
  },
  {
    title: "Introduction to Cloud Computing",
    company_name: "IBM/Coursera",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Acquired fundamental knowledge of cloud technologies, service models, and deployment strategies.",
    ],
  },
  {
    title: "Introduction to Cybersecurity Essentials",
    company_name: "IBM and ISC2",
    icon: ibm,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed understanding of core cybersecurity concepts, threats, and protective measures.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
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
