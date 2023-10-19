"use client";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { usePathname } from "next/navigation";
import Motion from "../motion/Motion";
import { Socials } from "@/app/types/Social";

type Props = {
  socialsData: Socials[];
};

const Navbar = ({ socialsData }: Props) => {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 bg-white first-letter:max-w-7xl mx-auto p-5 flex items-center justify-between z-20">
      <Motion delay={1} direction="left">
        <div className="flex items-center space-x-6">
          {socialsData?.map((social: Socials, index: number) => (
            <SocialIcon
              key={index}
              style={{ height: 25, width: 25 }}
              bgColor="#793FEF"
              className="hover:scale-125 duration-200"
              url={social.url}
            />
          ))}
        </div>
      </Motion>
      <Motion delay={1} direction={"right"}>
        <div className="flex items-center space-x-4 md:space-x-8">
          {pathname !== "/projects" && (
            <Link
              className="text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base"
              href="/projects"
            >
              projects
            </Link>
          )}
          {pathname !== "/" && (
            <Link
              className="text-violet-500 hover:text-pink-700 uppercase tracking-wide md:tracking-widest text-sm md:text-base"
              href="/"
            >
              home
            </Link>
          )}
        </div>
      </Motion>
    </nav>
  );
};

export default Navbar;
