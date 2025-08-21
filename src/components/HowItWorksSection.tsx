import { Card, Typography, Step } from './ui'

export const HowItWorksSection = () => (
  <div className="two-colors-background p-5">
    <Card>
      <div className="max-w-[720px] m-auto flex flex-col gap-5 justify-center items-center">
        <Typography as="h2" size="h1" weight="medium" className="text-center">
          How it works
        </Typography>
        <Typography size="body" weight="regular" className="text-center">
          Most companies still are still trying to learn AI, and figure out how
          best to use it. We build real agentic workflows that drive growth
        </Typography>
      </div>
    <div className='flex justify-center items-stretch gap-5 flex-wrap'>
        <Step
          stepNumber={1}
          title="Analysis & Setup"
          description="We analyze your company using public data, and information you share with us. No setup required" />
          <Step
          stepNumber={2}
          title="Define Success" 
          description='Together, we decide what success looks like - more leads, better conversion, lower costs, or operational efficiency gains' />
          <Step
          stepNumber={3}
          title="AI Execution" 
          description='Our AI agents execute the plan, from outreach to optimization, and adapt constantly, based on real-time performance data.' />
          <Step
          stepNumber={4}
          title='Results-Based Payment'
          description="You only pay when we deliver results. No results. You don't pay. We put our money where our mouth is." />
    </div>
    </Card>
  </div>
)
