import { Button, TextField, Typography, Box, Link } from "@mui/material";
import { useLoaderData } from "@remix-run/react";

export function meta() {
  return {
    title: "Contact",
  };
}

export async function loader() {
  return {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
  };
}

export default function Contact() {
  const data = useLoaderData();
  return (
    <>
      <Typography variant="h2" mb={4}>
        Communiquons
      </Typography>
      <Typography fontWeight={700} component="span">
        Ctrl Up, Écosystème Darwin
      </Typography>
      <Typography mb={1}>87 Quai des Queyries, Bordeaux</Typography>
      <Box
        bgcolor="action.disabled"
        border={0}
        width="100%"
        mb={4}
        component="iframe"
        title="Où nous trouver"
        src={`https://www.google.com/maps/embed/v1/place?key=${data.GOOGLE_MAP_API_KEY}&q=Ctrl Up, Bordeaux`}
        allowFullScreen={false}
        loading="lazy"
      />
      <Typography mb={2}>
        Vous souhaitez entrer en contact avec notre équipe ? Laissez nous un
        petit mot et nous vous répondons au plus vite.
      </Typography>
      <Box component="form" noValidate autoComplete="off" mb={2}>
        <TextField
          label="Nom"
          fullWidth
          sx={{
            mb: 2,
          }}
        />
        <TextField
          label="Adresse mail"
          fullWidth
          sx={{
            mb: 2,
          }}
        />
        <TextField
          label="Téléphone"
          fullWidth
          sx={{
            mb: 2,
          }}
        />
        <TextField label="Message" multiline minRows={7} fullWidth />
      </Box>
      <Button color="primary" variant="contained" fullWidth sx={{ mb: 2 }}>
        Envoyer le message
      </Button>
      <Typography>
        Ou nous contacter à{" "}
        <Link href="mailto:contact@ctrlup.io">contact@ctrlup.io</Link>
      </Typography>
    </>
  );
}
