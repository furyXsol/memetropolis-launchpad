-- AlterTable
ALTER TABLE "tokens" ADD COLUMN     "description" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "socials" JSONB[];

-- CreateTable
CREATE TABLE "solana_create_launchpad_events" (
    "id" TEXT NOT NULL,
    "program_id" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "event_index" INTEGER NOT NULL,
    "block_time" BIGINT NOT NULL,
    "slot" BIGINT NOT NULL,
    "creator" TEXT NOT NULL,
    "meme_mint" TEXT NOT NULL,
    "payment_mint" TEXT NOT NULL,
    "min_invest" BIGINT NOT NULL,
    "max_invest" BIGINT NOT NULL,
    "token_price" BIGINT NOT NULL,
    "start_time" BIGINT NOT NULL,
    "end_time" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "solana_create_launchpad_events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solana_launchpad_events" (
    "id" TEXT NOT NULL,
    "program_id" TEXT NOT NULL,
    "signature" TEXT NOT NULL,
    "event_index" INTEGER NOT NULL,
    "block_time" BIGINT NOT NULL,
    "slot" BIGINT NOT NULL,
    "trader" TEXT NOT NULL,
    "event_type" TEXT NOT NULL,
    "meme_mint" TEXT NOT NULL,
    "payment_mint" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "solana_launchpad_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "solana_create_launchpad_events_program_id_signature_event_i_key" ON "solana_create_launchpad_events"("program_id", "signature", "event_index");

-- CreateIndex
CREATE UNIQUE INDEX "solana_launchpad_events_program_id_signature_event_index_key" ON "solana_launchpad_events"("program_id", "signature", "event_index");
