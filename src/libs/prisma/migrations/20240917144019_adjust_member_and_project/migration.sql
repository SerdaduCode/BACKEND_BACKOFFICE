/*
  Warnings:

  - Made the column `team_id` on table `member` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `project_id` to the `project_record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_role` to the `project_record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "member" ALTER COLUMN "team_id" SET NOT NULL,
ALTER COLUMN "team_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "project_record" ADD COLUMN     "project_id" TEXT NOT NULL,
ADD COLUMN     "project_role" VARCHAR(255) NOT NULL,
ALTER COLUMN "member_id" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "department" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "decs" VARCHAR(255) NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "project_record_member_id_idx" ON "project_record"("member_id");

-- CreateIndex
CREATE INDEX "project_record_project_id_idx" ON "project_record"("project_id");

-- AddForeignKey
ALTER TABLE "member" ADD CONSTRAINT "member_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_record" ADD CONSTRAINT "project_record_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_record" ADD CONSTRAINT "project_record_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
