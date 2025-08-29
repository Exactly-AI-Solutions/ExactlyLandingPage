import { ChatLayout } from '@/components/ChatLayout'
import { Suspense } from 'react'

export default function ChatPage() {
  return (
    <Suspense>
      <ChatLayout />
    </Suspense>
  )
}
