import { colors } from "@ctrlup/rainbow-react";
import {
  Typography,
  Button,
  Link,
  Grid,
  Chip,
  useMediaQuery,
} from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useTheme } from "@mui/material/styles";

import getJob from "../../queries/getJob.server";

export function meta({ data }) {
  return {
    title: `Job - ${data.title}`,
  };
}

export async function loader({ params }) {
  const job = await getJob(params.id);
  return json(job);
}

export default function Job() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const data = useLoaderData();
  if (!data) return null;
  const applyButton = (
    <Button
      color="primary"
      variant="contained"
      fullWidth={!isLarge}
      href={`mailto:contact@ctrlup.io?subject=Candidature ${data.title} - Ctrl Up ! 📬️`}
      target="_blank"
    >
      Postulez à cette offre
    </Button>
  );
  return (
    <Grid container flexDirection="row" spacing={4}>
      <Grid item xs={12}>
        <Typography
          sx={{
            background: colors.RAINBOW,
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozTextFillColor: "transparent",
            mb: 4,
          }}
          variant="h2"
        >
          {data.title}
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={1}>
        <Grid item>
          <Chip label={`${data.experience} xp`} />
        </Grid>
        <Grid item>
          <Chip label={`${data.salary} k€`} />
        </Grid>
      </Grid>
      <Grid item xs={12} container spacing={1}>
        {data.mainSkills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} variant="outlined" />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Typography color="text.secondary">
          Télétravail :{" "}
          <Typography component="span" fontWeight="bold">
            {data.remote ? "Oui" : "Non"}
          </Typography>
        </Typography>
        <Typography color="text.secondary">
          Début :{" "}
          <Typography component="span" fontWeight="bold">
            {new Intl.DateTimeFormat("fr-FR", {}).format(data.startingDate)}
          </Typography>
        </Typography>
        <Typography color="text.secondary">
          Lieu :{" "}
          <Typography component="span" fontWeight="bold">
            {data.location}
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {applyButton}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3">Description</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Typography>
            <Typography fontWeight="bold" component="span">
              En tant que membre de l'équipe de développement de Ctrl Up
            </Typography>{" "}
            tu participes activement à la communauté technique en partageant des
            ressources sur notre Slack, en réalisant des présentations lors des
            journées (bimestrielles) Tech, en co-réalisant des projets, etc.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Tu es en{" "}
          <Typography fontWeight="bold" component="span">
            contact direct avec nos clients et intègres des équipes produit
          </Typography>{" "}
          ou projet dans le cadre de missions d'assistance technique ou au
          forfait.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Avec l'aide de l'équipe opérationnelle tu participes au maintien d'une
          bonne relation avec nos clients en assurant une communication
          régulière et transparente.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          <Typography fontWeight="bold" component="span">
            En tant que membre d'une équipe d'une développement tu :
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="ul">
          <li>
            portes une vision technique éclairée, argumentée, et intelligible ;{" "}
          </li>
          <li>
            participes activement à la vie quotidienne de l'équipe, du projet,
            et du produit ;
          </li>
          <li>participes à la montée en compétences de l'équipe.</li>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Concernant ta rémunération nous suivons{" "}
          <Typography fontWeight="bold" component="span">
            une grille de salaires simplifiée basée sur ton niveau d'expérience
          </Typography>{" "}
          avec un bonus de 5 K€ si tu es "confirmé" ou "senior" avec des
          responsabilités e.g. leader technique ou chef de projet :
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="ul">
          <li>junior 34,68 K€ brut ;</li>
          <li>confirmé 38,76 (+5) K€ brut ;</li>
          <li>sénior 42,84 (+5) K€ brut ;</li>
          <li>expert 56,1 K€ brut.</li>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Tu es sous un{" "}
          <Typography fontWeight="bold" component="span">
            contrat-cadre de 39 heures en CDI
          </Typography>{" "}
          régi par la{" "}
          <Link href="https://www.syntec.fr/convention-collective/">
            convention collective Syntec
          </Link>
          .
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Tu as aussi les avantages suivant :</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="ul">
          <li>
            une <Link href="https://alan.com/">mutuelle Alan</Link> prise en
            charge à 60 % ;
          </li>
          <li>
            une{" "}
            <Link href="https://www.swile.co/fr-FR/one-card">carte Swile</Link>{" "}
            avec 9€ de titres-resto quotidien pris en charge à 60 % ;
          </li>
          <li>des titres culturels d'un montant annuel de 200 € ;</li>
          <li>
            une aide à la mobilité couvrant 50 % de ton{" "}
            <Link href="https://boutique.infotbm.com/9-abonnements">
              abonnement TBM
            </Link>{" "}
            ou d'un montant de 200 € si tu viens à vélo ;
          </li>
          <li>une augmentation annuelle de 2 % min. ;</li>
          <li>12 jours de RTT par an ;</li>
          <li>
            une participation aux résultats dont la part reversée aux salariés
            est de 20 %.
          </li>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Tu participes à{" "}
          <Typography fontWeight="bold" component="span">
            minimum 5 jours de formation
          </Typography>{" "}
          par an ainsi qu'aux{" "}
          <Typography fontWeight="bold" component="span">
            journées Tech tous les deux mois
          </Typography>
          .
        </Typography>
      </Grid>{" "}
      <Grid item xs={12}>
        <Typography>
          Sans oublier l'indispensable :{" "}
          <Typography fontWeight="bold" component="span">
            ton outil de travail
          </Typography>
          . Tu reçois un ordinateur portable te permettant de réaliser tous tes
          projets les plus fous, ou presque.
        </Typography>
      </Grid>{" "}
      <Grid item xs={12}>
        <Typography variant="h3">Ta première mission</Typography>
      </Grid>{" "}
      <Grid item xs={12}>
        <Typography>{data.description}</Typography>
      </Grid>{" "}
      <Grid item xs={12}>
        <Typography variant="h3">Stack complète</Typography>
      </Grid>
      <Grid item xs={12} container spacing={1}>
        {data.completeSkills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} variant="outlined" />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12}>
        {applyButton}
      </Grid>
    </Grid>
  );
}
