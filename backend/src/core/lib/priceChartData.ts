import { IntermediaryData } from 'src/modules/prices/dto/token-price.dto';

export function groupDataByTokenByInterval(allData: IntermediaryData[]): {
  [intervalStart: number]: { [key: string]: IntermediaryData[] };
} {
  const dataByTokenByInterval: {
    [intervalStart: number]: {
      [key: string]: IntermediaryData[];
    };
  } = {};

  allData.forEach((item) => {
    const { chainId, tokenAddress, price, timestamp } = item;
    const minuteStartForTimestamp = timestamp - (timestamp % 60);

    if (!dataByTokenByInterval[minuteStartForTimestamp]) {
      dataByTokenByInterval[minuteStartForTimestamp] = {};
    }

    const key = `${chainId}-${tokenAddress}`;
    if (!dataByTokenByInterval[minuteStartForTimestamp][key]) {
      dataByTokenByInterval[minuteStartForTimestamp][key] = [];
    }

    dataByTokenByInterval[minuteStartForTimestamp][key].push({
      chainId,
      tokenAddress,
      price,
      timestamp,
    });
  });

  return dataByTokenByInterval;
}

export function processIntermediaryDataIntoOHLCData(
  data: IntermediaryData[],
): any {
  if (data.length === 0) {
    return null;
  }

  // Sort data by timestamp
  data.sort((a, b) => a.timestamp - b.timestamp);

  const open = data[0].price;
  const close = data[data.length - 1].price;
  const high = Math.max(...data.map((item) => item.price));
  const low = Math.min(...data.map((item) => item.price));

  const ohlcData = {
    open,
    high,
    low,
    close,
  };

  return ohlcData;
}
