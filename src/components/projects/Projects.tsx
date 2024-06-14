"use client";

import Link from "next/link";
import Project from "./Project";
import { ProjectType } from "@/app/types/ProjectsType";
import { useData } from "@/context/DataContext";

const Projects = () => {
  const { projects, loading } = useData();

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!projects) {
    return <p className="text-center text-red-500">Failed to load projects.</p>;
  }

  return (
    <section className="h-max mt-28 md:h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24">
      <h1 className="text-xl lg:text-3xl uppercase tracking-[10px] text-violet-700 font-extrabold">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project: ProjectType, index: number) => (
          <Project key={index} projects={project} />
        ))}
      </div>
      <p className="text-center text-xs text-violet-500 cursor-pointer">
        <Link href="/projects">See more..</Link>
      </p>
    </section>
  );
};

export default Projects;
