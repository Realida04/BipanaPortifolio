import { projects } from "@/data/content";
import SectionHeader from "./SectionHeader";
import Mockup from "./Mockup";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeader
          index="01"
          label="Projects"
          title={
            <>
              Things I’ve <em>designed</em> &amp; built
            </>
          }
          aside={<p> Few projects I’m proud of </p>}
        />

        <div className="projects">
          {projects.map((p, i) => (
            <article key={p.title} className="project">
              <div
                className="project-media reveal"
                style={{ "--tint": `var(--tint-${p.tint})` } as React.CSSProperties}
              >
                <Mockup variant={p.mock} />
              </div>

              <div className="project-info reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
                <p className="project-num mono">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </p>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-kicker">{p.kicker}</p>
                <p className="project-desc">{p.description}</p>

                <ul className="project-highlights">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <dl className="project-meta">
                  <div>
                    <dt>Role</dt>
                    <dd>{p.role}</dd>
                  </div>
                  <div>
                    <dt>Year</dt>
                    <dd>{p.year}</dd>
                  </div>
                </dl>

                <ul className="tags" aria-label="Tech stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {p.live && (
                    <a href={p.live} className="link-arrow">
                      Live site
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} className="link-arrow">
                      Source code
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
