import {
  Button,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Card,
  Grid,
} from "@mui/material";
import { Link, useLoaderData } from "@remix-run/react";
import { colors } from "@ctrlup/rainbow-react";

import getMembers from "../queries/getMembers.server";
import useIsLargeScreen from "../styles/useIsLargeScreen";

export function meta() {
  return {
    title: "Équipe",
  };
}

export async function loader() {
  return {
    members: getMembers(),
  };
}

export default function Team() {
  const data = useLoaderData();
  const isLarge = useIsLargeScreen();
  return (
    <Grid container flexDirection="row" spacing={4}>
      <Grid
        item
        xs={12}
        display={{ xs: "none", lg: "block" }}
        position="absolute"
        left={0}
        top={0}
        width="80%"
        zIndex={-1}
      >
        <img src="topographicalLines2.svg" alt="topographical lines" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">Un esprit de famille</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          Chez Ctrl Up, on parle de cordée parce qu'on à la sensation d'être
          liés à tout moment, dans les bons comme dans les mauvais.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ImageList cols={isLarge ? 4 : 2} gap={16}>
          {data.members.map(({ src, title, subtitle }) => (
            <ImageListItem key={title} component={Card}>
              <img
                src={src}
                alt="profile"
                loading="lazy"
                width={145}
                height={145}
              />
              <ImageListItemBar
                title={
                  <Typography variant="h4" fontWeight="bold">
                    {title}
                  </Typography>
                }
                subtitle={
                  <Typography variant="h6" fontSize={12} fontWeight="bold">
                    {subtitle}
                  </Typography>
                }
                position="below"
                sx={{ ml: 1, mr: 1 }}
              />
            </ImageListItem>
          ))}
          {isLarge && (
            <ImageListItem key="join-us">
              <Button
                variant="outlined"
                component={Link}
                to="/contact"
                sx={{
                  height: "100%",
                  background: colors.RAINBOW,
                  WebkitBackgroundClip: "text",
                  MozBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  MozTextFillColor: "transparent",
                  textAlign: "center",
                }}
              >
                Deviens le prochain ou la prochaine, rejoins-nous !
              </Button>
            </ImageListItem>
          )}
        </ImageList>
      </Grid>
      <Grid item xs={12} display={{ xs: "block", lg: "none" }}>
        <Button
          color="primary"
          variant="contained"
          fullWidth={!isLarge}
          component={Link}
          to="/contact"
        >
          Rejoingez-nous
        </Button>
      </Grid>
    </Grid>
  );
}
