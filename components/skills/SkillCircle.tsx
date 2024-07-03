import { SkillsType } from "@/types/SkillType";
import Image from "next/image";

type P = {
  skills: SkillsType;
};

const SkillCircle = ({ skills }: P) => {
  return (
    <div className="h-24 w-24 flex justify-center items-center  duration-300 hover:scale-110">
      <div className="flex justify-center items-center  h-full min-w-full">
        <Image src={skills.image} alt={skills.title} width={150} height={150} />
      </div>
    </div>
  );
};

export default SkillCircle;
