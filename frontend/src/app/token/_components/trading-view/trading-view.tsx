import React, { useEffect, useRef, useState } from 'react';
import {
  ColorType,
  createChart,
  CrosshairMode,
  IChartApi,
} from 'lightweight-charts';
import { CandlestickData } from '@/core/utils/generateMockCandlestickData';

type Props = {
  priceData: CandlestickData[] | null
};

export const TradingView: React.FC<Props> = ({ priceData }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chart = useRef<IChartApi | null>(null);
  const [candleSeries, setCandleSeries] = useState<any | null>(null);
  const resizeObserver = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (chart.current) return;

    chart.current = createChart(chartContainerRef.current!, {
      width: chartContainerRef.current!.clientWidth,
      height: chartContainerRef.current!.clientHeight,
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: 'rgb(134, 239, 172)',
        fontSize: 12,
      },
      overlayPriceScales: {
        ticksVisible: true,
        borderVisible: true,
      },
      grid: {
        vertLines: {
          visible: true,
          color: '#e0e0e0',
        },
        horzLines: {
          visible: true,
          color: '#e0e0e0',
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      rightPriceScale: {
        visible: true,
        ticksVisible: true,
        entireTextOnly: true,
        borderColor: 'rgb(134, 239, 172)',
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
        autoScale: true,
      },
      timeScale: {
        borderColor: 'rgb(134, 239, 172)',
        timeVisible: true,
        secondsVisible: false, // Set to false since data is in minutes
        rightOffset: 5,
        barSpacing: 15,
        minBarSpacing: 30, // Adjusted for minute intervals
        tickMarkFormatter: (time: number) => {
          // Assuming `time` is a UNIX timestamp in seconds
          const date = new Date(time * 1000);
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          return `${hours}:${minutes}`;
        },
      },
    });

    const candles = chart.current.addCandlestickSeries({
      upColor: '#4bffb5',
      downColor: '#ff4976',
      borderDownColor: '#ff4976',
      borderUpColor: '#4bffb5',
      wickDownColor: '#838ca1',
      wickUpColor: '#838ca1',
    });

    setCandleSeries(candles);
  }, []);

  useEffect(() => {
    if (!candleSeries || !priceData) return;

    candleSeries.setData(priceData);
    candleSeries.applyOptions({
      priceFormat: {
        type: 'custom',
        minMove: 0.000000000000001, // Define the minimum movement
        formatter: (price: number) => price.toFixed(18), // Define the formatting function
      },
    });

    return () => {
      candleSeries.setData([]);
    };
  }, [priceData, candleSeries]);

  useEffect(() => {
    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      chart.current!.applyOptions({ width, height });
      setTimeout(() => {
        chart.current!.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current!);

    return () => resizeObserver.current!.disconnect();
  }, []);

  // Handler for fitting the chart content
  const handleFitChart = () => {
    if (chart.current) {
      chart.current.timeScale().fitContent();
      const rightPriceScale = chart.current.priceScale('right');
      rightPriceScale.applyOptions({ autoScale: true });
    }
  };

  return (
    <div className="w-full h-full relative">
      <button
        onClick={handleFitChart}
        className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-black text-xs rounded-sm shadow hover:bg-green-600 focus:outline-none z-50"
      >
        Fit
      </button>

      <div ref={chartContainerRef} className="chart-container w-full h-full" />
    </div>
  );
};
