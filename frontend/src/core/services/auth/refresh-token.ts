import { useMutation } from '@tanstack/react-query'

import { api } from "@/core/lib/axios";

type Response = {
  data: { token: string; exp: number }
}

export const refreshToken = async (token: string) => {
  const response = await api
    .post<Response>('/auth/refresh', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  return response.data;
}

type UseRefreshTokenMutationParams = {
  token: string
}

export function useRefreshToken() {
  return useMutation({
    mutationFn: async ({ token }: UseRefreshTokenMutationParams) =>
      refreshToken(token),
  })
}
