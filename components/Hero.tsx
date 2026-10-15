import Image from "next/image";
import { profile, stats } from "@/data/content";
import portrait from "@/public/bipanaa.jpg";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-blob hero-blob-a" aria-hidden="true" />
      <div className="hero-blob hero-blob-b" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="pill reveal">
            <span className="pulse" aria-hidden="true" />
            {profile.availability}
          </p>

          <h1 className="hero-title reveal" style={{ "--d": "80ms" } as React.CSSProperties}>
            Hi, I’m {profile.name},<br /> a <em>software engineer</em>
            <span className="accent">.</span>
          </h1>

          <p className="hero-lead reveal" style={{ "--d": "160ms" } as React.CSSProperties}>
            {profile.role} based in {profile.location}, crafting fast, accessible and thoughtfully
            animated web experiences with React &amp; Next.js.
          </p>

          <div className="hero-ctas reveal" style={{ "--d": "240ms" } as React.CSSProperties}>
            <a href="#work" className="btn btn-ink">
              View my work
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
            <a href={profile.resume} className="btn btn-ghost" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-portrait reveal" style={{ "--d": "200ms" } as React.CSSProperties}>
          <div className="portrait-arch">
            <Image
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 860px) 420px, 560px"
              quality={90}
              className="portrait-img"
            />
            <div className="portrait-shine" aria-hidden="true" />
          </div>

          {/* <svg className="badge" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <path id="badge-circle" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
            </defs>
            <text>
              <textPath href="#badge-circle">SOFTWARE ENGINEER ✦ FRONTEND ✦ </textPath>
            </text>
            <text x="60" y="68" textAnchor="middle" className="badge-star">
              ✦
            </text>
          </svg> */}

          <span className="chip chip-a">Creative</span>
          <span className="chip chip-b">Energetic</span>
          <span className="chip chip-c">✦ Resilient</span>
          <span className="chip chip-d">✦ Resilient</span>
        </div>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s, i) => (
            <div key={s.label} className="stat reveal" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
