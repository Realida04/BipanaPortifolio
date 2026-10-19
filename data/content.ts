

export const profile = {
  name: "Bipana Pariyar",
  firstName: "Bipana",
  role: "Frontend Software Engineer",
  location: "Kathmandu, Nepal",
  availability: "Open to Frontend Developement",
  email: "bipanapariyar04@gmail.com",
  resume: "/bipanaPariyarResume.pdf",
  intro:
    "I'm a frontend developer and designer. I love designing in Figma and build in React and Next.js, turning ideas into responsive, user-friendly web apps.",
  socials: [
    { label: "GitHub", href: "https://github.com/Realida04" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bipanapariyar" },
    { label: "Instagram", href: "https://www.instagram.com/__realida00/" },
  ],
};

export const stats = [
  { value: "1", label: " year Experience in Development" },
  { value: "5+", label: "Projects created" },
  { value: "1.5", label: "years building Websites. " },
  
];

export const marquee = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  ".NET",
  "HTML/CSS",
];

export type MockVariant = "dashboard" | "system" | "travel" | "notes";

export type Project = {
  title: string;
  kicker: string;
  description: string;
  stack: string[];
  highlights: string[];
  live: string;
  code?: string;
  tint: "sage" | "lilac" | "peach" | "blush";
  mock: MockVariant;
};

export const projects: Project[] = [
  {
    title: "Food Delivery App",
    kicker: "Plant-care analytics dashboard",
    description:
      "A app where the user can view the food available and Order it.",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    highlights: [
      "Reduced dashboard load time by 42% with route-level code splitting",
      "Fully keyboard-navigable charts with screen-reader summaries",
    ],
    live: "https://github.com/Realida04/E-Commerce-Website",
    
    tint: "sage",
    mock: "dashboard",
  },
  {
    title: "Lumen UI",
    kicker: "Design system & component library",
    description:
      "A themeable component library of 40+ accessible primitives, documented in Storybook and published to npm — the single source of truth for a product team’s UI.",
 
    year: "2025",
    stack: ["React", "TypeScript", "Storybook", "Radix"],
    highlights: [
      "Design tokens synced from Figma to code",
      "WCAG 2.2 AA across every component, tested with axe",
    ],
    live: "https://github.com/Realida04/E-Commerce-Website",
    code: "#",
    tint: "lilac",
    mock: "system",
  },
  {
    title: "Jadoo",
    kicker: " Static Travel Website ",
    description:
      "Discover amazing destinations, explore new cultures, and create unforgettable memories. Your next adventure starts here!",

 
    stack: ["Next.js", "Tailwind.css"],
    highlights: [
      "Shared-element page transitions with zero layout shift",
      "Checkout completion improved in usability tests",
    ],
    live: "https://github.com/Realida04/TravelWebsite",
    code: "#",
    tint: "peach",
    mock: "travel",
  },
  {
    title: "Order.UK",
    kicker: "Online Food Delivery App",
    description:
      "A Online based food delivery app, where the user can order their prefered food. ",
    year: "",
    stack: ["Next.js", "Tailwindcss"],
    highlights: [
      "user can order the available food",
      
    ],
    live: "https://github.com/Realida04/E-Commerce-Website",
    code: "#",
    tint: "blush",
    mock: "notes",
  },
];

export const principles = [
  {
    title: "Passion for Development",
    body: "I enjoy turning ideas into functional, user-friendly web experiences. I’m passionate about frontend development and continuously improving my skills in React, Next.js, and modern web technologies.",
  },
  {
    title: "Learning & Growth",
    body: "As an Information Technology student, I believe every challenge is an opportunity to learn. I’m expanding my knowledge of backend development, APIs, and database management to become a more versatile developer.",
  },
  {
    title: "Creativity & Problem-Solving",
    body: "I love exploring creative ideas and finding practical solutions to problems. I aim to combine thoughtful design with clean, maintainable code to build meaningful digital experiences.",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    group: "Frameworks & Tools",
    items: ["React.js", "Next.js (App Router)", "Tailwindcss", "Figma"]
  },
  
  {
    group: "Version Control",
    items: [ "Git & GitHub"],         
  },
  {
    group: "Learning & Exposure",
    items: [".NET", "python"],
  },
];

export const journey = [
  {
    period: "Sept 2025 — Dec 2025",
    title: "Solution Developer (Intern)",
    org: "Inspire Nepal",
    body: "Developed responsive React applications, integrated REST APIs, and worked with SQL databases while gaining experience in .NET, Git, and collaborative software development."
  },
  {
    period: "Jan 2024 — Dec 2024",
    title: "Admin Assistant",
    org: "Focus",
    body: "Assist in frontdesk work.",
  },
  {
    period: "2022 — 2026",
    title: "Bachelor in Information Technology",
    org: "Purbanchal University",
    body: "Focused on human-computer interaction and web technologies. Led the college tech club’s design team.",
  },
];

