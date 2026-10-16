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
            Hi, I’m {profile.name},<br /> A <em>Software Engineer</em>
            <span className="accent"></span>
          </h1>

          <p className="hero-lead reveal" style={{ "--d": "160ms" } as React.CSSProperties}>
           <b>Frontend Developer</b>  and a <b>Designer</b> who loves building reponsive, user friendly and visually appealing web applications. 
            
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

          <span className="chip chip-a">Creative</span>
          <span className="chip chip-b">Energetic</span>
          <span className="chip chip-c">✦ Resilient</span>
        </div>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s, i) => (
            <div key={s.label} className="stat reveal text-center " style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
