import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()}. Designed &amp; built by Realida.
        </p>
        <a href="#top" className="link-arrow">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
