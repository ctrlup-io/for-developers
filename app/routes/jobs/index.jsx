import { Alert, Stack, Typography } from "@mui/material";
import { useLoaderData } from "remix";
import { json } from "@remix-run/node";

import Job from "../../components/Job";
import Title from "../../components/Title";
import { getJobs } from "../../firebase";

export function meta() {
  return {
    title: "Jobs",
  };
}

export async function loader() {
  const jobs = await getJobs();
  return json(jobs);
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
      {data?.length > 0 && (
        <Stack spacing={8}>
          {data.map((job) => (
            <Job key={job.id} {...job} />
          ))}
        </Stack>
      )}
    </>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Alert severity="error">
      [ErrorBoundary]: There was an error: {error.message}
    </Alert>
  );
}
