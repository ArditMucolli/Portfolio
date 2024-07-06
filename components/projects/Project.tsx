import { ProjectType } from "@/types/ProjectType";
import Image from "next/image";
import Link from "next/link";

type P = {
  projects: ProjectType;
};

const Project = ({ projects }: P) => {
  return (
    <Link
      href={"/projects/" + projects?._id}
      className="relative h-[200px] rounded-lg group cursor-pointer shadow-lg shadow-gray-400 hover:scale-105 duration-300"
    >
      <Image
        src={projects?.image}
        alt={projects?.title}
        className="h-full w-full rounded-lg"
        width={200}
        height={150}
      />
      <div className="absolute w-full  bg-opacity-75 p-2 flex justify-center">
        <div className="truncate text-center text-black font-bold">
          {projects?.title}
        </div>
      </div>
    </Link>
  );
};

export default Project;
