import { type SchemaTypeDefinition } from "sanity";
import profile from "./schemas/profile";
import work from "./schemas/work";
import skills from "./schemas/skills";
import social from "./schemas/social";
import certifications from "./schemas/certifications";
import projects from "./schemas/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, work, social, projects, certifications, skills],
};
