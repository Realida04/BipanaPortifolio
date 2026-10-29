import type { MockVariant } from "@/data/content";

// Hand-built, CSS-only product previews. Replace with real screenshots
// (e.g. <img src="/projects/bloom.png" />) whenever you have them.

const L = ({ w, s }: { w: string; s?: "lg" | "sm" }) => (
  <span className={`m-line ${s ? `m-line-${s}` : ""}`} style={{ width: w }} />
);

// function Dashboard() {
//   const bars = [38, 62, 48, 80, 56, 92, 70, 64, 86, 52, 74, 98];
//   return (
//     <div className="mk mk-dash">
//       <aside className="mk-side">
//         <span className="mk-logo" />
//         <L w="70%" />
//         <L w="55%" />
//         <L w="62%" />
//         <L w="48%" />
//       </aside>
//       <div className="mk-main">
//         <div className="mk-head">
//           <span className="mk-text">Good morning, Bipana 🌿</span>
//           <span className="mk-avatar" />
//         </div>
//         <div className="mk-tiles">
//           {[
//             ["Humidity", "68%"],
//             ["Light", "12h"],
//             ["Plants", "24"],
//           ].map(([k, v]) => (
//             <div key={k} className="mk-tile">
//               <span className="mk-k">{k}</span>
//               <span className="mk-v">{v}</span>
//             </div>
//           ))}
//         </div>
//         <div className="mk-chart">
//           {bars.map((h, i) => (
//             <span key={i} style={{ height: `${h}%` }} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function System() {
//   return (
//     <div className="mk mk-system">
//       <div className="mk-cell mk-type">
//         <span className="mk-aa">Aa</span>
//         <span className="mk-k">Instrument Serif · 72</span>
//       </div>
//       <div className="mk-cell mk-swatches">
//         {["var(--accent)", "#C9B8EE", "#F1DFA8", "#A9B8A0", "#1F1A1D"].map((c) => (
//           <span key={c} style={{ background: c }} />
//         ))}
//       </div>
//       <div className="mk-cell mk-buttons">
//         <span className="mk-btn">Primary</span>
//         <span className="mk-btn mk-btn-ghost">Ghost</span>
//       </div>
//       <div className="mk-cell mk-controls">
//         <span className="mk-toggle" />
//         <span className="mk-toggle mk-toggle-off" />
//         <span className="mk-check" />
//       </div>
//       <div className="mk-cell mk-input">
//         <span className="mk-k">Email</span>
//         <span className="mk-field">hello@lumen.ui</span>
//       </div>
//     </div>
//   );
// }

function Travel() {
  return (
    <div className="mk mk-travel">
      <div className="mk-hero">
        <span className="mk-hero-title">Jadoo</span>
        <span className="mk-search">
          <span>Best destination around the World</span>
          <span className="mk-search-btn">Search</span>
        </span>
      </div>
      <div className="mk-cards">
        {["ROme, Italy", "London, Uk", "Full Europe"].map((t, i) => (
          <div key={t} className="mk-card">
            <span className={`mk-img mk-img-${i}`} />
            <span className="mk-text">{t}</span>
            <L w="55%" s="sm" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Notes() {
  return (
    <div className="mk mk-notes">
      <aside className="mk-list">
        {["Home", "Resturant", "Special Offers", "Track Order"].map((t, i) => (
          <div key={t} className={`mk-note ${i === 1 ? "is-active" : ""}`}>
            <span className="mk-text">{t}</span>
            <L w="70%" s="sm" />
          </div>
        ))}
      </aside>
      <div className="mk-editor">
        <span className="mk-h">Order.UK</span>
        <p>Online Food Delivery App</p>
        <L w="92%" />
        <L w="84%" />
        <L w="60%" />
        <div className="mk-todo">
          <span className="mk-check is-on" /> <L w="50%" />
        </div>
        <div className="mk-todo">
          <span className="mk-check" /> <L w="42%" />
        </div>
        <span className="mk-caret" />
      </div>
    </div>
  );
}

const variants: Record<MockVariant, () => React.JSX.Element> = {
  
  travel: Travel,
  notes: Notes,
};

export default function Mockup({ variant }: { variant: MockVariant }) {
  const Inner = variants[variant];
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock-bar">
        <span />
        <span />
        <span />
        <span className="mock-url" />
      </div>
      <Inner />
    </div>
  );
}
