"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { RingLoader } from "react-spinners";
import { useData } from "@/context/DataContext";

type P = {
  params: { _id: string };
};

const ProjectPage = ({ params }: P) => {
  const _id = params._id;

  const [loading, setLoading] = useState(true);

  const data = useData();

  const projects = useMemo(() => data?.projects ?? [], [data]);

  useEffect(() => {
    if (projects.length > 0) {
      setLoading(false);
    }
  }, [projects]);

  const projectData = projects.find((project) => project._id === _id);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <RingLoader color="#4F46E5" loading={loading} size={80} />{" "}
        </div>
      </>
    );
  }

  if (!projectData) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div>Project not found.</div>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-white py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center">
              <Image
                src={projectData.image}
                alt={projectData.title}
                className="rounded-lg shadow-lg"
                width={500}
                height={500}
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 mt-14">
              {projectData.title}
            </h1>
            <div className="flex items-center space-x-2 text-sm text-black">
              <p>Created at:</p>
              <p className="font-bold">
                {projectData._createdAt.toString().slice(0, 10)}
              </p>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              {projectData.description}
            </p>
            {projectData.demo && (
              <div className="flex justify-center">
                <a
                  href={projectData.demo}
                  target="_blank"
                  className=" text-black font-semibold py-2 px-4 rounded-lg"
                >
                  View Project
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
