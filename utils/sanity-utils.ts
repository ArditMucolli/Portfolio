import { groq } from "next-sanity";
import { client } from "../sanity/lib/client";

export async function getSocials() {
  try {
    const data = await client.fetch(groq`*[_type=="social"]{ _id, url }`);
    return data;
  } catch (error) {
    console.error("Error fetching socials data:", error);
  }
}

export async function getProfile() {
  try {
    const data = await client.fetch(groq`
      *[_type == "profile"][0]{
        _id,
        name,
        email,
        bio,
        smallBio,
        location,
        occupation,
        phone,
        "profileImage": profileImage.asset->url,
        "cv": cv.asset->url,
      }
    `);
    return data;
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

export async function getSkills() {
  try {
    const data = await client.fetch(groq`*[_type=="skill"]{
            _id,
            title,
            "image":image.asset->url
        }`);

    return data;
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

export async function getCertificates() {
  try {
    const data = await client.fetch(groq`*[_type=="certificates"]{
              _id,
              title,
              company,
              startDate,
              endDate,
              description,
              certificateLink,
              "certificateFile": certificateFile.asset->url,
          }`);

    return data;
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

export async function getProjects() {
  try {
    const data = await client.fetch(groq`*[_type=="project"]{
              _id,
              title,
              description,
              _createdAt,
              demo,
              "image":image.asset->url,
              tech[]->,
          }`);

    return data;
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

export async function getWorks() {
  try {
    const data = await client.fetch(groq`*[_type=="work"]{
              ...
          }`);

    return data;
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}
