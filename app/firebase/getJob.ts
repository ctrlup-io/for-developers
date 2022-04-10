import getAll from "./getAll";
import getOne from "./getOne";
import parseJob, { Job } from "./parseJob";

export default async function getJob(id: string) {
  const seniorityLevels = await getAll("seniorityLevels");
  const skills = await getAll("skills");
  const job = (await getOne("jobs", id)) as Job;
  return parseJob({ skills, seniorityLevels })(job);
}
