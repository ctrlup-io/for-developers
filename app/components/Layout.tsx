import { Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { theme, ThemeProvider } from "@ctrlup/rainbow-react";
import mediaQuery from "css-mediaquery";

import type { ReactNode } from "react";
import type { ThemeOptions } from "@mui/material/styles";

import AppBar from "./AppBar";
import Footer from "./Footer";

export default function Layout({
  children,
  hideAppBar = false,
  small = true,
}: {
  children: ReactNode;
  hideAppBar?: boolean;
  small: boolean;
}) {
  const ssrMatchMedia = (query: string) => ({
    matches: mediaQuery.match(query, {
      width: small ? "0px" : "1200px",
    }),
  });

  const muiTheme = createTheme(theme as ThemeOptions, {
    components: {
      MuiUseMediaQuery: {
        defaultProps: {
          ssrMatchMedia,
        },
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      {!hideAppBar && <AppBar />}
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          mt: small ? 10 : 20,
          mb: 16,
        }}
      >
        {children}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
