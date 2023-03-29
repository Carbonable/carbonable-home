import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Menu } from "~/components/Home/Menu";
import { B2B, Carousel, Values, Title, Video, WaitingList, Partners, Footer, Simulators, Steps } from "~/components/Home/Section";
import News from "~/components/Home/Section/News";
import Separator from "~/components/Separator/Separator";
import type { ConfigData } from "~/types/types";
import { client } from "~/utils/sanity/client";
import { fetchConfiguration } from "~/utils/simulator.server";

type LoaderData = { simulators_config: Array<ConfigData> | null };

export async function loader() {
  const config: LoaderData = {
    simulators_config: await fetchConfiguration(),
  };

  if (!config) {
    throw new Response("Database unavailable", {
      status: 500
    });
  }

  const news = await client.fetch(
    `*[_type == "news"]`);

  return json({ news, config });
};

export default function Index() {
  const data = useLoaderData();
  const config = data.config;
  const news = data.news;
  console.log(config)
  return (
      <div className="relative w-screen">
        <Menu />
        <Title />
        <Video />
        <Carousel />
        { config.simulators_config ? <Simulators config={config.simulators_config} /> : null }
        <News news={news} />
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
