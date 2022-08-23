import getAll from "../firebase/getAll";
import getOne from "../firebase/getOne";
import parseJob from "./parseJob";

import type { Job } from "./types";
import type { Document } from "../firebase/types";

export default async function getJob(id: string) {
  const [seniorityLevels, skills, job] = (
    await Promise.allSettled([
      getAll("seniorityLevels"),
      getAll("skills"),
      getOne("jobs", id),
    ])
  ).map((result) => (result.status === "fulfilled" ? result.value : []));
  return parseJob(
    job as Job,
    skills as Document[],
    seniorityLevels as Document[]
  );
}
