import { AnalyticsType } from "@prisma/client";
import type { ActionArgs } from "@remix-run/node";
import { saveSimulatorAnalytics } from "~/utils/analytics.server";

/**
 * Save analytics from simulator of the user in Airtable
 * 
 * @param { ActionArgs } request
 * @returns { json } Returns a json containing either the error message or the success message
 */
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

    return await saveSimulatorAnalytics({type, value: parseInt(value.toString())});
 }