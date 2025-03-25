import {
  HistoryCallback,
  IBasicDataFeed,
  LibrarySymbolInfo,
  PeriodParams,
  ResolutionString,
  ResolveCallback,
} from '../../charting_library/charting_library'
import { api } from '@/core/lib/axios'
import { AxiosResponse } from 'axios'
import { Bar } from '@/charting_library/datafeed-api'

const configurationData = {
  // Represents the resolutions for bars supported by your datafeed
  supports_search: false,
  supported_resolutions: [
    '1' as ResolutionString,
    '5' as ResolutionString,
    '240' as ResolutionString,
    '1D' as ResolutionString,
    '5D' as ResolutionString,
    '1W' as ResolutionString,
    '1M' as ResolutionString,
  ],
}
var intervalId: any
var currentResolution: number = 0
var hasAnyUpdate = false

const channelToSubscription = new Map()
const lastBarsCache = new Map()
var currentChannelString: string

interface BarData {
  time?: number
  open?: number
  close?: number
  high?: number
  low?: number
  volume?: number
}

export function resolutionToSeconds(resolution: string) {
  switch (resolution) {
    case '1': //1 min
      return 60
    case '5': // 5 min
      return 5 * 60
    case '240': // 4 hours
      return 240 * 60
    case '1D':
      return 3600 * 24
    case '5D':
      return 3600 * 24 * 5
    case '1W':
      return 3600 * 24 * 7
    case '1M':
      return 3600 * 24 * 30
  }
  return 3600 * 24 * 5 //5D bydefault
}

function getNextBarTime(barTime: number) {
  return barTime + currentResolution * 1000
}

export function subscribeOnStream(
  tokenId: string,
  resolution: any,
  onRealtimeCallback: any,
  subscriberUID: any,
  onResetCacheNeededCallback: any,
  lastBar: any,
) {
  const handler = {
    id: subscriberUID,
    callback: onRealtimeCallback,
  }
  if (currentResolution !== resolutionToSeconds(resolution)) {
    if (intervalId) {
      clearInterval(intervalId)
    }
    intervalId = setInterval(
      () => {
        if (!hasAnyUpdate) {
          const subscriptionItem =
            channelToSubscription.get(currentChannelString)
          if (subscriptionItem === undefined) {
            return
          }
          const itemLastBar = subscriptionItem.lastBar
          const nextBarTime = getNextBarTime(itemLastBar.time)
          let bar: BarData
          bar = {
            open: itemLastBar.close,
            high: itemLastBar.close,
            low: itemLastBar.close,
            close: itemLastBar.close,
            time: nextBarTime,
          }

          subscriptionItem.lastBar = bar

          // Send data to every subscriber of that symbol
          subscriptionItem.handlers.forEach((handler: any) =>
            handler.callback(bar),
          )
        }
        hasAnyUpdate = false
      },
      resolutionToSeconds(resolution) * 1000,
    )
  }
  currentResolution = resolutionToSeconds(resolution)

  let subscriptionItem = channelToSubscription.get(tokenId)

  subscriptionItem = {
    subscriberUID,
    resolution,
    lastBar,
    handlers: [handler],
  }
  channelToSubscription.set(tokenId, subscriptionItem)
  currentChannelString = tokenId
}

export function unsubscribeFromStream(subscriberUID: any) {
  // Find a subscription with id === subscriberUID
  for (const channelString of channelToSubscription.keys()) {
    const subscriptionItem = channelToSubscription.get(channelString)
    const handlerIndex = subscriptionItem.handlers.findIndex(
      (handler: any) => handler.id === subscriberUID,
    )

    if (handlerIndex !== -1) {
      // Remove from handlers
      subscriptionItem.handlers.splice(handlerIndex, 1)

      if (subscriptionItem.handlers.length === 0) {
        // Unsubscribe from the channel if it was the last handler
        channelToSubscription.delete(channelString)
        break
      }
    }
  }

  if (intervalId) {
    clearInterval(intervalId)
  }
}

export async function makeApiRequest(
  chainId: number,
  tokenAddress: string,
  resolution: string,
  from: number,
  to: number,
  countBack: number,
): Promise<Bar[]> {
  try {
    const response = (await api.get(
      `/prices/${chainId}/${tokenAddress}?from=${from}&to=${to}&resolution=${resolution}&countBack=${countBack}`,
    )) as AxiosResponse<Bar[]>
    if (response.status !== 200)
      throw new Error('Failed to fetch initial price data')
    const { data } = response
    return data
  } catch (err) {
    return []
  }
}

export default class DataFeed implements IBasicDataFeed {
  private chainId: number
  private tokenAddress: string
  constructor(chainId: number, tokenAddress: string) {
    this.chainId = chainId
    this.tokenAddress = tokenAddress
  }
  onReady(callback: any) {
    setTimeout(() => callback(configurationData))
  }

  async searchSymbols(
    userInput: string,
    exchange: string,
    symbolType: string,
    onResultReadyCallback: any,
  ) {
    // Use setTimeout to make the callback execute asynchronously
    setTimeout(() => {
      onResultReadyCallback([])
    }, 0)
  }

  async resolveSymbol(
    symbolName: string,
    onSymbolResolvedCallback: ResolveCallback,
  ) {
    // Use setTimeout with 0 interval to make the callback execute asynchronously
    setTimeout(() => {
      onSymbolResolvedCallback({
        ticker: symbolName,
        description: symbolName,
        exchange: symbolName,
        format: 'price',
        full_name: symbolName,
        listed_exchange: symbolName,
        minmov: 1,
        name: symbolName,
        pricescale: 1000000000,
        session: '24x7',
        timezone: 'Etc/UTC',
        type: 'crypto',
        supported_resolutions: configurationData.supported_resolutions,
        has_daily: true,
        has_weekly_and_monthly: false,
        volume_precision: 2,
        data_status: 'streaming',
        has_intraday: true,
      })
    }, 0)
  }
  async getBars(
    symbolInfo: LibrarySymbolInfo,
    resolution: ResolutionString,
    periodParams: PeriodParams,
    onHistoryCallback: HistoryCallback,
  ) {
    try {
      const { from, to, firstDataRequest, countBack } = periodParams
      if (to === 0) {
        setTimeout(() => {
          onHistoryCallback([], { noData: true })
        }, 0)
        return
      }
      const priceData = await makeApiRequest(
        this.chainId,
        this.tokenAddress,
        resolution,
        from,
        to,
        countBack,
      )
      if (!priceData || priceData.length === 0) {
        // "noData" should be set if there is no data in the requested period
        onHistoryCallback([], { noData: true })
        return
      }
      if (firstDataRequest) {
        lastBarsCache.set(`${this.chainId}-${this.tokenAddress}`, {
          ...priceData[priceData.length - 1],
        })
      }
      onHistoryCallback(priceData, { noData: false })
    } catch (error) {
      // console.log('[getBars]: Get error', error)
      // console.log('[getBars]: Get error', error)
    }
  }
  subscribeBars(
    symbolInfo: any,
    resolution: any,
    onRealtimeCallback: any,
    subscriberUID: any,
    onResetCacheNeededCallback: any,
  ) {
    subscribeOnStream(
      `${this.chainId}-${this.tokenAddress}`,
      resolution,
      onRealtimeCallback,
      subscriberUID,
      onResetCacheNeededCallback,
      lastBarsCache.get(`${this.chainId}-${this.tokenAddress}`),
    )
  }
  unsubscribeBars(subscriberUID: any) {
    unsubscribeFromStream(subscriberUID)
  }
}
