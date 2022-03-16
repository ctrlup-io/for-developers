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
      <Typography variant="h5">Ctrl Up, une ESN régulière.</Typography>
      <Typography variant="h1" mb={4}>
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
        width="100%"
        height="auto"
        mb={4}
        component="img"
        src="https://picsum.photos/seed/picsum/536/354"
        alt="random"
      />
      <Typography mb={4}>
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
          mt: 2,
        }}
      >
        Contactez-nous
      </Button>
    </>
  );
}
