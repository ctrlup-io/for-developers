import { colors } from "@ctrlup/rainbow-react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "remix";

export function meta() {
  return {
    title: "Accueil",
  };
}

export default function Index() {
  return (
    <Container>
      <br />
      <Typography variant="h5">Ctrl Up, une ESN régulière.</Typography>
      <Typography variant="h1">
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
      <br />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        component="img"
        src="https://picsum.photos/seed/picsum/536/354"
        alt="random"
      />
      <br />
      <Typography>
        Apporte de la valeur à ton rôle de développeur, prend de la hauteur dans
        le métier et grimpe en équipe. Notre crédo ? Échanger et partager pour
        évoluer ensemble.
      </Typography>
      <br />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        component={Link}
        to="/contact"
      >
        Contactez-nous
      </Button>
    </Container>
  );
}
