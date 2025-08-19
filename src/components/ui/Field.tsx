import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const field = cva(
  [
    'flex gap-3',
    "p-3",
    'cursor-pointer'
  ],
  {
    variants: {
      orientation: {
        horizontal: 'flex-row items-start',
        vertical: 'flex-col',
      },
      hierarchy: {
        ghost: '',
        stroke: [
          'rounded-sm border-2',
          'transition-all duration-200 ease-in-out',
          'border-slate-06',
        ],
      },
      disabled: {
        true: '',
        false: '',
      },
      active: {
        true: '',
        false: '',
      }
    },
    compoundVariants: [
      {
        hierarchy: 'stroke',
        disabled: true,
        class: 'border-slate-04',
      },
      {
        hierarchy: 'stroke',
        active: true,
        class: 'bg-blue-01 border-blue-04',
      }
    ],
    defaultVariants: {
      orientation: 'horizontal',
      hierarchy: 'ghost',
    },
  }
);

const fieldContent = cva(
  [
    'flex flex-col',
  ],
  {
    variants: {
      orientation: {
        horizontal: 'flex-1',
        vertical: 'w-full',
      },
    },
  }
);

const fieldTitle = cva(
  [
    'font-sans font-[var(--font-weight-medium)] leading-[var(--line-height-bodyM)]',
    'text-[var(--font-size-bodyM)]',
    'mb-1',
  ],
  {
    variants: {
      disabled: {
        true: 'text-gray-07',
        false: 'text-slate-10',
      },
    },
  }
);

const fieldDescription = cva(
  [
    'font-sans leading-[var(--line-height-bodyS)]',
    'text-[var(--font-size-bodyS)]',
  ],
  {
    variants: {
      disabled: {
        true: 'text-gray-07',
        false: 'text-slate-10',
      },
    },
  }
);

const fieldControl = cva(
  [
    'flex-shrink-0',
  ],
  {
    variants: {
      orientation: {
        horizontal: '',
        vertical: 'mb-2',
      },
    },
  }
);

export interface FieldProps extends VariantProps<typeof field> {
  children: React.ReactNode;
  active?: boolean;
  title?: string;
  description?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  hierarchy?: 'ghost' | 'stroke';
}

export const Field: React.FC<FieldProps> = ({
  children,
  title,
  description,
  className,
  disabled = false,
  orientation = 'horizontal',
  hierarchy = 'ghost',
  id,
  required,
  error,
  hint,
  active = false,
}) => {
  const fieldId = id || `field-${Math.random().toString(36).substr(2, 9)}`;
  const descriptionId = description ? `${fieldId}-description` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const hintId = hint ? `${fieldId}-hint` : undefined;

  // Clone children to add accessibility attributes
  const enhancedChildren = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<any>, {
        id: fieldId,
        'aria-describedby': [descriptionId, errorId, hintId].filter(Boolean).join(' ') || undefined,
        'aria-invalid': error ? 'true' : undefined,
        'aria-required': required,
        disabled: disabled || (children.props as any)?.disabled,
      })
    : children;

  if (orientation === 'vertical') {
    return (
      <div className={clsx(field({ orientation, hierarchy, disabled, active }), className)}>
        {/* Control first in vertical layout */}
        <div className={fieldControl({ orientation })}>
          {enhancedChildren}
        </div>
        
        {/* Content below */}
        {(title || description || error || hint) && (
          <div className={fieldContent({ orientation })}>
            {title && (
              <label
                htmlFor={fieldId}
                className={clsx(
                  fieldTitle({ disabled }),
                  required && "after:content-['*'] after:text-red-05 after:ml-1"
                )}
              >
                {title}
              </label>
            )}
            
            {description && (
              <p
                id={descriptionId}
                className={fieldDescription({ disabled })}
              >
                {description}
              </p>
            )}
            
            {hint && !error && (
              <p
                id={hintId}
                className={clsx(
                  fieldDescription({ disabled }),
                  'mt-1 text-[var(--color-gray-06)]'
                )}
              >
                {hint}
              </p>
            )}
            
            {error && (
              <p
                id={errorId}
                className={clsx(
                  fieldDescription({ disabled: false }),
                  'mt-1 text-[var(--color-red-05)]'
                )}
              >
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  // Horizontal layout (default)
  return (
    <div className={clsx(field({ orientation, hierarchy, disabled, active }), className)}>
      {/* Control first in horizontal layout */}
      <div className={fieldControl({ orientation })}>
        {enhancedChildren}
      </div>
      
      {/* Content to the right */}
      {(title || description || error || hint) && (
        <div className={fieldContent({ orientation })}>
          {title && (
            <label
              htmlFor={fieldId}
              className={clsx(
                fieldTitle({ disabled }),
                required && "after:content-['*'] after:text-red-05 after:ml-1"
              )}
            >
              {title}
            </label>
          )}
          
          {description && (
            <p
              id={descriptionId}
              className={fieldDescription({ disabled })}
            >
              {description}
            </p>
          )}
          
          {hint && !error && (
            <p
              id={hintId}
              className={clsx(
                fieldDescription({ disabled }),
                'mt-1 text-[var(--color-gray-06)]'
              )}
            >
              {hint}
            </p>
          )}
          
          {error && (
            <p
              id={errorId}
              className={clsx(
                fieldDescription({ disabled: false }),
                'mt-1 text-[var(--color-red-05)]'
              )}
            >
              {error}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Convenience wrapper components for common use cases
export interface FieldToggleProps extends Omit<FieldProps, 'children'> {
  children: React.ReactElement;
  hierarchy?: 'ghost' | 'stroke';
}

export const FieldToggle: React.FC<FieldToggleProps> = ({ children, ...props }) => (
  <Field {...props}>{children}</Field>
);

export interface FieldCheckboxProps extends Omit<FieldProps, 'children'> {
  children: React.ReactElement;
  hierarchy?: 'ghost' | 'stroke';
}

export const FieldCheckbox: React.FC<FieldCheckboxProps> = ({ children, ...props }) => (
  <Field {...props}>{children}</Field>
);

export interface FieldRadioProps extends Omit<FieldProps, 'children'> {
  children: React.ReactElement;
  hierarchy?: 'ghost' | 'stroke';
}

export const FieldRadio: React.FC<FieldRadioProps> = ({ children, ...props }) => (
  <Field {...props}>{children}</Field>
);

export default Field;
