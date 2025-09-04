'use client'

import { useState, useEffect } from 'react'
import { AIChat } from './AIChat'

export const FloatingChat = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight
      const scrollPosition = window.scrollY
      const pageHeight = document.body.scrollHeight
      const bottomOffset = 800

      const scrolledPastScreen = scrollPosition > screenHeight
      const nearBottom =
        scrollPosition + screenHeight >= pageHeight - bottomOffset

      setIsVisible(scrolledPastScreen && !nearBottom)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="w-full px-5 md:px-0 md:w-3/4 fixed bottom-5 left-1/2 transform -translate-x-1/2 z-500">
      <AIChat
        appearance="dark"
        placeholder="Start using our AI...ask any question..."
      />
    </div>
  )
}
