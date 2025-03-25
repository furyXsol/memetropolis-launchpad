/*
  Warnings:

  - You are about to drop the column `chain_id` on the `accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[address]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "accounts_address_chain_id_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "chain_id",
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "accounts_address_key" ON "accounts"("address");
