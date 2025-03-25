'use client'

import { useState, useEffect } from 'react'

/**
 * Custom hook to handle client-side only rendering to avoid hydration mismatches
 * with components that use browser APIs or wallet connections.
 *
 * @returns {boolean} Whether the component is rendering on the client
 */
export function useClientOnly(): boolean {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
