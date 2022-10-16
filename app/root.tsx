import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { StarknetConfig, InjectedConnector } from '@starknet-react/core'
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Carbonable",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export async function loader() {
  return json({
    ENV: {
      AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
      AIRTABLE_USER_BASE: process.env.AIRTABLE_USER_BASE,
    },
  });
}

export default function App() {
  const data = useLoaderData();
  const connectors = [
    new InjectedConnector({ options: { id: 'braavos' }}),
    new InjectedConnector({ options: { id: 'argentX' }}),
  ]
  return (
    <html lang="en">
        <head>
          <Meta />
          <Links />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </head>
        <body className="bg-black text-white">
          <StarknetConfig connectors={connectors}>
            <Outlet />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.ENV = ${JSON.stringify(
                  data.ENV
                )}`,
              }}
            />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </StarknetConfig>
        </body>
    </html>
  );
}
