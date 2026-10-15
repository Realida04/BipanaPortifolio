// All portfolio content lives here. Edit this file to make the site yours.

export const profile = {
  name: "Bipana Pariyar",
  firstName: "Bipana",
  role: "Frontend Software Engineer",
  location: "Kathmandu, Nepal",
  availability: "Open to frontend roles — 2026",
  email: "bipanapariyar04@gmail.com",
  resume: "/bipanaPariyarResume.pdf",
  intro:
    "I'm a frontend software engineer who sits right where design meets engineering. I turn ideas into fast, accessible, beautifully detailed interfaces. The kind people enjoy using without ever noticing why.",
  socials: [
    { label: "GitHub", href: "https://github.com/Realida04" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bipanapariyar" },
    { label: "Instagram", href: "https://www.instagram.com/__realida00/" },
  ],
};

export const stats = [
  { value: "1", label: " year Experience in Development" },
  { value: "5+", label: "Projects created" },
  { value: "1.5", label: "years building for the web" },
  { value: "∞", label: "cups of chiya, lovingly consumed" },
];

export const marquee = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Learning .NET",
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
    title: "Pixel-precise",
    body: "Spacing, rhythm and type scale matter. I sweat the 1px details so the whole feels effortless.",
  },
  {
    title: "Accessible by default",
    body: "Semantic HTML, focus states and contrast aren’t extras — they’re where I start.",
  },
  {
    title: "Built to perform",
    body: "Fast first paint, lean bundles and smooth 60fps motion on every device.",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    group: "Frameworks",
    items: ["React.js", "Next.js"],
  },
  {
    group: "Styling & Motion",
    items: ["Tailwind CSS", "Boolstrap"]
  },
  {
    group: "Tooling & Craft",
    items: ["Figma", "Git & GitHub"],
  },
  {
    group: "Learning & Exposure",
    items: [".NET", "python"],
  },
];

export const journey = [
  {
    period: "Sept 2025 — Dec 2025",
    title: "Internship",
    org: "Inspire Nepal",
    body: "Built a softwate with react.js and .NET for our community Partner. Introduced a shared component library that cut new-page build time in half.",
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

export const currently = {
  learning: "WebGL & three.js",
  reading: "Refactoring UI",
};
