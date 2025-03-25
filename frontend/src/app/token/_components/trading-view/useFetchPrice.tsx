import { api } from '@/core/lib/axios'
import {
  CandlestickData,
  convertOHLCPriceDataToCandlestickData,
  OHLCPriceData,
} from '@/core/utils/generateMockCandlestickData'
import { AxiosResponse } from 'axios'
import { useEffect, useState, useCallback } from 'react'

const useFetchPrice = (chainId: string, tokenAddress: string) => {
  const [priceData, setPriceData] = useState<CandlestickData[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchInitialPrice = useCallback(async () => {
    try {
      const response = (await api.get(
        `/prices/${chainId}/${tokenAddress}`,
      )) as AxiosResponse<OHLCPriceData[]>
      if (response.status !== 200)
        throw new Error('Failed to fetch initial price data')
      const { data } = response
      setPriceData(data.map(convertOHLCPriceDataToCandlestickData))
    } catch (err) {
      setError('Failed to fetch initial price data')
    } finally {
      setLoading(false)
    }
  }, [chainId, tokenAddress])

  useEffect(() => {
    fetchInitialPrice()
    const interval = setInterval(fetchInitialPrice, 20000)

    return () => {
      clearInterval(interval)
      setPriceData(null)
      setLoading(true)
      setError(null)
    }
  }, [tokenAddress, fetchInitialPrice])

  return { priceData, loading, error, fetchInitialPrice }
}

export default useFetchPrice
