import getAll from "./getAll";
import getOne from "./getOne";
import type { Job } from "./parseJob";
import parseJob from "./parseJob";

export default async function getJob(id: string) {
  const [seniorityLevels, skills, job] = (
    await Promise.allSettled([
      getAll("seniorityLevels"),
      getAll("skills"),
      getOne("jobs", id),
    ])
  ).map((result) => (result.status === "fulfilled" ? result.value : []));
  return parseJob({ skills, seniorityLevels })(job as Job);
}
