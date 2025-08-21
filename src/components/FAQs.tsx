import { Typography } from './ui'
import { Accordeon } from './ui/Accordeon'

export const FAQs = () => (
  <div className="bg-slate-01 pt-32 md:pt-60 px-5">
    <div className="container text-center">
      <Typography as="h2" size="h1" weight="medium" className="mb-10">
        Frequently Asked Questions
      </Typography>
      <div className="flex flex-col gap-5">
        <Accordeon
          question="What kinds of guarangees do you make?"
          answer="We guarantee real business outcomes — things like revenue growth, increased profit, lower overhead, and improved operational efficiency. Before we start, we agree on what success looks like and how it will be measured. Once we agree, our AI agents get to work to make it happen."
        />
        <Accordeon question="How much does it cost to get started?" answer="" />
        <Accordeon
          question="What’s the big deal about “Done for you?”"
          answer=""
        />
        <Accordeon question="How Soon will I see results?" answer="" />
        <Accordeon
          question="We make specific, measurable promises for your business"
          answer=""
        />
      </div>
    </div>
  </div>
)
