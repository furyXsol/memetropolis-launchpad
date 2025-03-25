'use client'

import React, { useEffect, createRef, useMemo } from 'react'
import {
  widget,
  ChartingLibraryWidgetOptions,
  LanguageCode,
  ResolutionString,
} from '../../charting_library'

import Datafeed from './datafeed'

export interface ChartContainerProps {
  symbol: ChartingLibraryWidgetOptions['symbol']
  interval: ChartingLibraryWidgetOptions['interval']

  // BEWARE: no trailing slash is expected in feed URL
  datafeedUrl: string
  libraryPath: ChartingLibraryWidgetOptions['library_path']
  chartsStorageUrl: ChartingLibraryWidgetOptions['charts_storage_url']
  chartsStorageApiVersion: ChartingLibraryWidgetOptions['charts_storage_api_version']
  clientId: ChartingLibraryWidgetOptions['client_id']
  userId: ChartingLibraryWidgetOptions['user_id']
  fullscreen: ChartingLibraryWidgetOptions['fullscreen']
  autosize: ChartingLibraryWidgetOptions['autosize']
  studiesOverrides: ChartingLibraryWidgetOptions['studies_overrides']
  container: ChartingLibraryWidgetOptions['container']
  disabled_features: ChartingLibraryWidgetOptions['disabled_features']
}

const getLanguageFromURL = (): LanguageCode | null => {
  const regex = new RegExp('[\\?&]lang=([^&#]*)')
  const results = regex.exec(location.search)
  return results === null
    ? null
    : (decodeURIComponent(results[1].replace(/\+/g, ' ')) as LanguageCode)
}
interface TVChartContainerProps {
  symbol: string
  chainId: number
  tokenAddress: string
  isUpdate?: boolean
}
export const TVChartContainer = ({
  chainId,
  tokenAddress,
  symbol,
  isUpdate,
}: TVChartContainerProps) => {
  const chartContainerRef =
    createRef() as React.MutableRefObject<HTMLInputElement>

  const defaultProps = useMemo(
    (): Omit<ChartContainerProps, 'container'> => ({
      symbol,
      interval: '5D' as ResolutionString,
      datafeedUrl: '',
      libraryPath: '/charting_library/',
      disabled_features: [
        'symbol_search_hot_key',
        'use_localstorage_for_settings',
        'popup_hints',
      ],
      chartsStorageUrl: '',
      chartsStorageApiVersion: '1.1',
      clientId: '',
      userId: 'public_user_id',
      fullscreen: false,
      autosize: true,
      studiesOverrides: {},
    }),
    [symbol],
  )

  useEffect(() => {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: defaultProps.symbol as string,
      // BEWARE: no trailing slash is expected in feed URL
      // tslint:disable-next-line:no-any
      datafeed: new Datafeed(chainId, tokenAddress),
      interval:
        defaultProps.interval as ChartingLibraryWidgetOptions['interval'],
      container: chartContainerRef.current,
      library_path: defaultProps.libraryPath as string,

      locale: getLanguageFromURL() || 'en',
      disabled_features: defaultProps.disabled_features,
      charts_storage_url: defaultProps.chartsStorageUrl,
      charts_storage_api_version: defaultProps.chartsStorageApiVersion,
      client_id: defaultProps.clientId,
      user_id: defaultProps.userId,
      fullscreen: defaultProps.fullscreen,
      autosize: defaultProps.autosize,
      studies_overrides: defaultProps.studiesOverrides,
      theme: 'dark',
    }

    const tvWidget = new widget(widgetOptions)

    return () => {
      tvWidget.remove()
    }
  }, [chainId, tokenAddress, isUpdate, defaultProps, chartContainerRef])

  return <div ref={chartContainerRef} className="h-full" />
}
