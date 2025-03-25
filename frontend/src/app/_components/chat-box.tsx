import { User } from "lucide-react";
import React from "react";
import Link from "next/link";
import { formatDateBasedOnToday } from "@/core/lib/utils"
import ButtonLike from "./button-like"
import CustomizedImage from "@/components/customized-image";

interface ChatBoxProps {
  avatarSrc: string
  userName: string
  address: string
  createdAt: string
  message: string
  likeCounts: number
  isLike: boolean
  onLikeClick: () => void
}

const ChatBox = ({
  avatarSrc,
  userName,
  address,
  createdAt,
  message,
  likeCounts,
  isLike,
  onLikeClick,
}: ChatBoxProps) => {
  return (
    <div className="flex gap-3 bg-secondary p-4 md:gap-6 md:p-8">
      <div className="w-full">
        <div className="flex items-center gap-3">
          <CustomizedImage image={avatarSrc} fallbackImage={<User className="size-6" />} className="w-6 h-6 rounded-full" />
          <Link href={`/profile/${address}`} className="underline-offset-4 underline">
            <p>{userName}</p>
          </Link>
          <div className="h-1 w-1 rounded-full bg-[#767676]"></div>
          <p>{formatDateBasedOnToday(createdAt)}</p>
        </div>
        <p>{message}</p>
      </div>
      <ButtonLike isLike={isLike} onClick={onLikeClick} />
      <p className="flex items-center">{likeCounts}</p>
      {/* <img src="/assets/img/home/chat-reply.svg" className="cursor-pointer" /> */}
    </div>
  )
}

export default ChatBox
