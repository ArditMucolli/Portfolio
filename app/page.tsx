import Certifications from "@/components/certifications/Certifications";
import Footer from "@/components/footer/Footer";
import Main from "@/components/main/Main";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Main />
      {/*
      <Experience />
       */}
      <Projects />
      <Certifications />
      <Skills />
    </div>
  );
}
