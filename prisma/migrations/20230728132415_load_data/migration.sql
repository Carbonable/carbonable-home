-- CreateEnum
CREATE TYPE "AnalyticsType" AS ENUM ('YIELD', 'OFFSET');

-- CreateTable
CREATE TABLE "SimulatorConfig" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "config" JSONB NOT NULL,

    CONSTRAINT "SimulatorConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SimulatorAnalytics" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "AnalyticsType" NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "SimulatorAnalytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthorizedDomain" (
    "id" TEXT NOT NULL,

    CONSTRAINT "AuthorizedDomain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MagikLink" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hash" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,

    CONSTRAINT "MagikLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SimulatorConfig_type_key" ON "SimulatorConfig"("type");
