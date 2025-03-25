import { Injectable } from '@nestjs/common';
import { Connection, PublicKey } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import { ethers } from 'ethers';
import { PrismaService } from './prisma.service';
import { RedisService } from './redis.service';
import { PriceService } from './price.service';
import * as idl from './idl/solana_pumpfun_idl.json';
import {
  SOLANA_MAX_SUPPLY,
  SOLANA_PUMPFUN_PROGRAMID,
  SOLANA_TOKEN_DECIMAL,
} from './lib/constants';
import { generateRandomString } from './lib/utils';
import { CHAIN_IDS } from './lib/enums';

@Injectable()
export class SolanaTokenService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly price: PriceService,
  ) {}

  async syncSolanaPumpfunEvents() {
    const programId = new PublicKey(SOLANA_PUMPFUN_PROGRAMID);
    let lastSignature = await this.redis.get(
      `last-synced-timestamp-solana-pumpfun-events-${programId.toString()}`,
    );
    const connection = new Connection(process.env.SOLANA_RPC, 'confirmed');
    let txs = await connection.getSignaturesForAddress(
      programId,
      lastSignature
        ? {
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
        for (const event of events) {
          if (event.name === 'CreateTokenEvent') {
            await this.createTokenEvent(event, tx.blockTime);
          } else if (event.name === 'BuyEvent') {
            await this.solanaBuyTokenEvent(
              event,
              tx.blockTime,
              tx.slot,
              tx.signature,
            );
          } else if (event.name === 'SellEvent') {
            await this.solanaSellTokenEvent(
              event,
              tx.blockTime,
              tx.slot,
              tx.signature,
            );
          }
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
      `last-synced-timestamp-solana-pumpfun-events-${programId.toString()}`,
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

  async createTokenEvent(event: anchor.Event, blockTime: number) {
    // TODO: it is placeholder. You have to find owner address in account
    // const ownerAccount = await this.prisma.account.findFirst();

    let account = await this.prisma.account.findUnique({
      where: {
        address: event.data.creator.toString(),
      },
    });
    if (!account) {
      const name = generateRandomString(10);
      account = await this.prisma.account.create({
        data: {
          address: event.data.creator.toString(),
          name,
        },
      });
    }

    await this.prisma.token.create({
      data: {
        address: event.data.mint.toString(),
        name: event.data.tokenName.toString(),
        symbol: event.data.tokenSymbol.toString(),
        image: event.data.tokenUri.toString(),
        description: '',
        decimals: SOLANA_TOKEN_DECIMAL,
        chain_id: CHAIN_IDS.SOLANA_MAINNET,
        current_holder_count: 1,
        transfer_count: 0,
        mint_count: 1,
        burn_count: 0,
        total_supply: SOLANA_MAX_SUPPLY,
        total_minted: SOLANA_MAX_SUPPLY,
        owner_account_id: account.id,
        creation_timestamp: blockTime,
        price: '0',
        price_in_decimal: '0',
        sales_ratio: '0',
        reserved_ratio: '0',
        liquidity_ratio: '0',
        launch_date_timestamp: 0,
        limit_per_user_in_decimal: '0',
      },
    });
  }

  async solanaBuyTokenEvent(
    event: anchor.Event,
    blockTime: number,
    slot: number,
    txSig: string,
  ) {
    const buyer = event.data.buyer.toString();

    // check if account exists
    let account = await this.prisma.account.findUnique({
      where: {
        address: buyer,
      },
    });
    if (!account) {
      const name = generateRandomString(10);
      account = await this.prisma.account.create({
        data: {
          address: buyer,
          name,
        },
      });
    }

    // check if token is exists
    const token = await this.prisma.token.findUnique({
      where: {
        address_chain_id: {
          address: event.data.mint.toString(),
          chain_id: CHAIN_IDS.SOLANA_MAINNET,
        },
      },
    });

    if (!token) {
      return;
    }

    let usdPrice = await this.price.getNativeTokenPrice(
      CHAIN_IDS.SOLANA_MAINNET,
    );
    if (usdPrice == 0) {
      const price: { [chainId: number]: number } | null =
        await this.price.getPriceFromCoingecko();
      if (price) {
        await this.redis.set('price', JSON.stringify(price));
        usdPrice = price[CHAIN_IDS.SOLANA_MAINNET];
      }
    }
    const solAmountInDecimal = ethers.utils.formatUnits(
      event.data.solInput.toString(),
      9, //solana_lamports
    );
    const solAmountInUsd = parseFloat(
      (parseFloat(solAmountInDecimal) * usdPrice).toFixed(2),
    );

    await this.prisma.purchaseHistory.create({
      data: {
        chain_id: CHAIN_IDS.SOLANA_MAINNET,
        account_id: account.id,
        token_id: token.id,
        source_eid: '',
        amount: event.data.tokenOutput.toString(),
        amount_in_decimal: ethers.utils.formatUnits(
          event.data.tokenOutput.toString(),
          SOLANA_TOKEN_DECIMAL,
        ),
        block_number: slot,
        block_timestamp: blockTime,
        hash: txSig,
        type: 'buy',
        eth_amount: event.data.solInput.toString(),
        eth_amount_in_decimal: solAmountInDecimal,
        eth_amount_in_usd: solAmountInUsd,
        token_price: '0',
        token_price_in_decimal: '0',
      },
    });
  }

  async solanaSellTokenEvent(
    event: anchor.Event,
    blockTime: number,
    slot: number,
    txSig: string,
  ) {
    const seller = event.data.seller.toString();

    // check if account exists
    let account = await this.prisma.account.findUnique({
      where: {
        address: seller,
      },
    });
    if (!account) {
      const name = generateRandomString(10);
      account = await this.prisma.account.create({
        data: {
          address: seller,
          name,
        },
      });
    }

    // check if token is exists
    const token = await this.prisma.token.findUnique({
      where: {
        address_chain_id: {
          address: event.data.mint.toString(),
          chain_id: CHAIN_IDS.SOLANA_MAINNET,
        },
      },
    });

    if (!token) {
      return;
    }

    let usdPrice = await this.price.getNativeTokenPrice(
      CHAIN_IDS.SOLANA_MAINNET,
    );
    if (usdPrice == 0) {
      const price: { [chainId: number]: number } | null =
        await this.price.getPriceFromCoingecko();
      if (price) {
        await this.redis.set('price', JSON.stringify(price));
        usdPrice = price[CHAIN_IDS.SOLANA_MAINNET];
      }
    }
    const solAmountInDecimal = ethers.utils.formatUnits(
      event.data.solOutput.toString(),
      9, //solana_lamports
    );
    const solAmountInUsd = parseFloat(
      (parseFloat(solAmountInDecimal) * usdPrice).toFixed(2),
    );

    await this.prisma.purchaseHistory.create({
      data: {
        chain_id: CHAIN_IDS.SOLANA_MAINNET,
        account_id: account.id,
        token_id: token.id,
        source_eid: '',
        amount: event.data.tokenInput.toString(),
        amount_in_decimal: ethers.utils.formatUnits(
          event.data.tokenInput.toString(),
          SOLANA_TOKEN_DECIMAL,
        ),
        block_number: slot,
        block_timestamp: blockTime,
        hash: txSig,
        type: 'sell',
        eth_amount: event.data.solOutput.toString(),
        eth_amount_in_decimal: solAmountInDecimal,
        eth_amount_in_usd: solAmountInUsd,
        token_price: '0',
        token_price_in_decimal: '0',
      },
    });
  }
}
