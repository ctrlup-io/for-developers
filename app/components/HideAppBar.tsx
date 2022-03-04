import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { colors, ContactIcon, HomeIcon } from "@ctrlup/rainbow-react";
import { useLocation } from "react-router";
import { Menu as MenuIcon } from "@mui/icons-material";
import { NavLink } from "remix";

const drawerWidth = 240;

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const routes = [
  { path: "/", name: "Accueil", Icon: HomeIcon },
  { path: "/contact", name: "Contact", Icon: ContactIcon },
];

export default function HideAppBar() {
  const location = useLocation();
  const route = routes.find((route) => route.path.match(location.pathname));

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar sx={{ alignItems: "center" }}>
            <IconButton
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
              sx={{
                marginRight: (theme) => theme.spacing(2),
              }}
            >
              <MenuIcon
                sx={{
                  fill: colors.WHITE[50],
                  transform: open ? "rotate(90deg)" : "none",
                }}
              />
            </IconButton>
            {route && (
              <>
                <route.Icon
                  color="action"
                  fontSize="small"
                  sx={{ marginRight: (theme) => theme.spacing(2) }}
                />
                <Typography variant="h4">{route.name}</Typography>
              </>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {routes.map((route) => (
              <NavLink
                key={route.name}
                to={route.path}
                style={{
                  textDecoration: "none",
                }}
                onClick={toggleDrawer}
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
        </Box>
      </Drawer>
    </>
  );
}
