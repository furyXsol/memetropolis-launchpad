import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma.service';
import { PriceService } from '../../core/price.service';
import { TransactionListOutputDto } from './dto/list.output.dto';

@Injectable()
export class TransactionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly price: PriceService,
  ) {}

  async getRecentTransactions(
    chainId: string,
    tokenAddress: string,
  ): Promise<TransactionListOutputDto> {
    const purchaseHistories = await this.prisma.purchaseHistory.findMany({
      where: {
        chain_id: parseInt(chainId),
        token: {
          address: tokenAddress.toLowerCase(),
        },
      },
      include: {
        account: true,
      },
      orderBy: {
        block_timestamp: 'desc',
      },
      take: 10,
    });

    const usdPrice = await this.price.getNativeTokenPrice(parseInt(chainId));

    return {
      transactions: purchaseHistories.map((history) => ({
        chainId: history.chain_id,
        type: history.type,
        tokenAmount: history.amount_in_decimal.toString(),
        blockTimestamp: history.block_timestamp.toString(),
        hash: history.hash,
        sourceEid: history.source_eid,
        name: history.account.name,
        address: history.account.address,
        ethAmount: history.eth_amount_in_decimal.toString(),
        ethAmountInUsd: (
          parseFloat(history.eth_amount_in_decimal.toString()) * usdPrice
        ).toFixed(2),
      })),
    };
  }
}
