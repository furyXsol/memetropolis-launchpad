import React from 'react'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { Work_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import Providers from '@/components/layout/providers'
import { Header } from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { SignMessageDialog } from '@/components/sign-message-dialog'
import { wagmiConfig } from '@/core/lib/wagmi'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import 'react-datepicker/dist/react-datepicker.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
})
const hanson = localFont({
  src: '../../public/assets/fonts/replica-regular.ttf',
  variable: '--font-hanson',
})

export const metadata: Metadata = {
  title: 'Memetropolis',
  description:
    'Launch Memecoins across Multiple Chains ETH/BNB - powered by LayerZero',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(
    wagmiConfig,
    headers().get('cookie'),
  )

  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${hanson.variable} text-text m-0 bg-background p-0 font-hanson`}
      >
        <NuqsAdapter>
          <Providers initialState={initialState}>
            <Header />
            <main className="flex flex-col items-center">{children}</main>
            <Footer />
            <SignMessageDialog />
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  )
}
