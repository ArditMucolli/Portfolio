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
      className="relative h-[200px] rounded-lg group cursor-pointer shadow-lg shadow-gray-400 hover-scale-105 duration-300"
    >
      <Image
        src={projects?.image}
        alt={projects?.title}
        className="h-full w-full rounded-lg"
        width={200}
        height={150}
      />
      <div className="bg-transparent absolute top-0 left-0 h-full w-full flex justify-center items-center text-white p-4 text-xs text-center rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 truncate">
        <div className="truncate">{projects?.description}</div>
      </div>
    </Link>
  );
};

export default Project;
