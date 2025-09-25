'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ChatContent() {
  const searchParams = useSearchParams()
  const message = searchParams.get('message')

  const chatbotUrl = process.env.NEXT_PUBLIC_CHATBOT_URL

  if (!chatbotUrl) {
    return (
      <div className="w-full h-dvh flex items-center justify-center">
        <div>Chat service is not available</div>
      </div>
    )
  }

  const basicURLWithStyles = `${chatbotUrl}?primary=fff&primaryForeground=181c30&border=fff&inputBg=transparent&accent=FFB300&accentForeground=000`

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

export const ChatLayout = () => {
  return (
    <Suspense>
      <ChatContent />
    </Suspense>
  )
}
