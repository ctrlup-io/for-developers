import {
  Card,
  Typography,
  Box,
  Button,
  CardContent,
  Grid,
} from "@mui/material";
import { Link } from "@remix-run/react";
import {
  CollapseCard,
  HikingIcon,
  ShoePrintsIcon,
  SignatureIcon,
  SignIcon,
  Title,
} from "@ctrlup/rainbow-react";

export function meta() {
  return {
    title: "Services",
  };
}

export default function Services() {
  return (
    <>
      <Title variant="h2" stainIndex={1}>
        On sait faire, et on le fait bien
      </Title>
      <Typography mb={4}>
        Au même titre que les ESN, mais en beaucoup mieux, nous apportons
        plusieurs choses aux développeurs de la communauté. D'abord, Ctrl Up
        propose un modèle fondé sur quatre étapes, de l'arrivée d'un développeur
        à son ascension vers la séniorité.
      </Typography>
      <Typography variant="h5" fontWeight={700} mb={2}>
        Le cheminement du développeur :
      </Typography>
      <StepCard
        sx={{ mb: 2 }}
        title="Le sentier"
        subtitle="intégration"
        Icon={ShoePrintsIcon}
      >
        <Typography>
          Accompagner les nouveaux arrivants sur une semaine d'intégration, le
          développeur entrant devient un Sherpa et rejoint l’équipée.
        </Typography>
      </StepCard>
      <StepCard
        sx={{ mb: 2 }}
        title="Le balisage"
        subtitle="placement"
        Icon={SignIcon}
      >
        <Typography>
          Les responsables de Ctrl Up s'occupent de trouver la mission adéquate,
          celle en accord avec les valeurs et compétences de chaque développeur.
        </Typography>
      </StepCard>
      <StepCard
        sx={{ mb: 2 }}
        title="L’ascension"
        subtitle="formation"
        Icon={HikingIcon}
      >
        <Typography>
          De la formation continue et de la montée en compétences, en code, en
          soft skills ou en personal branding.
        </Typography>
      </StepCard>
      <StepCard
        sx={{ mb: 8 }}
        title="La cordée"
        subtitle="entraide"
        Icon={SignatureIcon}
      >
        <Typography>
          Tout au long de son ascension, les développeurs profitent d'évènements
          communautaires réguliers, pour maintenir un lien fort entre
          collaborateurs et profiter d'un esprit de famille.
        </Typography>
      </StepCard>
      <Typography variant="h2" mb={4}>
        Des avantages pour grimper plus haut{" "}
      </Typography>
      <Typography mb={4}>
        Notre méthode permet aux membres de progresser rapidement, surtout quand
        on débute sa carrière ou qu'on essaie d'acquérir le statut de senior.
        Les valeurs de polyvalence et d'ouverture que nous transmettons sont
        formatrices.
        <br />
        <br />
        Nous sommes un tremplin pour la carrière d'un développeur, notamment à
        travers le renforcement du réseau professionnel et l'attribution à des
        missions adéquates au profil.
      </Typography>
      <Box
        width="100%"
        height="auto"
        mb={4}
        component="img"
        loading="lazy"
        src="https://picsum.photos/seed/picsum/536/354"
        alt="mountain-landscape"
      />
      <CollapseCard title="Aventure humaine" sx={{ mb: 2 }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          senectus pellentesque quam sed tellus, sapien non, scelerisque.
          Ullamcorper quam odio a quam in.
        </Typography>
      </CollapseCard>
      <CollapseCard title="Progression rapide" sx={{ mb: 2 }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          senectus pellentesque quam sed tellus, sapien non, scelerisque.
          Ullamcorper quam odio a quam in.
        </Typography>
      </CollapseCard>
      <CollapseCard title="Mission adéquate" sx={{ mb: 2 }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          senectus pellentesque quam sed tellus, sapien non, scelerisque.
          Ullamcorper quam odio a quam in.
        </Typography>
      </CollapseCard>
      <CollapseCard title="Réseau consolidé" sx={{ mb: 8 }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          senectus pellentesque quam sed tellus, sapien non, scelerisque.
          Ullamcorper quam odio a quam in.
        </Typography>
      </CollapseCard>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        component={Link}
        to="/contact"
      >
        Contactez-nous
      </Button>
    </>
  );
}

function StepCard({ title, subtitle, children, Icon, ...props }) {
  return (
    <Card {...props}>
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Icon color="action" />
          </Grid>
          <Grid item>
            <Typography fontWeight={700} component="span">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>({subtitle})</Typography>
          </Grid>
        </Grid>
        {children}
      </CardContent>
    </Card>
  );
}
