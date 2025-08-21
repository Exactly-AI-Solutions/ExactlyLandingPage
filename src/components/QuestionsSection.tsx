import { AIChat } from './AIChat'
import {Typography} from './ui'

export const QuestionsSection = () => (
  <div className="background-gradient px-5 py-32 md:py-60">
    <div className="container flex flex-col gap-20 justify-center items-center text-center">
        <Typography size="h1" color="white" weight="medium" >
        Still Have Questions?
        </Typography>
      <AIChat appearance="white" placeholder="Enter your question here" showPills />
    </div>
  </div>
)
