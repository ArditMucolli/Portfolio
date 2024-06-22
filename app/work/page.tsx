"use client";

import React from "react";
import Experience from "@/components/work/Experience";
import { useData } from "@/context/DataContext";
import { WorkType } from "@/types/WorkType";
import { RingLoader } from "react-spinners";

const WorksPage = () => {
  const { experiences, socials } = useData();

  if (!experiences || !socials) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader
          color="#4F46E5"
          loading={!experiences || !socials}
          size={80}
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className=" max-w-3xl w-full p-8">
        <h1 className="mt-32 text-center text-xl lg:text-2xl uppercase tracking-[10px] text-black font-extrabold">
          My Experiences
        </h1>
        <div className="max-w-7xl min-h-screen mx-auto p-5 flex justify-center">
          <div className="w-full p-5 my-4 md:my-16 ">
            {experiences.map((project: WorkType, index: number) => (
              <Experience key={index} experiences={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorksPage;
