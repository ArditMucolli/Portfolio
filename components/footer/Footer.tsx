"use client";

import { SocialType } from "@/types/SocialType";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
// import { useData } from "@/context/DataContext";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  //   const socialsData: SocialType[] = useData()?.socials || [];

  return (
    <footer className="bg-gray-900 text-white py-4 text-center mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-5">
        <p className="text-xs text-white md:mr-5">
          COPYRIGHT &copy; {currentYear} ARDITMUCOLLI - ALL RIGHTS RESERVED
        </p>
        <div className="flex justify-center items-center space-x-2 md:space-x-3">
          {/* {socialsData.map((social: Social, index: number) => ( */}
          <SocialIcon
            key={1}
            style={{ height: 20, width: 20 }}
            fgColor="#ffffff"
            className="hover:scale-125 duration-200"
            target="_blank"
            rel="noopener noreferrer"
            url="https://www.facebook.com/ardit.muqolli.54"
          />
          {/* ))} */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
