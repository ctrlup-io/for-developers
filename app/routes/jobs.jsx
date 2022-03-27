import { Typography } from "@mui/material";
import { useLoaderData } from "remix";

import Title from "../components/Title";

export function meta() {
  return {
    title: "Jobs",
  };
}

export async function loader() {
  return {};
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
    </>
  );
}
