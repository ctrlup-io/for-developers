import { Box, Typography } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { DiscordIcon, NpmIcon } from "@ctrlup/rainbow-react";

import NavList from "./NavList";
import NavListItem from "./NavListItem";
import NavIconList from "./NavIconList";
import NavIconListItem from "./NavIconListItem";
import useIsLargeScreen from "../styles/useIsLargeScreen";

const socialNav = (
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
);

const teamDedication = (
  <Typography p={4} textAlign="center">
    Fait avec{" "}
    <span role="img" aria-label="heart">
      ❤️
    </span>{" "}
    par notre équipe.
  </Typography>
);

function Footer() {
  const isLarge = useIsLargeScreen();

  const mainNav = (
    <NavList fullWidth={!isLarge}>
      <NavListItem name="À propos" to="/about" />
      <NavListItem name="Services" to="/services" />
      <NavListItem name="Équipe" to="/team" />
      <NavListItem name="Jobs" to="/jobs" />
      <NavListItem name="Contact" to="/contact" primary />
    </NavList>
  );

  const secondaryNav = (
    <NavList fullWidth={!isLarge}>
      <NavListItem
        name="Ctrl Up"
        external
        to="https://www.infogreffe.fr/entreprise-societe/888875127-ctrl-up-330220B042110000.html"
      />
      <NavListItem name="Mentions légales" to="/privacy-and-terms" />
    </NavList>
  );

  if (isLarge) {
    return (
      <Box component="nav" p={8} display="flex" position="relative">
        <Box
          component="img"
          src="topographicalLines5.svg"
          alt="topographical lines"
          position="absolute"
          bottom={0}
          right={0}
          width="100%"
          zIndex={-1}
        />
        <Box display="flex" flexDirection="column">
          {mainNav}
          {secondaryNav}
        </Box>
        <Box flexGrow={1} />
        <Box display="flex" flexDirection="column" justifyContent="flex-end">
          {socialNav}
          {teamDedication}
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
      {mainNav}
      {socialNav}
      {secondaryNav}
      {teamDedication}
    </Box>
  );
}

export default Footer;
