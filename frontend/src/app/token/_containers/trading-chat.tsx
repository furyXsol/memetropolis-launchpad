import { useState } from 'react'
import ButtonSendMessage from '@/app/_components/button-send-message'
import ChatBox from '@/app/_components/chat-box'
import { ChatTab } from '@/app/token/_components/chat-tab'
import { Token } from '@/core/types/token'
import { useTradingChat } from '@/core/services/_api/use-trading-chat'
import Image from 'next/image'
import ButtonLike from '../../_components/button-like'
import ChatRibbon from '../../../../public/assets/img/home/chat/ribbon.svg'
import { SquareRightIcon } from '@/components/profile-icons'

const TradingChat = ({ token }: { token: Token }) => {
  const {
    wallets,
    isConnected,
    chatText,
    setChatText,
    replies,
    sendChat,
    onLikeClick,
  } = useTradingChat(token.id)

  return (
    <>
      <h1 className="text-center font-hanson text-3xl font-bold uppercase text-[#FFFAFF] md:text-6xl">
        trading chat
      </h1>

      <div className="relative w-full border-l-2 border-accent bg-primary py-16 md:py-28">
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"></div>
        <div className="absolute right-0 top-0 hidden h-12 w-[2px] -translate-x-1/2 bg-accent md:block"></div>
        <ChatRibbon className="absolute right-0 top-12 hidden h-[200px] w-[52px] translate-x-1/2 md:block" />

        <div className="absolute left-0 top-0 flex w-full px-8 text-xs font-semibold md:text-lg">
          <ChatTab
            name={token.name}
            image={token.image}
            tabSelected={true}
            onClick={() => {}}
          />
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
              disabled={!isConnected}
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
    </>
  )
}

export default TradingChat
