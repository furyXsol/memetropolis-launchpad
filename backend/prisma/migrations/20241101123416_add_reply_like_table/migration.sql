/*
  Warnings:

  - The primary key for the `replies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `accountId` on the `replies` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `replies` table. All the data in the column will be lost.
  - You are about to drop the column `threadId` on the `replies` table. All the data in the column will be lost.
  - Added the required column `account_id` to the `replies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thread_id` to the `replies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_accountId_fkey";

-- DropForeignKey
ALTER TABLE "replies" DROP CONSTRAINT "replies_threadId_fkey";

-- AlterTable
ALTER TABLE "replies" DROP CONSTRAINT "replies_pkey",
DROP COLUMN "accountId",
DROP COLUMN "createdAt",
DROP COLUMN "threadId",
ADD COLUMN     "account_id" TEXT NOT NULL,
ADD COLUMN     "thread_id" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "replies_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "replies_id_seq";

-- CreateTable
CREATE TABLE "reply_likes" (
    "id" TEXT NOT NULL,
    "reply_id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "liked" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reply_likes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "reply_likes_reply_id_account_id_key" ON "reply_likes"("reply_id", "account_id");

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_thread_id_fkey" FOREIGN KEY ("thread_id") REFERENCES "tokens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replies" ADD CONSTRAINT "replies_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reply_likes" ADD CONSTRAINT "reply_likes_reply_id_fkey" FOREIGN KEY ("reply_id") REFERENCES "replies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reply_likes" ADD CONSTRAINT "reply_likes_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
