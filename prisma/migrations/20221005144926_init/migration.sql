-- CreateTable
CREATE TABLE "SimulatorConfig" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "config" JSONB NOT NULL,

    CONSTRAINT "SimulatorConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SimulatorConfig_type_key" ON "SimulatorConfig"("type");
