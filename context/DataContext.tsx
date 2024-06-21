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
  getWorks,
  getCertificates,
  getSocials,
} from "@/utils/sanity-utils";
import { Profile } from "@/types/ProfileType";
import { ProjectType } from "@/types/ProjectType";
import { WorkType } from "@/types/WorkType";
import { SkillsType } from "@/types/SkillType";
import { CertificateType } from "@/types/CertificateType";
import { SocialType } from "@/types/SocialType";

interface DataType {
  projects: ProjectType[] | null;
  profile: Profile | null;
  skills: SkillsType[] | null;
  experiences: WorkType[] | null;
  certifications: CertificateType[] | null;
  socials: SocialType[] | null;
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
          getWorks(),
          getCertificates(),
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
