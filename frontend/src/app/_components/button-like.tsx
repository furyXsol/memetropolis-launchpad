import React from 'react'
import ChatFavorite from '../../../public/assets/img/home/chat/chat-favorite.svg'
import ChatFavoriteSelected from '../../../public/assets/img/home/chat/chat-favorite-selected.svg'

interface ButtonLikeProps {
  isLike: boolean
  onClick: () => void
}

const ButtonLike = ({ isLike, onClick }: ButtonLikeProps) => {
  if (isLike) {
    return (
      <ChatFavoriteSelected
        className="h-6 w-6 cursor-pointer"
        onClick={onClick}
      />
    )
  }

  return <ChatFavorite className="h-6 w-6 cursor-pointer" onClick={onClick} />
}

export default ButtonLike
