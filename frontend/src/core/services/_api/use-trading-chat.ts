import { useState } from 'react'
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'
import {
  getRepliesByTokenId,
  useCreateReply,
  useUpdateReplyLike,
} from '@/core/services/_api/use-reply'
import { useWallet } from '@/core/hooks/use-wallet'

export const useTradingChat = (tokenId: string) => {
  const { wallets, isConnected } = useWallet()
  const { data: replies = [] } = useQuery({
    ...getRepliesByTokenId(tokenId),
    enabled: !!tokenId,
  })
  const [chatText, setChatText] = useState('')
  const { mutateAsync: createReplyMutateAsync } = useCreateReply()
  const { mutateAsync: updateReplyMutateAsync } = useUpdateReplyLike()

  const sendChat = async () => {
    if (!isConnected || chatText === '') return

    try {
      await createReplyMutateAsync({
        address: wallets[0].address,
        content: chatText,
        threadId: tokenId,
      })
      toast.success('Added reply')
    } catch (e) {
      console.error(e)
    }
    setChatText('')
  }

  const onLikeClick = async (replyId: string, liked: boolean) => {
    try {
      await updateReplyMutateAsync({
        address: wallets[0].address,
        replyId: replyId,
        liked,
      })
    } catch (e) {
      console.error(e)
    }
  }

  return {
    wallets,
    isConnected,
    chatText,
    setChatText,
    replies,
    sendChat,
    onLikeClick,
  }
}
