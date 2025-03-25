import { useMutation } from '@tanstack/react-query'
import { api } from '@/core/lib/axios'
import { UseNewsLetter } from "@/core/types/account";

export const useNewsletter: UseNewsLetter.FunctionType = () => {
  return useMutation({
    mutationFn: async ({ data }) => {
      const response = await api.post(`/newsletter-user/create`, { email: data.email })

      return response.data
    },
  })
}
