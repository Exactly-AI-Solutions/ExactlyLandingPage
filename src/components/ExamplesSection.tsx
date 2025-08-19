import {
  ExampleCard,
  Examples1Icon,
  Examples2Icon,
  Examples3Icon,
  Examples4Icon,
  Examples5Icon,
  Examples6Icon,
  Typography,
} from './ui'

export const ExamplesSection = () => (
  <div className="bg-slate-01 py-60">
    <div className="container">
      <Typography
        as="h2"
        size="h1"
        weight="medium"
        className="text-center mb-10"
      >
        Examples of What We Deliver
      </Typography>
    </div>
    <div className="flex justify-center gap-5 flex-wrap">
      <ExampleCard
        icon={
          <Examples1Icon width={40} height={40} fill="var(--color-blue-04)" />
        }
        title="AI-Powered Lead Targeting"
        description="AI workflows that find your ideal leads across industries and contacts - fueling outreach and content."
        buttonText="See our targeting process"
      />
      <ExampleCard
        icon={
          <Examples2Icon width={40} height={40} fill="var(--color-blue-04)" />
        }
        title="LinkedIn Outreach That Works"
        description="Done-for-you targeting, posting, engagement, and follow-up that actually books meetings."
        buttonText="See how it works"
      />
      <ExampleCard
        icon={
          <Examples3Icon width={40} height={40} fill="var(--color-blue-04)" />
        }
        title="Cold Email at Scale - with Results"
        description="Not just sending emails - our agents test and optimize until you book qualified meetings."
        buttonText="Get a simple sequence"
      />
      <ExampleCard
        icon={
          <Examples4Icon width={40} height={40} fill="var(--color-blue-04)" />
        }
        title="CRO-Optimized AI Chatbots"
        description="Custom-built, ultra-human agents that convert traffic, answer questions, and schedule calls 24/7."
        buttonText="Experience on live"
      />
      <ExampleCard
        icon={
          <Examples5Icon width={40} height={40} fill="var(--color-blue-04)" />
        }
        title="Marketing Asset Overhaul"
        description="Upgrade your marketing stack - from websites and SEO to all your social assets - improving results, and your brand."
        buttonText="Get your assessment"
      />
      <ExampleCard
        icon={
          <Examples6Icon width={40} height={40} fill="var(--color-blue-04)" />
        }
        title="Sales Enablement & Automation"
        description="Pre-meeting intelligence, automated scheduling, post-meeting suggestions - and so much more."
        buttonText="See the system"
      />
    </div>
  </div>
)
