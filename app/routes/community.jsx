import { Box, Button, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "remix";

import Title from "../components/Title";

export function meta() {
  return {
    title: "Communauté",
  };
}

export default function Community() {
  return (
    <>
      <Title label="Être bien, être en lien" stainIndex={2} />
      <Typography mb={8}>
        On considère que le lien est primordial, et nous faisons tout pour
        l'entretenir. Que ce soit dans la participation à des{" "}
        <MuiLink
          href="https://meetup.com/tech-ctrl/events/"
          alt="events"
          target="_blank"
        >
          évènements
        </MuiLink>{" "}
        ou dans le partage de connaissances, nous pensons que l'équipe a besoin
        de se réunir régulièrement pour échanger.
      </Typography>
      <Box
        width="100%"
        height="auto"
        mb={2}
        component="img"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/unsplash_iuqmGmst5Po.png?alt=media&token=6d04cd1b-151a-4da7-8fef-c40375d60d88"
        alt="team at Darwin"
      />
      <Box
        width="100%"
        height="auto"
        mb={2}
        component="img"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/unsplash_iuqmGmst5Po%20(1).png?alt=media&token=0c765adb-9df2-4e15-904f-3aa03441be39"
        alt="team at Quizz Room"
      />
      <Box
        width="100%"
        height="auto"
        mb={8}
        component="img"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/unsplash_iuqmGmst5Po%20(2).png?alt=media&token=e3d20d94-6074-4a4a-b79f-3dec112745bc"
        alt="team at restaurant"
      />
      <Typography variant="h5" fontWeight={700} mb={2}>
        Les rituels de la communauté :
      </Typography>
      <Box component="ul" mb={8}>
        <Box component="li" mb={2}>
          <Typography fontWeight={700} display="block">
            <span role="img" aria-label="waving hand">
              👋
            </span>{" "}
            Kick-off du lundi
          </Typography>
          <Typography>
            Un débrief de 30 minutes pour suivre l'avancée des missions et se
            souhaiter une bonne semaine.
          </Typography>
        </Box>
        <Box component="li" mb={2}>
          <Typography fontWeight={700} display="block">
            <span role="img" aria-label="cocktail">
              🍹
            </span>{" "}
            Apér-eau du jeudi
          </Typography>
          <Typography>
            À la débauche, on se retrouve pour partager un moment autour d'une
            bière ou d'un thé. Gardons le contact autrement qu'avec Slack.
          </Typography>
        </Box>
        <Box component="li" mb={2}>
          <Typography fontWeight={700} display="block">
            <span role="img" aria-label="burger">
              🍔
            </span>{" "}
            Ripaille mensuelle
          </Typography>
          <Typography>
            Un déjeuner avec les fondateurs. C'est le moment privilégié pour
            prendre des nouvelles de Ctrl Up, de nous dire comment se passe ta
            mission, de nous parler des difficultés que tu rencontres ou de tes
            derniers succès.
          </Typography>
        </Box>
        <Box component="li" mb={2}>
          <Typography fontWeight={700} display="block">
            <span role="img" aria-label="robot">
              🤖
            </span>{" "}
            Tech days
          </Typography>
          <Typography>
            Un rendez-vous bimestriel où la communauté se réunit pour faire de
            la veille, échanger sur les métiers, se former, réaliser des
            ateliers et des projets...
          </Typography>
        </Box>
        <Box component="li" mb={2}>
          <Typography fontWeight={700} display="block">
            <span role="img" aria-label="tada">
              🎉
            </span>{" "}
            La veillée
          </Typography>
          <Typography>
            Nous nous réunirons une fois par mois pour nous retrouver autour
            d’activités sportive ou culturelle animée par un professionnel ou
            par un membre de la communauté.
          </Typography>
        </Box>
      </Box>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        component={Link}
        to="/blog"
        sx={{ mb: 8 }}
      >
        Visitez notre blog
      </Button>
      <Box
        width="100%"
        height="auto"
        mb={8}
        component="img"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/04%201.png?alt=media&token=6a7fdf51-e76b-46f5-bc15-6ac316fddaa8"
        alt="team gathering"
      />
    </>
  );
}
