import { useMutation } from '@tanstack/react-query'
import { api } from '@/core/lib/axios'
import { UseTokenCreateApi } from '@/core/types/token'

export const useCreate: UseTokenCreateApi.FunctionType = () => {
  return useMutation({
    mutationFn: async ({ data, address }) => {
      const response = await api.post(
        `/token/create`,
        {
          chainId: data.chain,
          tokenAddress: data.tokenAddress,
          ownerAddress: data.creator,
          name: data.name,
          symbol: data.symbol,
          image: data.image,
          decimals: 18,
          facebook: '',
          x: data.twitter,
          telegram: data.telegram,
          salesRatio: data.salesRatio,
          reservedRatio: data.reservedRatio,
          liquidityRatio: data.liquidityRatio,
          launchDate: data.launchDate,
          maximumPerUser: data.maximumPerUser,
        },
        {
          headers: {
            'x-user-wallet-address': address,
          },
        },
      )

      return response.data
    },
  })
}
