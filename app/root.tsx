import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from "@remix-run/react";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Carbonable - Web3 powered end-to-end carbon removal platform",
  description: "The simplest and smartest way to reach Net Zero. Invest in the best nature-based solutions. Manage your assets and drive your strategy efficiently.",
  image: "https://carbonable.io/assets/images/social/social.jpg",
  viewport: "width=device-width,initial-scale=1",
  'og:url': "https://carbonable.io",
  'og:type': "website",
  'og:title': "Carbonable - Web3 powered end-to-end carbon removal platform",
  'og:description': "The simplest and smartest way to reach Net Zero. Invest in the best nature-based solutions. Manage your assets and drive your strategy efficiently.",
  'og:image': "https://carbonable.io/assets/images/social/social.jpg",
  'twitter:domain': "carbonable.io",
  'twitter:url': "https://carbonable.io",
  'twitter:title': "Carbonable - Web3 powered end-to-end carbon removal platform",
  'twitter:description': "The simplest and smartest way to reach Net Zero. Invest in the best nature-based solutions. Manage your assets and drive your strategy efficiently.",
  'twitter:card': "summary_large_image",
  'twitter:image': "https://carbonable.io/assets/images/social/social.jpg",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
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
        <body className="bg-neutral-800 text-neutral-100">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html className="bg-neutral-800 text-neutral-100">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex w-screen h-screen items-center justify-center flex-wrap">
          <div>
            <div className="text-9xl font-trash w-full text-center">{caught.status}</div>
            <div className="text-7xl font-americana w-full text-center">{caught.statusText}</div>
            <div className="text-center mt-4">
              <Link to={"/"} className="text-green text-center">Go to homepage</Link>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}