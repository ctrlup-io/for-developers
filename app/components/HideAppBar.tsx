import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import { colors } from "@ctrlup/rainbow-react";
import { Menu as MenuIcon } from "@mui/icons-material";

import NavigationMenu from "./NavigationMenu";
import NavigationTitle from "./NavigationTitle";

const drawerWidth = 240;

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar() {
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
              sx={{ mr: 2 }}
            >
              <MenuIcon
                sx={{
                  fill: colors.WHITE[50],
                  transform: open ? "rotate(90deg)" : "none",
                }}
              />
            </IconButton>
            <NavigationTitle />
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
        <Box overflow="auto">
          <NavigationMenu onNavigate={toggleDrawer} />
        </Box>
      </Drawer>
    </>
  );
}
