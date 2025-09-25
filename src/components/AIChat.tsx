'use client'

import { cva } from 'class-variance-authority'
import { Button, Typography } from './ui'
import { Dispatch, SetStateAction, useState } from 'react'
import clsx from 'clsx'

interface Props {
  appearance: 'white' | 'dark'
  placeholder: string
  showPills?: boolean
  className?: string
  setChatText?: Dispatch<SetStateAction<string>>
}

const wrapper = cva(
  [
    'w-full max-w-full',
    'p-4 pl-8',
    'flex items-center justify-between gap-5',
    'rounded-full border-1',
  ],
  {
    variants: {
      appearance: {
        white: ['border-white', 'bg-white/10'],
        dark: ['border-gray-08', 'bg-white/80'],
      },
    },
    defaultVariants: {
      appearance: 'white',
    },
  }
)

const textInput = cva(
  [
    'border-0 flex-1',
    'bg-transparent',
    'text-sm leading-[1.125rem]',
    'md:text-xl md:leading-6',
    'focus:outline-none',
    'shrink-1 text-ellipsis',
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

const pills = [
  'Check Homepage CRO',
  'Show AI Opportunities',
  'SWOT on a Competitor',
  'Lower Overhead with AI',
  'Run Marketing Audit',
]

export const AIChat = ({
  appearance,
  placeholder,
  showPills,
  className,
  setChatText,
}: Props) => {
  const [inputText, setInputText] = useState('')

  const handleClick = () => {
    setChatText?.(inputText)
  }

  return (
    <div className={clsx('container flex flex-col gap-6 p-0!', className)}>
      <div className={wrapper({ appearance })}>
        <input
          value={inputText}
          onChange={({ target: { value } }) => setInputText(value)}
          className={textInput({ appearance })}
          placeholder={placeholder}
        />
        <Button hierarchy="accented-bold" onClick={handleClick}>
          Ask
        </Button>
      </div>
      {showPills ? (
        <div className="flex gap-2 md:gap-6 flex-wrap items-center justify-center">
          {pills.map((pill) => (
            <div
              key={pill}
              className="bg-[#E5E5E5] px-4 py-2 rounded-full text-center"
            >
              <Typography size="bodyS" weight="semibold">
                {pill}
              </Typography>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
