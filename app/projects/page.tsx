"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/projects/Project";
import Footer from "@/components/footer/Footer";
import { useData } from "@/context/DataContext";
import { ProjectType } from "@/types/ProjectType";
import { RingLoader } from "react-spinners";

const ProjectsPage = () => {
  const { projects, socials } = useData();

  if (!projects || !socials) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <RingLoader
            color="#4F46E5"
            loading={!projects || !socials}
            size={80}
          />{" "}
        </div>
        <Footer />
      </>
    );
  }

  return (
    <section className="w-full bg-[F1F6f9]">
      <Navbar />
      <div className="max-w-7xl min-h-screen mx-auto p-5">
        <div className="w-full p-5 my-4 md:my-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project: ProjectType, index: number) => (
            <Project key={index} projects={project} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProjectsPage;
