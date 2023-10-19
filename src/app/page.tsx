import Skills from "@/components/skills/Skills";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import { getSocials } from "@/utils/sanity-utis";
import Experience from "@/components/experience/Experience";

export default async function Home() {
  const socialsData = await getSocials();

  return (
    <div className="h-screen w-full overflow-x-hidden bg-[#F1F6F9]">
      <Navbar socialsData={socialsData} />
      <Main />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer social={socialsData} />
    </div>
  );
}
