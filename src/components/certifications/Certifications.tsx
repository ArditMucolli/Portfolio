"use client";

import { useData } from "@/context/DataContext";
import { CertificationsType } from "@/app/types/CertificationsType";
import { RingLoader } from "react-spinners";

const Certifications = () => {
  const { certifications, loading } = useData();

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <RingLoader color="#4F46E5" loading={loading} size={80} />{" "}
        </div>
      </>
    );
  }

  const certificationsData: CertificationsType[] = certifications || [];

  const sortedCertificationData = certificationsData.sort((a, b) => {
    const startDateA = new Date(a.startDate);
    const startDateB = new Date(b.startDate);
    return Number(startDateB) - Number(startDateA);
  });

  function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <section className="h-max mt-10 md:h-screen max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24">
      <h1 className="text-xl lg:text-3xl uppercase tracking-[10px] text-violet-700 font-extrabold">
        Certifications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 m-5">
        {sortedCertificationData.map((certification, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-md bg-white flex flex-col"
          >
            <div>
              <h2 className="text-lg font-semibold mb-2">
                {certification.title}
              </h2>
              <p className="text-gray-600">{certification.company}</p>
              <p className="text-gray-600">
                From: {formatDate(certification.startDate)} -{" "}
                {formatDate(certification.endDate)}
              </p>
              <p className="text-gray-800 mt-2">{certification.description}</p>
            </div>
            {certification.certificateLink && (
              <div className="flex-grow flex items-end mt-4">
                <a
                  href={certification.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-violet-700 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded w-full text-center"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
