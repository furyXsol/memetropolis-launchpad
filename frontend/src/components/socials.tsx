'use client'

import React from 'react'
import { RemixIcon } from '@/components/ui/remix-icon'
import { Social } from '@/core/types/account'

type SocialsType = {
  social: string | Social
}

export const Socials = ({ social }: SocialsType) => {
  return (
    <div className="flex items-center space-x-2">
      {typeof social === 'string' ? (
        <>
          {JSON.parse(social)?.facebook && (
            <a href={JSON.parse(social)?.facebook}>
              <RemixIcon icon="RiFacebookLine" className="size-4" />
            </a>
          )}
          {JSON.parse(social)?.x && (
            <a href={JSON.parse(social)?.x || '#'}>
              <RemixIcon icon="RiTwitterXLine" className="size-4" />
            </a>
          )}
          {JSON.parse(social)?.linkedin && (
            <a href={JSON.parse(social)?.linkedin || '#'}>
              <RemixIcon icon="RiLinkedinLine" className="size-4" />
            </a>
          )}
          {JSON.parse(social)?.telegram && (
            <a href={JSON.parse(social)?.telegram || '#'}>
              <RemixIcon icon="RiTelegramLine" className="size-4" />
            </a>
          )}
        </>
      ) : (
        <>
          {social?.facebook && (
            <a href={social?.facebook || '#'}>
              <RemixIcon icon="RiFacebookLine" className="size-4" />
            </a>
          )}
          {social?.x && (
            <a href={social?.x || '#'}>
              <RemixIcon icon="RiTwitterXLine" className="size-4" />
            </a>
          )}
          {social?.linkedin && (
            <a href={social?.linkedin || '#'}>
              <RemixIcon icon="RiLinkedinLine" className="size-4" />
            </a>
          )}
        </>
      )}
    </div>
  )
}
