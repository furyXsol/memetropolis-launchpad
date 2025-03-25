/*
  Warnings:

  - Added the required column `token_price` to the `purchase_histories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token_price_in_decimal` to the `purchase_histories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "purchase_histories" ADD COLUMN     "token_price" TEXT NOT NULL,
ADD COLUMN     "token_price_in_decimal" DECIMAL(60,18) NOT NULL;
