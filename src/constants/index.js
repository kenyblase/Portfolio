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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Next Js Developer",
    icon: backend,
  },
  {
    title: "Backend (Express Js) Developer",
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Junior Full Stack Developer Intern",
    company_name: "Pagtag Technologies",
    iconBg: "#383E56",
    date: "April 2024 - September 2024",
    points: [
      "Contributed to the development and deployment of full-stack web applications using the MERN stack, focusing on scalability and performance.",
      "Worked closely with senior developers to debug and optimize existing applications, ensuring smooth functionality and reduced load times.",
      "Built and integrated RESTful APIs for efficient data communication between the frontend and backend.",
      "Gained hands-on experience in managing databases, authentication, and deploying applications to production environments.",
    ],
  },
  {
    title: "Projects Built for Clients",
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Designed and developed a custom e-commerce platform with a secure checkout process, inventory management, and admin dashboard.",
      "Delivered a CRM tool to manage customer interactions, complete with a user-friendly UI and data visualization features.",
      "Built a landing page for a marketing campaign, optimizing for SEO and responsiveness across devices.",
      "Created an event registration system with ticketing, notifications, and payment integration tailored to client needs.",
    ],
  },
  {
    title: "Projects to Enhance Skills",
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Designed a portfolio website to showcase projects, integrating animations and responsive design principles.",
      "Built a blogging platform with user authentication, rich text editing, and comment functionality",
      "Created a weather app that fetches real-time weather data from an API and displays it with dynamic visuals",
      "Developed a task management app with real-time collaboration features using React.js, Node.js, and MongoDB.",
    ],
  },
  {
    title: "Full stack Developer",
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kess proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kess does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kess optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ecommerce",
    description:
      "A custom e-commerce platform with a secure checkout process, inventory management, and admin dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: '/ecommerce.png',
    source_code_link: "https://github.com/",
    webLink: 'https://ecommerce-site-7cnm.onrender.com'
  },
  {
    name: "Social Media (LinkedIn)",
    description:
      "A professional networking platform that allows users to create profiles, connect with others, share posts, and explore job opportunities",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: '/linkedin.png',
    source_code_link: "https://github.com/",
    webLink: 'https://linkedin-k5hz.onrender.com'
  },
  {
    name: "Chit Chat",
    description:
      "A real-time messaging platform enabling users to send text, media, and engage in group or one-on-one conversations seamlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: '/chit-chat.png',
    source_code_link: "https://github.com/",
    webLink: 'https://chat-app-cwg7.onrender.com'
  },
];

export { services, technologies, experiences, testimonials, projects };
