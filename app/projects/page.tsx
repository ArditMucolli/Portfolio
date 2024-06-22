"use client";

import React from "react";
import Project from "@/components/projects/Project";
import { useData } from "@/context/DataContext";
import { ProjectType } from "@/types/ProjectType";
import { RingLoader } from "react-spinners";

const ProjectsPage = () => {
  const { projects, socials } = useData();

  if (!projects || !socials) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader color="#4F46E5" loading={!projects || !socials} size={80} />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className=" max-w-3xl w-full p-8">
        <div className="max-w-7xl min-h-screen mx-auto p-5 flex justify-center">
          <div className="w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map((project: ProjectType, index: number) => (
              <Project key={index} projects={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
