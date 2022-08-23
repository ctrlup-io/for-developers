import { Card, Title } from "@ctrlup/rainbow-react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Link as MuiLink,
  useMediaQuery,
  ImageList,
  ImageListItem,
  Stack,
  CardContent,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "@remix-run/react";

export function meta() {
  return {
    title: "Communauté",
  };
}

const images = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/teamatdarwin.png?alt=media&token=662f68a8-9892-4a01-b0af-e2a18b35ebd6",
    title: "team at Darwin",
    cols: 2,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/unsplash_iuqmGmst5Po%20(1).png?alt=media&token=0c765adb-9df2-4e15-904f-3aa03441be39",
    title: "team at Quizz Room",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/teamatjt.png?alt=media&token=de702c1f-ac93-40f2-a80e-5362b4970d59",
    title: "team at tech days",
    isLarge: true,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/teamatchantier_small.jpg?alt=media&token=b9d4bdea-2657-4215-bb30-b88d2f01934b",
    title: "team at chantier de la garonne",
    isLarge: true,
    cols: 2,
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/unsplash_iuqmGmst5Po%20(2).png?alt=media&token=e3d20d94-6074-4a4a-b79f-3dec112745bc",
    title: "team at restaurant",
    isLarge: false,
    cols: 2,
  },
];

const rituals = [
  {
    emoji: "👋",
    title: "Le point hebdo",
    description:
      "Un débrief de 30 minutes pour suivre l'avancée des missions et se souhaiter une bonne semaine.",
  },
  {
    emoji: "🍹",
    title: "Apér-eau du jeudi",
    description:
      "À la débauche, on se retrouve pour partager un moment autour d'une bière ou d'un thé. Gardons le contact autrement qu'avec Slack.",
  },
  {
    emoji: "🍔",
    title: "Ripaille mensuelle",
    description:
      "Un déjeuner avec les fondateurs. C'est le moment privilégié pour prendre des nouvelles de Ctrl Up, de nous dire comment se passe ta mission, de nous parler des difficultés que tu rencontres ou de tes derniers succès.",
  },
  {
    emoji: "🤖",
    title: "Journées Tech",
    description:
      "Un rendez-vous bimestriel où la communauté se réunit pour faire de la veille, échanger sur les métiers, se former, réaliser des ateliers et des projets...",
  },
  {
    emoji: "🎉",
    title: "La veillée",
    description:
      "Nous nous réunirons une fois par mois pour nous retrouver autour d’activités sportive ou culturelle animée par un professionnel ou par un membre de la communauté.",
  },
];

function Rituals() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  if (isLarge) {
    return (
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          overflowX: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {rituals.map((ritual) => (
          <Card
            key={ritual.emoji}
            icon={<span role="img">{ritual.emoji}</span>}
            title={ritual.title}
            sx={{ minWidth: 320, marginLeft: 2, marginTop: 2 }}
          >
            <CardContent>
              <Typography>{ritual.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }
  return (
    <Stack component="ul" spacing={2}>
      {rituals.map((ritual) => (
        <Box key={ritual.emoji} component="li">
          <Typography fontWeight="bold" display="block">
            <span role="img">{ritual.emoji}</span> {ritual.title}
          </Typography>
          <Typography>{ritual.description}</Typography>
        </Box>
      ))}
    </Stack>
  );
}

export default function Community() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container flexDirection="row" spacing={4} flexWrap="wrap">
      <Grid
        display={{ xs: "none", lg: "block" }}
        item
        lg={6}
        position="relative"
        minHeight={440}
      >
        <Box
          alt="climbing"
          component="img"
          loading="lazy"
          width="100%"
          src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/climbing.png?alt=media&token=fd20f574-7d4f-44f2-9641-bd99675435b4"
        />
      </Grid>
      <Grid item md={12} lg={6} container spacing={4}>
        <Grid item xs={12}>
          <Title variant="h2" stainIndex={2}>
            Être bien, être en lien
          </Title>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            On considère que le lien est primordial, et nous faisons tout pour
            l'entretenir. Que ce soit dans la participation à des{" "}
            <MuiLink
              href="https://meetup.com/tech-ctrl/events/"
              alt="events"
              target="_blank"
            >
              évènements
            </MuiLink>{" "}
            ou dans le partage de connaissances, nous pensons que l'équipe a
            besoin de se réunir régulièrement pour échanger.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ImageList
            variant={isLarge ? "quilted" : "standard"}
            cols={isLarge ? 3 : 1}
            gap={16}
          >
            {images
              .filter((image) => [undefined, isLarge].includes(image.isLarge))
              .map((image) => (
                <ImageListItem
                  key={image.url}
                  cols={(isLarge && image.cols) || 1}
                  rows={(isLarge && image.rows) || 1}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    loading="lazy"
                    height={isLarge ? "auto" : 180}
                  />
                </ImageListItem>
              ))}
          </ImageList>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            fullWidth={!isLarge}
            component={Link}
            to="/team"
          >
            Découvrir l'équipe
          </Button>
        </Grid>
      </Grid>
      <Grid item md={12} lg={6}>
        <Typography variant="h2">Les rituels de la communauté</Typography>
      </Grid>
      <Grid item md={12} lg={6}>
        <Box
          width="100%"
          height="auto"
          component="img"
          loading="lazy"
          src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/04%201%20(1).png?alt=media&token=802d4ccf-b4e8-4897-8195-d4ac9e3827ab"
          alt="team gathering"
        />
      </Grid>
      <Grid item xs={12}>
        <Rituals />
      </Grid>
    </Grid>
  );
}
