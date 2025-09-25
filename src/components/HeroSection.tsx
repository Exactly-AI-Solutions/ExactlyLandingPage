'use client'

import { useState } from 'react'
import { AIChat } from './AIChat'
import { Header } from './Header'
import { Typography } from './ui'
import { ChatSection } from './ChatSection'

export const HeroSection = () => {
  const [chatText, setChatText] = useState('')

  return (
    <div className="min-h-dvh background-gradient grid grid-rows-[86px_1fr]">
      <Header />
      <div className="container p-5 md:p-10 flex flex-col gap-20 justify-center items-center">
        {!chatText ? (
          <>
            <div className="flex flex-col gap-5">
              <Typography
                as="h1"
                size="xl"
                color="white"
                className="text-center"
                weight="bold"
              >
                The New Way to AI Your Business
              </Typography>
              <div className="flex flex-col gap-0">
                <Typography
                  size="h4"
                  color="white"
                  className="text-center"
                  weight="regular"
                >
                  No tools. No learning curve.
                </Typography>
                <Typography
                  size="h4"
                  color="white"
                  className="text-center"
                  weight="regular"
                >
                  Just done-for-you AI and guaranteed results.
                </Typography>
              </div>
            </div>
            <Typography
              size="h6"
              color="white"
              weight="regular"
              className="text-center"
            >
              Experience done-for-you AI in real time. Get personalized business
              insights and free reports that uncover your best opportunities for
              growth with AI. No signup required.
            </Typography>
            <AIChat
              showPills
              appearance="white"
              placeholder="What's our AI readiness score?"
              setChatText={setChatText}
            />
          </>
        ) : (
          <ChatSection chatText={chatText} />
        )}
      </div>
    </div>
  )
}
