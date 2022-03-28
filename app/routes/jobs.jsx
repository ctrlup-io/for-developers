import { Stack, Typography } from "@mui/material";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore/lite";
import { useLoaderData } from "remix";

import Job from "../components/Job";
import Title from "../components/Title";
import { db } from "../firebase";

export function meta() {
  return {
    title: "Jobs",
  };
}

function parse(snapshot) {
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function loader() {
  const jobs = await getDocs(
    query(
      collection(db, "jobs"),
      where("active", "==", true),
      orderBy("createdAt", "desc")
    )
  );
  const seniorityLevels = await getDocs(
    query(collection(db, "seniorityLevels"))
  );
  const skills = await getDocs(query(collection(db, "skills")));
  return {
    jobs: parse(jobs),
    seniorityLevels: parse(seniorityLevels),
    skills: parse(skills),
  };
}

export default function Jobs() {
  const data = useLoaderData();
  return (
    <>
      <Title label="Une sélection aux petits oignons" stainIndex={3} />
      <Typography mb={8}>
        Retrouvez ici nos prises du mois : on s'efforce de chercher la crème des
        offres d'emplois pour éviter les usines à gaz.
      </Typography>
      <Stack spacing={8}>
        {data.jobs.map((job) => {
          const experience = Object.values(data.seniorityLevels).reduce(
            (acc, level) => Math.min(acc, level?.experience?.min || Infinity),
            Infinity
          );
          const salary = Math.round(
            Math.max(
              ...job.seniorities.map(
                (seniority) =>
                  data.seniorityLevels.find((level) => level.id === seniority)
                    ?.salary?.base
              )
            )
          );
          const skills = job.mainSkills
            .map(
              (mainSkill) =>
                data.skills.find((skill) => skill.id === mainSkill)?.name
            )
            .filter(Boolean);
          return (
            <Job
              key={job.id}
              title={job.title}
              description={job.description}
              skills={skills}
              experience={experience}
              salary={salary}
            />
          );
        })}
      </Stack>
    </>
  );
}
