'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'

// Create a mapping of icons to their dynamic imports
const iconComponents = {
  Loader2: dynamic(() => import('lucide-react').then((mod) => mod.Loader2), {
    ssr: false,
  }),
  User: dynamic(() => import('lucide-react').then((mod) => mod.User), {
    ssr: false,
  }),
}

export type LucideIconName = keyof typeof iconComponents

interface LucideIconProps extends LucideProps {
  icon: LucideIconName
}

export function LucideIcon({ icon, ...props }: LucideIconProps) {
  const IconComponent = iconComponents[icon]

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found`)
    return null
  }

  return <IconComponent {...props} />
}
