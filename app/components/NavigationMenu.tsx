import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "remix";
import { ContactIcon, HomeIcon } from "@ctrlup/rainbow-react";

function NavigationMenu({ toggle }: { toggle?: () => void }) {
  return (
    <List>
      {routes.map((route) => (
        <NavLink
          key={route.name}
          to={route.path}
          style={{
            textDecoration: "none",
          }}
          onClick={toggle}
        >
          {({ isActive }) => (
            <ListItem button>
              <ListItemIcon>
                <route.Icon
                  color={isActive ? "action" : "default"}
                  fontSize="small"
                />
              </ListItemIcon>
              <ListItemText
                primary={route.name}
                primaryTypographyProps={{
                  color: isActive ? "textPrimary" : "textSecondary",
                }}
              />
            </ListItem>
          )}
        </NavLink>
      ))}
    </List>
  );
}

export const routes: Route[] = [
  { path: "/", name: "Accueil", Icon: HomeIcon },
  { path: "/contact", name: "Contact", Icon: ContactIcon },
];

type Route = {
  path: string;
  name: string;
  Icon: React.ElementType;
};

export default NavigationMenu;
