"use client";

import Image from "next/image";
import { useData } from "@/context/DataContext";
import { RingLoader } from "react-spinners";

const Main = () => {
  const { profile, loading } = useData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader color="#4F46E5" loading={loading} size={80} />
      </div>
    );
  }

  if (!profile) {
    return (
      <p className="text-center text-xl font-bold">No profile data available</p>
    );
  }

  const { name, profileImage, occupation, location, bio } = profile;

  return (
    <section className="min-h-[calc(100vh-56px)] w-full flex flex-col items-center justify-center bg-white p-8">
      {profileImage && (
        <Image
          src={profileImage}
          alt={`${name}'s profile image`}
          className="rounded-md shadow-md"
          height={200}
          width={200}
        />
      )}
      <h1 className="text-3xl font-bold text-gray-800 mt-6">{name}</h1>
      {occupation && <p className="text-lg text-gray-600 mt-2">{occupation}</p>}
      {location && <p className="text-lg text-gray-600">{location}</p>}
      <p className="text-center text-gray-700 mt-4 w-3/4 md:w-2/5">{bio}</p>
    </section>
  );
};

export default Main;
