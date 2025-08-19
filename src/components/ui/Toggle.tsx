import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const toggle = cva(
  // Base styles
  [
    'relative inline-flex items-center cursor-pointer',
    'focus:outline-none',
    'transition-all duration-200 ease-in-out',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-12',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-70',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const toggleTrack = cva(
  [
    'absolute inset-0 rounded-full transition-all duration-200 ease-in-out',
    'border-2',
  ],
  {
    variants: {
      checked: {
        true: [
          'bg-blue-04',
          'border-blue-04',
        ],
        false: [
          'bg-gray-05',
          'border-gray-05',
        ],
      },
      disabled: {
        true: [
          'bg-gray-02',
          'border-gray-02',
        ],
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        class: [
          'bg-blue-03',
          'border-blue-03',
        ],
      },
    ],
  }
);

const toggleThumb = cva(
  [
    'absolute top-0.5 left-0.5 bg-white rounded-full shadow-sm',
    'transition-all duration-200 ease-in-out',
    'border border-gray-05',
  ],
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Small size transforms
      {
        size: 'sm',
        checked: true,
        class: 'translate-x-4',
      },
      {
        size: 'sm',
        checked: false,
        class: 'translate-x-0',
      },
      // Medium size transforms
      {
        size: 'md',
        checked: true,
        class: 'translate-x-5',
      },
      {
        size: 'md',
        checked: false,
        class: 'translate-x-0',
      },
      // Large size transforms
      {
        size: 'lg',
        checked: true,
        class: 'translate-x-5',
      },
      {
        size: 'lg',
        checked: false,
        class: 'translate-x-0',
      },
    ],
  }
);

export interface ToggleProps
  extends VariantProps<typeof toggle>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'checked'> {
  className?: string;
  label?: string;
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  size,
  className,
  label,
  description,
  checked = false,
  onChange,
  disabled,
  ...props
}) => {
  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="flex items-start gap-3">
      <div
        className={clsx(toggle({ size, disabled }), className)}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {/* Hidden input for form submission */}
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={() => {}} // Controlled by the wrapper div
          disabled={disabled}
          {...props}
        />
        
        {/* Track */}
        <div className={toggleTrack({ checked, disabled })} />
        
        {/* Thumb */}
        <div className={toggleThumb({ size, checked })} />
      </div>
      
      {/* Label and description */}
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label
              className={clsx(
                'text-[var(--font-size-bodyM)] font-[var(--font-weight-medium)] leading-[var(--line-height-bodyM)]',
                disabled 
                  ? 'text-[var(--color-gray-05)]' 
                  : 'text-[var(--color-gray-10)]',
                'cursor-pointer'
              )}
              onClick={!disabled ? handleToggle : undefined}
            >
              {label}
            </label>
          )}
          {description && (
            <p
              className={clsx(
                'text-[var(--font-size-bodyS)] leading-[var(--line-height-bodyS)] mt-1',
                disabled 
                  ? 'text-[var(--color-gray-04)]' 
                  : 'text-[var(--color-gray-07)]'
              )}
            >
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Toggle;
