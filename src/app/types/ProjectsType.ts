import { Skills } from "./SkillType";

export type Projects = {
  slice(arg0: number, arg1: number): unknown;
  _id: string;
  title: string;
  description: string;
  image: string;
  _createdAt: string;
  code: string;
  demo: string;
  tech: Skills[];
};
