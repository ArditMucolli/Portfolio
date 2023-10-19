import { PortableTextBlock } from "sanity";
import { Socials } from "./SocialType";

export type Profile = {
  _id: string;
  name: string;
  smallBio: string;
  profession: string[];
  image: string;
  socials: Socials[];
};
