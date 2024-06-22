"use client";

import { useData } from "@/context/DataContext";
import { CertificateType } from "@/types/CertificateType";
import { RingLoader } from "react-spinners";

const Certifications = () => {
  const { certifications, loading } = useData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader color="#4F46E5" loading={loading} size={80} />{" "}
      </div>
    );
  }

  const certificationsData: CertificateType[] = certifications || [];

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
    <section className="h-max max-w-3xl w-full p-8 mt-10 md:h-screen mx-auto flex flex-col justify-center items-center space-y-24">
      <h1 className="text-xl lg:text-3xl uppercase tracking-[10px] text-black font-extrabold">
        Certifications
      </h1>
      <div className="flex flex-col gap-8 p-5 m-5 w-full">
        {sortedCertificationData.map((certification, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-md bg-white w-full"
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
              <div className="mt-4">
                <a
                  href={certification.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-black font-bold py-2 px-4 rounded text-center inline-block transition-all duration-200 ease-in-out transform hover:scale-105 focus:scale-105"
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
