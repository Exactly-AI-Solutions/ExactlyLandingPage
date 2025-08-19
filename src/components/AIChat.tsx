import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { Button } from './ui'

interface Props {
  appearance: 'white' | 'dark'
  placeholder: string
}

const wrapper = cva(
  [ 'w-full',
    'p-4 pl-8',
    'flex items-center justify-between gap-5',
    'rounded-full border-1',
  ],
  {
    variants: {
      appearance: {
        white: ['border-white'],
        dark: ['border-gray-08'],
      },
    },
    defaultVariants: {
      appearance: 'white',
    },
  }
)

const textInput = cva(
    [ 'border-0 flex-1',
      'bg-transparent',
      'text-xl leading-6',
      'focus:outline-none',
    ],
    {
      variants: {
        appearance: {
          white: ['placeholder:text-white text-white'],
          dark: ['placeholder:text-gray-10 text-gray-10'],
        },
      },
      defaultVariants: {
        appearance: 'white',
      },
    }
  )

export const AIChat = ({ appearance, placeholder }: Props) => {
  return (
    <div className={clsx(wrapper({ appearance }), 'input-background')}>
      <input className={textInput({ appearance })} placeholder={placeholder} />
      <Button hierarchy="accented-bold">Ask</Button>
    </div>
  )
}
