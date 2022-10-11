import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Menu } from "~/components/Home/Menu";
import { B2B, Carousel, Values, Title, Video, WaitingList, Partners, Footer, Simulators } from "~/components/Home/Section";
import Separator from "~/components/Separator/Separator";
import type { ConfigData } from "~/types/types";

import { db } from "~/utils/db.server";

type LoaderData = { simulators_config: Array<ConfigData> };

export async function loader() {
  const data: LoaderData = {
    simulators_config: await db.simulatorConfig.findMany({ select: {type: true, config: true }}),
  };
  return json(data);
};

export default function Index() {
  const config = useLoaderData<LoaderData>();

  return (
      <>
        <Menu />
        <Title />
        <Video />
        <Carousel />
        <Simulators config={config.simulators_config} />
        <B2B />
        <Values />
        <Separator />
        <Partners />
        <WaitingList />
        <Footer />
      </>
  );
}
