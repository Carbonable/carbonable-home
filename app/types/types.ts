import type { Prisma } from "@prisma/client";

export type ConfigData = { type: string, config: Prisma.JsonValue}

export type StepData = { id: string, title: string, text: string}