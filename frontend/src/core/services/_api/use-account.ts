import { queryOptions } from '@tanstack/react-query'
import { api } from '@/core/lib/axios'
import { RecentToken } from '@/core/types/recent-token'
import { Trader } from '@/core/types/trader'
import { Account } from '@/core/types/account'

export function getAccountRecentTokens(walletAddress: string) {
  return queryOptions({
    queryKey: ['GET_ACCOUNT_RECENT_TOKENS', walletAddress],
    queryFn: async (): Promise<RecentToken[]> => {
      try {
        // Don't attempt to fetch if walletAddress is undefined
        if (!walletAddress) {
          console.warn('No wallet address provided for fetching recent tokens')
          return [] // Return empty array if no wallet address
        }

        const response = await api.get(
          `/account/recent-tokens?walletAddress=${walletAddress}`,
        )
        return response.data.recentTokens
      } catch (error: any) {
        console.error(
          `Error fetching recent tokens for address ${walletAddress}:`,
          error,
        )
        return [] // Return empty array on error
      }
    },
    staleTime: 5 * 60 * 1000, // 5 min
    // Only enable query if address is defined
    enabled: !!walletAddress,
  })
}

export function getAccountTopTraders() {
  return queryOptions({
    queryKey: ['GET_ACCOUNT_TOP_TRADERS'],
    queryFn: async (): Promise<Trader[]> => {
      const response = await api.get(`/account/top-traders`)
      return response.data.traders
    },
    staleTime: 5 * 60 * 1000, // 5 min
  })
}

export function getAccountProfile(address: string) {
  return queryOptions({
    queryKey: ['GET_ACCOUNT_PROFILE', address],
    queryFn: async (): Promise<Account> => {
      try {
        // Don't attempt to fetch if address is undefined
        if (!address) {
          console.warn('No wallet address provided for fetching profile')
          // Return a default/empty account or null depending on your application needs
          return {} as Account
        }

        const response = await api.get(`/auth/profile/${address}`, {
          headers: {
            'x-user-wallet-address': address,
          },
        })
        return response.data
      } catch (error: any) {
        console.error(`Error fetching profile for address ${address}:`, error)
        // You could return a default account object or re-throw based on your needs
        throw error
      }
    },
    staleTime: 5 * 60 * 1000, // 5 min,
    // Only enable query if address is defined
    enabled: !!address,
  })
}
