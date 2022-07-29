import { orderBy, where } from "firebase/firestore";

import getAll from "./getAll";
import parseJob from "./parseJob";

export default async function getJobs() {
  const [seniorityLevels, skills, jobs] = (
    await Promise.allSettled([
      getAll("seniorityLevels"),
      getAll("skills"),
      getAll("jobs", where("active", "==", true), orderBy("updatedAt", "desc")),
    ])
  ).map((result) => (result.status === "fulfilled" ? result.value : []));
  return jobs.map(parseJob({ skills, seniorityLevels }));
}
