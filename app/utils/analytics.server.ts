import type { AnalyticsType } from "@prisma/client";
import { db } from "./db.server";
import { getErrorMessage } from "./utils";

type SaveAnalyticsType = {
    type: AnalyticsType;
    value: number;
};
/**
 * Save simulator analytics
 * 
 * @param { SaveAnalyticsType } SaveAnalyticsType
 * @returns { Promise<string> } Returns the result of the save call
 */
export async function saveSimulatorAnalytics({type, value}: SaveAnalyticsType): Promise<string> {
    try {
        await db.simulatorAnalytics.create({
          data: { type, value },
        });
        return "Saved";
    } catch (e) {
        return getErrorMessage(e);
    }
}

