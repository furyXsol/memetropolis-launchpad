import Link from 'next/link'
import { GlobeIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative text-info">
      <div className="relative flex items-center justify-center overflow-hidden bg-primary p-8">
        <div className="flex w-full max-w-[1300px] flex-col items-center justify-between gap-4 px-8 text-xs md:flex-row md:gap-0 md:text-base">
          <Link
            href="/"
            className="mr-3 flex w-full items-center justify-center font-hanson text-base text-white transition-colors duration-300 hover:text-accent md:mr-6 md:w-1/3 md:justify-start md:text-2xl"
          >
            <span>MEMETROPOLIS</span>
          </Link>
          {/* SOCIALS SECTION */}
          <div className="z-[1] flex h-full w-1/3 flex-row items-center justify-center gap-4">
            <Link href="https://www.instagram.com/bookofdyor" target="_blank">
              <InstagramLogoIcon
                width={24}
                height={24}
                className="text-white transition duration-300 hover:text-accent"
              />
            </Link>
            <Link href="https://x.com/MEMETR0P0LIS" target="_blank">
              <Image
                src={'/assets/img/home/top/top-icon-x.svg'}
                alt="X Logo"
                width={24}
                height={24}
                className="transition duration-300 hover:scale-110"
              />
            </Link>
            <Link href="https://memetropolis.party" target="_blank">
              <GlobeIcon
                width={24}
                height={24}
                className="text-white transition duration-300 hover:text-accent"
              />
            </Link>
          </div>
          <div className="flex w-full flex-col whitespace-nowrap text-center text-xs uppercase md:w-1/3 md:text-end">
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms of service</Link>
            <span className="text-white">© MEMEtropolis 2024</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
