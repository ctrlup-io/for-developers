import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "@remix-run/react";
import { colors, DiscordIcon, NpmIcon } from "@ctrlup/rainbow-react";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

import type { Route } from "./NavigationMenu";

function Footer() {
  return (
    <Box
      bgcolor="background.paper"
      component="nav"
      display="flex"
      flexDirection="column"
    >
      <List disablePadding>
        {internals.map(({ to, name, primary }) => (
          <NavLink
            key={name}
            to={to}
            style={{
              textDecoration: "none",
            }}
          >
            {({ isActive }) => (
              <ListItemButton
                sx={{
                  background: primary ? colors.RAINBOW : null,
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
                    fontWeight: primary && 700,
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
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mt: 4,
          mb: 2,
        }}
        disablePadding
      >
        {externals.map(
          ({ to, name, Icon }) =>
            Icon && (
              <IconButton
                key={name}
                aria-label={name}
                href={to}
                target="_blank"
                sx={{ p: 1 }}
              >
                <Icon
                  sx={{
                    fill: colors.WHITE[50],
                  }}
                />
              </IconButton>
            )
        )}
      </List>
      <Divider variant="middle" />
      <List disablePadding>
        <a
          href="https://www.infogreffe.fr/entreprise-societe/888875127-ctrl-up-330220B042110000.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <ListItemButton disableGutters>
            <ListItemText
              primary="Ctrl Up"
              primaryTypographyProps={{
                color: "textSecondary",
                variant: "overline",
                textAlign: "center",
                fontSize: 14,
                letterSpacing: 1,
              }}
            />
          </ListItemButton>
        </a>
        <NavLink
          to="/privacy-and-terms"
          style={{
            textDecoration: "none",
          }}
        >
          <ListItemButton disableGutters>
            <ListItemText
              primary="Privacy + Terms"
              primaryTypographyProps={{
                color: "textSecondary",
                variant: "overline",
                textAlign: "center",
                fontSize: 14,
                letterSpacing: 1,
              }}
            />
          </ListItemButton>
        </NavLink>
      </List>
    </Box>
  );
}

const internals: Route[] = [
  { to: "/about", name: "À propos" },
  { to: "/services", name: "Services" },
  { to: "/team", name: "Équipe" },
  { to: "/jobs", name: "Jobs" },
  { to: "/contact", name: "Contact", primary: true },
];

const externals: Route[] = [
  {
    to: "https://www.linkedin.com/company/ctrlup/",
    name: "Ctrl Up sur LinkedIn",
    Icon: LinkedIn,
  },
  {
    to: "https://www.instagram.com/ctrlup_team/",
    name: "Ctrl Up Team sur Instagram",
    Icon: Instagram,
  },
  {
    to: "https://discord.gg/5NPXddG9jx",
    name: "Tech Ctrl sur Discord",
    Icon: DiscordIcon,
  },
  {
    to: "https://github.com/ctrlup-io",
    name: "Ctrl Up sur GitHub",
    Icon: GitHub,
  },
  {
    to: "https://www.npmjs.com/org/ctrlup",
    name: "Ctrl Up sur Npm",
    Icon: NpmIcon,
  },
];

export default Footer;
