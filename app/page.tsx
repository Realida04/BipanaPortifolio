import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <CursorGlow />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
