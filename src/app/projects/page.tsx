import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/projects/Project";
import { getProjects, getSocials } from "@/utils/sanity-utis";
import { Projects } from "../types/Projects";

type Props = {};

const ProjectsPage = async (props: Props) => {
  const socialData = await getSocials();
  const projectData: Projects[] = await getProjects();
  return (
    <section className="w-full bg-[F1F6f9] ">
      <Navbar socialsData={socialData} />
      <div className="max-w-7xl min-h-screen mx-auto p-5">
        <div className="w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {projectData.map((projects: Projects, index: number) => (
            <Project key={index} projects={projects} />
          ))}
        </div>
      </div>
      <Footer social={socialData} />
    </section>
  );
};

export default ProjectsPage;
