# Bipana Pariyar — Portfolio

A personal portfolio built with **Next.js 16 (App Router)**, **React 19** and **TypeScript**, with hand-written CSS (no UI framework).

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Make it yours

Almost everything lives in **`data/content.ts`**: name, email, socials, stats, projects, skills, journey.
The current text is **sample content**. Replace it with real details before sharing.

- **Photo:** put `bipana.jpg` in `public/`, then in `components/Hero.tsx` swap the `Bp` monogram for
  `<img src="/bipana.jpg" alt="Bipana Pariyar" />`.
- **Résumé:** put `resume.pdf` in `public/`.
- **Project screenshots:** the previews in `components/Mockup.tsx` are drawn in CSS. Replace them with real
  screenshots when you have them, and set the `live` / `code` links in `content.ts`.
- **Colours & fonts:** these are the tokens at the top of `app/globals.css`, and fonts are set in `app/layout.tsx`.

## Features

- Light / dark theme (follows the system setting, remembers your choice, no flash on load)
- Scroll-reveal animations, marquee, spinning badge, a soft glow that follows the cursor
- Fully responsive, keyboard accessible, and respects `prefers-reduced-motion`
- Statically generated, so it deploys to Vercel with zero config
