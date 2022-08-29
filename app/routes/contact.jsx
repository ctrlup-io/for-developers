import {
  Button,
  TextField,
  Typography,
  Box,
  Link,
  Grid,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const data = useLoaderData();
  return (
    <Grid container flexDirection="row" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2">Communiquons</Typography>
      </Grid>
      <Grid item md={12} lg={6}>
        <Stack spacing={2} component="form" noValidate autoComplete="off">
          <Typography>
            Vous souhaitez entrer en contact avec notre équipe ? Laissez nous un
            petit mot et nous vous répondons au plus vite.
          </Typography>
          <TextField label="Nom" />
          <TextField label="Adresse mail" />
          <TextField label="Téléphone" />
          <TextField label="Message" multiline minRows={7} />
        </Stack>
        <Button
          color="primary"
          variant="contained"
          fullWidth={!isLarge}
          sx={{ mt: 2 }}
        >
          Envoyer le message
        </Button>
        <Typography mt={2}>
          Ou nous contacter à{" "}
          <Link href="mailto:contact@ctrlup.io">contact@ctrlup.io</Link>
        </Typography>
      </Grid>
      <Grid item lg={6} display={{ xs: "none", lg: "block" }}>
        <Box
          width="100%"
          height="auto"
          component="img"
          loading="lazy"
          src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/camps.webp?alt=media&token=5e6f6a79-0590-411c-aba4-21640edbfc60"
          alt="team gathering"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">Rencontrons-nous</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography fontWeight="bold" component="span">
          Ctrl Up, Écosystème Darwin
        </Typography>
        <Typography>87 Quai des Queyries, Bordeaux</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          bgcolor="action.disabled"
          border={0}
          width="100%"
          height={isLarge ? 420 : "auto"}
          component="iframe"
          title="Où nous trouver"
          src={`https://www.google.com/maps/embed/v1/place?key=${data.GOOGLE_MAP_API_KEY}&q=Ctrl Up, Bordeaux`}
          allowFullScreen={isLarge}
          loading="lazy"
        />
      </Grid>
    </Grid>
  );
}
