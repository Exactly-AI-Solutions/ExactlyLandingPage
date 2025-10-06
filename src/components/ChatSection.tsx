'use client'

export const ChatSection = ({ chatText }: { chatText: string }) => {
  const basicURLWithStyles = `${process.env.NEXT_PUBLIC_CHATBOT_URL}?primary=181c30&primaryForeground=181c30&border=181c30&inputBg=transparent&accent=FFB300&accentForeground=000`

  const iframeSrc = `${basicURLWithStyles}${`&message=${chatText}`}`

  return (
    <iframe title="Chatbot" width="100%" height="100%" src={iframeSrc}></iframe>
  )
}
