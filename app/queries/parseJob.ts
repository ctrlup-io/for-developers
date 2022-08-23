import type { Document } from "../firebase/types";
import type { Seniority, Skill, Job } from "./types";

export default function parseJob(
  job: Job,
  skills: Document[] = [],
  seniorityLevels: Document[] = []
) {
  const {
    seniorities: seniorityIds,
    mainSkills: mainSkillIds,
    completeSkills: completeSkillIds,
    ...rest
  } = job;
  const seniorities = findAll(seniorityLevels, seniorityIds) as Seniority[];
  const mainSkills = findAll(skills, mainSkillIds) as Skill[];
  const completeSkills = findAll(skills, completeSkillIds) as Skill[];
  return {
    ...rest,
    experience: getExperienceRange(seniorities),
    salary: getSalaryRange(seniorities),
    mainSkills: getSkills(mainSkills),
    completeSkills: getSkills(completeSkills),
  };
}

function find(items: Document[], id: string) {
  return items.find((item) => item.id === id);
}

function findAll(items: Document[], ids: string[] = []) {
  return ids.map((id) => find(items, id));
}

function getSkills(skills: Skill[]) {
  return skills.map((skill) => skill.name);
}

function getExperienceRange(seniorities: Seniority[]): string {
  return seniorities
    .reduce(
      (acc, seniority) => [
        Math.min(seniority.experience.min, acc[0]),
        Math.max(seniority.experience.max || seniority.experience.min, acc[1]),
      ],
      [Infinity, 0]
    )
    .join(" - ");
}

function getSalaryRange(seniorities: Seniority[]): string {
  return seniorities
    .reduce(
      (acc, seniority) => [
        Math.round(Math.min(seniority.salary.base, acc[0])),
        Math.round(Math.max(seniority.salary.base, acc[1])),
      ],
      [Infinity, 0]
    )
    .join(" - ");
}
