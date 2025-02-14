import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/NavBar";
import { Projects } from "@/components/Projects";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Skills } from "@/components/Skills";

// src/app/page.tsx
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
