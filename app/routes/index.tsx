import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Menu } from "~/components/Home/Menu";
import { B2B, Carousel, Values, Title, Video, WaitingList, Partners, Footer, Simulators, Steps } from "~/components/Home/Section";
import Separator from "~/components/Separator/Separator";
import type { ConfigData } from "~/types/types";
import { fetchConfiguration } from "~/utils/simulator.server";



type LoaderData = { simulators_config: Array<ConfigData> | null };

export async function loader() {
  const data: LoaderData = {
    simulators_config: await fetchConfiguration(),
  };

  if (!data) {
    throw new Response("Database unavailable", {
      status: 500
    });
  }

  return json(data);
};

export default function Index() {
  const config = useLoaderData<LoaderData>();

  return (
      <div className="relative">
        <Menu />
        <Title />
        <Video />
        <Carousel />
        { config.simulators_config ? <Simulators config={config.simulators_config} /> : null }
        <Steps />
        <B2B />
        <div className="mt-24"></div>
        <Values />
        <Separator />
        <Partners />
        <WaitingList />
        <Footer />
      </div>
  );
}
