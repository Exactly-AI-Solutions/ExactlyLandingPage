'use client'

import { useEffect, useRef, useState } from 'react'
import Typography from './Typography'
import { ChevronIcon } from '../icons'
import clsx from 'clsx'

type Props = {
  question: string
  answer: string
}

export const Accordeon = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current?.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div className="rounded-lg p-5 flex flex-col gap-5 bg-white" onClick={() => setIsOpen((prev) => !prev)}>
      <div
        className="flex gap-5 justify-between"
      >
        <Typography size="bodyXL" weight="medium">
          {question}
        </Typography>
        <div className={clsx(isOpen ? "rotate-270" : "rotate-90")}>
          <ChevronIcon width={9} height={16} />
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className='text-left'>
          <Typography size="body" color="slate07">
            {answer}
          </Typography>
        </div>
      </div>
    </div>
  )
}
