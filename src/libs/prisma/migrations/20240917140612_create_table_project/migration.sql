-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code_name" VARCHAR(255) NOT NULL,
    "desc" VARCHAR(100) NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);
