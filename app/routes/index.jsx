import { Box, Button, Typography, useMediaQuery, Grid } from "@mui/material";
import { colors, Stain, TopographicalLinesOne } from "@ctrlup/rainbow-react";
import { useTheme } from "@mui/material/styles";
import { Link } from "@remix-run/react";

export function meta() {
  return {
    title: "Accueil",
  };
}

export default function Index() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  if (isLarge) {
    return (
      <Grid container>
        <Grid
          item
          xs={12}
          position="absolute"
          top={0}
          right={0}
          width="80%"
          zIndex={-1}
        >
          <TopographicalLinesOne />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Ctrl Up, une ESN singulière.</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h1" mb={4} fontSize={116}>
            <Box component="span" display="inline-flex" flexDirection="column">
              Forge
              <Stain index={2} scale={3} />
            </Box>{" "}
            tes aptitudes de{" "}
            <Typography
              sx={{
                background: colors.RAINBOW,
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                MozTextFillColor: "transparent",
                fontSize: "inherit",
              }}
              variant="h1"
              component="span"
            >
              développeurs
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography mb={4} maxWidth="sm" lineHeight={2}>
            Apporte de la valeur à ton rôle de développeur, prend de la hauteur
            dans le métier et grimpe en équipe. Notre crédo ? Échanger et
            partager pour évoluer ensemble.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/contact"
          >
            Contactez-nous
          </Button>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5">Ctrl Up, une ESN singulière.</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1" mb={4}>
          Forge tes aptitudes de{" "}
          <Typography
            sx={{
              background: colors.RAINBOW,
              WebkitBackgroundClip: "text",
              MozBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              MozTextFillColor: "transparent",
              fontSize: "inherit",
            }}
            variant="h1"
            component="span"
          >
            développeurs
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12} display="flex" alignItems="center">
        <Box
          width="100%"
          maxWidth="sm"
          height="auto"
          component="img"
          src="https://picsum.photos/seed/picsum/536/354"
          alt="mountain-landscape"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography mb={4} maxWidth="sm" lineHeight={2}>
          Apporte de la valeur à ton rôle de développeur, prend de la hauteur
          dans le métier et grimpe en équipe. Notre crédo ? Échanger et partager
          pour évoluer ensemble.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          component={Link}
          to="/contact"
        >
          Contactez-nous
        </Button>
      </Grid>
    </Grid>
  );
}
