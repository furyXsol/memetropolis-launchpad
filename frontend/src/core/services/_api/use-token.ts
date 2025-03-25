import {
  queryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {
  Token,
  TokenDetails,
  TokenTradeInfo,
  UseUpdateTokenInfo,
} from '@/core/types/token'
import { api } from '@/core/lib/axios'

export function getTokenByAddress(chainId: string, address: string) {
  return queryOptions({
    queryKey: ['GET_TOKEN_BY_ADDRESS', chainId, address],
    queryFn: async (): Promise<Token> => {
      const response = await api.get(`/token/${chainId}/${address}`)
      return response.data
    },
    staleTime: 5 * 60 * 1000, // 5 min
  })
}

export function getTokenDetails(chainId: string, address: string) {
  return queryOptions({
    queryKey: ['GET_TOKEN_DETAILS', chainId, address],
    queryFn: async (): Promise<TokenDetails> => {
      const response = await api.get(`/token/${chainId}/${address}`)
      const data = response.data

      return {
        tokenPrice: Number(data.priceInDecimal).toFixed(8),
        marketCap: data.marketcap || '0',
        fdv: calculateFdv(data),
        liquidity: calculateLiquidity(data),
      }
    },
    staleTime: 5 * 60 * 1000, // 5 min
  })
}

function calculateFdv(data: Token) {
  const totalSupply = Number(data.totalSupply) / 10 ** Number(data.decimals)
  const fdvValue = totalSupply * Number(data.priceInDecimal)
  return fdvValue.toFixed(2)
}

function calculateLiquidity(data: Token) {
  const liquidityValue =
    Number(data.tokenSold || 0) * Number(data.priceInDecimal)
  return liquidityValue.toFixed(2)
}

export function getTokenTradeInfoByAddress(chainId: string, address: string) {
  return queryOptions({
    queryKey: ['GET_TOKEN_TRADE_INFO_BY_ADDRESS', chainId, address],
    queryFn: async (): Promise<TokenTradeInfo> => {
      const response = await api.get(`/token/trade-info/${chainId}/${address}`)
      return response.data
    },
    staleTime: 5 * 60 * 1000, // 5 min
  })
}

export function getTokenTopMarketCapList(limit: number) {
  return queryOptions({
    queryKey: ['GET_TOKEN_TOP_MARKETCAP_LIST'],
    queryFn: async (): Promise<Token[]> => {
      const response = await api.get(`/token/top-marketcap-list?limit=${limit}`)
      return response.data.tokens
    },
    staleTime: 5 * 60 * 1000, // 5 min
  })
}

export function getTokenList(
  chainId: string,
  meta: string,
  bonded: string,
  metric: string,
) {
  return queryOptions({
    queryKey: ['GET_TOKEN_LIST', chainId, meta, bonded, metric],
    queryFn: async (): Promise<Token[]> => {
      let url = '/token/list'

      // Build query parameters based on the input values
      const params = new URLSearchParams()

      if (chainId !== 'all') {
        params.append('chainId', chainId)
      }

      if (meta !== 'all' && meta !== 'Search by Meta') {
        params.append('meta', meta)
      }

      if (bonded !== 'all' && bonded !== 'Bonded/Unbonded') {
        params.append('bondingStatus', bonded)
      }

      if (metric !== 'all' && metric !== 'Sort By Metric') {
        params.append('sortBy', metric)
      }

      // If any query parameters exist, append them to the URL
      if (Array.from(params).length > 0) {
        url += `?${params.toString()}`
      }

      const response = await api.get(url)
      return response.data.tokens
    },
    staleTime: 0,
  })
}

export function getTokenListByCategory(category: string) {
  return queryOptions({
    queryKey: ['GET_TOKEN_LIST_BY_CATEGORY', category],
    queryFn: async (): Promise<Token[]> => {
      const response = await api.get(`/token/list/${category}`)
      return response.data.tokens
    },
    staleTime: 5 * 60 * 1000, // 5 min
  })
}
