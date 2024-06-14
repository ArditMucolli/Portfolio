"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from "react";
import {
  getProjects,
  getProfile,
  getSkills,
  getExperiences,
  getCertifications,
  getSocials,
} from "@/utils/sanity-utis";
import { Profile } from "@/app/types/ProfileType";
import { ProjectType } from "@/app/types/ProjectsType";
import { ExperienceType } from "@/app/types/ExperienceType";
import { Skills } from "@/app/types/SkillType";
import { CertificationsType } from "@/app/types/CertificationsType";
import { Socials } from "@/app/types/SocialType";

interface DataType {
  projects: ProjectType[] | null;
  profile: Profile | null;
  skills: Skills[] | null;
  experiences: ExperienceType[] | null;
  certifications: CertificationsType[] | null;
  socials: Socials[] | null;
  loading: boolean;
}

const DataContext = createContext<DataType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataType>({
    projects: null,
    profile: null,
    skills: null,
    experiences: null,
    certifications: null,
    socials: null,
    loading: true,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [
          projects,
          profile,
          skills,
          experiences,
          certifications,
          socials,
        ] = await Promise.all([
          getProjects(),
          getProfile(),
          getSkills(),
          getExperiences(),
          getCertifications(),
          getSocials(),
        ]);
        setData({
          projects,
          profile,
          skills,
          experiences,
          certifications,
          socials,
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setData((prevData) => ({ ...prevData, loading: false }));
      }
    }

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = (): DataType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
