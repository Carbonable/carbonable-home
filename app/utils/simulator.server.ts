import type { Prisma, PrismaPromise } from "@prisma/client";
import { db } from "~/utils/db.server";

/**
 * Fetch simulator configuration
 * 
 * @returns { Promise<string> } starnknetId or empty string
 */
export async function fetchConfiguration(): Promise<PrismaPromise<{
    type: string;
    config: Prisma.JsonValue;
}[]>> {
    return await db.simulatorConfig.findMany({ select: {type: true, config: true }})
}