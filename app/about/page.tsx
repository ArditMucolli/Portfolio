"use client";

import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import { SocialType } from "@/types/SocialType";
import { Profile } from "@/types/ProfileType";
import { useData } from "@/context/DataContext";
import { RingLoader } from "react-spinners";
import DownloadFile from "@/components/downloadFile/DownloadFile";

const About = () => {
  const profileData: Profile | null = useData()?.profile;
  const socialsData: SocialType[] = useData()?.socials || [];

  if (!profileData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader color="#4F46E5" loading={!profileData} size={80} />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="overflow-hidden mt-20 max-w-3xl w-full p-8 ">
        <div className="p-6 text-center flex flex-col items-center">
          {profileData?.profileImage && (
            <Image
              src={profileData.profileImage}
              alt="Profile"
              className="mb-8 rounded-md"
              width={200}
              height={200}
            />
          )}
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            About {profileData?.name}
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            {profileData?.occupation}
          </p>
          <p className="text-lg text-gray-700 mb-6">{profileData?.location}</p>
          <p className="text-lg text-left text-gray-700 mb-6">
            {profileData?.bio}
          </p>
          <div className="mb-5 space-x-4">
            {profileData?.cv && (
              <DownloadFile fileUrl={profileData.cv} buttonLabel="Open my CV" />
            )}
          </div>
          <div className="text-lg text-gray-700 mb-6">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${profileData?.email}`}
              className="text-blue-500 hover:underline"
            >
              {profileData?.email}
            </a>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong> {profileData?.phone}
          </p>
          <div className="flex justify-center space-x-3">
            {socialsData?.map((social: SocialType, index: number) => (
              <SocialIcon
                key={index}
                style={{ height: 40, width: 40 }}
                fgColor="#ffffff"
                className="hover:scale-125 duration-200"
                target="_blank"
                rel="noopener noreferrer"
                url={social.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
