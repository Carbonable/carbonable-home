import type { Prisma } from "@prisma/client";
import { db } from "~/utils/db.server";

/**
 * Fetch simulator configuration
 * 
 * @returns { Promise<string> } simulator configuration
 */
export async function fetchConfiguration(): Promise<{ type: string; config: Prisma.JsonValue; }[] | null> {
    try {
        return await db.simulatorConfig.findMany({ select: {type: true, config: true }});
    } catch {
        return null;
    }
    
    
}