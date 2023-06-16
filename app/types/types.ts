import type { Prisma } from "@prisma/client";

export type ConfigData = { type: string, config: Prisma.JsonValue }