"use client";

import Skills from "@/components/skills/Skills";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import Certifications from "@/components/certifications/Certifications";
import Experience from "@/components/experience/Experience";
import { useData } from "@/context/DataContext";

export default function Home() {
  const { socials } = useData();

  return (
    <div className="h-screen w-full overflow-x-hidden bg-[#F1F6F9]">
      <Navbar socialsData={socials} />
      <Main />
      <Experience />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
      <Footer social={socials} />
    </div>
  );
}
