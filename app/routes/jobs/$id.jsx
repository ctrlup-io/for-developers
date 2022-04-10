import { colors } from "@ctrlup/rainbow-react";
import { Typography, Button, Link, Grid, Chip } from "@mui/material";
import { useLoaderData } from "remix";
import { json } from "@remix-run/node";

import { getJob } from "../../firebase";

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
  const data = useLoaderData();
  if (!data) return null;
  const applyButton = (
    <Button
      color="primary"
      variant="contained"
      sx={{ mb: 8 }}
      fullWidth
      href={`mailto:contact@ctrlup.io?subject=Candidature ${data.title} - Ctrl Up ! 📬️`}
      target="_blank"
    >
      Postulez à cette offre
    </Button>
  );
  return (
    <>
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
      <Grid container spacing={1} mb={1}>
        <Grid item>
          <Chip label={`${data.experience} xp`} />
        </Grid>
        <Grid item>
          <Chip label={`${data.salary} k€`} />
        </Grid>
      </Grid>
      <Grid container spacing={1} mb={1}>
        {data.mainSkills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} variant="outlined" />
          </Grid>
        ))}
      </Grid>
      <Typography color="text.secondary">
        Télétravail :{" "}
        <Typography component="span" fontWeight={700}>
          {data.remote ? "Oui" : "Non"}
        </Typography>
      </Typography>
      <Typography color="text.secondary">
        Début :{" "}
        <Typography component="span" fontWeight={700}>
          {new Intl.DateTimeFormat("fr-FR", {}).format(data.startingDate)}
        </Typography>
      </Typography>
      <Typography color="text.secondary" mb={4}>
        Lieu :{" "}
        <Typography component="span" fontWeight={700}>
          {data.location}
        </Typography>
      </Typography>
      {applyButton}
      <Typography variant="h3" mb={2}>
        Description
      </Typography>
      <Typography mb={2}>
        <Typography fontWeight={700} component="span">
          En tant que membre de l'équipe de développement de Ctrl Up
        </Typography>{" "}
        tu participes activement à la communauté technique en partageant des
        ressources sur notre Slack, en réalisant des présentations lors des
        journées (bimestrielles) Tech, en co-réalisant des projets, etc.
      </Typography>
      <Typography mb={2}>
        Tu es en{" "}
        <Typography fontWeight={700} component="span">
          contact direct avec nos clients et intègres des équipes produit
        </Typography>{" "}
        ou projet dans le cadre de missions d'assistance technique ou au
        forfait.
      </Typography>
      <Typography mb={2}>
        Avec l'aide de l'équipe opérationnelle tu participes au maintien d'une
        bonne relation avec nos clients en assurant une communication régulière
        et transparente.
      </Typography>
      <Typography mb={2}>
        <Typography fontWeight={700} component="span">
          En tant que membre d'une équipe d'une développement tu :
        </Typography>
      </Typography>
      <Typography component="ul" mb={2}>
        <li>
          portes une vision technique éclairée, argumentée, et intelligible ;{" "}
        </li>
        <li>
          participes activement à la vie quotidienne de l'équipe, du projet, et
          du produit ;
        </li>
        <li>participes à la montée en compétences de l'équipe.</li>
      </Typography>
      <Typography mb={2}>
        Concernant ta rémunération nous suivons{" "}
        <Typography fontWeight={700} component="span">
          une grille de salaires simplifiée basée sur ton niveau d'expérience
        </Typography>{" "}
        avec un bonus de 5 K€ si tu es "confirmé" ou "senior" avec des
        responsabilités e.g. leader technique ou chef de projet :
      </Typography>
      <Typography component="ul" mb={2}>
        <li>junior 34,68 K€ brut ;</li>
        <li>confirmé 38,76 (+5) K€ brut ;</li>
        <li>sénior 42,84 (+5) K€ brut ;</li>
        <li>expert 56,1 K€ brut.</li>
      </Typography>
      <Typography mb={2}>
        Tu es sous un{" "}
        <Typography fontWeight={700} component="span">
          contrat-cadre de 39 heures en CDI
        </Typography>{" "}
        régi par la{" "}
        <Link href="https://www.syntec.fr/convention-collective/">
          convention collective Syntec
        </Link>
        .
      </Typography>
      <Typography mb={2}>Tu as aussi les avantages suivant :</Typography>
      <Typography component="ul" mb={2}>
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
          une participation aux résultats dont la part reversée aux salariés est
          de 20 %.
        </li>
      </Typography>
      <Typography mb={2}>
        Tu participes à{" "}
        <Typography fontWeight={700} component="span">
          minimum 5 jours de formation
        </Typography>{" "}
        par an ainsi qu'aux{" "}
        <Typography fontWeight={700} component="span">
          journées Tech tous les deux mois
        </Typography>
        .
      </Typography>
      <Typography mb={4}>
        Sans oublier l'indispensable :{" "}
        <Typography fontWeight={700} component="span">
          ton outil de travail
        </Typography>
        . Tu reçois un ordinateur portable te permettant de réaliser tous tes
        projets les plus fous, ou presque.
      </Typography>
      <Typography variant="h3" mb={2}>
        Ta première mission
      </Typography>
      <Typography mb={4}>{data.description}</Typography>
      <Typography variant="h3" mb={2}>
        Stack complète
      </Typography>
      <Grid container spacing={1} mb={4}>
        {data.completeSkills.map((skill) => (
          <Grid item key={skill}>
            <Chip label={skill} variant="outlined" />
          </Grid>
        ))}
      </Grid>
      {applyButton}
    </>
  );
}
