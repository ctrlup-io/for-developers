import { Container, useMediaQuery } from "@mui/material";
import { createTheme, useTheme } from "@mui/material/styles";
import { theme, ThemeProvider } from "@ctrlup/rainbow-react";
import type { ReactNode } from "react";
import type { ThemeOptions } from "@mui/material";

import AppBar from "./AppBar";
import Footer from "./Footer";

const muiTheme = createTheme(theme as ThemeOptions);

export default function App({
  children,
  hideAppBar = false,
}: {
  children: ReactNode;
  hideAppBar?: boolean;
}) {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <ThemeProvider theme={muiTheme}>
      {!hideAppBar && <AppBar />}
      <Container
        maxWidth={isLarge ? "xl" : "xs"}
        component="main"
        sx={{
          mt: 10,
          mb: 16,
        }}
      >
        {children}
      </Container>
      <Footer isLarge={isLarge} />
    </ThemeProvider>
  );
}
