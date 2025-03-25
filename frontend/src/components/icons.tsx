import * as React from 'react'
import { LucideProps } from "lucide-react";

interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
}

export const ArrowDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6.29365 10.7062C6.68428 11.0968 7.31865 11.0968 7.70928 10.7062L12.7093 5.70615C13.0999 5.31553 13.0999 4.68115 12.7093 4.29053C12.3187 3.8999 11.6843 3.8999 11.2937 4.29053L6.9999 8.58428L2.70615 4.29365C2.31553 3.90303 1.68115 3.90303 1.29053 4.29365C0.899902 4.68428 0.899902 5.31865 1.29053 5.70928L6.29053 10.7093L6.29365 10.7062Z"
          fill={color}
        />
      </svg>
    )
  },
)

ArrowDownIcon.displayName = 'ArrowDownIcon'

export const AlphaBadge = () => <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="9" fill="gold" stroke="black" strokeWidth="1"/>
  <polygon points="10,4 12,8 16,8 13,11 14,15 10,13 6,15 7,11 4,8 8,8" fill="black"/>
</svg>

export const BetaBadge = () => <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="9" fill="silver" stroke="black" strokeWidth="1"/>
  <path d="M7 10l2 2 4-4" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export const NewbieBadge = () => <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <circle cx="10" cy="10" r="9" fill="limegreen" stroke="black" strokeWidth="1"/>
  <path d="M10 12c-2 0-4-2-4-4s2-3 4-3 4 1 4 3-2 4-4 4z" fill="white"/>
  <line x1="10" y1="12" x2="10" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
</svg>

export const IconClose = (props: LucideProps) => <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M11.2891 20.7118L20.7184 11.2852M11.2891 11.2852L20.7184 20.7118" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round"/>
</svg>

