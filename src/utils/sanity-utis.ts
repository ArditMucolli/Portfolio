import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

export async function getSocials() {
  const data = await client.fetch(groq`*[_type=="social"]{
        ...
    }`);
  return data;
}

export async function getProfile() {
  const data = await client.fetch(groq`*[_type=="profile"][0]{
      ...,
      "image":image.asset->url,
      "socials":socials[]->
  }`);

  return data;
}

export async function getSkills() {
  const data = await client.fetch(groq`*[_type=="skill"]{
      _id,
      title,
      "image":image.asset->url
  }`);

  return data;
}

export async function getProject(_id: string) {
  const data = await client.fetch(
    groq`*[_type=="project" && _id== $_id ][0]{
      ...,
      "image":image.asset->url,
      tech[]->
  }`,
    { _id }
  );

  return data;
}

export async function getProjects() {
  const data = await client.fetch(groq`*[_type=="project"]{
      ...,
      "image":image.asset->url
  }`);

  return data;
}

export async function getExperiences() {
  const data = await client.fetch(groq`*[_type=="experience"]{
    ...
  }`);

  return data;
}

export async function getCertifications() {
  const data = await client.fetch(groq`*[_type=="certifications"]{
    ...
  }`);

  return data;
}
