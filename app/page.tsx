import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-[#1f1f1f]">
          <About />
        </div>
        <div className="border-t border-[#1f1f1f]">
          <Experience />
        </div>
        <div className="border-t border-[#1f1f1f]">
          <Skills />
        </div>
        <div className="border-t border-[#1f1f1f]">
          <Projects />
        </div>
        <div className="border-t border-[#1f1f1f]">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
