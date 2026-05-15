import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import DesignProcess from "./components/homepage/process";
import Experience from "./components/homepage/experience";

export default async function Home() {
  return (
    <div suppressHydrationWarning className="bg-[#0B0F19]">
      <HeroSection />
      <AboutSection />
      <DesignProcess />
      <Skills />
      <Experience />
      <Projects />
      <ContactSection />
    </div>
  )
};