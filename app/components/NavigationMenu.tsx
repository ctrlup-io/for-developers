import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "remix";
import {
  AboutIcon,
  colors,
  CommunityIcon,
  ContactIcon,
  HomeIcon,
  ServiceIcon,
  TeamIcon,
} from "@ctrlup/rainbow-react";

function NavigationMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <List disablePadding>
      {routes.map((route) => (
        <NavLink
          key={route.name}
          to={route.path}
          style={{
            textDecoration: "none",
          }}
          onClick={onNavigate}
        >
          {({ isActive }) => (
            <ListItemButton
              sx={{
                background: route.primary && colors.RAINBOW,
              }}
            >
              {route.Icon && (
                <ListItemIcon>
                  <route.Icon
                    color={isActive && !route.primary ? "action" : "default"}
                    fontSize="small"
                  />
                </ListItemIcon>
              )}
              <ListItemText
                primary={route.name}
                primaryTypographyProps={{
                  color: route.primary
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
  { path: "/", name: "Accueil", Icon: HomeIcon },
  { path: "/about", name: "À propos", Icon: AboutIcon },
  { path: "/services", name: "Services", Icon: ServiceIcon },
  { path: "/community", name: "Communauté", Icon: CommunityIcon },
  { path: "/team", name: "Équipe", Icon: TeamIcon },
  { path: "/contact", name: "Contact", Icon: ContactIcon, primary: true },
];

export type Route = {
  path: string;
  name: string;
  Icon?: React.ElementType;
  primary?: boolean;
};

export default NavigationMenu;
