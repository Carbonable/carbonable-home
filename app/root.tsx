import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { StarknetConfig, InjectedConnector } from '@starknet-react/core'
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Carbonable - Web3 powered end-to-end carbon offset platform",
  description: "The simplest and smartest way to reach carbon neutrality. Invest in the best nature-based solutions. Manage your assets and drive your strategy efficiently.",
  viewport: "width=device-width,initial-scale=1",
  'og:url': "https://carbonable.io",
  'og:type': "website",
  'og:title': "Carbonable - Web3 powered end-to-end carbon offset platform",
  'og:description': "The simplest and smartest way to reach carbon neutrality. Invest in the best nature-based solutions. Manage your assets and drive your strategy efficiently.",
  'twitter:domain': "carbonable.io",
  'twitter:url': "https://carbonable.io",
  'twitter:title': "Carbonable - Web3 powered end-to-end carbon offset platform",
  'twitter:description': "The simplest and smartest way to reach carbon neutrality. Invest in the best nature-based solutions. Manage your assets and drive your strategy efficiently.",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
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
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </StarknetConfig>
        </body>
    </html>
  );
}
