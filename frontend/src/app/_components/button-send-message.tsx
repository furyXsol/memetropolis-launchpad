import Image from 'next/image'

interface ButtonSendMessageProps {
  onClick: () => void
}

const ButtonSendMessage = ({ onClick }: ButtonSendMessageProps) => {
  return (
    <Image
      src="/assets/img/home/arrow-up.svg"
      width={44}
      height={44}
      alt="Send message"
      className="h-[44px] w-[44px] cursor-pointer rounded-full bg-accent p-[14px] transition-shadow duration-300 ease-in-out hover:shadow-[0px_0px_22.9px_0px_hsla(55,100%,68%,1)]"
      onClick={onClick}
    />
  )
}

export default ButtonSendMessage
