import Image from "next/image";
import TypeWriter from "./TypeWriter";
import CursorComponent from "./CursorComponent";
import { SocialIcon } from "react-social-icons";
import Motion from "../motion/Motion";
import { getProfile } from "@/utils/sanity-utis";
import { Profile } from "@/app/types/Profile";
import { Socials } from "@/app/types/Social";

type Props = {};

const Main = async (props: Props) => {
  const profileData: Profile = await getProfile();
  console.log(profileData);
  return (
    <section className="h-[calc(100vh-56px)] w-full flex justify-center items-center">
      <div className="flex flex-col items-center justyify-center space-y-4">
        <Motion delay={1} direction="down">
          <Image
            src={profileData.image}
            alt="img"
            className="rounded-3xl mb-4"
            height={400}
            width={400}
          />
        </Motion>
        <Motion delay={1} direction="">
          <p className="font-bold mx-auto w-1/2">{profileData.smallBio}</p>
        </Motion>
        <Motion delay={1} direction="">
          <div className="flex justify-center space-x-2 items-center">
            <TypeWriter professions={profileData.profession} />
            <CursorComponent />
          </div>
        </Motion>
        <Motion delay={1} direction="">
          <div className="flex items-center space-x-6">
            {profileData.socials.map((social: Socials, index: number) => (
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
      </div>
    </section>
  );
};

export default Main;
