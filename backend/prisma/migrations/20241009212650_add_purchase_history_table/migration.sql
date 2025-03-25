-- CreateTable
CREATE TABLE "purchase_histories" (
    "id" TEXT NOT NULL,
    "chain_id" INTEGER NOT NULL,
    "account_id" TEXT NOT NULL,
    "token_id" TEXT NOT NULL,
    "source_eid" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "amount_in_decimal" DECIMAL(60,18) NOT NULL,
    "block_number" BIGINT NOT NULL,
    "block_timestamp" BIGINT NOT NULL,
    "hash" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchase_histories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "purchase_histories_hash_chain_id_key" ON "purchase_histories"("hash", "chain_id");

-- AddForeignKey
ALTER TABLE "purchase_histories" ADD CONSTRAINT "purchase_histories_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_histories" ADD CONSTRAINT "purchase_histories_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "tokens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
