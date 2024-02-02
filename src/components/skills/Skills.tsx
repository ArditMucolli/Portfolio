import { getSkills } from "@/utils/sanity-utis";
import SkillCircle from "./SkillCircle";
import { Skills } from "@/app/types/SkillType";

const Skills = async () => {
  const skillsData: Skills[] = await getSkills();

  return (
    <section className="h-max mt-28 md:h-screen p-5 max-w-7xl mx-auto flex flex-col justify-center items-center space-y-24">
      <h1 className="text-3xl uppercase tracking-[20px] text-violet-700 font-extrabold">
        skills
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
        {skillsData.map((skills: Skills, index: number) => (
          <SkillCircle key={index} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
