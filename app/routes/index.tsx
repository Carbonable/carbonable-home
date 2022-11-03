import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Menu } from "~/components/Home/Menu";
import { B2B, Carousel, Values, Title, Video, WaitingList, Partners, Footer, Simulators, Steps } from "~/components/Home/Section";
import Separator from "~/components/Separator/Separator";
import type { ConfigData } from "~/types/types";
import { fetchConfiguration } from "~/utils/simulator.server";
import { AnalyticsType } from '@prisma/client';
import { saveSimulatorAnalytics } from '~/utils/analytics.server';
import type { ActionArgs } from '@remix-run/node';


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

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const source = formData.get("source");
  let type: AnalyticsType = AnalyticsType.YIELD;
  let value: FormDataEntryValue | number = 0;

  if (source === "yield") {
    type =  AnalyticsType.YIELD;
    value = formData.get("investment") || 0;
  }
  
  if (source === "offset") {
    type =  AnalyticsType.OFFSET;
    value = formData.get("ccNeed") || 0;
  }

  await saveSimulatorAnalytics({type, value: parseInt(value.toString())});
  return redirect("/");
}

export default function Index() {
  const config = useLoaderData<LoaderData>();

  return (
      <>
        <Menu />
        <Title />
        <Video />
        <Carousel />
        { config.simulators_config ? <Simulators config={config.simulators_config} /> : null }
        <Steps />
        <B2B />
        <Values />
        <Separator />
        <Partners />
        <WaitingList />
        <Footer />
      </>
  );
}
