import clsx from 'clsx'

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'onChange'
  > {
  className?: string
  disabled?: boolean
  name?: string
  value?: string
}

export const Input = ({
  placeholder,
  name,
  disabled,
  className,
}: InputProps) => (
  <input
    className={clsx('border-2 border-slate-04 focus:outline-none p-4 rounded-sm', className)}
    placeholder={placeholder}
    name={name}
    disabled={disabled}
  />
)
