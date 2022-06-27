import {
  Button,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import { colors } from "@ctrlup/rainbow-react";

function NavListItem({
  name,
  primary = false,
  isActive = false,
  fullWidth = true,
}: {
  name: string;
  to: string;
  external?: boolean;
  primary?: boolean;
  isActive?: boolean;
  fullWidth?: boolean;
}) {
  if (!name) return null;
  if (fullWidth)
    return (
      <ListItemButton
        component="li"
        sx={{
          background: primary ? colors.RAINBOW : null,
          paddingX: 3,
          paddingY: 2.5,
        }}
      >
        <ListItemText
          primary={name}
          primaryTypographyProps={{
            color: primary
              ? "common.black"
              : isActive
              ? "textPrimary"
              : "textSecondary",
            fontSize: 14,
            fontWeight: primary ? 700 : "default",
            letterSpacing: 1,
            textAlign: "center",
            variant: "overline",
          }}
        />
      </ListItemButton>
    );
  if (primary) {
    return (
      <Button variant="contained" size="small">
        {name}
      </Button>
    );
  }
  return (
    <Typography
      component="div"
      variant="overline"
      fontSize={14}
      paddingY={1}
      color={isActive ? "textPrimary" : "textSecondary"}
      letterSpacing={1}
    >
      {name}
    </Typography>
  );
}

export default NavListItem;
