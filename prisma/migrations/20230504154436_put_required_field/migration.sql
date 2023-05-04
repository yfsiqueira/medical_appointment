/*
  Warnings:

  - Made the column `description` on table `specialities` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "specialities" ALTER COLUMN "description" SET NOT NULL;
