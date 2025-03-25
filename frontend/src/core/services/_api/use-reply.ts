import {
  queryOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { api } from '@/core/lib/axios'
import { Reply } from '@/core/types/reply'

export function getRepliesByTokenId(tokenId: string) {
  return queryOptions({
    queryKey: ['GET_REPLIES_BY_TOKEN_ID', { tokenId }],
    queryFn: async (): Promise<Reply[]> => {
      try {
        // Don't attempt to fetch if tokenId is not provided
        if (!tokenId) {
          console.warn('No token ID provided for fetching replies')
          return []
        }

        const response = await api.get(`/replies/${tokenId}`)
        return response.data
      } catch (error: any) {
        // Handle 404 by returning empty array instead of throwing
        if (error.response && error.response.status === 404) {
          console.warn(`No replies found for token ID: ${tokenId}`)
          return []
        }
        // Re-throw other errors
        throw error
      }
    },
    staleTime: 5 * 60 * 1000, // 5 min
  })
}

export interface CreateReplyRequest {
  address: string
  content: string
  threadId: string
}

export function useCreateReply() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (req: CreateReplyRequest) => {
      const response = await api.post(
        `/replies`,
        {
          content: req.content,
          threadId: req.threadId,
        },
        {
          headers: {
            'x-user-wallet-address': req.address,
          },
        },
      )

      return response.data
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['GET_REPLIES_BY_TOKEN_ID'],
      })
    },
  })
}

export interface UpdateReplyLikeRequest {
  address: string
  replyId: string
  liked: boolean
}

export function useUpdateReplyLike() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (req: UpdateReplyLikeRequest) => {
      const response = await api.post(
        `/replies/like`,
        {
          replyId: req.replyId,
          liked: req.liked,
        },
        {
          headers: {
            'x-user-wallet-address': req.address,
          },
        },
      )

      return response.data
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['GET_REPLIES_BY_TOKEN_ID'],
      })
    },
  })
}
