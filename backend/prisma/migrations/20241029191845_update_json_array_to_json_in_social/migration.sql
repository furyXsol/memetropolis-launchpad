/*
  Warnings:

  - The `socials` column on the `accounts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `socials` column on the `tokens` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "socials",
ADD COLUMN     "socials" JSONB;

-- AlterTable
ALTER TABLE "tokens" DROP COLUMN "socials",
ADD COLUMN     "socials" JSONB;
