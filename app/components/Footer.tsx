import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "remix";
import { colors } from "@ctrlup/rainbow-react";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

import { Route } from "./NavigationMenu";
import NpmIcon from "./NpmIcon";
import DiscordIcon from "./DiscordIcon";

function Footer() {
  return (
    <Box
      bgcolor="background.paper"
      component="nav"
      display="flex"
      flexDirection="column"
    >
      <List disablePadding>
        {internals.map((link) => (
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
        {externals.map((link) => (
          <IconButton
            key={link.name}
            aria-label={link.name}
            href={link.path}
            target="_blank"
            sx={{ p: 1 }}
          >
            <link.Icon
              sx={{
                fill: colors.WHITE[50],
              }}
            />
          </IconButton>
        ))}
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
  { path: "/about", name: "À propos" },
  { path: "/services", name: "Services" },
  { path: "/team", name: "Équipe" },
  { path: "/jobs", name: "Jobs" },
  { path: "/contact", name: "Contact", primary: true },
];

const externals: Route[] = [
  {
    path: "https://www.linkedin.com/company/ctrlup/",
    name: "Ctrl Up sur LinkedIn",
    Icon: LinkedIn,
  },
  {
    path: "https://www.instagram.com/ctrlup_team/",
    name: "Ctrl Up Team sur Instagram",
    Icon: Instagram,
  },
  {
    path: "https://discord.gg/5NPXddG9jx",
    name: "Tech Ctrl sur Discord",
    Icon: DiscordIcon,
  },
  {
    path: "https://github.com/ctrlup-io",
    name: "Ctrl Up sur GitHub",
    Icon: GitHub,
  },
  {
    path: "https://www.npmjs.com/org/ctrlup",
    name: "Ctrl Up sur Npm",
    Icon: NpmIcon,
  },
];

export default Footer;
