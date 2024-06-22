"use client";

import { useState, useEffect, useMemo } from "react";
import { RingLoader } from "react-spinners";
import { useData } from "@/context/DataContext";
import { WorkType } from "@/types/WorkType";

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

  const experiencesData = experiences.find((project) => project._id === _id);

  function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <RingLoader color="#4F46E5" loading={loading} size={80} />{" "}
        </div>
      </>
    );
  }

  if (!experiencesData) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div>Project not found.</div>
        </div>
      </>
    );
  }

  return (
    <div className="mt-20 flex flex-col min-h-screen">
      <section className=" max-w-3xl w-full p-8 mx-auto text-center py-16 mt-10">
        <div className="">
          <h2 className="text-3xl font-semibold mb-4 text-black">
            {experiencesData.title}
          </h2>
          <p className="text-gray-600 font-semibold">
            {experiencesData.company}
          </p>
          <p className="text-gray-600">
            {formatDate(experiencesData.startDate)} -{" "}
            {experiencesData.endDate
              ? formatDate(experiencesData.endDate)
              : "Present"}
          </p>
          <p className="text-gray-800 mt-4 leading-6">
            {experiencesData.description}
          </p>
          {experiencesData.tasks && experiencesData.tasks.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-black">
                Responsibilities Spotlight
              </h3>
              {experiencesData.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="mt-2">
                  <p className="text-sm text-gray-800">{task.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
