import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const button = cva(
  // Base styles
  [
    'inline-flex items-center justify-center rounded',
    'font-sans text-[var(--font-size-body)] font-[var(--font-weight-medium)]',
    'transition-all duration-200 ease-in-out',
    'cursor-pointer',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      hierarchy: {
        'primary-bold': [
          'bg-blue-04 text-white border border-transparent',
          'hover:bg-blue-05',
          'disabled:bg-gray-03 disabled:text-gray-06',
        ],
        'primary-stroke': [
          'bg-transparent text-blue-04 border border-blue-04',
          'hover:bg-blue-04 hover:text-white',
          'disabled:border-gray-03 disabled:text-gray-06 disabled:bg-transparent',
        ],
        'primary-ghost': [
          'bg-transparent text-blue-04 border border-transparent',
          'hover:bg-blue-04 hover:text-white',
          'disabled:text-gray-06 disabled:bg-transparent',
        ],
        'primary-filled': [
          'bg-blue-02 text-blue-04 border border-blue-04',
            'hover:bg-blue-05 hover:text-white',
         'disabled:bg-gray-03 disabled:border-gray-06 disabled:text-gray-06',
        ],
        'secondary-bold': [
          'bg-gray-02 text-gray-09 border border-transparent',
          'hover:bg-gray-04',
             'disabled:bg-gray-03 disabled:text-gray-06',
        ],
        'secondary-stroke': [
          'bg-transparent text-gray-09 border border-gray-03',
          'hover:bg-gray-03',
        'disabled:border-gray-03 disabled:text-gray-06 disabled:bg-transparent',
        ],
        'secondary-ghost': [
          'bg-transparent text-gray-09 border border-transparent',
          'hover:bg-gray-03 hover:text-gray-09',
        'disabled:text-gray-06 disabled:bg-transparent',
        ],
        'secondary-filled': [
          'bg-gray-02 text-gray-09 border border-gray-04',
          'hover:bg-gray-04',
          'disabled:bg-gray-03 disabled:border-gray-06 disabled:text-gray-06',
        ],
        'error-bold': [
          'bg-red-04 text-white border border-transparent',
          'hover:bg-red-05',
            'disabled:bg-gray-03 disabled:text-gray-06',
        ],
        'error-stroke': [
          'bg-transparent text-red-04 border border-red-04',
          'hover:bg-red-04 hover:text-white',
      'disabled:border-gray-03 disabled:text-gray-06 disabled:bg-transparent',
        ],
        'error-ghost': [
          'bg-transparent text-red-04 border border-transparent',
          'hover:bg-red-04 hover:text-white',
           'disabled:text-gray-06 disabled:bg-transparent',
        ],
        'error-filled': [
          'bg-red-02 text-red-04 border border-red-04',
          'hover:bg-[var(--color-red-04)] hover:text-white',
           'disabled:bg-gray-03 disabled:border-gray-06 disabled:text-gray-06',
        ],
        'accented-bold': [
          'bg-yellow-06 text-slate-10 border border-transparent',
          'hover:bg-yellow-06',
          'px-6 py-3',
          'rounded-full',
          'disabled:bg-gray-03 disabled:text-gray-06',
        ],
      },
      size: {
        large: ['px-4 py-3'],
        medium: ['px-3 py-2'],
        small: ['px-2 py-1']
      }
    },
    defaultVariants: {
      hierarchy: 'primary-bold',
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends VariantProps<typeof button>,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  hierarchy,
  className,
  children,
  disabled,
  size,
  ...props
}) => {
  return (
    <button
      className={clsx(button({ hierarchy, size }), className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
