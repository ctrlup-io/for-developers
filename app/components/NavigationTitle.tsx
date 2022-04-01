import React from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router";

import { routes } from "./NavigationMenu";

function NavigationTitle() {
  const location = useLocation();
  const matches = routes.filter((route) => location.pathname.match(route.path));
  const route = matches[matches.length - 1];
  if (!route) return null;
  return (
    <>
      <route.Icon color="action" fontSize="small" sx={{ mr: 2 }} />
      <Typography variant="h4">{route.name}</Typography>
    </>
  );
}

export default NavigationTitle;
