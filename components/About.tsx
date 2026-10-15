import { currently, principles, profile } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section section-tinted">
      <div className="container">
        <SectionHeader
          index="02"
          label="About me"
          title={
            <>
              Design-minded, <em>detail-obsessed</em>
            </>
          }
        />

        <div className="about-grid">
          <div className="about-copy reveal">
            <p className="about-lead">{profile.intro}</p>
            <p>
              My favourite work happens in the space between a Figma file and production: refining
              spacing, choreographing transitions, and making sure every screen works beautifully with a
              keyboard, a screen reader, or a slow 3G connection.
            </p>
            <p>
              I love collaborating closely with designers and backend engineers, writing clean,
              well-tested components, and leaving every codebase a little kinder than I found it.
            </p>

            <div className="currently">
              <div>
                <span className="mono">Currently learning</span>
                <strong>{currently.learning}</strong>
              </div>
              <div>
                <span className="mono">Reading</span>
                <strong>{currently.reading}</strong>
              </div>
            </div>
          </div>

          <ul className="principles">
            {principles.map((p, i) => (
              <li key={p.title} className="principle reveal" style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                <span className="principle-num mono">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
