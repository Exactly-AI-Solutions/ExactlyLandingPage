'use client'

export const ChatSection = ({ chatText }: { chatText: string }) => {
  const basicURLWithStyles = `${process.env.NEXT_PUBLIC_CHATBOT_URL}?primary=fff&primaryForeground=181c30&border=fff&inputBg=transparent&accent=FFB300&accentForeground=000&gradient=blue`

  const iframeSrc = `${basicURLWithStyles}${`&message=${chatText}`}`

  return (
    <iframe title="Chatbot" width="100%" height="100%" src={iframeSrc}></iframe>
  )
}
