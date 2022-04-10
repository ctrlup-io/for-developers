import { orderBy, where } from "firebase/firestore";

import getAll from "./getAll";
import parseJob from "./parseJob";

export default async function getJobs() {
  const seniorityLevels = await getAll("seniorityLevels");
  const skills = await getAll("skills");
  const jobs = await getAll(
    "jobs",
    where("active", "==", true),
    orderBy("updatedAt", "desc")
  );
  return jobs.map(parseJob({ skills, seniorityLevels }));
}
