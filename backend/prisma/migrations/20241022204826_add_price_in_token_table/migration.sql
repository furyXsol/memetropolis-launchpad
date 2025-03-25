/*
  Warnings:

  - Added the required column `price` to the `tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_in_decimal` to the `tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tokens" ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "price_in_decimal" DECIMAL(60,18) NOT NULL;
