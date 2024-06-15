"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { getProject, getSocials } from "@/utils/sanity-utis";
import { ProjectType } from "@/app/types/ProjectsType";
import { Skills } from "@/app/types/SkillType";
import Motion from "@/components/motion/Motion";
import { RingLoader } from "react-spinners";

type P = {
  params: { _id: string };
};

const ProjectPage = ({ params }: P) => {
  const { _id } = params;

  const [socialData, setSocialData] = useState<any>(null);
  const [projectData, setProjectData] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [socialDataResponse, projectDataResponse] = await Promise.all([
          getSocials(),
          getProject(_id),
        ]);
        setSocialData(socialDataResponse);
        setProjectData(projectDataResponse);
      } catch (error) {
        setError("Error fetching data: " + error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [_id]);

  if (loading) {
    return (
      <>
        <Navbar socialsData={socialData} />
        <div className="flex justify-center items-center h-screen">
          <RingLoader color="#4F46E5" loading={loading} size={80} />{" "}
        </div>
        <Footer social={socialData} />
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!socialData || !projectData) {
    return <div>Data not available</div>;
  }

  return (
    <section className="w-full bg-[#F1F6F9]">
      <Navbar socialsData={socialData} />
      <Motion delay={1} direction="down">
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4">
          <h1 className="font-extrabold text-3xl">{projectData.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-violet-500">
              <p>Created at:</p>
              <p className="font-bold">
                {projectData._createdAt.toString().slice(0, 10)}
              </p>
            </div>
            <div className="ml-auto flex mb-5 space-x-4">
              {projectData.demo && (
                <button className="text-[#F1F6F9] md:font-bold bg-violet-500 px-2 md:px-4 py-2 rounded-lg hover:bg-violet-300 text-sm">
                  <a
                    href={projectData.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </button>
              )}
              {projectData.code && (
                <button className="text-[#F1F6F9] md:font-bold bg-violet-500 px-2 md:px-4 py-2 rounded-lg hover:bg-violet-300 text-sm">
                  <a
                    href={projectData.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </button>
              )}
            </div>
          </div>
          <div className="w-full md:max-w-200 flex items-center justify-center">
            <Image
              src={projectData.image}
              alt={projectData.title}
              className="w-full object-cover border-2 border-violet-500"
              width={500}
              height={500}
              style={{ maxWidth: "800px", textAlign: "center" }}
            />
          </div>
          <p>{projectData.description}</p>
          <div className="flex items-center space-x-4 text-violet-500">
            <h3>Tech used:</h3>
            <div className="flex items-center space-x-2 text-sm font-bold">
              {projectData.tech.map((tech: Skills, index: number) => (
                <p key={index} className="bg-violet-200 rounded-lg p-1">
                  {tech.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Motion>
      <Footer social={socialData} />
    </section>
  );
};

export default ProjectPage;
