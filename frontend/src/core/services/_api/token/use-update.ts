import { UseUpdateTokenInfo } from "@/core/types/token";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/core/lib/axios";

export const useUpdateTokenInfo: UseUpdateTokenInfo.FunctionType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ data, address }) => {
      const response = await api.post(`/token/update`,
        {
          chainId: data.chainId,
          tokenAddress: data.tokenAddress,
          facebook: data.facebook,
          x: data.x,
          linkedin: data.linkedin,
          banner: data.banner,
          description: data.description,
        },
        {
          headers: {
            'x-user-wallet-address': address,
          },
        }
      )

      return response.data
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ["GET_TOKEN_BY_ADDRESS"]
      })
    }
  })
}
