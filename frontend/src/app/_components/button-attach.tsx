import Image from 'next/image'

const ButtonAttach = () => {
  return (
    <Image
      src="/assets/img/home/chat/chat-attachment.svg"
      width={24}
      height={24}
      alt="Attachment"
      className={`origin-bottom-left cursor-pointer transition-transform duration-300 hover:rotate-[-45deg]`}
    />
  )
}

export default ButtonAttach
