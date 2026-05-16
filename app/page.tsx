import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectsSection from "@/components/ProjectsSection";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedBackground from "@/components/background/AnimatedBackground";

export default function Home() {
  return (
    <>
      <Header />
      <AnimatedBackground variant="hero" />

      <main>
        <Hero />
        <About />
        <Services />
        <ProjectsSection />
        <Process />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}