import { useMutation } from '@tanstack/react-query'
import { UseTokenPrice } from '@/core/types/contract'
import { readContract } from '@wagmi/core'
import { ChainId, wagmiConfig } from '@/core/lib/wagmi'
import TokenFactoryABI from '@/core/constants/abi/token-factory'
import { TOKEN_FACTORY_ADDRESSES } from '@/core/constants/address'
import { Address, parseEther, formatEther } from 'viem'

export const useTokenPrice: UseTokenPrice.FunctionType = () => {
  return useMutation({
    mutationFn: async ({ data }) => {
      const _chainId = data.chainId
      const tokenPriceinETH = await readContract(wagmiConfig, {
        abi: TokenFactoryABI,
        address: TOKEN_FACTORY_ADDRESSES[_chainId] as Address,
        functionName: 'getCurrentTokenPrice',
        args: [data.tokenAddress],
        chainId: _chainId as ChainId,
      })
      return {
        amount: formatEther(tokenPriceinETH as bigint),
      }
    },
  })
}
