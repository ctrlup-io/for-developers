import React from "react";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "remix";
import { colors } from "@ctrlup/rainbow-react";

function Footer() {
  return (
    <Box bgcolor="background.paper">
      <List disablePadding>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            style={{
              textDecoration: "none",
            }}
          >
            {({ isActive }) => (
              <ListItemButton
                sx={{
                  background: link.primary && colors.RAINBOW,
                }}
              >
                <ListItemText
                  primary={link.name}
                  primaryTypographyProps={{
                    color: link.primary
                      ? "common.black"
                      : isActive
                      ? "textPrimary"
                      : "textSecondary",
                    fontWeight: link.primary && 700,
                    variant: "overline",
                    textAlign: "center",
                    fontSize: 14,
                    letterSpacing: 1,
                  }}
                />
              </ListItemButton>
            )}
          </NavLink>
        ))}
      </List>
    </Box>
  );
}

const links: Link[] = [
  { path: "/about", name: "À propos" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact", primary: true },
];

type Link = {
  path: string;
  name: string;
  primary?: boolean;
};

export default Footer;