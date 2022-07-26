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
  deviceType = "mobile",
}: {
  children: ReactNode;
  hideAppBar?: boolean;
  deviceType: string;
}) {
  const ssrMatchMedia = (query: string) => ({
    matches: mediaQuery.match(query, {
      width: deviceType === "mobile" ? "0px" : "1200px",
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
