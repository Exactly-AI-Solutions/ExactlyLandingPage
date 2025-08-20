import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const typography = cva(
  'font-sans', // Base class
  {
    variants: {
      size: {
        xl: 'text-[40px] leading-[3rem] md:text-6xl md:leading-[4rem]', // 64px / 64px
        h1: 'text-[32px] leading-10 md:text-5xl md:leading-[3.625rem]', // 48px / 58px
        h2: 'text-[42px] leading-[3.125rem]', // 42px / 50px  
        h3: 'text-4xl leading-[2.75rem]', // 36px / 44px
        h4: 'text-2xl leading-8 md:text-[32px] md:leading-10', // 32px / 40px
        h5: 'text-[28px] leading-9', // 28px / 36px
        h6: 'text-base leading-5 md:text-2xl md:leading-8', // 24px / 32px
        bodyXXL: 'text-[22px] leading-[1.625rem]', // 22px / 26px
        bodyXL: 'text-xl leading-6', // 20px / 24px
        bodyL: 'text-lg leading-[1.375rem]', // 18px / 22px
        body: 'text-base leading-5', // 16px / 20px
        bodyS: 'text-xs leading-4 md:text-sm md:leading-[1.125rem]', // 14px / 18px
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
        slate01: 'text-[var(--color-slate-01)]',
        slate02: 'text-[var(--color-slate-02)]',
        slate03: 'text-[var(--color-slate-03)]',
        slate04: 'text-[var(--color-slate-04)]',
        slate05: 'text-[var(--color-slate-05)]',
        slate06: 'text-[var(--color-slate-06)]',
        slate07: 'text-[var(--color-slate-07)]',
        slate08: 'text-[var(--color-slate-08)]',
        slate09: 'text-[var(--color-slate-09)]',
        slate10: 'text-[var(--color-slate-10)]',

        // Blue
        blue01: 'text-[var(--color-blue-01)]',
        blue02: 'text-[var(--color-blue-02)]',
        blue03: 'text-[var(--color-blue-03)]',
        blue04: 'text-[var(--color-blue-04)]',
        blue05: 'text-[var(--color-blue-05)]',

        // Green
        green01: 'text-[var(--color-green-01)]',
        green02: 'text-[var(--color-green-02)]',
        green03: 'text-[var(--color-green-03)]',
        green04: 'text-[var(--color-green-04)]',
        green05: 'text-[var(--color-green-05)]',
        
        // Yellow
        yellow01: 'text-[var(--color-yellow-01)]',
        yellow02: 'text-[var(--color-yellow-02)]',
        yellow03: 'text-[var(--color-yellow-03)]',
        yellow04: 'text-[var(--color-yellow-04)]',
        yellow05: 'text-[var(--color-yellow-05)]',
        
        // Red
        red01: 'text-[var(--color-red-01)]',
        red02: 'text-[var(--color-red-02)]',
        red03: 'text-[var(--color-red-03)]',
        red04: 'text-[var(--color-red-04)]',
        red05: 'text-[var(--color-red-05)]',
        
        // Purple
        purple01: 'text-[var(--color-purple-01)]',
        purple02: 'text-[var(--color-purple-02)]',
        purple03: 'text-[var(--color-purple-03)]',
        purple04: 'text-[var(--color-purple-04)]',
        purple05: 'text-[var(--color-purple-05)]',
        
        // Pink
        pink01: 'text-[var(--color-pink-01)]',
        pink02: 'text-[var(--color-pink-02)]',
        pink03: 'text-[var(--color-pink-03)]',
        pink04: 'text-[var(--color-pink-04)]',
        pink05: 'text-[var(--color-pink-05)]',
        
        // Orange
        orange01: 'text-[var(--color-orange-01)]',
        orange02: 'text-[var(--color-orange-02)]',
        orange03: 'text-[var(--color-orange-03)]',
        orange04: 'text-[var(--color-orange-04)]',
        orange05: 'text-[var(--color-orange-05)]',
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
