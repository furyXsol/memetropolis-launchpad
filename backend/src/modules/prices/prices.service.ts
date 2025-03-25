import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma.service';
import { IntermediaryData, TokenPriceListDto } from './dto/token-price.dto';
import {
  groupDataByTokenByInterval,
  processIntermediaryDataIntoOHLCData,
} from 'src/core/lib/priceChartData';

@Injectable()
export class PricesService {
  constructor(private readonly prisma: PrismaService) {}

  async getPrices(
    chainId: string,
    address: string,
    from: number,
    to: number,
    resolution: string,
    countBack: number,
  ): Promise<TokenPriceListDto[]> {
    let timeDuration = 60; // 1min
    switch (resolution) {
      case '1': //1 min
        timeDuration = 60;
        break;
      case '5':
        timeDuration = 60 * 5;
        break;
      case '240':
        timeDuration = 60 * 240;
        break;
      case '1D':
        timeDuration = 3600 * 24;
        break;
      case '5D':
        timeDuration = 3600 * 24 * 5;
        break;
      case '1W':
        timeDuration = 3600 * 24 * 7;
        break;
      case '1M':
        timeDuration = 3600 * 24 * 30;
        break;
      default: // 5D by default
        timeDuration = 3600 * 24 * 5;
    }
    const ohlcData: TokenPriceListDto[] = [];
    for (let i = 0; i < countBack; i++) {
      ohlcData.push({
        time: from * 1000 + i * timeDuration * 1000,
        open: 0,
        close: 0,
        high: 0,
        low: 0,
      });
    }

    const tokenPrices = await this.prisma.purchaseHistory.findMany({
      where: {
        chain_id: parseInt(chainId),
        token: {
          address: address.toLowerCase(),
        },
        block_timestamp: {
          gte: from,
          lt: to,
        },
      },
      select: {
        block_timestamp: true,
        token_price_in_decimal: true,
      },
      orderBy: {
        block_timestamp: 'asc',
      },
    });

    if (!tokenPrices)
      throw new BadRequestException('Token prices are not found');

    const intermediaryData: IntermediaryData[] = tokenPrices.map(
      (tokenPrice) => ({
        chainId: parseInt(chainId),
        tokenAddress: address,
        price: parseFloat(tokenPrice.token_price_in_decimal.toString()),
        timestamp: parseInt(tokenPrice.block_timestamp.toString()),
      }),
    );

    intermediaryData.forEach((item) => {
      const ohlcIndex = ohlcData.findIndex(
        (ohlc) => ohlc.time >= item.timestamp * 1000,
      );
      if (ohlcIndex < 0) return;
      ohlcData[ohlcIndex] = {
        ...ohlcData[ohlcIndex],
        high:
          ohlcData[ohlcIndex].high < item.price
            ? item.price
            : ohlcData[ohlcIndex].high,
        low:
          ohlcData[ohlcIndex].low == 0
            ? item.price
            : ohlcData[ohlcIndex].low > item.price
              ? item.price
              : ohlcData[ohlcIndex].low,
        open:
          ohlcData[ohlcIndex].open == 0 ? item.price : ohlcData[ohlcIndex].open,
        close: item.price,
      };
    });

    // sort the data by timestamp, in ascending order
    ohlcData.sort((a, b) => a.time - b.time);

    // loop through ohlcData and set the open of the second item to the close of the first item
    for (let i = 1; i < ohlcData.length; i++) {
      if (ohlcData[i - 1].close > 0) {
        ohlcData[i].open = ohlcData[i - 1].close;
      }
      if (ohlcData[i].close === 0) {
        ohlcData[i].close = ohlcData[i].open;
        ohlcData[i].high = ohlcData[i].open;
        ohlcData[i].low = ohlcData[i].open;
      }
    }

    return ohlcData;
  }
}
