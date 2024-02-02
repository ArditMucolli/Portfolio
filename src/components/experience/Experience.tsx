import { ExperienceType } from "@/app/types/ExperienceType";
import { getExperiences } from "@/utils/sanity-utis";

const Experience = async () => {
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
    <section className="h-max mb-44 mt-10 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-12">
      <h1 className="text-xl text-center lg:text-3xl uppercase tracking-[10px] text-violet-700 font-extrabold">
        Professional Journey
      </h1>
      <div className="grid grid-cols-1 gap-8 p-6 m-6">
        {sortedExperienceData.map((experience, index) => (
          <div key={index} className="border p-8 rounded-md shadow-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
              {experience.title}
            </h2>
            <p className="text-gray-600 font-semibold">{experience.company}</p>
            <p className="text-gray-600">
              {formatDate(experience.startDate)} -{" "}
              {formatDate(experience.endDate)}
            </p>
            <p className="text-gray-800 mt-4 leading-6">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
