import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import { generateRandomString } from 'src/core/lib/utils';
import { PrismaService } from './prisma.service';
import { ApolloService } from './apollo/apollo.service';
import { RedisService } from './redis.service';
import { PriceService } from './price.service';
import { CHAIN_LIST } from './lib/constants';

@Injectable()
export class AccountsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly apollo: ApolloService,
    private readonly redis: RedisService,
    private readonly price: PriceService,
  ) {}

  async syncAccountBalances(chainId: number) {
    const lastBlockTime = await this.redis.getValue(
      `last-synced-timestamp-account-balances-${chainId}`,
    );
    const balances = await this.apollo.getAccountBalances(
      chainId,
      lastBlockTime,
    );

    for (let i = 0; i < balances.length; i++) {
      try {
        const balance = balances[i];

        // check if account is exists
        let account = await this.prisma.account.findUnique({
          where: {
            address: balance.accountAddress.toLowerCase(),
          },
        });
        if (!account) {
          const name = generateRandomString(10);
          account = await this.prisma.account.create({
            data: {
              address: balance.accountAddress.toLowerCase(),
              name,
            },
          });
        }

        // check if owner account is exists
        const ownerAccount = await this.prisma.account.findUnique({
          where: {
            address: balance.token.owner.toLowerCase(),
          },
        });
        if (!ownerAccount) {
          const name = generateRandomString(10);
          account = await this.prisma.account.create({
            data: {
              address: balance.token.owner.toLowerCase(),
              name,
            },
          });
        }

        // check if token is exists
        let token = await this.prisma.token.findUnique({
          where: {
            address_chain_id: {
              address: balance.token.id.toLowerCase(),
              chain_id: chainId,
            },
          },
        });
        if (!token) {
          token = await this.prisma.token.create({
            data: {
              address: balance.token.id.toLowerCase(),
              name: balance.token.name,
              symbol: balance.token.symbol,
              image: balance.token.image,
              description: balance.token.description,
              creation_timestamp: parseInt(balance.token.timestamp.toString()),
              decimals: balance.token.decimals,
              chain_id: chainId,
              current_holder_count: balance.token.currentHolderCount,
              transfer_count: balance.token.transferCount,
              mint_count: balance.token.mintCount,
              burn_count: balance.token.burnCount,
              total_supply: balance.token.totalSupply,
              total_minted: balance.token.totalMinted,
              owner_account_id: ownerAccount.id,
              price: '0',
              price_in_decimal: '0',
              sales_ratio: balance.token.salesRatio.toString(),
              reserved_ratio: balance.token.reservedRatio.toString(),
              liquidity_ratio: balance.token.liquidityPoolRatio.toString(),
              launch_date_timestamp: parseInt(
                balance.token.launchDate.toString(),
              ),
              limit_per_user_in_decimal:
                balance.token.maximumPerUser.toString(),
              volume: '0',
            },
          });
        }

        // check if account balance is exists
        const accountBalance = await this.prisma.accountBalance.findUnique({
          where: {
            account_id_token_id: {
              account_id: account.id,
              token_id: token.id,
            },
          },
        });
        if (!accountBalance) {
          await this.prisma.accountBalance.create({
            data: {
              account_id: account.id,
              token_id: token.id,
              amount: balance.amount,
              amount_in_decimal: ethers.utils.formatUnits(
                balance.amount,
                token.decimals,
              ),
              block_number: balance.blockNumber,
              block_timestamp: balance.timestamp,
            },
          });
        } else {
          await this.prisma.accountBalance.update({
            where: {
              account_id_token_id: {
                account_id: account.id,
                token_id: token.id,
              },
            },
            data: {
              amount: balance.amount,
              amount_in_decimal: ethers.utils.formatUnits(
                balance.amount,
                token.decimals,
              ),
              block_number: balance.blockNumber,
              block_timestamp: balance.timestamp,
            },
          });
        }
      } catch (e) {
        console.log(e);
        break;
      }
    }

    if (balances.length > 0) {
      const lastBlockTimestamp = balances.sort(
        (a, b) => Number(b.timestamp) - Number(a.timestamp),
      )[0].timestamp;
      await this.redis.setValue(
        `last-synced-timestamp-account-balances-${chainId}`,
        Number(lastBlockTimestamp),
      );
    }
  }

  async syncPurchaseHistories(chainId: number) {
    const lastBlockTime = await this.redis.getValue(
      `last-synced-timestamp-purchase-histories-${chainId}`,
    );
    const histories = await this.apollo.getPurchaseHistories(
      chainId,
      lastBlockTime,
    );

    for (let i = 0; i < histories.length; i++) {
      try {
        const history = histories[i];

        // check if account is exists
        let account = await this.prisma.account.findUnique({
          where: {
            address: history.accountAddress.toLowerCase(),
          },
        });
        if (!account) {
          const name = generateRandomString(10);
          account = await this.prisma.account.create({
            data: {
              address: history.accountAddress.toLowerCase(),
              name,
            },
          });
        }

        // check if owner account is exists
        const ownerAccount = await this.prisma.account.findUnique({
          where: {
            address: history.token.owner.toLowerCase(),
          },
        });
        if (!ownerAccount) {
          const name = generateRandomString(10);
          account = await this.prisma.account.create({
            data: {
              address: history.token.owner.toLowerCase(),
              name,
            },
          });
        }

        const tokenAmount = ethers.utils.formatUnits(
          history.amount,
          history.token.decimals,
        );
        // check if token is exists
        let token = await this.prisma.token.findUnique({
          where: {
            address_chain_id: {
              address: history.token.id.toLowerCase(),
              chain_id: chainId,
            },
          },
        });
        if (!token) {
          token = await this.prisma.token.create({
            data: {
              address: history.token.id.toLowerCase(),
              name: history.token.name,
              symbol: history.token.symbol,
              image: history.token.image,
              description: history.token.description,
              creation_timestamp: parseInt(history.token.timestamp.toString()),
              decimals: history.token.decimals,
              chain_id: chainId,
              current_holder_count: history.token.currentHolderCount,
              transfer_count: history.token.transferCount,
              mint_count: history.token.mintCount,
              burn_count: history.token.burnCount,
              total_supply: history.token.totalSupply,
              total_minted: history.token.totalMinted,
              owner_account_id: ownerAccount.id,
              price: history.price,
              price_in_decimal: ethers.utils.formatUnits(
                history.price,
                CHAIN_LIST[chainId].nativeCoinDecimal,
              ),
              token_sold:
                history.type == 'buy'
                  ? tokenAmount
                  : (-1 * parseFloat(tokenAmount)).toString(),
              sales_ratio: history.token.salesRatio.toString(),
              reserved_ratio: history.token.reservedRatio.toString(),
              liquidity_ratio: history.token.liquidityPoolRatio.toString(),
              launch_date_timestamp: parseInt(
                history.token.launchDate.toString(),
              ),
              limit_per_user_in_decimal:
                history.token.maximumPerUser.toString(),
              volume: '0',
            },
          });
        } else {
          await this.prisma.token.update({
            where: {
              address_chain_id: {
                address: history.token.id.toLowerCase(),
                chain_id: chainId,
              },
            },
            data: {
              price: history.price,
              price_in_decimal: ethers.utils.formatUnits(
                history.price,
                CHAIN_LIST[chainId].nativeCoinDecimal ?? 18,
              ),
              token_sold: (
                parseFloat(token.token_sold.toString()) +
                (history.type == 'buy'
                  ? parseFloat(tokenAmount)
                  : -1 * parseFloat(tokenAmount))
              ).toString(),
              volume: '0',
            },
          });
        }

        // check if purchase history exists
        const purchaseHistory = await this.prisma.purchaseHistory.findUnique({
          where: {
            hash_chain_id: {
              hash: history.hash,
              chain_id: chainId,
            },
          },
        });
        if (!purchaseHistory) {
          const ethAmountInDecimal = ethers.utils.formatEther(
            history.ethAmount,
          );
          let usdPrice = await this.price.getNativeTokenPrice(chainId);
          if (usdPrice == 0) {
            const price: { [chainId: number]: number } | null =
              await this.price.getPriceFromCoingecko();
            if (price) {
              await this.redis.set('price', JSON.stringify(price));
              usdPrice = price[chainId];
            }
          }
          const ethAmountInUsd = parseFloat(
            (parseFloat(ethAmountInDecimal) * usdPrice).toFixed(2),
          );
          await this.prisma.purchaseHistory.create({
            data: {
              chain_id: chainId,
              account_id: account.id,
              token_id: token.id,
              source_eid: history.sourceEid,
              amount: history.amount,
              amount_in_decimal: ethers.utils.formatUnits(
                history.amount,
                token.decimals,
              ),
              block_number: history.blockNumber,
              block_timestamp: history.timestamp,
              hash: history.hash,
              type: history.type,
              eth_amount: history.ethAmount,
              eth_amount_in_decimal: ethAmountInDecimal,
              eth_amount_in_usd: ethAmountInUsd,
              token_price: history.price,
              token_price_in_decimal: ethers.utils.formatUnits(
                history.price,
                CHAIN_LIST[chainId].nativeCoinDecimal ?? 18,
              ),
            },
          });

          const currentToken = await this.prisma.token.findUnique({
            where: {
              address_chain_id: {
                address: history.token.id.toLowerCase(),
                chain_id: chainId,
              },
            },
          });
          if (currentToken) {
            await this.prisma.token.update({
              where: {
                address_chain_id: {
                  address: history.token.id.toLowerCase(),
                  chain_id: chainId,
                },
              },
              data: {
                volume: (
                  Number(currentToken.volume) + Number(ethAmountInUsd)
                ).toString(),
              },
            });
          }
        }
      } catch (e) {
        console.log(e);
        break;
      }
    }

    if (histories.length > 0) {
      const lastBlockTimestamp = histories.sort(
        (a, b) => Number(b.timestamp) - Number(a.timestamp),
      )[0].timestamp;
      await this.redis.setValue(
        `last-synced-timestamp-purchase-histories-${chainId}`,
        Number(lastBlockTimestamp),
      );
    }
  }
}
