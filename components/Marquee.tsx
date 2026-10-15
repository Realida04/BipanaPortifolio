import { marquee } from "@/data/content";

export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {marquee.map((m) => (
        <li key={m}>
          {m}
          <span className="star" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" role="region" aria-label="Technologies I work with">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
