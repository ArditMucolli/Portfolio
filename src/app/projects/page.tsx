"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/projects/Project";
import Footer from "@/components/footer/Footer";
import { useData } from "@/context/DataContext";
import { ProjectType } from "../types/ProjectsType";
import Motion from "@/components/motion/Motion";

const ProjectsPage = () => {
  const { projects, socials } = useData();

  if (!projects || !socials) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full bg-[F1F6f9]">
      <Navbar socialsData={socials} />
      <Motion delay={1} direction="down">
        <div className="max-w-7xl min-h-screen mx-auto p-5">
          <div className="w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map((project: ProjectType, index: number) => (
              <Project key={index} projects={project} />
            ))}
          </div>
        </div>
      </Motion>
      <Footer social={socials} />
    </section>
  );
};

export default ProjectsPage;
