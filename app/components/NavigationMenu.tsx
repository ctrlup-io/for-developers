import React from "react";
import type { SvgIconProps } from "@mui/material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "@remix-run/react";
import {
  AboutIcon,
  colors,
  CommunityIcon,
  ContactIcon,
  HomeIcon,
  JobIcon,
  ServiceIcon,
  TeamIcon,
} from "@ctrlup/rainbow-react";

function NavigationMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <List disablePadding>
      {routes.map(({ to, name, Icon, primary }) => (
        <NavLink
          key={name}
          to={to}
          style={{
            textDecoration: "none",
          }}
          onClick={onNavigate}
        >
          {({ isActive }) => (
            <ListItemButton
              sx={{
                background: primary && colors.RAINBOW,
              }}
            >
              {Icon && (
                <ListItemIcon>
                  <Icon
                    color={isActive && !primary ? "action" : "inherit"}
                    fontSize="small"
                  />
                </ListItemIcon>
              )}
              <ListItemText
                primary={name}
                primaryTypographyProps={{
                  color: primary
                    ? "common.black"
                    : isActive
                    ? "textPrimary"
                    : "textSecondary",
                }}
              />
            </ListItemButton>
          )}
        </NavLink>
      ))}
    </List>
  );
}

export const routes: Route[] = [
  { to: "/", name: "Accueil", Icon: HomeIcon },
  { to: "/about", name: "À propos", Icon: AboutIcon },
  { to: "/services", name: "Services", Icon: ServiceIcon },
  { to: "/community", name: "Communauté", Icon: CommunityIcon },
  { to: "/team", name: "Équipe", Icon: TeamIcon },
  { to: "/jobs", name: "Jobs", Icon: JobIcon },
  { to: "/contact", name: "Contact", Icon: ContactIcon, primary: true },
];

export type Route = {
  to: string;
  name: string;
  Icon?: (props: SvgIconProps) => JSX.Element;
  primary?: boolean;
};

export default NavigationMenu;
