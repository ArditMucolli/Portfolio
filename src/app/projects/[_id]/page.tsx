import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { getProject, getSocials } from "@/utils/sanity-utis";
import { Projects } from "@/app/types/ProjectsType";
import { Skills } from "@/app/types/SkillType";

type P = {
  params: { _id: string };
};

const ProjectPage = async ({ params }: P) => {
  const _id = params._id;
  const socialData = await getSocials();
  const projectData: Projects = await getProject(_id);
  return (
    <section className="w-full bg-[#F1F6F9]">
      <Navbar socialsData={socialData} />
      <div className="min-h-screen flex flex-col max-w-7xl mx-auto my-4 md:my-8 p-5 space-y-4">
        <h1 className="font-extrabold text-3xl">{projectData.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-violet-500">
            <p>Created at:</p>
            <p className="font-bold">
              {projectData._createdAt.toString().slice(0, 10)}
            </p>
          </div>
          <div className="ml-auto flex mb-5 space-x-4">
            {projectData.demo ? (
              <button className="text-[#F1F6F9] md:font-bold bg-violet-500 px-2 md:px-4 py-2 rounded-lg hover:bg-violet-300 text-sm">
                <Link href={projectData.demo} target="_blank">
                  Demo
                </Link>
              </button>
            ) : null}
            {projectData.code ? (
              <button className="text-[#F1F6F9] md:font-bold bg-violet-500 px-2 md:px-4 py-2 rounded-lg hover:bg-violet-300 text-sm">
                <Link href={projectData.code} target="_blank">
                  Code
                </Link>
              </button>
            ) : null}
          </div>
        </div>
        <div className="w-full md:max-w-200 flex items-center justify-center">
          <Image
            src={projectData.image}
            alt={projectData.title}
            className="w-full object-cover border-2 border-violet-500"
            width={500}
            height={500}
            style={{ maxWidth: "800px", textAlign: "center" }}
          />
        </div>
        <p>{projectData.description}</p>
        <div className="flex items-center space-x-4 text-violet-500">
          <h3>Tech used:</h3>
          <div className="flex items-center space-x-2 text-sm font-bold">
            {projectData.tech.map((tech: Skills, index: number) => (
              <p key={index} className="bg-violet-200 rounded-lg p-1">
                {tech.title}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer social={socialData} />
    </section>
  );
};

export default ProjectPage;
