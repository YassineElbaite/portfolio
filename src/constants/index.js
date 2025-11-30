import {
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
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  spring,
  wheater,
  sql,
  authProjectImage,
  image,
} from "../assets";
import xa from "../assets/company/xa.png";
export { xa };
import wehelp from "../assets/company/wehelp.jpeg";
export { wehelp };

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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML/DL & Data Science",
    icon: creator, // you can replace 'creator' with a custom icon if you have one (e.g., ai, brain, data)
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
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Spring Boot",
    icon: spring,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Stage Professionnel",
    company_name: "Bold Systeme",
    icon: xa, // or replace with your own logo if you have one
    iconBg: "#383E56",
    date: "Juin 2024 – Octobre 2024",
    points: [
      "Contribué au développement de solutions web intégrant des fonctionnalités d'intelligence artificielle.",
      "Conçu et implémenté des algorithmes d'apprentissage automatique pour l'analyse de données.",
      "Intégré des modèles d'IA dans des applications web afin d'améliorer les performances et les fonctionnalités.",
      "Participé à l'optimisation et à l'amélioration continue des systèmes existants, renforçant mes compétences en développement Full-Stack et en implémentation de solutions d'IA.",
    ],
  },

  {
    title: "Stage de Fin d’Études",
    company_name: "WeHelp - Meknès",
    icon: wehelp, // you can replace this with your own logo if available
    iconBg: "#E6DEDD",
    date: "Avril 2024 – Juin 2024",
    points: [
      "Développement d’un modèle de Machine Learning pour la détection d’attaques de phishing basé sur l’analyse des URL.",
      "Application de diverses techniques de Machine Learning pour créer, entraîner et évaluer des modèles prédictifs.",
      "Mise en place d’un pipeline d’analyse permettant de distinguer les URL malveillantes des URL légitimes.",
      "Participation à la documentation du processus et à l’optimisation des performances du modèle final.",
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
    name: "Global Weather App",
    description:
      "🌤️ Global Weather App is a simple and interactive React application that allows users to search for cities around the world, view the current weather, see a 7-day forecast, and switch between light and dark mode. Built with React, Tailwind CSS, and WeatherAPI.com.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
      { name: "api-integration", color: "green-text-gradient" },
    ],
    image: wheater, // (you can import your image at the top)
    source_code_link:
      "https://github.com/YassineElbaite/Global-Weather-App.git",
    live_demo_link: "https://global-weather-app-omega.vercel.app/",
  },
  {
    name: "Spring React Auth",
    description:
      "Full-stack authentication system using Spring Boot, Spring Security, Spring MVC, MongoDB for the backend, and React for the frontend. Users can register, log in, and access a protected dashboard with role-based access.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "springsecurity",
        color: "orange-text-gradient",
      },
    ],
    image: authProjectImage, // make sure you import or define this image in your project
    source_code_link:
      "https://github.com/YassineElbaite/Spring_React_Auth_Project.git",
  },
  {
    name: "React Coffe-Store",
    description:
      "This React coffee-store project is a modern, responsive e‑commerce template for cafés and coffee lovers It provides a full product catalog of coffee equipment and beans with category filters, search, detailed product views, and a shopping cart that supports quantity changes and checkout flow in Moroccan dirhams. ",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: image, // (you can import your image at the top)
    source_code_link: "https://github.com/YassineElbaite/coffee-store.git",
    live_demo_link: "https://coffee-store-lime.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
