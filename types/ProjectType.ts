import { SkillsType } from "./SkillType";

export type ProjectType = {
  slice(arg0: number, arg1: number): unknown;
  _id: string;
  title: string;
  description: string;
  image: string;
  _createdAt: string;
  demo: string;
  tech: SkillsType[];
};
