import {
  ColorType,
  createChart as createLightWeightChart,
  CrosshairMode,
  ISeriesApi,
  UTCTimestamp,
  CandlestickData,
  Time,
  TimeScaleOptions,
} from 'lightweight-charts'

export class ChartManager {
  private candleSeries: ISeriesApi<'Candlestick'>
  private chartType: 'candlestick' | 'bar' = 'candlestick'
  private lastUpdateTime: number = 0
  private chart: any
  private containerRef: HTMLDivElement
  private timeframe: string = '5m'
  private isFullscreen: boolean = false
  private scaleType: 'regular' | 'log' | 'percentage' = 'regular'

  constructor(
    ref: HTMLDivElement,
    initialData: any[],
    layout: { background: string; color: string },
    priceCurrency: string,
  ) {
    this.containerRef = ref
    const chart = createLightWeightChart(ref, {
      autoSize: false,
      overlayPriceScales: {
        ticksVisible: true,
        borderVisible: true,
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      rightPriceScale: {
        visible: true,
        ticksVisible: true,
        entireTextOnly: true,
      },
      grid: {
        horzLines: {
          visible: true,
          color: 'rgba(96, 91, 102, 0.1)',
        },
        vertLines: {
          visible: true,
          color: 'rgba(96, 91, 102, 0.1)',
        },
      },
      timeScale: {
        visible: true,
        timeVisible: true,
        secondsVisible: false,
        borderColor: '#605B66',
        rightOffset: 12,
        barSpacing: 12,
        minBarSpacing: 2,
      },
      layout: {
        background: {
          type: ColorType.Solid,
          color: layout.background,
        },
        textColor: layout.color,
        fontSize: 12,
      },
    })

    this.chart = chart
    this.candleSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    })

    this.candleSeries.setData(initialData)

    this.candleSeries.applyOptions({
      priceFormat: {
        type: 'custom',
        minMove: 0.000000000000001, // Define the minimum movement
        formatter: (price: number) => `${price.toFixed(9)} ${priceCurrency}`, // Define the formatting function
      },
    })

    this.setupEventListeners()
  }

  public update(updatedPrice: any) {
    if (!this.lastUpdateTime) {
      this.lastUpdateTime = new Date().getTime()
    }

    this.candleSeries.update({
      time: (this.lastUpdateTime / 1000) as UTCTimestamp,
      close: updatedPrice.close,
      low: updatedPrice.low,
      high: updatedPrice.high,
      open: updatedPrice.open,
    })

    if (updatedPrice.newCandleInitiated) {
      this.lastUpdateTime = updatedPrice.time
    }
  }

  public destroy() {
    this.chart.remove()
  }

  public setTimeframe(timeframe: string) {
    this.timeframe = timeframe
    const now = new Date().getTime()
    const timeframes: Record<string, number> = {
      '5m': 5 * 60 * 1000,
      '30m': 30 * 60 * 1000,
      '1h': 60 * 60 * 1000,
    }

    const fromTime = now - (timeframes[timeframe] || timeframes['5m'])
    this.chart.timeScale().setVisibleRange({
      from: fromTime / 1000,
      to: now / 1000,
    })
  }

  public setScaleType(type: 'regular' | 'log' | 'percentage') {
    this.scaleType = type
    const currentData = this.candleSeries.data() as CandlestickData<Time>[]
    const firstPrice = (currentData[0] as CandlestickData<Time>)?.close || 1

    this.candleSeries.applyOptions({
      priceFormat: {
        type: this.getPriceFormatType(),
        minMove: type === 'percentage' ? 0.01 : 0.00000001,
        formatter: (price: number) => {
          switch (type) {
            case 'log':
              return price.toExponential(2)
            case 'percentage':
              return `${((price / firstPrice - 1) * 100).toFixed(2)}%`
            default:
              return price.toString()
          }
        },
      },
    })
  }

  private getPriceFormatType() {
    switch (this.scaleType) {
      case 'log':
        return 'custom'
      case 'percentage':
        return 'custom'
      default:
        return 'price'
    }
  }

  public setAutoScale(enabled: boolean) {
    this.chart.applyOptions({
      rightPriceScale: {
        autoScale: enabled,
        mode: enabled ? 0 : 1,
      },
    })
  }

  private setupEventListeners() {
    const resizeHandler = () => {
      if (this.chart) {
        this.chart.applyOptions({
          width: this.containerRef.clientWidth,
          height: this.containerRef.clientHeight,
        })
      }
    }

    const debounce = (fn: Function, delay: number) => {
      let timeout: number
      return (...args: any[]) => {
        clearTimeout(timeout)
        timeout = window.setTimeout(() => fn(...args), delay)
      }
    }

    window.addEventListener('resize', debounce(resizeHandler, 100))
  }

  public toggleFullscreen() {
    if (!this.isFullscreen) {
      if (this.containerRef.requestFullscreen) {
        this.containerRef.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    this.isFullscreen = !this.isFullscreen

    setTimeout(() => {
      this.chart.applyOptions({
        width: this.containerRef.clientWidth,
        height: this.containerRef.clientHeight,
      })
    }, 100)
  }

  public setTimeScaleOptions(options: Partial<TimeScaleOptions>) {
    this.chart.applyOptions({
      timeScale: options,
    })
  }

  public async captureImage(): Promise<string> {
    return new Promise((resolve) => {
      const chartElement = this.chart.takeScreenshot()
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (ctx && chartElement) {
        canvas.width = chartElement.width
        canvas.height = chartElement.height
        ctx.drawImage(chartElement, 0, 0)
        resolve(canvas.toDataURL('image/png'))
      }
    })
  }

  public async downloadImage(filename: string = 'chart.png') {
    const imageData = await this.captureImage()
    const link = document.createElement('a')
    link.download = filename
    link.href = imageData
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  public async copyImage() {
    try {
      const imageData = await this.captureImage()
      const blob = await (await fetch(imageData)).blob()
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ])
      return true
    } catch (err) {
      console.error('Failed to copy image:', err)
      return false
    }
  }

  public setChartType(type: 'candlestick' | 'bar') {
    if (this.chartType === type) return

    const currentData = [...this.candleSeries.data()]
    this.chart.removeSeries(this.candleSeries)

    this.chartType = type
    this.candleSeries = this.chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: type === 'bar',
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    })

    this.candleSeries.setData(currentData)
  }
}
