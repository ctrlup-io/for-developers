import {
  Typography,
  Box,
  ImageList,
  ImageListItem,
  Button,
  useMediaQuery,
  Grid,
  Stack,
} from "@mui/material";
import { Link } from "@remix-run/react";
import { CollapseCard, Title } from "@ctrlup/rainbow-react";
import { useTheme } from "@mui/material/styles";

export function meta() {
  return {
    title: "À propos",
  };
}

export default function About() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container flexDirection="row" spacing={4}>
      {isLarge && (
        <Grid
          item
          xs={12}
          position="absolute"
          top={0}
          right={0}
          width="80%"
          zIndex={-1}
        >
          <img src="topographicalLines2.svg" alt="topographical lines" />
        </Grid>
      )}
      <Grid item xs={12}>
        <Title variant="h2" stainIndex={0}>
          Une histoire d’humains
        </Title>
      </Grid>
      <Grid
        item
        md={12}
        lg={8}
        maxHeight={isLarge ? 862 : 230}
        overflow="hidden"
      >
        <Box
          alt="mountains-summit"
          component="img"
          loading="lazy"
          width="100%"
          src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/mountains-summit.webp?alt=media&token=689523b6-0e20-469d-b521-dabc562840f2"
        />
      </Grid>
      <Grid item md={12} lg={4}>
        <Stack spacing={4}>
          <Typography>
            En 2018, Kevin bosse dans une ESN et fait un constat inquiétant.
            Dans son entreprise, le manque de développeurs se fait sentir.
            Difficile d'attirer de nouveau talents, les projets ralentissent. Il
            faut trouver une solution, mais surtout comprendre pourquoi on en
            arrive là.
          </Typography>
          <Typography>
            De son côté, Valentin travaille avec les développeurs d'une grande
            entreprise de la tech. Il les forme, les accompagne, et développe un
            maximum d'outils pour les aider dans leur quotidien. Pédagogue et
            empathique, il comprend peu à peu que beaucoup de développeurs sont
            frustrés voir épuisés.
          </Typography>
          <ImageList cols={2} gap={16}>
            {[
              "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/Rectangle%20164.png?alt=media&token=1cd10d30-772b-4247-af1a-f954cc036b64",
              "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/Rectangle%20163.png?alt=media&token=6b5f0be8-e044-4ccb-937f-e75e1b1c6ba7",
            ].map((img) => (
              <ImageListItem key={img}>
                <img src={img} alt="profile" loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
          <Typography>
            Autour d'une discussion, les deux amis explorent les raisons qui
            démontrent les limites des ESN à grande échelle : solitude, manque
            de reconnaissance, missions inadaptées, stagnation des compétences,
            manque d'accompagnement...
            <br />
            Les développeurs envoyés en régie sont isolées. Il faut y remédier.
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        md={12}
        lg={8}
        maxHeight={isLarge ? null : 230}
        overflow="hidden"
        order={isLarge ? 4 : null}
      >
        <Box
          alt="crest-path"
          component="img"
          loading="lazy"
          width="100%"
          src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/crest-path.webp?alt=media&token=49ef345e-25a7-41e2-829a-5d75d95482dc"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" mt={isLarge ? 16 : null}>
          Humaniser le développement en régie
        </Typography>
      </Grid>
      {isLarge && (
        <Grid
          item
          xs={12}
          position="absolute"
          top={1100}
          right={0}
          width="20%"
          zIndex={-1}
        >
          <img src="topographicalLines3.svg" alt="topographical lines" />
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography>
          L'idée est de trouver un modèle différent, innover pour améliorer le
          quotidien des développeurs. La solution est simple, c'est en
          renforçant le lien humain qu'ils en tireront une nouvelle force :
          celle d'être motivé et surtout, heureux dans leur boulot. On attache
          une importance capitale à ce que chaque collaborateur se sente soutenu
          par Ctrl Up.
        </Typography>
      </Grid>
      <Grid item md={12} lg={8} order={isLarge ? 6 : null}>
        <Box
          alt="camp"
          component="img"
          loading="lazy"
          width="100%"
          mt={isLarge ? 16 : null}
          src="https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/camps.webp?alt=media&token=5e6f6a79-0590-411c-aba4-21640edbfc60"
        />
      </Grid>
      <Grid item xs={12} order={isLarge ? 2 : null}>
        <Typography variant="h2" mt={isLarge ? 16 : null}>
          Valeurs fortes et convictions assurées
        </Typography>
      </Grid>
      <Grid item md={12} lg={4} order={isLarge ? 3 : null}>
        <Stack spacing={4}>
          <Typography>
            C'est parce que nous sommes nous-même empathiques et bienveillants
            qu'on y croit fermement. C'est en répandant des ondes positives de
            partage et de transmission que nous pouvons tous évoluer,
            constamment.
          </Typography>
          <Typography>
            Pour monter toujours plus haut, nous avons décidé d'embarquer des
            valeurs dans notre paquetage, et chaque membre s'aligne sur ces
            convictions :
          </Typography>
        </Stack>
      </Grid>
      <Grid item md={12} lg={4} order={isLarge ? 5 : null} width="100%">
        <Stack spacing={2} mt={isLarge ? 16 : null}>
          <CollapseCard defaultExpanded={isLarge} title="Bienveillance">
            <Typography>
              L'altruisme et le soin de l'autre sont des idées que nous aimons,
              la base de nos relations sont fondées sur cette idée qu'il faut
              rester bienveillant au sein de la communauté.
            </Typography>
          </CollapseCard>
          <CollapseCard defaultExpanded={isLarge} title="Empathie">
            <Typography>
              La compréhension de l'autre est cruciale, elle nous permet la
              remise en question qui nous pousse à nous améliorer, chaque jour.
              Il s'agit de pouvoir se mettre à la place de l'autre, pour l'aider
              à surmonter ses problèmes.
            </Typography>
          </CollapseCard>
          <CollapseCard defaultExpanded={isLarge} title="Pédagogie">
            <Typography>
              L'apprentissage permanent fait partie de notre registre, nous
              croyons qu'on bon développeur est un développeur qui apprend sans
              cesse, car les technologies évoluent rapidement et nécessite
              d'assurer une veille constante.
            </Typography>
          </CollapseCard>
          <CollapseCard defaultExpanded={isLarge} title="Partage">
            <Typography>
              La générosité dans le savoir permet à tous de grandir, c'est
              l'essence même d'internet. Les projets Open Source et les
              conférences sont notre dada, et nous partageons naturellement des
              projets qui pourront aider les autres.
            </Typography>
          </CollapseCard>
        </Stack>
      </Grid>
      <Grid item xs={12} order={isLarge ? 1 : null}>
        <Button
          color="primary"
          variant="contained"
          fullWidth={!isLarge}
          component={Link}
          to="/contact"
        >
          Contactez-nous
        </Button>
      </Grid>
    </Grid>
  );
}
