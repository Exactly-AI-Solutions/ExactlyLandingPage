import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const typography = cva(
  'font-sans', // Base class
  {
    variants: {
      size: {
        xl: 'text-6xl leading-[4rem]', // 64px / 64px
        h1: 'text-5xl leading-[3.625rem]', // 48px / 58px
        h2: 'text-[42px] leading-[3.125rem]', // 42px / 50px  
        h3: 'text-4xl leading-[2.75rem]', // 36px / 44px
        h4: 'text-[32px] leading-10', // 32px / 40px
        h5: 'text-[28px] leading-9', // 28px / 36px
        h6: 'text-2xl leading-8', // 24px / 32px
        bodyXXL: 'text-[22px] leading-[1.625rem]', // 22px / 26px
        bodyXL: 'text-xl leading-6', // 20px / 24px
        bodyL: 'text-lg leading-[1.375rem]', // 18px / 22px
        body: 'text-base leading-5', // 16px / 20px
        bodyS: 'text-sm leading-[1.125rem]', // 14px / 18px
        bodyXS: 'text-xs leading-4', // 12px / 16px
        bodyXXS: 'text-[10px] leading-[0.875rem]', // 10px / 14px
      },
      weight: {
        regular: 'font-normal', // 400
        medium: 'font-medium', // 500
        semibold: 'font-semibold', // 600
        bold: 'font-bold', // 700
      },
      color: {
        // Default colors
        inherit: 'text-inherit',
        current: 'text-current',
        transparent: 'text-transparent',
        
        // Black and White
        black: 'text-black',
        white: 'text-white',
        
        // Gray scale - using CSS variables for custom colors
        gray01: 'text-[var(--color-gray-01)]',
        gray02: 'text-[var(--color-gray-02)]',
        gray03: 'text-[var(--color-gray-03)]',
        gray04: 'text-[var(--color-gray-04)]',
        gray05: 'text-[var(--color-gray-05)]',
        gray06: 'text-[var(--color-gray-06)]',
        gray07: 'text-[var(--color-gray-07)]',
        gray08: 'text-[var(--color-gray-08)]',
        gray09: 'text-[var(--color-gray-09)]',
        gray10: 'text-[var(--color-gray-10)]',

        // Slate (Bluish Gray)
        slate01: 'text-[var(--color-slate-50)]',
        slate02: 'text-[var(--color-slate-100)]',
        slate03: 'text-[var(--color-slate-200)]',
        slate04: 'text-[var(--color-slate-300)]',
        slate05: 'text-[var(--color-slate-400)]',
        slate06: 'text-[var(--color-slate-500)]',
        slate07: 'text-[var(--color-slate-600)]',
        slate08: 'text-[var(--color-slate-700)]',
        slate09: 'text-[var(--color-slate-800)]',
        slate10: 'text-[var(--color-slate-900)]',

        // Blue
        blue01: 'text-[var(--color-blue-01)]',
        blue02: 'text-[var(--color-blue-02)]',
        blue03: 'text-[var(--color-blue-03)]',
        blue04: 'text-[var(--color-blue-04)]',
        blue05: 'text-[var(--color-blue-05)]',

        // Green
        green01: 'text-[var(--color-green-50)]',
        green02: 'text-[var(--color-green-100)]',
        green03: 'text-[var(--color-green-200)]',
        green04: 'text-[var(--color-green-300)]',
        green05: 'text-[var(--color-green-400)]',
        
        // Yellow
        yellow01: 'text-[var(--color-yellow-50)]',
        yellow02: 'text-[var(--color-yellow-100)]',
        yellow03: 'text-[var(--color-yellow-200)]',
        yellow04: 'text-[var(--color-yellow-300)]',
        yellow05: 'text-[var(--color-yellow-400)]',
        
        // Red
        red01: 'text-[var(--color-red-01)]',
        red02: 'text-[var(--color-red-02)]',
        red03: 'text-[var(--color-red-03)]',
        red04: 'text-[var(--color-red-04)]',
        red05: 'text-[var(--color-red-05)]',
        
        // Purple
        purple01: 'text-[var(--color-purple-50)]',
        purple02: 'text-[var(--color-purple-100)]',
        purple03: 'text-[var(--color-purple-200)]',
        purple04: 'text-[var(--color-purple-300)]',
        purple05: 'text-[var(--color-purple-400)]',
        
        // Pink
        pink01: 'text-[var(--color-pink-50)]',
        pink02: 'text-[var(--color-pink-100)]',
        pink03: 'text-[var(--color-pink-200)]',
        pink04: 'text-[var(--color-pink-300)]',
        pink05: 'text-[var(--color-pink-400)]',
        
        // Orange
        orange01: 'text-[var(--color-orange-50)]',
        orange02: 'text-[var(--color-orange-100)]',
        orange03: 'text-[var(--color-orange-200)]',
        orange04: 'text-[var(--color-orange-300)]',
        orange05: 'text-[var(--color-orange-400)]',
      },
    },
    defaultVariants: {
      size: 'body',
      weight: 'regular',
      color: 'inherit',
    },
  }
);

export interface TypographyProps 
  extends VariantProps<typeof typography>,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div' | 'label' | 'strong' | 'em';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  as: Component = 'p',
  size,
  weight,
  color = 'gray10',
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={clsx(typography({ size, weight, color }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
