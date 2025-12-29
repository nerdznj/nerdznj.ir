import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { About, Skills, Projects, Contact } from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
