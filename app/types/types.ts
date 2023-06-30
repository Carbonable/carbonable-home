import type { Prisma } from "@prisma/client";

export type ConfigData = { type: string, config: Prisma.JsonValue }

export type LoaderData = { simulators_config: Array<ConfigData> | null };