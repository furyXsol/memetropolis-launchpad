/*
  Warnings:

  - Added the required column `eth_amount` to the `purchase_histories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eth_amount_in_decimal` to the `purchase_histories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eth_amount_in_usd` to the `purchase_histories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "purchase_histories" ADD COLUMN     "eth_amount" TEXT NOT NULL,
ADD COLUMN     "eth_amount_in_decimal" DECIMAL(60,18) NOT NULL,
ADD COLUMN     "eth_amount_in_usd" DECIMAL(60,2) NOT NULL;
