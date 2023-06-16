import { Outlet, useLoaderData } from "@remix-run/react";
import Footer from "~/components/Footer";
import Menu from "~/components/Menu";

export async function loader() {
  return { dapp: process.env.DAPP_URL };
}

export default function Index() {
  const data = useLoaderData();

  return (
      <div className="relative w-screen mx-auto 2xl:max-w-6xl">
        <Menu dAppLink={data.dapp} />
        <Outlet />
        <Footer />
      </div>
  );
}
