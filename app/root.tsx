import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError
} from "@remix-run/react";
import styles from "./styles/app.css";

export const meta: V2_MetaFunction = () => {
  return [
      { title: "Carbonable - Web3 powered end-to-end carbon removal platform" },
      { name: "description", content:"The simplest and smartest way to reach Net Zero. Invest in the best nature-based solutions. Manage your assets and drive your strategy efficiently."},
      { name: "image", content: "https://carbonable.github.io/socials/social.jpg"},
      { property: 'og:url', content:"https://app.carbonable.io"},
      { property: 'og:type', content: "website"},
      { property: 'og:title', content: "Carbonable - Web3 powered end-to-end carbon removal platform"},
      { property: 'og:description', content: "The simplest and smartest way to reach Net Zero. Invest in the best nature-based solutions. Manage your assets and drive your strategy efficiently."},
      { property: 'og:image', content: "https://carbonable.github.io/socials/social.jpg"},
      { property: 'twitter:domain', content: "carbonable.io"},
      { property: 'twitter:url', content: "https://app.carbonable.io"},
      { property: 'twitter:title', content: "Carbonable - Web3 powered end-to-end carbon removal platform"},
      { property: 'twitter:description', content: "The simplest and smartest way to reach Net Zero. Invest in the best nature-based solutions. Manage your assets and drive your strategy efficiently."},
      { property: 'twitter:card', content: "summary_large_image"},
      { property: 'twitter:image', content: "https://carbonable.github.io/socials/social.jpg"}
  ]
};


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export async function loader() {
  return { dapp: process.env.DAPP_URL };
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
        <body className="bg-neutral-800 text-neutral-100 relative w-screen mx-auto 2xl:max-w-7xl">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <html className="bg-neutral-800 text-white">
        <head>
          <title>Oops!</title>
          <Meta />
          <Links />
        </head>
        <body>
          <div className="flex w-screen h-screen items-center justify-center flex-wrap">
            <div>
              <div className="text-9xl font-trash w-full text-center">{error.status}</div>
              <div className="text-7xl font-americana w-full text-center">{error.data.message}</div>
              <div className="text-center mt-4">
                <Link to={"/simulator"} className="text-green text-center">Go to simulator</Link>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }

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
            <div className="text-6xl font-trash w-full text-center">Oops!</div>
            <div className="text-4xl font-americana w-full text-center">We are working on fixing this issue</div>
            <div className="text-center mt-4">
              <Link to={"/simulator"} className="text-green text-center">Go to simulator</Link>
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
