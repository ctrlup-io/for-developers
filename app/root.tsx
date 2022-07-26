import { Outlet, useCatch } from "@remix-run/react";
import { Alert, Typography } from "@mui/material";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import parser from "ua-parser-js";

import type { LoaderFunction } from "@remix-run/node";

import Document from "./Document";
import Layout from "./components/Layout";

export const meta = () => ({
  charset: "utf-8",
  title: "Ctrl Up, une ESN singulière",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  const deviceType =
    parser(request.headers.get("user-agent") || undefined).device.type ||
    "desktop";
  return json(deviceType);
};

export default function App() {
  const deviceType = useLoaderData();
  return (
    <Document>
      <Layout deviceType={deviceType}>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const deviceType = useLoaderData();
  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout deviceType={deviceType}>
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
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  const deviceType = useLoaderData();
  return (
    <Document title="Error!">
      <Layout deviceType={deviceType} hideAppBar>
        <Alert severity="error">
          [ErrorBoundary]: There was an error: {error.message}
        </Alert>
      </Layout>
    </Document>
  );
}
