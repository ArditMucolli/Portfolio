import { Skills } from "@/app/types/Skills";
import Image from "next/image";

type Props = {
  skills: Skills;
};

const SkillCircle = ({ skills }: Props) => {
  return (
    <div className="h-24 w-24 flex justify-center items-center  duration-300 hover:scale-110">
      <div className="flex justify-center items-center bg-[#F1F6F9] rounded-full h-full min-w-full">
        <Image
          src={skills.image}
          alt={skills.title}
          width={150}
          height={150}
          className=""
        />
      </div>
    </div>
  );
};

export default SkillCircle;
