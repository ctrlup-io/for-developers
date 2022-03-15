import React from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router";

import { routes } from "./NavigationMenu";

function NavigationTitle() {
  const location = useLocation();
  const route = routes.find((route) => route.path.match(location.pathname));
  if (!route) return null;
  return (
    <>
      <route.Icon
        color="action"
        fontSize="small"
        sx={{ marginRight: (theme) => theme.spacing(2) }}
      />
      <Typography variant="h4">{route.name}</Typography>
    </>
  );
}

export default NavigationTitle;
