import Link from "next/link";
import Project from "./Project";
import { Projects } from "@/app/types/ProjectsType";
import { getProjects } from "@/utils/sanity-utis";

const Projects = async () => {
  const projectData: Projects[] = await getProjects();
  return (
    <section className="h-max mt-28 md:h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24">
      <h1 className="text-2xl uppercase tracking-[20px] text-violet-500">
        projects
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectData.slice(0, 3).map((projects: Projects, index: number) => (
          <Project key={index} projects={projects} />
        ))}
      </div>
      <p className="text-center text-xs text-violet-500 cursor-pointer">
        <Link href="/projects">See more..</Link>
      </p>
    </section>
  );
};

export default Projects;
