'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAccount } from 'wagmi'

export default function ProfileIndex() {
  const router = useRouter()
  const { address, isConnected } = useAccount()

  useEffect(() => {
    if (isConnected && address) {
      // If the user is connected, redirect to their profile
      router.push(`/profile/${address}`)
    } else {
      // If no user is connected, you could:
      // 1. Redirect to a login page
      // 2. Redirect to a featured profile
      // 3. Show a profile selection page

      // For now, let's redirect to home page
      router.push('/')
    }
  }, [address, isConnected, router])

  // Show a loading state while redirecting
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-[#FFFAFF]"></div>
    </div>
  )
}
