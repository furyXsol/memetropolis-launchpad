import * as React from 'react'
import { LucideProps } from 'lucide-react'

interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
  selected?: boolean
}

export const CommunityIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#B5B3B8', selected = false, ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M10 5C10 5.39397 9.9224 5.78407 9.77164 6.14805C9.62087 6.51203 9.3999 6.84274 9.12132 7.12132C8.84274 7.3999 8.51203 7.62087 8.14805 7.77164C7.78407 7.9224 7.39397 8 7 8C6.60603 8 6.21593 7.9224 5.85195 7.77164C5.48797 7.62087 5.15726 7.3999 4.87868 7.12132C4.6001 6.84274 4.37913 6.51203 4.22836 6.14805C4.0776 5.78407 4 5.39397 4 5C4 4.20435 4.31607 3.44129 4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2C7.79565 2 8.55871 2.31607 9.12132 2.87868C9.68393 3.44129 10 4.20435 10 5ZM12 14C12.394 14 12.7841 13.9224 13.1481 13.7716C13.512 13.6209 13.8427 13.3999 14.1213 13.1213C14.3999 12.8427 14.6209 12.512 14.7716 12.1481C14.9224 11.7841 15 11.394 15 11C15 10.606 14.9224 10.2159 14.7716 9.85195C14.6209 9.48797 14.3999 9.15726 14.1213 8.87868C13.8427 8.6001 13.512 8.37913 13.1481 8.22836C12.7841 8.0776 12.394 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14ZM7.1 10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V12.414C2 13.606 2.686 14.586 3.594 15.228C4.138 15.614 4.788 15.9 5.498 16.068C6.036 15.092 6.97 14.368 8.082 14.106C7.62756 13.5353 7.30406 12.8717 7.13437 12.1622C6.96468 11.4527 6.95294 10.7146 7.1 10ZM15.92 14.106C16.4633 14.2344 16.9738 14.4752 17.4184 14.8127C17.8631 15.1503 18.2322 15.5772 18.502 16.066C19.212 15.9 19.862 15.614 20.406 15.228C21.314 14.588 22 13.606 22 12.414V12C22 11.4696 21.7893 10.9609 21.4142 10.5858C21.0391 10.2107 20.5304 10 20 10H16.9C17.0446 10.7145 17.0318 11.4519 16.8626 12.161C16.6933 12.8701 16.3717 13.5338 15.92 14.106ZM9 16C8.46957 16 7.96086 16.2107 7.58579 16.5858C7.21071 16.9609 7 17.4696 7 18V18.334C7 19.508 7.714 20.45 8.616 21.05C9.526 21.66 10.726 22 12 22C13.274 22 14.474 21.658 15.384 21.05C16.284 20.45 17 19.508 17 18.334V18C17 17.4696 16.7893 16.9609 16.4142 16.5858C16.0391 16.2107 15.5304 16 15 16H9ZM18 8C18.7956 8 19.5587 7.68393 20.1213 7.12132C20.6839 6.55871 21 5.79565 21 5C21 4.20435 20.6839 3.44129 20.1213 2.87868C19.5587 2.31607 18.7956 2 18 2C17.2044 2 16.4413 2.31607 15.8787 2.87868C15.3161 3.44129 15 4.20435 15 5C15 5.79565 15.3161 6.55871 15.8787 7.12132C16.4413 7.68393 17.2044 8 18 8Z"
          fill={selected ? '#A7FF9F' : color}
        />
      </svg>
    )
  },
)

CommunityIcon.displayName = 'CommunityIcon'

export const TokenLibraryIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#B5B3B8', selected = false, ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M19 2H14V7L16.5 5.5L19 7V2ZM2 2V22H18V20H4V4H18V7.34L12 11.54V8.82C12.6 8.4 13 7.74 13 7C13 5.9 12.1 5 11 5C9.9 5 9 5.9 9 7C9 7.74 9.4 8.4 10 8.82V13.06L2 18.4V2H2ZM14.04 17.32C14.38 17.4 14.7 17.5 15 17.54V19H17V17.54C18.14 17.12 19 16.14 19 15C19 13.68 17.98 12.64 16.72 12.4L14.32 11.8C14.06 11.74 13.84 11.5 13.84 11.22C13.84 10.88 14.12 10.6 14.46 10.6C14.76 10.6 15 10.76 15.06 11H17.08C16.96 9.82 16.08 9 14.98 9C13.7 9 12.7 9.94 12.7 11.24C12.7 12.42 13.62 13.42 14.72 13.66L17.06 14.32C17.38 14.4 17.6 14.68 17.6 15C17.6 15.36 17.32 15.66 16.96 15.66C16.46 15.66 16.16 15.22 16.16 14.82H14.18C14.18 16.28 15.5 17.22 16.96 17.32H17V17.54C16.7 17.5 16.38 17.4 16.04 17.32H14.04Z"
          fill={selected ? '#A7FF9F' : color}
        />
      </svg>
    )
  },
)

TokenLibraryIcon.displayName = 'TokenLibraryIcon'

export const RewardsBadgesIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#B5B3B8', selected = false, ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM15.5 13.5C15.5 13.7761 15.2761 14 15 14H9C8.72386 14 8.5 13.7761 8.5 13.5V13C8.5 12.7239 8.72386 12.5 9 12.5H15C15.2761 12.5 15.5 12.7239 15.5 13V13.5ZM15.5 10C15.5 10.2761 15.2761 10.5 15 10.5H9C8.72386 10.5 8.5 10.2761 8.5 10V9.5C8.5 9.22386 8.72386 9 9 9H15C15.2761 9 15.5 9.22386 15.5 9.5V10ZM15.5 6.5C15.5 6.77614 15.2761 7 15 7H9C8.72386 7 8.5 6.77614 8.5 6.5V6C8.5 5.72386 8.72386 5.5 9 5.5H15C15.2761 5.5 15.5 5.72386 15.5 6V6.5Z"
          fill={selected ? '#A7FF9F' : color}
        />
      </svg>
    )
  },
)

RewardsBadgesIcon.displayName = 'RewardsBadgesIcon'

export const FollowedTradersIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#B5B3B8', selected = false, ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12.5 10C12.5 8.34 13.84 7 15.5 7C17.16 7 18.5 8.34 18.5 10C18.5 11.66 17.16 13 15.5 13C13.84 13 12.5 11.66 12.5 10ZM15.5 15C18.47 15 21.5 16.53 21.5 18V20H9.5V18C9.5 16.52 12.53 15 15.5 15ZM10.5 4C11.6046 4 12.5 4.89543 12.5 6C12.5 7.10457 11.6046 8 10.5 8C9.39543 8 8.5 7.10457 8.5 6C8.5 4.89543 9.39543 4 10.5 4ZM10.5 16C10.12 16 9.74 16.0508 9.38 16.1422C9.82 16.7 10.5 17.5 10.5 18M6.5 10.2C6.5 11.88 5.16 13.22 3.5 13.22C1.84 13.22 0.5 11.88 0.5 10.2C0.5 8.52 1.84 7.2 3.5 7.2C5.16 7.2 6.5 8.54 6.5 10.2ZM3.5 15.22C1.56 15.22 0.5 16.38 0.5 17.22V19.22H6.5V17.22C6.5 16.38 5.44 15.22 3.5 15.22Z"
          fill={selected ? '#A7FF9F' : color}
        />
      </svg>
    )
  },
)

FollowedTradersIcon.displayName = 'FollowedTradersIcon'

export const RecentTokensIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#B5B3B8', selected = false, ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12 2C17.5228 2.00239 22.0024 6.48197 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2.00001 12C2.0024 6.48197 6.48197 2.00239 12 2ZM12 4C7.58172 4 4 7.58172 4.00001 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM11 7H12.5V12.2L16.5 14.5L15.75 15.8L11 13V7Z"
          fill={selected ? '#A7FF9F' : color}
        />
      </svg>
    )
  },
)

RecentTokensIcon.displayName = 'RecentTokensIcon'

export const WalletIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#B5B3B8', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M18 4H6C3.79 4 2 5.79 2 8V16C2 18.21 3.79 20 6 20H18C20.21 20 22 18.21 22 16V8C22 5.79 20.21 4 18 4ZM20 16C20 17.1 19.1 18 18 18H6C4.9 18 4 17.1 4 16V8C4 6.9 4.9 6 6 6H18C19.1 6 20 6.9 20 8V16ZM17 10.5C17 11.3284 16.3284 12 15.5 12C14.6716 12 14 11.3284 14 10.5C14 9.67157 14.6716 9 15.5 9C16.3284 9 17 9.67157 17 10.5Z"
          fill={color}
        />
      </svg>
    )
  },
)

WalletIcon.displayName = 'WalletIcon'

export const EditIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#B5B3B8', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.667 10.0001V12.6668C2.667 12.8668 2.8337 13.0334 3.0337 13.0334H5.7003C5.7937 13.0334 5.887 12.9934 5.9537 12.9201L11.867 7.00677L9.0003 4.14011L3.087 10.0534C3.0137 10.1268 2.9737 10.2134 2.9737 10.3068L2.667 10.0001ZM13.817 5.05677C14.067 4.80677 14.067 4.40677 13.817 4.15677L11.8437 2.18344C11.5937 1.93344 11.1937 1.93344 10.9437 2.18344L9.407 3.72011L12.2737 6.58677L13.817 5.05677Z"
          fill={color}
        />
      </svg>
    )
  },
)

EditIcon.displayName = 'EditIcon'

export const ChatIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#B5B3B8', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M21.99 4C21.99 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22L21.99 4ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z"
          fill={color}
        />
      </svg>
    )
  },
)

ChatIcon.displayName = 'ChatIcon'

export const SquareRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#FFF05A', ...props }, forwardedRef) => {
    return (
      <svg
        width="45"
        height="20"
        viewBox="0 0 45 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <rect x="25" width="20" height="20" fill={color} />
        <path opacity="0.35" d="M16 0H22V20H9L16 0Z" fill={color} />
        <path opacity="0.35" d="M7 0H13L6 20H0L7 0Z" fill={color} />
      </svg>
    )
  },
)

SquareRightIcon.displayName = 'SquareRightIcon'

export const SquareLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#FFF05A', ...props }, forwardedRef) => {
    return (
      <svg
        width="45"
        height="20"
        viewBox="0 0 45 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <rect
          width="20"
          height="20"
          transform="matrix(-1 0 0 1 20 0)"
          fill={color}
        />
        <path opacity="0.35" d="M29 0H23V20H36L29 0Z" fill={color} />
        <path opacity="0.35" d="M38 0H32L39 20H45L38 0Z" fill={color} />
      </svg>
    )
  },
)

SquareLeftIcon.displayName = 'SquareLeftIcon'
