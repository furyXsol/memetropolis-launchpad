-- CreateTable
CREATE TABLE "key_value_mappings" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "key_value_mappings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "address" VARCHAR(44) NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "decimals" INTEGER NOT NULL,
    "chain_id" INTEGER NOT NULL,
    "current_holder_count" BIGINT NOT NULL,
    "transfer_count" BIGINT NOT NULL,
    "mint_count" BIGINT NOT NULL,
    "burn_count" BIGINT NOT NULL,
    "total_supply" TEXT NOT NULL,
    "total_minted" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "address" VARCHAR(44) NOT NULL,
    "chain_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account_balances" (
    "id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "token_id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "amount_in_decimal" DECIMAL(60,18) NOT NULL,
    "block_number" BIGINT NOT NULL,
    "block_timestamp" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_balances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transfer_events" (
    "id" TEXT NOT NULL,
    "chain_id" INTEGER NOT NULL,
    "hash" TEXT NOT NULL,
    "token_id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "amount_in_decimal" DECIMAL(60,18) NOT NULL,
    "from" VARCHAR(44) NOT NULL,
    "to" VARCHAR(44) NOT NULL,
    "block_number" BIGINT NOT NULL,
    "block_timestamp" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transfer_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "key_value_mappings_key_key" ON "key_value_mappings"("key");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_address_chain_id_key" ON "tokens"("address", "chain_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_address_chain_id_key" ON "accounts"("address", "chain_id");

-- CreateIndex
CREATE UNIQUE INDEX "account_balances_account_id_token_id_key" ON "account_balances"("account_id", "token_id");

-- CreateIndex
CREATE UNIQUE INDEX "transfer_events_hash_chain_id_key" ON "transfer_events"("hash", "chain_id");

-- AddForeignKey
ALTER TABLE "account_balances" ADD CONSTRAINT "account_balances_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account_balances" ADD CONSTRAINT "account_balances_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "tokens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transfer_events" ADD CONSTRAINT "transfer_events_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "tokens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
