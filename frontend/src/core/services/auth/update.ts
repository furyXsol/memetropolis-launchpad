import { useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/core/lib/axios'

type UseUpdateMutationParams = {
  name: string
  bio: string
  image: string
  facebook: string
  x: string
  linkedin: string
}

type Response = {
  success: boolean
  message: string
}

export function useUpdate(address: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, bio, image, facebook, x, linkedin }: UseUpdateMutationParams) => {
      const { data } = await api.post<Response>(
        '/auth/update',
        {
          name,
          bio,
          image,
          facebook,
          x,
          linkedin,
        },
        {
          headers: {
            'x-user-wallet-address': address,
          },
        },
      )

      return data
    },
    onSuccess: async () => {
      return queryClient.invalidateQueries({
        queryKey: ["GET_ACCOUNT_PROFILE"]
      })
    },
  })
}
