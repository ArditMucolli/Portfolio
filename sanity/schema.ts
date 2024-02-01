import { type SchemaTypeDefinition } from "sanity";
import skill from "./schemas/skill";
import profile from "./schemas/profile";
import project from "./schemas/project";
import social from "./schemas/social";
import certifications from "./schemas/certifications";
import experience from "./schemas/experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, skill, social, project, certifications, experience],
};
