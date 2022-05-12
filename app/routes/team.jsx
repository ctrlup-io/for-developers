import {
  Button,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Card,
} from "@mui/material";
import { Link, useLoaderData } from "@remix-run/react";

export function meta() {
  return {
    title: "Équipe",
  };
}

export async function loader() {
  return {
    members: shuffle(members),
  };
}

export default function Team() {
  const data = useLoaderData();
  return (
    <>
      <Typography variant="h2" mb={4}>
        Un esprit de famille
      </Typography>
      <Typography mb={8}>
        Chez Ctrl Up, on parle de cordée parce qu'on à la sensation d'être liés
        à tout moment, dans les bons comme dans les mauvais.
      </Typography>
      <ImageList cols={2} gap={16} sx={{ mt: 0, mb: 8 }}>
        {data.members.map(({ src, title, subtitle }) => (
          <ImageListItem key={src} component={Card}>
            <img
              src={src}
              alt="profile"
              loading="lazy"
              width={145}
              height={145}
            />
            <ImageListItemBar
              title={
                <Typography variant="h4" fontWeight={700}>
                  {title}
                </Typography>
              }
              subtitle={
                <Typography variant="h6" fontSize={12} fontWeight={700}>
                  {subtitle}
                </Typography>
              }
              position="below"
              sx={{ ml: 1, mr: 1 }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        color="primary"
        variant="contained"
        fullWidth
        component={Link}
        to="/contact"
        sx={{ mb: 8 }}
      >
        Rejoingez-nous
      </Button>
    </>
  );
}

function shuffle(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const members = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/IMG_20211217_140935_Bokeh_3.jpg?alt=media&token=2f460417-e90c-46b4-96d8-a5fa801cdc2f",
    title: "Pascal G.",
    subtitle: "Développeur",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/IMG_20211217_141036_Bokeh_2.jpg?alt=media&token=33e5ca67-f6dd-43d8-a682-235f02be3c30",
    title: "Célia D.",
    subtitle: "Développeuse",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/IMG_20211217_141232_Bokeh_2.jpg?alt=media&token=5d967d5f-886a-45d2-b914-ad83995a736d",
    title: "Valentin B.",
    subtitle: "Directeur Technique",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/original_28152831-3700-44e8-92ae-527759af7f29_IMG_20211217_140837_Bokeh_2.jpg?alt=media&token=7b147186-73c4-4b12-8743-2362f26a3d07",
    title: "Nicolas G.",
    subtitle: "Développeur",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/original_97650e0d-1cc6-47df-ad5f-a4a7efb6de08_IMG_20211217_140622_Bokeh_2.jpg?alt=media&token=ed5f425c-da61-4f34-b1f2-6a0d699ac40d",
    title: "Kévin H.",
    subtitle: "Directeur Général",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/original_d78fcd40-815a-48d0-bb7f-7b2f5750d7f9_IMG_20211217_140752_Bokeh_2.jpg?alt=media&token=dae30b21-ccdd-4908-861f-030201b4fbf6",
    title: "Cynthia V.",
    subtitle: "Développeuse",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/portrait-of-smiling-female-hiker-holding-hiking-stick-looking-at-camera%20(1).jpg?alt=media&token=043c6a31-6738-4b5b-a14a-1ddf88d40ef4",
    title: "Amandine B.",
    subtitle: "Test Manager",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/ashwini-chaudhary-qBmvwGsxqlc-unsplash%20(1).jpg?alt=media&token=7c86fe70-0a58-48c6-ae72-6e4f355f82b3",
    title: "Darryl N.",
    subtitle: "Développeur",
  },
];
