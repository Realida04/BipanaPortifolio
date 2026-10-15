export default function SectionHeader({
  index,
  label,
  title,
  aside,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <div className="section-head">
      <p className="eyebrow reveal">
        <span className="mono">{index}</span>
        <span className="eyebrow-line" aria-hidden="true" />
        {label}
      </p>
      <div className="section-head-row">
        <h2 className="section-title reveal" style={{ "--d": "80ms" } as React.CSSProperties}>
          {title}
        </h2>
        {aside && (
          <div className="section-aside reveal" style={{ "--d": "160ms" } as React.CSSProperties}>
            {aside}
          </div>
        )}
      </div>
    </div>
  );
}
