/*
  Warnings:

  - You are about to drop the column `decs` on the `department` table. All the data in the column will be lost.
  - You are about to drop the column `team_id` on the `member` table. All the data in the column will be lost.
  - Added the required column `desc` to the `department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department_id` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "member" DROP CONSTRAINT "member_team_id_fkey";

-- AlterTable
ALTER TABLE "department" DROP COLUMN "decs",
ADD COLUMN     "desc" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "member" DROP COLUMN "team_id",
ADD COLUMN     "department_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "member" ADD CONSTRAINT "member_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
