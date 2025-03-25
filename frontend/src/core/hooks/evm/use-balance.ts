import { useQuery } from '@tanstack/react-query'
import { useBalance as useWagmiBalance } from 'wagmi'
import { readContract } from '@wagmi/core'
import { formatEther } from 'viem'
import { ChainId, wagmiConfig } from '@/core/lib/wagmi'
import TokenABI from '@/core/constants/abi/token'

export const useBalance = (
  walletAddress: string | undefined,
  chainId: string | number,
) => {
  const { data: wagmiBalance } = useWagmiBalance({
    address: walletAddress as `0x${string}`,
    chainId: Number(chainId),
  })

  return useQuery({
    queryKey: ['EVM-BALANCE', { walletAddress, chainId }],
    queryFn: async () => {
      if (!walletAddress || !wagmiBalance) {
        return 0
      }
      return Number(formatEther(wagmiBalance.value))
    },
  })
}

export const useTokenBalance = (
  walletAddress: string | undefined,
  tokenAddress: string,
  chainId: number,
) => {
  return useQuery({
    queryKey: ['EVM-TOKEN-BALANCE', { walletAddress, tokenAddress, chainId }],
    queryFn: async () => {
      if (!walletAddress || !tokenAddress) {
        return 0
      }

      try {
        const balance = await readContract(wagmiConfig, {
          abi: TokenABI,
          address: tokenAddress as `0x${string}`,
          functionName: 'balanceOf',
          args: [walletAddress as `0x${string}`],
          chainId: chainId as ChainId,
        })

        return Number(formatEther(balance as bigint))
      } catch (error) {
        console.error('Error fetching token balance:', error)
        return 0
      }
    },
  })
}
