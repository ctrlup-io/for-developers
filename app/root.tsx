import { Outlet, useCatch } from "@remix-run/react";
import { Alert, Typography } from "@mui/material";

import App from "./components/App";
import Document from "./Document";

export function meta() {
  return { title: "Ctrl Up, une ESN régulière" };
}

export default function Root() {
  return (
    <Document>
      <App>
        <Outlet />
      </App>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <App>
        {caught.status === 404 ? (
          <>
            <Typography variant="h2" mb={4}>
              Oops
            </Typography>
            <Typography>
              Il semble que la corde soit rompue... <br />
              Vous subissez une erreur 404, le lien n’a pas été trouvé.
            </Typography>
          </>
        ) : (
          <Alert severity="error">
            [CatchBoundary]: {caught.status} {caught.statusText}
          </Alert>
        )}
      </App>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <App hideAppBar>
        <Alert severity="error">
          [ErrorBoundary]: There was an error: {error.message}
        </Alert>
      </App>
    </Document>
  );
}
