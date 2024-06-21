"use client";

import SkillCircle from "./SkillCircle";
import { SkillsType } from "@/types/SkillType";
import { useData } from "@/context/DataContext";

const Skills = () => {
  const { skills } = useData();

  return (
    <section className="h-max max-w-3xl w-full p-8 mt-28 md:h-screen  mx-auto flex flex-col justify-center items-center space-y-24">
      <h1 className="text-xl lg:text-3xl uppercase tracking-[10px] text-black font-extrabold">
        skills
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
        {skills?.map((skills: SkillsType, index: number) => (
          <SkillCircle key={index} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
