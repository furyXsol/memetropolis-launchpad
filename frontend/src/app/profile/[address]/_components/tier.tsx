import React from 'react'
import { AlphaBadge, BetaBadge, NewbieBadge } from '@/components/icons'

type TierProps = {
  tier: number
}

const TIERS_MAP: { [key: number]: string } = {
  0: 'Newbie',
  10: 'Alpha',
  11: 'Beta',
}

export const BADGE_MAP: { [key: number]: React.ReactElement } = {
  0: <NewbieBadge />,
  10: <AlphaBadge />,
  11: <BetaBadge />,
}

export default function Tier({ tier }: TierProps) {
  return (
    <span className="flex items-center gap-1 rounded-full border bg-[#928E9633] px-2 py-1 text-xs font-bold uppercase">
      {BADGE_MAP[tier]}
      {TIERS_MAP[tier]}
    </span>
  )
}