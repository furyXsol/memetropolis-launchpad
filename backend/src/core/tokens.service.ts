import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ApolloService } from './apollo/apollo.service';
import { RedisService } from './redis.service';
import { ethers } from 'ethers';
import { generateRandomString } from 'src/core/lib/utils';

@Injectable()
export class TokensService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly apollo: ApolloService,
    private readonly redis: RedisService,
  ) {}

  async syncTokens(chainId: number) {
    const lastBlockTime = await this.redis.getValue(
      `last-synced-timestamp-tokens-${chainId}`,
    );
    const tokens = await this.apollo.getTokens(chainId, lastBlockTime);
    console.log(tokens.length);

    for (let i = 0; i < tokens.length; i += 100) {
      try {
        const chunk = tokens.slice(i, i + 100);
        const existTokens = await this.prisma.token.findMany({
          where: {
            chain_id: chainId,
            address: {
              in: chunk.map((token) => token.id),
            },
          },
        });

        for (const existToken of existTokens) {
          const token = chunk.find((token) => token.id === existToken.address);
          if (token) {
            await this.prisma.token.update({
              where: {
                address_chain_id: {
                  address: token.id,
                  chain_id: chainId,
                },
              },
              data: {
                name: token.name,
                symbol: token.symbol,
                image: token.image,
                description: token.description,
                decimals: token.decimals,
                current_holder_count: token.currentHolderCount,
                transfer_count: token.transferCount,
                mint_count: token.mintCount,
                burn_count: token.burnCount,
                total_supply: token.totalSupply,
                total_minted: token.totalMinted,
                creation_timestamp: token.timestamp,
                sales_ratio: (token.salesRatio / 100).toString(),
                reserved_ratio: (token.reservedRatio / 100).toString(),
                liquidity_ratio: (token.liquidityPoolRatio / 100).toString(),
                launch_date_timestamp: parseInt(token.launchDate.toString()),
                limit_per_user_in_decimal: token.maximumPerUser.toString(),
              },
            });
          }
        }

        const nonTokens = chunk.filter(
          (token) =>
            !existTokens.find((existToken) => existToken.address === token.id),
        );
        for (const nonToken of nonTokens) {
          // check if account exists
          let account = await this.prisma.account.findUnique({
            where: {
              address: nonToken.owner.toLowerCase(),
            },
          });
          if (!account) {
            const name = generateRandomString(10);
            account = await this.prisma.account.create({
              data: {
                address: nonToken.owner.toLowerCase(),
                name,
              },
            });
          }

          await this.prisma.token.create({
            data: {
              address: nonToken.id.toLowerCase(),
              name: nonToken.name,
              symbol: nonToken.symbol,
              image: nonToken.image,
              description: nonToken.description,
              creation_timestamp: nonToken.timestamp,
              decimals: nonToken.decimals,
              chain_id: chainId,
              current_holder_count: nonToken.currentHolderCount,
              transfer_count: nonToken.transferCount,
              mint_count: nonToken.mintCount,
              burn_count: nonToken.burnCount,
              total_supply: nonToken.totalSupply,
              total_minted: nonToken.totalMinted,
              owner_account_id: account.id,
              price: '0',
              price_in_decimal: '0',
              sales_ratio: (nonToken.salesRatio / 100).toString(),
              reserved_ratio: (nonToken.reservedRatio / 100).toString(),
              liquidity_ratio: (nonToken.liquidityPoolRatio / 100).toString(),
              launch_date_timestamp: parseInt(nonToken.launchDate.toString()),
              limit_per_user_in_decimal: nonToken.maximumPerUser.toString(),
              volume: '0',
            },
          });
        }
      } catch (e) {
        console.log(e);
        break;
      }
    }

    if (tokens.length > 0) {
      const lastBlockTimestamp = tokens.sort(
        (a, b) => Number(b.timestamp) - Number(a.timestamp),
      )[0].timestamp;
      await this.redis.setValue(
        `last-synced-timestamp-tokens-${chainId}`,
        Number(lastBlockTimestamp),
      );
    }
  }

  async syncTransferEvents(chainId: number) {
    const lastBlockTime = await this.redis.getValue(
      `last-synced-timestamp-transfer-events-${chainId}`,
    );
    const transferEvents = await this.apollo.getTransferEvents(
      chainId,
      lastBlockTime,
    );

    for (let i = 0; i < transferEvents.length; i++) {
      try {
        const event = transferEvents[i];

        // check if account is existing
        let account = await this.prisma.account.findUnique({
          where: {
            address: event.token.owner.toLowerCase(),
          },
        });
        if (!account) {
          const name = generateRandomString(10);
          account = await this.prisma.account.create({
            data: {
              address: event.token.owner.toLowerCase(),
              name,
            },
          });
        }

        // check if token is existing
        let token = await this.prisma.token.findUnique({
          where: {
            address_chain_id: {
              address: event.token.id.toLowerCase(),
              chain_id: chainId,
            },
          },
        });
        if (!token) {
          token = await this.prisma.token.create({
            data: {
              address: event.token.id.toLowerCase(),
              name: event.token.name,
              symbol: event.token.symbol,
              image: event.token.image,
              description: event.token.description,
              creation_timestamp: parseInt(event.token.timestamp.toString()),
              decimals: event.token.decimals,
              chain_id: chainId,
              current_holder_count: event.token.currentHolderCount,
              transfer_count: event.token.transferCount,
              mint_count: event.token.mintCount,
              burn_count: event.token.burnCount,
              total_supply: event.token.totalSupply,
              total_minted: event.token.totalMinted,
              owner_account_id: account.id,
              price: '0',
              price_in_decimal: '0',
              sales_ratio: (event.token.salesRatio / 100).toString(),
              reserved_ratio: (event.token.reservedRatio / 100).toString(),
              liquidity_ratio: (
                event.token.liquidityPoolRatio / 100
              ).toString(),
              launch_date_timestamp: parseInt(
                event.token.launchDate.toString(),
              ),
              limit_per_user_in_decimal: event.token.maximumPerUser.toString(),
              volume: '0',
            },
          });
        }

        // check if transfer event is exists
        const transferEvent = await this.prisma.transferEvent.findUnique({
          where: {
            hash_chain_id: {
              hash: event.hash,
              chain_id: chainId,
            },
          },
        });
        if (!transferEvent) {
          await this.prisma.transferEvent.create({
            data: {
              chain_id: chainId,
              hash: event.hash,
              token_id: token.id,
              amount: event.amount,
              amount_in_decimal: ethers.utils.formatUnits(
                event.amount,
                token.decimals,
              ),
              from: event.from,
              to: event.to,
              block_number: event.blockNumber,
              block_timestamp: event.timestamp,
            },
          });
        }
      } catch (e) {
        console.log(e);
        break;
      }
    }

    if (transferEvents.length > 0) {
      const lastBlockTimestamp = transferEvents.sort(
        (a, b) => Number(b.timestamp) - Number(a.timestamp),
      )[0].timestamp;
      await this.redis.setValue(
        `last-synced-timestamp-transfer-events-${chainId}`,
        Number(lastBlockTimestamp),
      );
    }
  }
}
