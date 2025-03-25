import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { RedisService } from './redis.service';
import { Connection, PublicKey } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import * as idl from './idl/ido_solana_lancupad_idl.json';
import { SOLANA_LAUNCHPAD_PROGRAMID } from 'src/core/lib/constants';

@Injectable()
export class SolanaLaunchpadService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}
  async syncSolanaLaunchpadEvents() {
    const programId = new PublicKey(SOLANA_LAUNCHPAD_PROGRAMID);
    let lastSignature = await this.redis.get(
      `last-synced-timestamp-solana-launchpad-events-${programId.toString()}`,
    );

    const connection = new Connection(process.env.SOLANA_RPC, 'confirmed');
    // eslint-disable-next-line
    let txs = await connection.getSignaturesForAddress(programId, lastSignature?{
            until: lastSignature,
            limit: 1000,
          }
        : {
            limit: 1000,
          },
    );

    if (txs.length > 0) {
      lastSignature = txs[0].signature;
    }

    let sortedTxs = txs.sort((a, b) => a.blockTime - b.blockTime);
    while (sortedTxs.length > 0) {
      for (const tx of sortedTxs) {
        if (tx.err) {
          continue;
        }
        const txSig = tx.signature;
        const events = await this.getTransactionLog(
          txSig,
          programId,
          connection,
          idl as anchor.Idl,
        );
        let index = 0;
        for (const event of events) {
          if (event.name === 'CreateLaunchpad') {
            await this.createLaunchpadEvent(
              event,
              index,
              programId.toBase58(),
              tx.blockTime,
              tx.slot,
              tx.signature,
            );
          } else if (event.name === 'BuyEvent') {
            await this.solanaLaunchpadEvent(
              event,
              index,
              programId.toBase58(),
              tx.blockTime,
              tx.slot,
              tx.signature,
            );
          } else if (event.name === 'ClaimEvent') {
            await this.solanaLaunchpadEvent(
              event,
              index,
              programId.toBase58(),
              tx.blockTime,
              tx.slot,
              tx.signature,
            );
          } else if (event.name === 'WithdrawMemeEvent') {
            await this.solanaLaunchpadEvent(
              event,
              index,
              programId.toBase58(),
              tx.blockTime,
              tx.slot,
              tx.signature,
            );
          } else if (event.name === 'WithdrawPaymentEvent') {
            await this.solanaLaunchpadEvent(
              event,
              index,
              programId.toBase58(),
              tx.blockTime,
              tx.slot,
              tx.signature,
            );
          }
          index++;
        }
      }
      const firstSignature = sortedTxs[0].signature;
      if (sortedTxs.length < 1000) {
        break;
      }
      txs = await connection.getSignaturesForAddress(programId, {
        before: firstSignature,
        limit: 1000,
      });
      sortedTxs = txs.sort((a, b) => a.blockTime - b.blockTime);
    }

    await this.redis.set(
      `last-synced-timestamp-solana-launchpad-events-${programId.toString()}`,
      lastSignature,
    );
  }

  async getTransactionLog(
    txSig: string,
    programId: PublicKey,
    connection: Connection,
    idl: anchor.Idl,
  ) {
    const txDetails = await connection.getTransaction(txSig, {
      commitment: 'confirmed',
    });
    const eventParser = new anchor.EventParser(
      programId,
      new anchor.BorshCoder(idl),
    );
    const logs = txDetails.meta.logMessages;
    const events = eventParser.parseLogs(logs);
    return events;
  }

  async createLaunchpadEvent(
    event: anchor.Event,
    eventIndex: number,
    programId: string,
    blockTime: number,
    slot: number,
    txSig: string,
  ) {
    await this.prisma.solanaCreateLaunchpadEvent.create({
      data: {
        program_id: programId,
        block_time: blockTime,
        slot: slot,
        event_index: eventIndex,
        signature: txSig,
        creator: event.data.creator.toString(),
        max_invest: BigInt(event.data.maxInvest.toString()),
        min_invest: BigInt(event.data.minInvest.toString()),
        start_time: BigInt(event.data.startTime.toString()),
        end_time: BigInt(event.data.endTime.toString()),
        meme_mint: event.data.memeMint.toString(),
        payment_mint: event.data.paymentMint.toString(),
        token_price: BigInt(event.data.tokenPrice.toString()),
      },
    });
  }

  async solanaLaunchpadEvent(
    event: anchor.Event,
    eventIndex: number,
    programId: string,
    blockTime: number,
    slot: number,
    txSig: string,
  ) {
    const amount =
      event.name === 'ClaimEvent'
        ? BigInt(event.data.claimAmount.toString())
        : BigInt(event.data.amount.toString());
    let trader = '';
    if (event.name === 'ClaimEvent') {
      trader = event.data.claimer.toString();
    } else if (event.name === 'BuyEvent') {
      trader = event.data.buyer.toString();
    } else if (event.name === 'WithdrawMemeEvent') {
      trader = event.data.withdrawer.toString();
    } else if (event.name === 'WithdrawPaymentEvent') {
      trader = event.data.withdrawer.toString();
    }

    await this.prisma.solanaLaunchpadEvent.create({
      data: {
        program_id: programId,
        block_time: blockTime,
        slot: slot,
        event_index: eventIndex,
        signature: txSig,
        event_type: event.name,
        amount,
        trader,
        meme_mint: event.data.memeMint ? event.data.memeMint.toString() : '',
        payment_mint: event.data.paymentMint
          ? event.data.paymentMint.toString()
          : '',
      },
    });
  }
}
