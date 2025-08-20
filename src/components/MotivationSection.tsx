import { AIChat } from './AIChat'
import { Typography, Advantage } from './ui'

export const MotivationSection = () => {
  return (
    <div className="py-40 px-5">
      <div className="container flex flex-col gap-10 justify-center items-center">
        <div className="max-w-[720px] m-auto flex flex-col gap-10 justify-center items-center">
          <Typography as="h2" size="h1" weight="medium" className="text-center">
            We Believe the Best Way to Understand AI — Is to{' '}
            <Typography as="span" size="h1" weight="medium" color="blue04">
              Use It
            </Typography>
          </Typography>
          <Typography size="body" weight="regular" className="text-center">
            Most companies still are still trying to learn AI, and figure out
            how best to use it. We build real agentic workflows that drive
            growth, cut costs, and eliminate inefficiencies - then deliver those
            outcomes for you.
          </Typography>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex justify-center gap-5 w-full ">
            <Advantage text="Done-for-you execution (not advice or dashboards)" />
            <Advantage text="Real growth outcomes, not vanity metrics" />
          </div>
          <div className="flex justify-center gap-5 w-full ">
            <Advantage text="AI that adapts in real-time based on performance" />
            <Advantage text="Human-in-the-loop where it matters" />
          </div>
        </div>
        <AIChat
          appearance="dark"
          placeholder="Start using our AI...ask any question..."
        />
      </div>
    </div>
  )
}
