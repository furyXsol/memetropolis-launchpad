import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { RedisService } from './redis.service';
import { CHAIN_IDS } from './lib/enums';

@Injectable()
export class PriceService {
  constructor(
    private readonly httpService: HttpService,
    private readonly redisService: RedisService,
    private readonly prisma: PrismaService,
  ) {}

  async getPriceFromCoingecko(): Promise<{ [chainId: number]: number } | null> {
    try {
      const { data } = await this.httpService
        .get(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,matic-network,binancecoin,avalanche-2,fantom,solana&vs_currencies=usd',
        )
        .toPromise();

      const prices: { [chainId: number]: number } = {};

      prices[CHAIN_IDS.ETHEREUM] = data.ethereum.usd;
      prices[CHAIN_IDS.BASE] = data.ethereum.usd;
      prices[CHAIN_IDS.ARBITRUM] = data.ethereum.usd;
      prices[CHAIN_IDS.BASE_TESTNET] = data.ethereum.usd;
      prices[CHAIN_IDS.ARB_TESTNET] = data.ethereum.usd;
      prices[CHAIN_IDS.POLYGON] = data['matic-network'].usd;
      prices[CHAIN_IDS.BNB] = data['binancecoin'].usd;
      prices[CHAIN_IDS.BNB_TESTNET] = data['binancecoin'].usd;
      prices[CHAIN_IDS.AVALANCHE] = data['avalanche-2'].usd;
      prices[CHAIN_IDS.FANTOM] = data['fantom'].usd;
      prices[CHAIN_IDS.SOLANA_MAINNET] = data['solana'].usd;
      return prices;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  async getNativeTokenPrice(chainId: number): Promise<number> {
    const price = await this.redisService.get('price');
    let nativeTokenPrice = 0;
    if (price && price !== '') {
      const pricePerChain = JSON.parse(price);
      nativeTokenPrice = pricePerChain[chainId];
    }
    return nativeTokenPrice;
  }
}
