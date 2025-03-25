import { useMutation } from '@tanstack/react-query'

import { api } from "@/core/lib/axios";

type UseLoginMutationParams = {
  address: string
  message: string
  signature: string
}

type Response = {
  data: { token: string; exp: number }
}

export function useLogin() {
  return useMutation({
    mutationFn: async ({
      address,
      message,
      signature,
    }: UseLoginMutationParams) => {
      const { data } = await api
        .post<Response>('/auth/login', {
          address,
          signature,
          rawMessage: message,
        })

      return data.data
    },
  })
}
