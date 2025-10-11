import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Frameworks from "@/components/Frameworks";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="starfield"></div>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Frameworks />
        <Certifications />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}