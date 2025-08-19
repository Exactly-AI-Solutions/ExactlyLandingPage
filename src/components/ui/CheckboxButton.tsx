import { cva, VariantProps } from 'class-variance-authority'
import { Check1Icon } from '../icons'
import clsx from 'clsx'

const checkbox = cva(
  [
    'w-5 h-5',
    'flex items-center justify-center',
    'rounded-sm',
    'bg-transparent',
    'border-2',
    'border-blue-04',
    'cursor-pointer',
  ],
  {
    variants: {
      checked: {
        true: ['bg-blue-04!'],
      },
      disabled: {
        true: 'cursor-not-allowed',
      },
    },
  }
)

export interface CheckboxProps
  extends VariantProps<typeof checkbox>,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'size' | 'onChange' | 'checked' | 'value'
    > {
  value: string
  className?: string
  checked?: boolean
  onChange?: (checked: string) => void
  disabled?: boolean
  name?: string
}

export const CheckboxButton = ({
  className,
  checked = false,
  onChange,
  disabled,
  value,
}: CheckboxProps) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleChange()
    }
  }

  return (
    <div
      className={clsx(checkbox({ checked, disabled }), className)}
      onClick={handleChange}
      onKeyDown={handleKeyDown}
      role="checkbox"
      aria-checked="false"
    >
      <Check1Icon fill="white" width={14} height={14} />
    </div>
  )
}
