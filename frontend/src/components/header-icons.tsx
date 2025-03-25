import * as React from 'react'

interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
}

export const MenuCloseIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#FFFFFF', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <rect
          x="3.00194"
          width="24"
          height="4"
          transform="rotate(45 3.00194 0)"
          fill={color}
        />
        <rect
          y="17"
          width="24"
          height="4"
          transform="rotate(-45 0 17)"
          fill={color}
        />
      </svg>
    )
  },
)

MenuCloseIcon.displayName = 'MenuCloseIcon'

export const MenuOpenIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = '#FFFAFF', ...props }, forwardedRef) => {
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
          d="M4 6H20M7 12H20M10 18H20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
)

MenuOpenIcon.displayName = 'MenuOpenIcon'
