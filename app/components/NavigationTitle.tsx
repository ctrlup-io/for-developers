import React from "react";
import { IconButton, Typography } from "@mui/material";
import { useLocation, useNavigate } from "@remix-run/react";
import { ArrowBack } from "@mui/icons-material";

import { routes } from "./NavigationMenu";

function NavigationTitle() {
  const navigate = useNavigate();
  const location = useLocation();
  const matches = routes.filter((route) => location.pathname.match(route.to));
  const route = matches[matches.length - 1];
  if (!route) return null;
  const { to, Icon, name } = route;
  const isRoot = to === location.pathname;
  const onBack = () => {
    navigate(-1);
  };
  return (
    <>
      {Icon && <Icon color="action" fontSize="small" sx={{ mr: 2 }} />}
      <Typography variant="h4">{name}</Typography>
      {!isRoot && (
        <IconButton onClick={onBack}>
          <ArrowBack />
        </IconButton>
      )}
    </>
  );
}

export default NavigationTitle;
