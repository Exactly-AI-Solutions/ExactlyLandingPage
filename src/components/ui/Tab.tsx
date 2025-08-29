import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'

const tab = cva(
  // Base styles
  [
    'inline-flex items-center justify-center gap-2',
    'font-sans text-[var(--font-size-body)] leading-[var(--line-height-body)] font-medium',
    'text-slate-10',
    'transition-all duration-200 ease-in-out',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
    'px-4 py-2', // Default padding
    'relative',
    'cursor-pointer',
  ],
  {
    variants: {
      appearance: {
        underline: [
          'bg-transparent',
          'border-b-2 border-slate-10',
          'hover:text-blue-04 hover:border-blue-04',
        ],

        filled: [
          'rounded-full',
          'border border-transparent',
          'bg-slate-03',
          'hover:bg-blue-04 hover:text-white',
        ],
        dot: ['bg-transparent', 'rounded-md', 'hover:text-blue-04'],
      },
      disabled: {
        true: ['text-slate-06!', 'cursor-not-allowed', 'pointer-events-none'],
      },
    },
    compoundVariants: [
      {
        appearance: 'underline',
        disabled: true,
        class: ['border-slate-06!'],
      },

      {
        appearance: 'filled',
        disabled: true,
        class: ['bg-transparent', 'text-slate-06!'],
      },

      {
        appearance: 'dot',
        disabled: true,
        class: ['hover:text-blue-04'],
      },
    ],
    defaultVariants: {
      appearance: 'underline',
    },
  }
)

// Dot indicator styles
const dotIndicator = cva(
  [
    'absolute',
    'w-4 h-1',
    'bottom-0 left-1/2 transform -translate-x-1/2',
    'transition-all duration-200',
    'bg-transparent',
  ],
  {
    variants: {
      disabled: {
        true: 'bg-transparent',
      },
      appearance: {
        underline: 'hidden',
        ghost: 'hidden',
        filled: 'hidden',
        dot: 'block',
      },
    },
    compoundVariants: [
      {
        appearance: 'dot',
        class: ['group-hover:bg-blue-04', 'transition-all duration-200'],
      },
    ],
  }
)

export interface TabProps
  extends VariantProps<typeof tab>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'disabled'> {
  children: React.ReactNode
  className?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  active?: boolean
  disabled?: boolean
}

export const Tab: React.FC<TabProps> = ({
  appearance,
  className,
  children,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(tab({ appearance, disabled }), className, 'group')}
      disabled={disabled || undefined}
      {...props}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}

      <span className={dotIndicator({ appearance, disabled })} />
    </button>
  )
}

export default Tab
