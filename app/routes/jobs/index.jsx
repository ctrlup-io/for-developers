import { Alert, Box, Grid, Typography } from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { Title } from "@ctrlup/rainbow-react";

import JobList from "../../components/JobList";
import getJobs from "../../queries/getJobs.server";

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
    <Grid container flexDirection="row" spacing={4} pb={20}>
      <Grid item xs={12}>
        <Title variant="h2" stainIndex={3}>
          Une sélection aux petits oignons
        </Title>
      </Grid>
      <Grid item md={12} lg={6}>
        <Typography>
          Retrouvez ici nos prises du mois : on s'efforce de chercher la crème
          des offres d'emplois pour éviter les usines à gaz.
        </Typography>
      </Grid>
      <Grid item xs display={{ xs: "none", lg: "block" }}>
        <Box
          component="img"
          src="topographicalLines6.svg"
          alt="topographical lines"
          position="absolute"
          right={0}
          top={0}
          width={878}
        />
      </Grid>
      <Grid item xs={12}>
        <JobList data={data} />
      </Grid>
    </Grid>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Alert severity="error">
      [ErrorBoundary]: There was an error: {error.message}
    </Alert>
  );
}
