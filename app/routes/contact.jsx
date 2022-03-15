import { Button, Container, TextField, Typography, Box } from "@mui/material";
import { useLoaderData } from "remix";

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
      <Typography
        variant="h1"
        sx={{
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        Communiquons
      </Typography>
      <Typography
        sx={{
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        Vous souhaitez entrer en contact avec notre équipe ? Laissez nous un
        petit mot et nous vous répondons au plus vite.
      </Typography>
      <Typography
        sx={{
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        <Typography fontWeight={700} component="span">
          Ctrl Up, Écosystème Darwin
        </Typography>
        <br />
        87 Quai des Queyries, Bordeaux
      </Typography>
      <Box
        sx={{
          background: (theme) => theme.palette.action.disabled,
          border: 0,
          marginBottom: (theme) => theme.spacing(2),
          width: "100%",
        }}
        component="iframe"
        title="Où nous trouver"
        src={`https://www.google.com/maps/embed/v1/place?key=${data.GOOGLE_MAP_API_KEY}&q=Ctrl Up, Bordeaux`}
        allowFullScreen={false}
        loading="lazy"
      />
      <Typography
        sx={{
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        contact@ctrlup.io
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        <TextField
          label="Nom"
          fullWidth
          sx={{
            marginBottom: (theme) => theme.spacing(2),
          }}
        />
        <TextField
          label="Adresse mail"
          fullWidth
          sx={{
            marginBottom: (theme) => theme.spacing(2),
          }}
        />
        <TextField
          label="Téléphone"
          fullWidth
          sx={{
            marginBottom: (theme) => theme.spacing(2),
          }}
        />
        <TextField label="Message" multiline minRows={7} fullWidth />
      </Box>
      <Button color="primary" variant="contained" fullWidth>
        Envoyer le message
      </Button>
    </>
  );
}
