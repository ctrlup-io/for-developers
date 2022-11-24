import { Button, Grid, Stack, Typography } from "@mui/material";
import {
  colors,
  Title,
  HikingIcon,
  ShoePrintsIcon,
  SignatureIcon,
  SignIcon,
  CollapseCard,
} from "@ctrlup/rainbow-react";
import { Box } from "@mui/system";

import StepCard from "../components/StepCard";
import useIsLargeScreen from "../styles/useIsLargeScreen";
import { Link } from "@remix-run/react";

export function meta() {
  return {
    title: "Services",
  };
}

export default function Services() {
  const isLarge = useIsLargeScreen();
  return (
    <Grid container flexDirection="row" spacing={4} flexWrap="wrap">
      <Grid item xs={12}>
        <Title variant="h2" stainIndex={1}>
          On sait faire, et on le fait bien
        </Title>
      </Grid>
      <Grid item md={12} lg={4}>
        <Typography>
          Au même titre que les ESN, mais en beaucoup mieux, nous apportons
          plusieurs choses aux développeurs de l'{" "}
          <Typography
            sx={{
              background: colors.RAINBOW,
              WebkitBackgroundClip: "text",
              MozBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              MozTextFillColor: "transparent",
              fontSize: "inherit",
              fontWeight: 700,
            }}
            component="span"
          >
            équipe
          </Typography>
          . D'abord, Ctrl Up propose une évolution sur quatre étapes, de
          l'arrivée d'un développeur à son ascension vers la séniorité.
        </Typography>
      </Grid>
      <Grid
        item
        lg={8}
        display={{ xs: "none", lg: "block" }}
        position="relative"
        minHeight={440}
      >
        <Box
          alt="hiking-together"
          component="img"
          loading="lazy"
          xs={12}
          position="absolute"
          top={0}
          right={0}
          zIndex={-1}
          width="100%"
          src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/hiking-together.png?alt=media&token=04f84511-c33b-41b0-a4ee-a91f29784078"
        />
      </Grid>
      <Grid item xs={12}>
        {isLarge ? (
          <Typography variant="h3">Le cheminement</Typography>
        ) : (
          <Typography variant="h5" fontWeight="bold">
            Le cheminement du développeur :
          </Typography>
        )}
      </Grid>
      <Grid item md={12} lg={7} container flexWrap="wrap" spacing={4}>
        <Grid item md={12} lg={6}>
          <StepCard
            title="Le sentier"
            subtitle="intégration"
            Icon={ShoePrintsIcon}
            sx={{ height: "100%" }}
          >
            <Typography>
              Accompagner les nouveaux arrivants sur une semaine d'intégration,
              le développeur entrant devient un Sherpa et rejoint l’équipée.
            </Typography>
          </StepCard>
        </Grid>
        <Grid item md={12} lg={6}>
          <StepCard
            title="Le balisage"
            subtitle="placement"
            Icon={SignIcon}
            sx={{ height: "100%" }}
          >
            <Typography>
              L'équipe opérationnelle de Ctrl Up s'occupe de trouver la mission
              adéquate, celle en accord avec les valeurs et compétences de
              chaque développeur.
            </Typography>
          </StepCard>
        </Grid>{" "}
        <Grid item md={12} lg={6}>
          <StepCard
            title="L’ascension"
            subtitle="formation"
            Icon={HikingIcon}
            sx={{ height: "100%" }}
          >
            <Typography>
              De la formation continue et de la montée en compétences,
              techniques, en soft skills ou en personal branding.
            </Typography>
          </StepCard>
        </Grid>{" "}
        <Grid item md={12} lg={6}>
          <StepCard
            title="La cordée"
            subtitle="entraide"
            Icon={SignatureIcon}
            sx={{ height: "100%" }}
          >
            <Typography>
              Tout au long de son ascension, les développeurs profitent
              d'évènements communautaires réguliers, pour maintenir un lien fort
              entre membre de l'équipe et aller plus haut tous ensemble.
            </Typography>
          </StepCard>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        display={{ xs: "none", lg: "block" }}
        position="relative"
        sx={{ marginBottom: 24, marginTop: 16 }}
      >
        <Box
          component="img"
          src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/largelandscape.png?alt=media&token=a6cbca2b-f5e0-433a-9cde-059c1d13bdf1"
          alt="moutains by night landscape"
          width="100%"
        />
        <Box
          component="img"
          src="topographicalLines4.svg"
          alt="topographical lines"
          position="absolute"
          zIndex={-1}
          right={0}
          width="100%"
        />
      </Grid>
      <Grid item md={12} lg={8}>
        <Typography variant="h3">
          Des avantages pour grimper plus haut
        </Typography>
      </Grid>
      <Grid item md={12} lg={8}>
        <Typography>
          Notre méthode permet aux membres de progresser rapidement, surtout
          quand on débute sa carrière ou qu'on essaie d'acquérir le statut de
          senior. Les valeurs de polyvalence et d'ouverture que nous
          transmettons sont formatrices.
          <br />
          <br />
          Nous sommes un tremplin pour la carrière d'un développeur, notamment à
          travers le renforcement du réseau professionnel et l'attribution à des
          missions adéquates au profil.
        </Typography>
        <Box pt={2} display={{ xs: "none", lg: "block" }}>
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/contact"
          >
            Contactez-nous
          </Button>
        </Box>
      </Grid>
      <Grid item md={12} lg={4} width="100%">
        <Stack spacing={2}>
          <CollapseCard defaultExpanded={isLarge} title="Aventure humaine">
            <Typography>
              Nous rejoindre c'est s'engager humainement dans le projet Ctrl Up
              et au sein des communautés.
            </Typography>
          </CollapseCard>
          <CollapseCard defaultExpanded={isLarge} title="Progression rapide">
            <Typography>
              Nous créons et animons des espaces propices au partage de
              connaissance pour favoriser l'apprentissage avec les pairs.
            </Typography>
          </CollapseCard>
          <CollapseCard defaultExpanded={isLarge} title="Mission adéquate">
            <Typography>
              Ensemble nous dessinons un plan de carrière. Les missions et
              projets de nos clients sont un moyen pour s'épanouir dans son
              métier et enrichir ses connaissances.
            </Typography>
          </CollapseCard>
          <CollapseCard defaultExpanded={isLarge} title="Réseau consolidé">
            <Typography>
              Nous entretenons des relations sincères et pérennes auprès de nos
              clients, équipiers, et communautés.
            </Typography>
          </CollapseCard>
        </Stack>
      </Grid>
      <Grid
        item
        lg={8}
        display={{ xs: "none", lg: "block" }}
        position="relative"
      >
        <Box
          alt="summit-together"
          component="img"
          loading="lazy"
          position="absolute"
          left={32}
          bottom={0}
          zIndex={-1}
          width="80%"
          src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/summit-together.png?alt=media&token=9dbd70e1-6409-4fd3-9f55-9e01011115eb"
        />
      </Grid>
      <Grid item xs={12} display={{ xs: "block", lg: "none" }}>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          fullWidth
          to="/contact"
        >
          Contactez-nous
        </Button>
      </Grid>
    </Grid>
  );
}
