import React from "react";
import { IconButton, Typography } from "@mui/material";
import { useLocation, useNavigate } from "@remix-run/react";
import { ArrowBack } from "@mui/icons-material";

import { routes } from "./NavigationMenu";

function NavigationTitle() {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = routes.filter((route) => location.pathname.match(route.path));
  const route = matches[matches.length - 1];
  const isRoot = route.path === location.pathname;
  const onBack = () => {
    navigate(-1);
  };
  if (!route) return null;
  return (
    <>
      <route.Icon color="action" fontSize="small" sx={{ mr: 2 }} />
      <Typography variant="h4">{route.name}</Typography>
      {!isRoot && (
        <IconButton onClick={onBack}>
          <ArrowBack />
        </IconButton>
      )}
    </>
  );
}

export default NavigationTitle;
