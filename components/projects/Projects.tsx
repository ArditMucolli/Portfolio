"use client";

import Link from "next/link";
import Project from "./Project";
import { ProjectType } from "@/types/ProjectType";
import { useData } from "@/context/DataContext";
import { RingLoader } from "react-spinners";

const Projects = () => {
  const { projects, loading } = useData();

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <RingLoader color="#4F46E5" loading={loading} size={80} />{" "}
        </div>
      </>
    );
  }

  if (!projects) {
    return <p className="text-center text-red-500">Failed to load projects.</p>;
  }

  return (
    <section className="h-max max-w-3xl w-full p-8 mt-28 md:h-screen mx-auto flex flex-col justify-center items-center space-y-24">
      <h1 className="text-xl lg:text-3xl uppercase tracking-[10px] text-black font-extrabold">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {projects.slice(0, 3).map((project: ProjectType, index: number) => (
          <Project key={index} projects={project} />
        ))}
      </div>
      <p className="text-center text-xs text-black cursor-pointer">
        <Link href="/projects">See more..</Link>
      </p>
    </section>
  );
};

export default Projects;
