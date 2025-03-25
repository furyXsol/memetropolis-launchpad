/*
  Warnings:

  - Added the required column `creation_timestamp` to the `tokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "image" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "socials" JSONB[];

-- AlterTable
ALTER TABLE "tokens" ADD COLUMN     "creation_timestamp" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "newsletter_users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "newsletter_users_pkey" PRIMARY KEY ("id")
);
