import { journey } from "@/data/content";
import SectionHeader from "./SectionHeader";

export default function Journey() {
  return (
    <section id="journey" className="section section-tinted">
      <div className="container">
        <SectionHeader
          index="04"
          label="Journey"
          title={
            <>
              Where I’ve been
              <br />
              <span className="keep-line">
                <em>growing</em> and <em>refining</em> myself
              </span>
            </>
          }
        />

        <ol className="timeline">
          {journey.map((j, i) => (
            <li key={j.title} className="timeline-item reveal" style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
              <span className="timeline-period mono">{j.period}</span>
              <div className="timeline-role">
                <h3>{j.title}</h3>
                <span>{j.org}</span>
              </div>
              <p>{j.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
