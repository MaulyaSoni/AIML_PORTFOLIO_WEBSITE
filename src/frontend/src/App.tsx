import About from "./components/portfolio/About";
import Certifications from "./components/portfolio/Certifications";
import Contact from "./components/portfolio/Contact";
import Education from "./components/portfolio/Education";
import Experience from "./components/portfolio/Experience";
import Footer from "./components/portfolio/Footer";
import Hero from "./components/portfolio/Hero";
import Navbar from "./components/portfolio/Navbar";
import Projects from "./components/portfolio/Projects";
import Skills from "./components/portfolio/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
