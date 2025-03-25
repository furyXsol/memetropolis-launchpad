-- AlterTable
ALTER TABLE "tokens" ADD COLUMN     "launch_date_timestamp" INTEGER DEFAULT 0,
ADD COLUMN     "limit_per_user_in_decimal" DECIMAL(60,18) DEFAULT 0,
ADD COLUMN     "liquidity_ratio" DECIMAL(10,2) DEFAULT 10,
ADD COLUMN     "reserved_ratio" DECIMAL(10,2) DEFAULT 10,
ADD COLUMN     "sales_ratio" DECIMAL(10,2) DEFAULT 80;
