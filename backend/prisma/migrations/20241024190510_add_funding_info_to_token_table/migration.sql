-- AlterTable
ALTER TABLE "tokens" ADD COLUMN     "is_funding_finished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "token_sold" DECIMAL(60,18) NOT NULL DEFAULT 0;
