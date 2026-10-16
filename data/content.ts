// All portfolio content lives here. Edit this file to make the site yours.

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
  role: string;
  year: string;
  stack: string[];
  highlights: string[];
  live?: string;
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
    role: "Design & Frontend",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    highlights: [
      "Reduced dashboard load time by 42% with route-level code splitting",
      "Fully keyboard-navigable charts with screen-reader summaries",
    ],
    live: "#",
    code: "#",
    tint: "sage",
    mock: "dashboard",
  },
  {
    title: "Lumen UI",
    kicker: "Design system & component library",
    description:
      "A themeable component library of 40+ accessible primitives, documented in Storybook and published to npm — the single source of truth for a product team’s UI.",
    role: "Frontend Engineering",
    year: "2025",
    stack: ["React", "TypeScript", "Storybook", "Radix"],
    highlights: [
      "Design tokens synced from Figma to code",
      "WCAG 2.2 AA across every component, tested with axe",
    ],
    live: "#",
    code: "#",
    tint: "lilac",
    mock: "system",
  },
  {
    title: "Wander",
    kicker: "Travel booking experience",
    description:
      "An immersive booking flow for boutique stays in the Himalayas — rich imagery, fluid transitions and a checkout that feels as relaxing as the trip itself.",
    role: "Frontend & Interaction",
    year: "2025",
    stack: ["Next.js", "Framer Motion", "Zustand", "Mapbox"],
    highlights: [
      "Shared-element page transitions with zero layout shift",
      "Checkout completion improved in usability tests",
    ],
    live: "#",
    code: "#",
    tint: "peach",
    mock: "travel",
  },
  {
    title: "Kalam",
    kicker: "Offline-first markdown notes",
    description:
      "A distraction-free notes app that works fully offline. Writing syncs in the background, and the editor stays snappy even with thousands of notes.",
    role: "Solo project",
    year: "2024",
    stack: ["React", "IndexedDB", "PWA", "Vite"],
    highlights: [
      "Installable PWA with background sync",
      "Virtualised note list handles 10k+ items smoothly",
    ],
    live: "#",
    code: "#",
    tint: "blush",
    mock: "notes",
  },
];

export const principles = [
  {
    title: "Design to code",
    body: "I design in Figma, then build it pixel for pixel in React and Next.js.",
  },
  {
    title: "Hands-on experience",
    body: "Built responsive React apps and integrated REST APIs as an intern at Inspire Nepal.",
  },
  {
    title: "Always learning",
    body: "Finishing my BIT at Purbanchal University while exploring .NET and Python.",
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
    body: "Assist in the feontdesk work.",
  },
  {
    period: "2022 — 2026",
    title: "Bachelor in Information Technology",
    org: "Purbanchal University",
    body: "Focused on human-computer interaction and web technologies. Led the college tech club’s design team.",
  },
];

