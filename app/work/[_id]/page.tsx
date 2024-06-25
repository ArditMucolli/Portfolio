"use client";

import { useState, useEffect, useMemo } from "react";
import { RingLoader } from "react-spinners";
import { useData } from "@/context/DataContext";

type P = {
  params: { _id: string };
};

const WorkPage = ({ params }: P) => {
  const _id = params._id;
  const [loading, setLoading] = useState(true);
  const data = useData();
  const experiences = useMemo(() => data?.experiences ?? [], [data]);

  useEffect(() => {
    if (experiences.length > 0) {
      setLoading(false);
    }
  }, [experiences]);

  const experience = experiences.find((project) => project._id === _id);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  // Loading State
  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <RingLoader color="#4F46E5" loading={loading} size={80} />{" "}
        </div>
      </>
    );
  }

  // Error State if no data found
  if (!experience) {
    return (
      <div className="flex flex-col justify-center items-center h-screen  p-4">
        <div className="text-center text-gray-700">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p>
            The project you are looking for might have been removed or does not
            exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 flex flex-col min-h-screen ">
      <section className="max-w-3xl w-full p-8 mx-auto text-center py-16 mt-10">
        <div className="">
          <h2 className="text-3xl font-semibold mb-4 text-black">
            {experience.title}
          </h2>
          <p className="text-gray-600 font-semibold">{experience.company}</p>
          <p className="text-gray-600">
            {formatDate(experience.startDate)} -{" "}
            {experience.endDate ? formatDate(experience.endDate) : "Present"}
          </p>
          <div className="mt-6 text-left">
            <p className="text-lg text-gray-800 leading-7  p-4">
              {experience.description}
            </p>
          </div>
          {experience.tasks && experience.tasks.length > 0 && (
            <div className="mt-10 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Responsibilities Spotlight
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-800 p-4">
                {experience.tasks.map((task, index) => (
                  <li key={index} className="text-lg flex items-start">
                    <span className="mr-2 mt-1 text-green-500">*</span>{" "}
                    {task.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
