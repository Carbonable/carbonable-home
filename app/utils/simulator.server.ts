import { db } from "~/utils/db.server";

export async function fetchConfiguration() {
    return await db.simulatorConfig.findMany({ select: {type: true, config: true }})
}