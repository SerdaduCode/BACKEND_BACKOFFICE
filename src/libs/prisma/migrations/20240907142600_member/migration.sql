-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "member" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "gender" "Gender",
    "phone" VARCHAR(15),
    "address" TEXT,
    "img" VARCHAR(255),
    "structure_role" VARCHAR(50),
    "team_id" VARCHAR(36),

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "member_email_key" ON "member"("email");

-- CreateIndex
CREATE INDEX "member_email_idx" ON "member"("email");
