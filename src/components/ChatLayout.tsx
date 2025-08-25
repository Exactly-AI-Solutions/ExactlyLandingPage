'use client'

import { useSearchParams } from 'next/navigation'

export const ChatLayout = () => {
  const searchParams = useSearchParams()
  const message = searchParams.get('message')
  const basicURLWithStyles = `${process.env.NEXT_PUBLIC_CHATBOT_URL}?primary=ffb300&primaryForeground=181c30&border=6f6f6f&inputBg=fff`

  const iframeSrc = `${basicURLWithStyles}${
    message ? `&message=${encodeURIComponent(message)}` : ''
  }`

  return (
    <div className="w-full h-dvh">
      <iframe
        title="Chatbot"
        width="100%"
        height="100%"
        src={iframeSrc}
      ></iframe>
    </div>
  )
}
