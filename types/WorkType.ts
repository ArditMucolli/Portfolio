export type TaskType = {
  description: string;
};

export type WorkType = {
  _id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  tasks?: TaskType[];
};
