-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "bio" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "tier" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "username" TEXT NOT NULL DEFAULT '';
