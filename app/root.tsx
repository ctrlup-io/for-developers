import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import { useContext, useEffect } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import {
  ThemeProvider as EmotionThemeProvider,
  withEmotionCache,
} from "@emotion/react";
import { theme } from "@ctrlup/rainbow-react";
import {
  CssBaseline,
  ThemeOptions,
  Container,
  Alert,
} from "@mui/material";

import ServerStyleContext from "./styles/server.context";
import ClientStyleContext from "./styles/client.context";
import RainbowSvg from "./components/Rainbow";
import HideAppBar from "./components/HideAppBar";

const muiTheme = createTheme(theme as ThemeOptions);

export function meta() {
  return { title: "Ctrl Up, une ESN régulière" };
}

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    useEffect(() => {
      emotionCache.sheet.container = document.head;

      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });

      clientStyleData.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Montserrat:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <RainbowSvg />
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <EmotionThemeProvider theme={muiTheme}>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <HideAppBar />
          <Container
            component="main"
            sx={{
              marginTop: (theme) => theme.spacing(10),
              marginBottom: (theme) => theme.spacing(8),
            }}
          >
            <Outlet />
          </Container>
        </MuiThemeProvider>
      </EmotionThemeProvider>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Container
        component="main"
        sx={{
          marginTop: (theme) => theme.spacing(2),
          marginBottom: (theme) => theme.spacing(8),
        }}
      >
        <Alert severity="error">
          [CatchBoundary]: {caught.status} {caught.statusText}
        </Alert>
      </Container>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <Container
        component="main"
        sx={{
          marginTop: (theme) => theme.spacing(2),
          marginBottom: (theme) => theme.spacing(8),
        }}
      >
        <Alert severity="error">
          [ErrorBoundary]: There was an error: {error.message}
        </Alert>
      </Container>
    </Document>
  );
}
