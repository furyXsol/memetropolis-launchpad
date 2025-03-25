'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useConnectWalletModalState } from '@/components/layout/connect-wallet'
import ConnectWallet from '@/components/layout/header/connect-wallet'
import { MenuCloseIcon, MenuOpenIcon } from '@/components/header'

const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Profile',
    href: '/profile',
  },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOrientationChange = () => {
      if (open) {
        setOpen(false)
        document.body.style.overflow = ''
      }
    }

    globalThis.addEventListener('orientationchange', handleOrientationChange)
    return () => {
      globalThis.removeEventListener(
        'orientationchange',
        handleOrientationChange,
      )
    }
  }, [open])

  const toggleMenu = () => {
    const isMobileScreen = globalThis.matchMedia('(max-width: 1024px)').matches
    if (!isMobileScreen) return
    setOpen(!open)
    document.body.style.overflow = !open ? 'hidden' : ''
  }

  const onOpenWalletConnectChange = useConnectWalletModalState(
    (s) => s.onOpenChange,
  )

  return (
    <header className="absolute top-0 z-50 w-full bg-black">
      <div className="relative">
        <div className="mx-auto flex max-w-[1300px] items-center justify-between gap-2 px-3 py-5 md:gap-6 md:px-10">
          <Link
            href="/"
            className="mr-3 flex items-center font-hanson text-base text-white transition-colors duration-300 hover:text-accent md:mr-6 md:text-2xl"
          >
            <span>MEMETROPOLIS</span>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/launch-token" className="hidden md:block">
              <Button
                borderColor="border-accent"
                className={
                  'group relative h-[60px] w-[200px] overflow-hidden border border-accent bg-accent font-medium text-[#110A1A] md:w-[280px]'
                }
              >
                <span className="relative z-10">Launch meme</span>
              </Button>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              <ConnectWallet />
            </div>
          </div>

          <button className="z-[100] block md:hidden" onClick={toggleMenu}>
            {open ? <MenuCloseIcon /> : <MenuOpenIcon />}
          </button>
        </div>

        <div
          className={`scroll-none fixed right-0 top-0 z-20 flex h-screen w-full flex-col items-center gap-10 bg-[#080808CC] px-6 pb-6 pt-[77px] font-black text-[#8800CC] backdrop-blur-md duration-500 sm:pt-[102px] lg:hidden ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          id="navbar-collapse"
        >
          {NAV_LINKS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-2xl text-[#EEEEEE]"
              onClick={() => toggleMenu()}
            >
              {item.label}
            </Link>
          ))}

          <Link href="/launch-token" onClick={() => toggleMenu()}>
            <Button
              borderColor="border-accent"
              className={
                'group relative h-[60px] w-[200px] overflow-hidden border border-accent bg-accent font-medium text-[#110A1A] md:w-[280px]'
              }
            >
              <span className="relative z-10">Launch meme</span>
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            <ConnectWallet />
          </div>
        </div>
      </div>
    </header>
  )
}
