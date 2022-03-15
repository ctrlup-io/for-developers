import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";
import { Link } from "remix";
import { CollapseCard } from "@ctrlup/rainbow-react";

export function meta() {
  return {
    title: "À propos",
  };
}

export default function About() {
  return (
    <>
      <Typography variant="h1">Une histoire d’humains</Typography>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          marginTop: (theme) => theme.spacing(4),
        }}
        component="img"
        loading="lazy"
        src="https://picsum.photos/seed/picsum/536/354"
        alt="random"
      />
      <Typography
        sx={{
          marginTop: (theme) => theme.spacing(8),
        }}
      >
        En 2018, Kevin bosse dans une ESN et fait un constat inquiétant. Dans
        son entreprise, le manque de développeurs se fait sentir. Difficile
        d'attirer de nouveau talents, les projets ralentissent. Il faut trouver
        une solution, mais surtout comprendre pourquoi on en arrive là.
        <br />
        <br />
        De son côté, Valentin travaille avec les développeurs d'une grande
        entreprise de la tech. Il les forme, les accompagne, et développe un
        maximum d'outils pour les aider dans leur quotidien. Pédagogue et
        empathique, il comprend peu à peu que beaucoup de développeurs sont
        frustrés voir épuisés.
      </Typography>
      <ImageList
        cols={2}
        gap={16}
        sx={{
          marginTop: (theme) => theme.spacing(8),
        }}
      >
        {[
          "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/Rectangle%20164.png?alt=media&token=1cd10d30-772b-4247-af1a-f954cc036b64",
          "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/Rectangle%20163.png?alt=media&token=6b5f0be8-e044-4ccb-937f-e75e1b1c6ba7",
        ].map((img) => (
          <ImageListItem key={img}>
            <img src={img} alt="random" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography
        sx={{
          marginTop: (theme) => theme.spacing(8),
        }}
      >
        Autour d'une discussion, les deux amis explorent les raisons qui
        démontrent les limites des ESN à grande échelle : solitude, manque de
        reconnaissance, missions inadaptées, stagnation des compétences, manque
        d'accompagnement...
        <br />
        Les développeurs envoyés en régie sont isolées. Il faut y remédier.
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          marginTop: (theme) => theme.spacing(8),
        }}
        component="img"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/Frame%20128.png?alt=media&token=13965644-af7b-4d8e-8353-b97aabbf9db7"
        alt="random"
      />
      <Typography
        variant="h1"
        sx={{
          marginTop: (theme) => theme.spacing(8),
        }}
      >
        Humaniser le développement en régie
      </Typography>
      <Typography
        sx={{
          marginTop: (theme) => theme.spacing(2),
        }}
      >
        L'idée est de trouver un modèle différent, innover pour améliorer le
        quotidien des développeurs. La solution est simple, c'est en renforçant
        le lien humain qu'ils en tireront une nouvelle force : celle d'être
        motivé et surtout, heureux dans leur boulot. On attache une importance
        capitale à ce que chaque collaborateur se sente soutenu par Ctrl Up.
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          marginTop: (theme) => theme.spacing(8),
        }}
        component="img"
        loading="lazy"
        src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/06%201.png?alt=media&token=d983ecd7-6c95-40ef-8617-b4a5bf01a4c3"
        alt="random"
      />
      <Typography
        variant="h1"
        sx={{
          marginTop: (theme) => theme.spacing(8),
        }}
      >
        Valeurs fortes et convictions assurées
      </Typography>
      <Typography
        sx={{
          marginTop: (theme) => theme.spacing(2),
        }}
      >
        C'est parce que nous sommes nous-même empathiques et bienveillants qu'on
        y croit fermement. C'est en répandant des ondes positives de partage et
        de transmission que nous pouvons tous évoluer, constamment.
        <br />
        <br />
        Pour monter toujours plus haut, nous avons décidé d'embarquer des
        valeurs dans notre paquetage, et chaque membre s'aligne sur ces
        convictions :
      </Typography>
      <CollapseCard
        title="Bienveillance"
        sx={{
          marginTop: (theme) => theme.spacing(2),
        }}
      >
        <Typography>
          L'altruisme et le soin de l'autre sont des idées que nous aimons, la
          base de nos relations sont fondées sur cette idée qu'il faut rester
          bienveillant au sein de la communauté.
        </Typography>
      </CollapseCard>
      <CollapseCard
        title="Empathie"
        sx={{
          marginTop: (theme) => theme.spacing(2),
        }}
      >
        <Typography>
          La compréhension de l'autre est cruciale, elle nous permet la remise
          en question qui nous pousse à nous améliorer, chaque jour. Il s'agit
          de pouvoir se mettre à la place de l'autre, pour l'aider à surmonter
          ses problèmes.
        </Typography>
      </CollapseCard>
      <CollapseCard
        title="Pédagogie"
        sx={{
          marginTop: (theme) => theme.spacing(2),
        }}
      >
        <Typography>
          L'apprentissage permanent fait partie de notre registre, nous croyons
          qu'on bon développeur est un développeur qui apprend sans cesse, car
          les technologies évoluent rapidement et nécessite d'assurer une veille
          constante.
        </Typography>
      </CollapseCard>
      <CollapseCard
        title="Partage"
        sx={{
          marginTop: (theme) => theme.spacing(2),
        }}
      >
        <Typography>
          La générosité dans le savoir permet à tous de grandir, c'est l'essence
          même d'internet. Les projets Open Source et les conférences sont notre
          dada, et nous partageons naturellement des projets qui pourront aider
          les autres.
        </Typography>
      </CollapseCard>
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
