import { ExperienceType } from "@/app/types/ExperienceType";
import { getExperiences } from "@/utils/sanity-utis";

const Certifications = async () => {
  const experienceData: ExperienceType[] = await getExperiences();

  const sortedExperienceData = experienceData.sort((a, b) => {
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
      <h1 className="text-2xl uppercase tracking-[20px] text-violet-500">
        Certifications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5 m-5">
        {sortedExperienceData.map((experience, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md ">
            <h2 className="text-lg font-semibold mb-2">{experience.title}</h2>
            <p className="text-gray-600 ">{experience.company}</p>
            <p className="text-gray-600">
              From: {formatDate(experience.startDate)} -{" "}
              {formatDate(experience.endDate)}
            </p>
            <p className="text-gray-800 mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
