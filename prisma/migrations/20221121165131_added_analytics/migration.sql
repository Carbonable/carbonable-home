-- CreateEnum
CREATE TYPE "AnalyticsType" AS ENUM ('YIELD', 'OFFSET');

-- CreateTable
CREATE TABLE "SimulatorAnalytics" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "AnalyticsType" NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "SimulatorAnalytics_pkey" PRIMARY KEY ("id")
);
