import { WorkType } from "@/types/WorkType";
import Link from "next/link";
import { FC } from "react";

type P = {
  experiences: WorkType;
};

const Experience: FC<P> = ({ experiences }) => {
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
    <Link
      href={`/work/${experiences?._id}`}
      className="transition-shadow duration-200 text-gray-900 no-underline"
    >
      <div className="p-4 flex items-center space-x-2 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-2 flex-grow">
          <h2 className="text-xl font-bold truncate">{experiences?.title}</h2>
          <span className="text-base lg:text-lg text-gray-600 truncate">
            - {experiences?.company}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Experience;
