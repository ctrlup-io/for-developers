import { orderBy, where } from "firebase/firestore";

import getAll from "../firebase/getAll";
import parseJob from "./parseJob";

import type { Job } from "./types";
import type { Document } from "../firebase/types";

export default async function getJobs() {
  const [seniorityLevels, skills, jobs] = (
    await Promise.allSettled([
      getAll("seniorityLevels"),
      getAll("skills"),
      getAll("jobs", where("active", "==", true), orderBy("updatedAt", "desc")),
    ])
  ).map((result) => (result.status === "fulfilled" ? result.value : []));
  return jobs.map((job) =>
    parseJob(job as Job, skills as Document[], seniorityLevels as Document[])
  );
}
