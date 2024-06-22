"use client";

import Link from "next/link";
import Experience from "./Experience";
import { WorkType } from "@/types/WorkType";
import { useData } from "@/context/DataContext";
import { RingLoader } from "react-spinners";

const Experiences = () => {
  const { experiences, loading } = useData();

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <RingLoader color="#4F46E5" loading={loading} size={80} />{" "}
        </div>
      </>
    );
  }

  if (!experiences) {
    return <p className="text-center text-red-500">Failed to load projects.</p>;
  }

  return (
    <section className="h-max max-w-3xl w-full p-8 mt-28 md:h-screen mx-auto flex flex-col justify-center items-center space-y-24">
      <h1 className="text-xl lg:text-3xl uppercase tracking-[10px] text-black font-extrabold">
        Experiences
      </h1>
      <div className="">
        {experiences.slice(0, 3).map((project: WorkType, index: number) => (
          <Experience key={index} experiences={project} />
        ))}
      </div>
      <p className="text-center text-xs text-black cursor-pointer">
        <Link href="/projects">See more..</Link>
      </p>
    </section>
  );
};

export default Experiences;
