"use client";

import Image from "next/image";
import { useData } from "@/context/DataContext";
import { RingLoader } from "react-spinners";
import { SocialType } from "@/types/SocialType";
import { SocialIcon } from "react-social-icons";

const Main = () => {
  const { profile, loading } = useData();
  const socialsData: SocialType[] = useData()?.socials || [];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <RingLoader color="#4F46E5" loading={loading} size={80} />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <p className="text-center text-xl font-bold">
          No profile data available
        </p>
      </div>
    );
  }

  const { name, profileImage, occupation, location, smallBio } = profile;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="max-w-3xl w-full p-8">
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
            {occupation && (
              <p className="text-lg text-gray-600 mt-2">{occupation}</p>
            )}
            {location && <p className="text-lg text-gray-600">{location}</p>}
          </div>
          {profileImage && (
            <div className="relative rounded-full overflow-hidden h-32 w-32">
              <Image
                src={profileImage}
                alt={`${name}'s profile image`}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          )}
        </div>
        <p className="text-center text-gray-700 mt-4">{smallBio}</p>
        <div className="mt-7 flex justify-center items-center space-x-2 md:space-x-3">
          {socialsData.map((social: SocialType, index: number) => (
            <SocialIcon
              key={index}
              style={{ height: 30, width: 30 }}
              fgColor="#ffffff"
              className="hover:scale-125 duration-200"
              target="_blank"
              rel="noopener noreferrer"
              url={social.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
