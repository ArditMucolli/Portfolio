import { type SchemaTypeDefinition } from "sanity";
import skill from "./schemas/skill";
import category from "./schemas/category";
import blockContent from "./schemas/blockContent";
import profile from "./schemas/profile";
import project from "./schemas/project";
import social from "./schemas/social";
import experience from "./schemas/experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skill, category, blockContent, profile, project, social, experience],
};
