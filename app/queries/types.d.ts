export type Skill = { id: string; name: string };

export type Seniority = {
  id: string;
  experience: { max: number; min: number };
  salary: { base: number };
};

export type Job = {
  id: string;
  title: string;
  description: string;
  seniorities: string[];
  mainSkills: string[];
  completeSkills: string[];
  location: string;
  salary: string;
  experience: string;
  remote: boolean;
  startingDate: number;
};
