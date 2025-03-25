import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma.service';
import { PriceService } from '../../core/price.service';
import { EVM_MAX_SUPPLY } from '../../core/lib/constants';
import { RecentTokenListOutputDto, TraderListOutputDto } from './dto';

@Injectable()
export class AccountService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly price: PriceService,
  ) {}

  async getTopTraders(): Promise<TraderListOutputDto> {
    const currentDate = new Date();

    // Group by account_id and join with account information
    const topTraders = await this.prisma.purchaseHistory.groupBy({
      by: ['account_id'],
      _sum: {
        eth_amount_in_usd: true,
      },
      _count: {
        id: true, // Counting the number of trades
      },
      _min: {
        created_at: true, // Get the date of the first trade for each account
      },
      orderBy: {
        _sum: {
          eth_amount_in_usd: 'desc',
        },
      },
      take: 10,
    });

    // Fetch account details (address and name)
    const accounts = await this.prisma.account.findMany({
      where: {
        id: {
          in: topTraders.map((trader) => trader.account_id),
        },
      },
      select: {
        id: true,
        address: true,
        name: true,
        image: true,
      },
    });

    // Map the accounts to their corresponding account IDs
    const accountMap = accounts.reduce((acc, account) => {
      acc[account.id] = account;
      return acc;
    }, {});

    // Calculate additional metrics and attach account details
    const topTradersWithMetrics = topTraders.map((trader) => {
      const totalWeeks = this.getWeeksBetween(
        trader._min.created_at,
        currentDate,
      );
      const totalTrades = trader._count.id;
      const sumEthAmountInUsd = trader._sum.eth_amount_in_usd;
      const account = accountMap[trader.account_id];

      // Calculate average per trade
      const averagePerTrade = sumEthAmountInUsd.div(totalTrades);

      // Calculate trades per week
      const tradesPerWeek = totalTrades / (totalWeeks != 0 ? totalWeeks : 1); // Avoid division by 0

      return {
        id: trader.account_id,
        address: account?.address || '',
        name: account?.name || '',
        image: account?.image || '',
        volumeTotal: sumEthAmountInUsd.toFixed(2),
        volumeAveragePerTrade: averagePerTrade.toFixed(2), // Convert to a readable decimal format
        tradesPerWeek: parseFloat(tradesPerWeek.toFixed(2)),
      };
    });

    return {
      traders: topTradersWithMetrics,
    };
  }

  // Helper function to calculate weeks between two dates
  getWeeksBetween(startDate: Date, endDate: Date): number {
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    const diffInMilliseconds = endDate.getTime() - startDate.getTime();
    return Math.ceil(diffInMilliseconds / millisecondsPerWeek);
  }

  async getRecentTokens(
    walletAddress: string,
  ): Promise<RecentTokenListOutputDto> {
    // Fetch the account by address and get associated tokens
    const account = await this.prisma.account.findUnique({
      where: {
        address: walletAddress.toLowerCase(),
      },
      include: {
        created_tokens: {
          select: {
            id: true,
            address: true,
            name: true,
            symbol: true,
            decimals: true,
            chain_id: true,
            image: true,
            description: true,
            price_in_decimal: true,
            // Additionally include an aggregation of purchase history for volumeTotal and volumeAveragePerTrade
            purchase_histories: {
              select: {
                eth_amount_in_usd: true,
              },
            },
          },
        },
      },
    });

    // Aggregate the values to compute volumeTotal and volumeAveragePerTrade
    const promises = account?.created_tokens?.map(async (token) => {
      const volumeTotal = token.purchase_histories.reduce((sum, purchase) => {
        return sum + parseFloat(purchase.eth_amount_in_usd.toString());
      }, 0);
      const volumeAveragePerTrade =
        token.purchase_histories.length != 0
          ? volumeTotal / token.purchase_histories.length
          : 0;

      const usdPrice = await this.price.getNativeTokenPrice(token.chain_id);

      const priceInDecimal = token.price_in_decimal.toString();
      const priceInUsd = parseFloat(priceInDecimal) * usdPrice;
      const marketCap = priceInUsd * parseInt(EVM_MAX_SUPPLY);

      return {
        id: token.id,
        address: token.address,
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
        chain_id: token.chain_id,
        image: token.image,
        description: token.description,
        volumeTotal: volumeTotal.toFixed(2),
        volumeAveragePerTrade: volumeAveragePerTrade.toFixed(2),
        priceInUsd: priceInUsd.toString(),
        marketCap: marketCap.toFixed(2),
      };
    });

    const tokensWithVolume = await Promise.all(promises);

    return {
      recentTokens: tokensWithVolume ? tokensWithVolume : [],
    };
  }
}
