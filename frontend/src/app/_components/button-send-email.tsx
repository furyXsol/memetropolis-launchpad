import Image from 'next/image'

const ButtonSendEmail = () => {
  return (
    <Image
      src="/assets/img/home/left-arrow-dark.svg"
      width={24}
      height={24}
      alt="Send email"
      className="absolute right-6 top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer rounded-full bg-accent p-[7px] transition-shadow duration-300 ease-in-out hover:shadow-[0px_0px_22.9px_0px_hsla(55,100%,68%,1)]"
    />
  )
}

export default ButtonSendEmail
