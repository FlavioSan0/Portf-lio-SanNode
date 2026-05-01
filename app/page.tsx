import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectsSection from "@/components/ProjectsSection";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111F] text-[#F5FBFF]">
      <Header />
      <Hero />
      <About />
      <Services />
      <ProjectsSection />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}