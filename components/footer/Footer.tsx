"use client";

import { SocialType } from "@/types/SocialType";
import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { useData } from "@/context/DataContext";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  const socialsData: SocialType[] = useData()?.socials || [];

  return (
    <footer className="bg-white text-black py-4 text-center mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-5">
        <p className="text-xs text-black md:mr-5">
          COPYRIGHT &copy; {currentYear} ARDIT - ALL RIGHTS RESERVED
        </p>
        <div className="flex justify-center items-center space-x-2 md:space-x-3">
          {socialsData.map((social: SocialType, index: number) => (
            <SocialIcon
              key={index}
              style={{ height: 20, width: 20 }}
              fgColor="#ffffff"
              className="hover:scale-125 duration-200"
              target="_blank"
              rel="noopener noreferrer"
              url={social.url}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
