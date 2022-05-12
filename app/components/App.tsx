import { Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
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
  return (
    <ThemeProvider theme={muiTheme}>
      {!hideAppBar && <AppBar />}
      <Container
        maxWidth="xs"
        component="main"
        sx={{
          mt: 10,
          mb: 16,
        }}
      >
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
