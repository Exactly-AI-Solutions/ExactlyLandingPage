import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const radio = cva(
  // Base styles
  [
    'relative inline-flex items-center cursor-pointer',
    'focus:outline-none',
    'transition-all duration-200 ease-in-out',
  ],
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
      disabled: {
        true: 'cursor-not-allowed',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const radioCircle = cva(
  [
    'absolute inset-0 rounded-full transition-all duration-200 ease-in-out',
    'border-2', 'bg-white',
          'border-blue-04',
  ],
  {variants: {
      disabled: {
        true: [
          'bg-gray-01',
          'border-gray-03',
          'hover:border-gray-03',
        ],
      },
    }
    },
);

const radioDot = cva(
  [
    'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'rounded-full transition-all duration-200 ease-in-out',
  ],
  {
    variants: {
      size: {
        sm: 'h-1.5 w-1.5',
        md: 'h-2 w-2',
        lg: 'h-2.5 w-2.5',
      },
      checked: {
        true: [
          'bg-blue-04',
          'scale-100',
        ],
        false: [
          'bg-transparent',
          'scale-0',
        ],
      },
      disabled: {
        true: [
          'bg-gray-03',
        ],
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        class: [
          'bg-gray-03',
        ],
      },
    ],
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface RadioProps
  extends VariantProps<typeof radio>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'checked'> {
  className?: string;
  label?: string;
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  value?: string;
}

export const Radio: React.FC<RadioProps> = ({
  size,
  className,
  label,
  description,
  checked = false,
  onChange,
  disabled,
  name,
  value,
  ...props
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleChange();
    }
  };

  return (
    <div className="flex items-start gap-3">
      <div
        className={clsx(radio({ size, disabled }), className)}
        onClick={handleChange}
        onKeyDown={handleKeyDown}
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {/* Hidden input for form submission */}
        <input
          type="radio"
          className="sr-only"
          checked={checked}
          onChange={() => {}} // Controlled by the wrapper div
          disabled={disabled}
          name={name}
          value={value}
          {...props}
        />
        
        {/* Radio circle */}
        <div className={radioCircle({ disabled })} />
        
        {/* Radio dot */}
        <div className={radioDot({ size, checked, disabled })} />
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
              onClick={!disabled ? handleChange : undefined}
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

// Radio Group Component for managing multiple radios
export interface RadioGroupProps {
  className?: string;
  children: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  disabled?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  className,
  children,
  value,
  onChange,
  name,
  disabled,
}) => {
  const handleRadioChange = (radioValue: string) => {
    if (!disabled && onChange) {
      onChange(radioValue);
    }
  };

  return (
    <div className={clsx('flex flex-col gap-3', className)} role="radiogroup">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<RadioProps>(child) && child.type === Radio) {
          const radioProps = child.props as RadioProps;
          return React.cloneElement(child, {
            name,
            checked: radioProps.value === value,
            onChange: () => handleRadioChange(radioProps.value || ''),
            disabled: disabled || radioProps.disabled,
          });
        }
        return child;
      })}
    </div>
  );
};

export default Radio;
