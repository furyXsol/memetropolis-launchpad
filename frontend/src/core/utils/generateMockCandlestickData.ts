// utils/generateMockCandlestickData.ts

export interface CandlestickData {
  time: string | number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export type OHLCPriceData = {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
};

export const convertOHLCPriceDataToCandlestickData = (
  data: OHLCPriceData
): CandlestickData => ({
  time: data.timestamp,
  open: data.open,
  high: data.high,
  low: data.low,
  close: data.close,
});

/**
 * Generates an array of mock candlestick data points with adjustable volatility.
 *
 * @param startingValue - The initial closing price to start the data generation.
 * @param volatility - A multiplier that affects the magnitude of price changes.
 *                     Each price change is multiplied by a random factor between 1 and (1 + volatility).
 * @param minCandles - Minimum number of candlesticks to generate (default: 50).
 * @param maxCandles - Maximum number of candlesticks to generate (default: 100).
 * @returns An array of CandlestickData objects.
 */
export const generateMockCandlestickData = (
  startingValue: number,
  volatility: number = 1, // Default volatility
  minCandles: number = 50,
  maxCandles: number = 100
): CandlestickData[] => {
  // Helper function to generate a random number within a range
  const getRandom = (min: number, max: number): number =>
    Math.random() * (max - min) + min;

  // Determine a random number of candlesticks between minCandles and maxCandles
  const numberOfCandles = Math.floor(getRandom(minCandles, maxCandles));

  const data: CandlestickData[] = [];
  let previousClose = startingValue;

  // Start from a specific date or today minus numberOfCandles days
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - numberOfCandles);

  for (let i = 0; i < numberOfCandles; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    // Generate a random volatility factor between 1 and (1 + volatility)
    const volatilityFactorOpen = getRandom(1, 1 + volatility);
    const volatilityFactorClose = getRandom(1, 1 + volatility);
    const volatilityFactorHigh = getRandom(1, 1 + volatility);
    const volatilityFactorLow = getRandom(1, 1 + volatility);

    // Simulate price movements with adjusted volatility
    const open = parseFloat(
      (previousClose + getRandom(-1, 1) * volatilityFactorOpen).toFixed(2)
    );
    const close = parseFloat(
      (open + getRandom(-1, 1) * volatilityFactorClose).toFixed(2)
    );
    const high = parseFloat(
      (Math.max(open, close) + getRandom(0, 1) * volatilityFactorHigh).toFixed(
        2
      )
    );
    const low = parseFloat(
      (Math.min(open, close) - getRandom(0, 1) * volatilityFactorLow).toFixed(2)
    );

    // Ensure that low is not negative
    const validLow = low > 0 ? low : 0.01;

    data.push({
      time: currentDate.toISOString().split('T')[0], // 'YYYY-MM-DD'
      open,
      high,
      low: parseFloat(validLow.toFixed(2)),
      close,
    });

    // Update previousClose for the next iteration
    previousClose = close;
  }

  return data;
};
