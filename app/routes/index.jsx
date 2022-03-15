import { colors } from "@ctrlup/rainbow-react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "remix";

export function meta() {
  return {
    title: "Accueil",
  };
}

export default function Index() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          marginTop: (theme) => theme.spacing(4),
        }}
      >
        Ctrl Up, une ESN régulière.
      </Typography>
      <Typography
        variant="h1"
        sx={{
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        Forge tes aptitudes de{" "}
        <Typography
          sx={{
            background: colors.RAINBOW,
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozTextFillColor: "transparent",
          }}
          variant="h1"
          component="span"
        >
          développeurs
        </Typography>
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          marginTop: (theme) => theme.spacing(2),
          marginBottom: (theme) => theme.spacing(2),
        }}
        component="img"
        src="https://picsum.photos/seed/picsum/536/354"
        alt="random"
      />
      <Typography
        sx={{
          marginTop: (theme) => theme.spacing(2),
          marginBottom: (theme) => theme.spacing(2),
        }}
      >
        Apporte de la valeur à ton rôle de développeur, prend de la hauteur dans
        le métier et grimpe en équipe. Notre crédo ? Échanger et partager pour
        évoluer ensemble.
      </Typography>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        component={Link}
        to="/contact"
        sx={{
          marginTop: (theme) => theme.spacing(2),
        }}
      >
        Contactez-nous
      </Button>
    </>
  );
}
