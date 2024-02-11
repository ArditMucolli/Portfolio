import { CertificationsType } from "@/app/types/CertificationsType";
import { getCertifications } from "@/utils/sanity-utis";

const Certifications = async () => {
  const certificationsData: CertificationsType[] = await getCertifications();

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 m-5 ">
        {sortedCertificationData.map((certification, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md bg-white">
            <h2 className="text-lg font-semibold mb-2">
              {certification.title}
            </h2>
            <p className="text-gray-600 ">{certification.company}</p>
            <p className="text-gray-600">
              From: {formatDate(certification.startDate)} -{" "}
              {formatDate(certification.endDate)}
            </p>
            <p className="text-gray-800 mt-2">{certification.description}</p>
            {certification.certificateLink && (
              <a
                href={certification.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 cursor-pointer inline-block bg-violet-700 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
