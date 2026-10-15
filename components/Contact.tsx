"use client";

import { useState } from "react";
import { profile } from "@/data/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <p className="eyebrow eyebrow-center reveal">
          <span className="mono">05</span>
          <span className="eyebrow-line" aria-hidden="true" />
          Contact
        </p>

        <h2 className="contact-title reveal" style={{ "--d": "80ms" } as React.CSSProperties}>
          Let’s make something <em>lovely</em> together.
        </h2>

        <p className="contact-lead reveal" style={{ "--d": "160ms" } as React.CSSProperties}>
          I’m currently looking for full-time frontend roles and freelance projects. My inbox is
          always open. 
        </p>

        <div className="contact-actions reveal" style={{ "--d": "240ms" } as React.CSSProperties}>
          <a href={`mailto:${profile.email}`} className="btn btn-ink btn-lg">
            Say hello
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
          <button type="button" className="btn btn-ghost btn-lg" onClick={copy}>
            <span aria-live="polite">{copied ? "Copied ✓" : profile.email}</span>
          </button>
        </div>

        <ul className="socials reveal" style={{ "--d": "320ms" } as React.CSSProperties}>
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className="link-arrow">
                {s.label}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
