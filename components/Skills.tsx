import { skills } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          index="03"
          label="Toolkit"
          title={
            <>
              The tools behind the <em>craft</em>
            </>
          }
          aside={<p>A modern, battle-tested stack chosen for speed, accessibility and joy.</p>}
        />

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={s.group} className="skill-card reveal" style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
