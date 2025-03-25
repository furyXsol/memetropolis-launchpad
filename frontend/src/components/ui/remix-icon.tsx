'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Create a mapping of icons to their dynamic imports
const iconComponents = {
  RiArrowLeftSLine: dynamic(
    () => import('@remixicon/react').then((mod) => mod.RiArrowLeftSLine),
    { ssr: false },
  ),
  RiWalletLine: dynamic(
    () => import('@remixicon/react').then((mod) => mod.RiWalletLine),
    { ssr: false },
  ),
  RiArrowDownSLine: dynamic(
    () => import('@remixicon/react').then((mod) => mod.RiArrowDownSLine),
    { ssr: false },
  ),
  RiFacebookLine: dynamic(
    () => import('@remixicon/react').then((mod) => mod.RiFacebookLine),
    { ssr: false },
  ),
  RiLinkedinLine: dynamic(
    () => import('@remixicon/react').then((mod) => mod.RiLinkedinLine),
    { ssr: false },
  ),
  RiTwitterXLine: dynamic(
    () => import('@remixicon/react').then((mod) => mod.RiTwitterXLine),
    { ssr: false },
  ),
  RiTelegramLine: dynamic(
    () => import('@remixicon/react').then((mod) => mod.RiTelegramLine),
    { ssr: false },
  ),
}

export type RemixIconName = keyof typeof iconComponents

interface RemixIconProps {
  icon: RemixIconName
  className?: string
  [key: string]: any
}

export function RemixIcon({ icon, className, ...props }: RemixIconProps) {
  const IconComponent = iconComponents[icon]

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found`)
    return null
  }

  return <IconComponent className={className} {...props} />
}
