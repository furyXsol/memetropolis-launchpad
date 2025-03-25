'use client'
import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useTradingChat } from '@/core/services/_api/use-trading-chat'
import { getTokenListByCategory } from '@/core/services/_api/use-token'
import ButtonSendMessage from '@/app/_components/button-send-message'
import { ChatTab } from '@/app/token/_components/chat-tab'
import ChatBox from '@/app/_components/chat-box'
import Image from 'next/image'
import { useClientOnly } from '@/core/hooks/use-client-only'
import { SquareRightIcon } from '@/components/profile-icons'

const TradingChat = () => {
  const { data: hotTokens } = useQuery(getTokenListByCategory('hot'))
  const queryClient = useQueryClient()
  const [activeTab, setActiveTab] = useState('')
  const {
    wallets,
    isConnected,
    chatText,
    setChatText,
    replies,
    sendChat,
    onLikeClick,
  } = useTradingChat(activeTab)

  const isMounted = useClientOnly()

  useEffect(() => {
    if (hotTokens)
      queryClient.invalidateQueries({
        queryKey: ['GET_REPLIES_BY_TOKEN_ID'],
      })
  }, [activeTab, hotTokens, queryClient])

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-3">
      <h1 className="text-center font-hanson text-3xl font-bold uppercase text-[#FFFAFF] md:text-6xl">
        trading chat
      </h1>

      <div className="relative w-full border-l-2 border-accent bg-primary py-16 md:py-28">
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"></div>
        <div className="absolute right-0 top-0 h-12 w-[2px] -translate-x-1/2 bg-accent"></div>
        <Image
          width={55}
          height={54}
          alt="Ribbon"
          src="/assets/img/home/chat/ribbon.svg"
          className="absolute right-0 top-12 hidden w-[52px] translate-x-1/2 md:block"
        />

        <div className="absolute left-0 top-0 flex w-full px-8 text-xs font-semibold md:text-lg">
          {hotTokens?.map((token, index) => {
            if (activeTab === '' && index == 0) setActiveTab(token.id)

            return (
              <ChatTab
                key={token.id}
                name={token.name}
                image={token.image}
                tabSelected={activeTab === token.id}
                onClick={() => setActiveTab(token.id)}
              />
            )
          })}
        </div>

        <div className="mx-auto flex max-w-[960px] flex-col gap-4 px-3 text-xs md:text-base">
          <div className="flex max-h-[500px] w-full flex-col gap-4 overflow-auto">
            {replies?.map((reply) => {
              const isLike = reply.reply_likes.some(
                (like) =>
                  like.account.address.toLowerCase() ===
                    wallets[0]?.address.toLowerCase() && like.liked,
              )
              const likeCount = reply.reply_likes.filter(
                (like) => like.liked,
              ).length
              return (
                <ChatBox
                  key={reply.id}
                  avatarSrc={reply.account.image}
                  userName={reply.account.name || reply.account.username}
                  address={reply.account.address}
                  createdAt={reply.created_at}
                  message={reply.content}
                  likeCounts={likeCount}
                  isLike={isLike}
                  onLikeClick={() => onLikeClick(reply.id, !isLike)}
                />
              )
            })}
          </div>

          <div className="flex items-center gap-5 rounded-xl border-2 border-accent px-8 py-6">
            <textarea
              className="w-full bg-transparent outline-none"
              placeholder="Join the tg and let's make a whale chat"
              value={chatText}
              disabled={isMounted ? !isConnected : false}
              onChange={(e) => setChatText(e.target.value)}
            />
            <ButtonSendMessage onClick={sendChat} />
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 h-[30px] w-[50%] -translate-x-1/2 bg-background md:h-[70px]"></div>
        <div className="absolute bottom-[-36px] left-[calc(25%-3px)] h-[55px] w-[55px] -translate-x-1/2 rotate-[50deg] bg-background md:bottom-[-64px] md:left-[calc(25%-7px)] md:h-[110px] md:w-[110px]"></div>
        <div className="absolute bottom-[-36px] left-[calc(75%+3px)] h-[55px] w-[55px] -translate-x-1/2 rotate-[130deg] bg-background md:bottom-[-64px] md:left-[calc(75%+7px)] md:h-[110px] md:w-[110px]"></div>
        <SquareRightIcon className="absolute bottom-0 right-0" />
      </div>
    </div>
  )
}

export default TradingChat
