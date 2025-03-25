import { queryOptions } from '@tanstack/react-query'
import { Transaction } from '@/core/types/transaction'
import { api } from '@/core/lib/axios'

export function getTransactionRecent(chainId: string, tokenAddress: string) {
  return queryOptions({
    queryKey: ['GET_TRANSACTION_RECENT'],
    queryFn: async (): Promise<Transaction[]> => {
      const response = await api.get(
        `/transaction/recent?chainId=${chainId}&tokenAddress=${tokenAddress}`,
      )
      return response.data.transactions
    },
    staleTime: 5 * 60 * 1000, // 5 min
  })
}
