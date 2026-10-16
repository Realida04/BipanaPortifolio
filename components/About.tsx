import { principles, profile } from "@/data/content";
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

        <p className="about-lead reveal">{profile.intro}</p>

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
    </section>
  );
}
