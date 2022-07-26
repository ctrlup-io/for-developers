import { Box, Typography, useMediaQuery } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { DiscordIcon, NpmIcon } from "@ctrlup/rainbow-react";
import { useTheme } from "@mui/material/styles";

import NavList from "./NavList";
import NavListItem from "./NavListItem";
import NavIconList from "./NavIconList";
import NavIconListItem from "./NavIconListItem";

function Footer() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  if (isLarge) {
    return (
      <Box component="nav" bgcolor="background.paper" p={8} display="flex">
        <NavList fullWidth={!isLarge}>
          <NavListItem name="À propos" to="/about" />
          <NavListItem name="Services" to="/services" />
          <NavListItem name="Équipe" to="/team" />
          <NavListItem name="Jobs" to="/jobs" />
          <NavListItem name="Contactez-nous" to="/contact" primary />
          <NavListItem
            name="Ctrl Up"
            external
            to="https://www.infogreffe.fr/entreprise-societe/888875127-ctrl-up-330220B042110000.html"
          />
          <NavListItem name="Mentions légales" to="/privacy-and-terms" />
        </NavList>
        <Box flexGrow={1} />
        <Box display="flex" flexDirection="column" justifyContent="flex-end">
          <NavIconList>
            <NavIconListItem
              to="https://www.linkedin.com/company/ctrlup/"
              name="Ctrl Up sur LinkedIn"
              Icon={LinkedIn}
            />
            <NavIconListItem
              to="https://www.instagram.com/ctrlup_team/"
              name="Ctrl Up Team sur Instagram"
              Icon={Instagram}
            />
            <NavIconListItem
              to="https://discord.gg/5NPXddG9jx"
              name="Tech Ctrl sur Discord"
              Icon={DiscordIcon}
            />
            <NavIconListItem
              to="https://github.com/ctrlup-io"
              name="Ctrl Up sur GitHub"
              Icon={GitHub}
            />
            <NavIconListItem
              to="https://www.npmjs.com/org/ctrlup"
              name="Ctrl Up sur Npm"
              Icon={NpmIcon}
            />
          </NavIconList>
          <Typography>
            Fait avec{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            par notre équipe.
          </Typography>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      component="nav"
      bgcolor="background.paper"
      display="flex"
      flexDirection="column"
    >
      <NavList fullWidth>
        <NavListItem name="À propos" to="/about" />
        <NavListItem name="Services" to="/services" />
        <NavListItem name="Équipe" to="/team" />
        <NavListItem name="Jobs" to="/jobs" />
        <NavListItem name="Contact" to="/contact" primary />
      </NavList>
      <Box display="flex" flexDirection="column" justifyContent="flex-end">
        <NavIconList>
          <NavIconListItem
            to="https://www.linkedin.com/company/ctrlup/"
            name="Ctrl Up sur LinkedIn"
            Icon={LinkedIn}
          />
          <NavIconListItem
            to="https://www.instagram.com/ctrlup_team/"
            name="Ctrl Up Team sur Instagram"
            Icon={Instagram}
          />
          <NavIconListItem
            to="https://discord.gg/5NPXddG9jx"
            name="Tech Ctrl sur Discord"
            Icon={DiscordIcon}
          />
          <NavIconListItem
            to="https://github.com/ctrlup-io"
            name="Ctrl Up sur GitHub"
            Icon={GitHub}
          />
          <NavIconListItem
            to="https://www.npmjs.com/org/ctrlup"
            name="Ctrl Up sur Npm"
            Icon={NpmIcon}
          />
        </NavIconList>
      </Box>
      <NavList fullWidth>
        <NavListItem
          name="Ctrl Up"
          external
          to="https://www.infogreffe.fr/entreprise-societe/888875127-ctrl-up-330220B042110000.html"
        />
        <NavListItem name="Mentions légales" to="/privacy-and-terms" />
      </NavList>
      <Typography>
        Fait avec{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        par notre équipe.
      </Typography>
    </Box>
  );
}

export default Footer;
