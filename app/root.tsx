import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { getInstalledInjectedConnectors, StarknetProvider } from "@starknet-react/core";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Carbonable",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  const connectors = getInstalledInjectedConnectors();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <StarknetProvider connectors={connectors}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </StarknetProvider>
      </body>
    </html>
  );
}
