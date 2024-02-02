export type TaskType = {
  title: string;
  description: string;
};

export type ExperienceType = {
  _id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  tasks?: TaskType[];
};
